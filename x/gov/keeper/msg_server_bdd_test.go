package keeper_test

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/regen-network/gocuke"
	"github.com/stretchr/testify/require"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	govutils "github.com/cosmos/cosmos-sdk/x/gov/client/utils"
	"github.com/cosmos/cosmos-sdk/x/gov/keeper"
	"github.com/cosmos/cosmos-sdk/x/gov/types"
	v1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
)

var (
	initialDeposit = sdk.NewCoins(sdk.NewCoin("stake", sdk.NewInt(10)))
)

type msgServerSuite struct {
	*baseSuite

	govAcctBalance sdk.Coins // Track the gov module balance
	msgServer      v1.MsgServer

	proposal *v1.Proposal
	err      error
}

func TestMsgServer(t *testing.T) {
	gocuke.NewRunner(t, &msgServerSuite{}).Path(
		"./features/msg_deposit.feature",
		"./features/msg_submit_proposal.feature",
		"./features/msg_vote.feature",
	).Run()
}

func (s *msgServerSuite) Before(t gocuke.TestingT) {
	s.baseSuite = setupBase(t)
	s.msgServer = keeper.NewMsgServerImpl(s.govKeeper)
	s.expectCalls()
}

// MsgSubmitProposal

func (s *msgServerSuite) AMindepositParamSetToAndMininitialdepositratioSetTo(d string, r string) {
	p := v1.DefaultParams()
	coins, err := sdk.ParseCoinsNormalized(d)
	require.NoError(s.t, err)
	_, err = sdk.NewDecFromStr(r)
	require.NoError(s.t, err)

	p.MinDeposit = coins
	p.MinInitialDepositRatio = r

	err = s.govKeeper.SetParams(s.ctx, p)
	require.NoError(s.t, err)
}

func (s *msgServerSuite) AliceSubmitsAProposalWithMsg(a gocuke.DocString) {
	var msg sdk.Msg
	err := s.cdc.UnmarshalInterfaceJSON([]byte(a.Content), &msg)
	require.NoError(s.t, err)

	any, err := codectypes.NewAnyWithValue(msg)
	require.NoError(s.t, err)
	_, s.err = s.msgServer.SubmitProposal(sdk.WrapSDKContext(s.ctx), &v1.MsgSubmitProposal{
		Messages:       []*codectypes.Any{any},
		InitialDeposit: initialDeposit,
		Proposer:       s.alice.String(),
	})
}

func (s *msgServerSuite) AliceSubmitsAProposalWithDeposit(d string) {
	coins, err := sdk.ParseCoinsNormalized(d)
	require.NoError(s.t, err)

	_, s.err = s.msgServer.SubmitProposal(sdk.WrapSDKContext(s.ctx), &v1.MsgSubmitProposal{
		Messages:       []*codectypes.Any{},
		InitialDeposit: coins,
		Proposer:       s.alice.String(),
	})
}

func (s *msgServerSuite) ExpectTheError(errStr string) {
	require.Error(s.t, s.err)
	require.Contains(s.t, s.err.Error(), errStr)
}

func (s *msgServerSuite) ExpectNoError() {
	require.NoError(s.t, s.err)
}

// MsgVote

func (s *msgServerSuite) AProposalWithInitialDeposit(deposit string) {
	coins, err := sdk.ParseCoinsNormalized(deposit)
	require.NoError(s.t, err)

	_, err = s.msgServer.SubmitProposal(sdk.WrapSDKContext(s.ctx), &v1.MsgSubmitProposal{
		Messages:       []*codectypes.Any{},
		InitialDeposit: coins,
		Proposer:       s.alice.String(),
	})
	require.NoError(s.t, err)
}

func (s *msgServerSuite) AliceVotesOnProposal(optionsStr string, proposalId int64) {
	options, err := v1.WeightedVoteOptionsFromString(govutils.NormalizeWeightedVoteOptions(optionsStr))
	if err != nil {
		s.err = err
		return
	}

	_, s.err = s.msgServer.VoteWeighted(sdk.WrapSDKContext(s.ctx), &v1.MsgVoteWeighted{
		ProposalId: uint64(proposalId),
		Voter:      s.alice.String(),
		Options:    options,
	})
}

func (s *msgServerSuite) AlicesVoteOnProposalIs(proposalId int64, voteOutput string) {
	vote, found := s.govKeeper.GetVote(s.ctx, uint64(proposalId), s.alice)
	require.True(s.t, found)

	require.Equal(s.t, voteOutput, v1.WeightedVoteOptions(vote.Options).String())
}

// MsgDeposit

func (s *msgServerSuite) AliceDepositsOnProposal(deposit string, proposalId int64) {
	coins, err := sdk.ParseCoinsNormalized(deposit)
	require.NoError(s.t, err)

	_, s.err = s.msgServer.Deposit(sdk.WrapSDKContext(s.ctx), &v1.MsgDeposit{
		ProposalId: uint64(proposalId),
		Depositor:  s.alice.String(),
		Amount:     coins,
	})
}

func (s *msgServerSuite) WeQueryProposal(proposalId int64) {
	res, err := s.govKeeper.Proposal(sdk.WrapSDKContext(s.ctx), &v1.QueryProposalRequest{
		ProposalId: uint64(proposalId),
	})
	require.NoError(s.t, err)

	s.proposal = res.Proposal
}

func (s *msgServerSuite) ExpectTheProposalToHaveStatus(expStatus string) {
	require.Equal(s.t, expStatus, v1.ProposalStatus_name[int32(s.proposal.Status)])
}

func (s *msgServerSuite) ExpectTheProposalToHaveTotalDeposit(expDeposit string) {
	require.Equal(s.t, expDeposit, sdk.Coins(s.proposal.TotalDeposit).String())
}

func (s *msgServerSuite) ExpectTheGovAccountToHave(expBalance string) {
	require.Equal(s.t, expBalance, s.govAcctBalance.String())
}

// Shared

func (s *msgServerSuite) expectCalls() {
	s.authKeeper.EXPECT().GetModuleAccount(s.ctx, types.ModuleName).Return(authtypes.NewEmptyModuleAccount(types.ModuleName)).AnyTimes()
	s.bankKeeper.EXPECT().SendCoinsFromAccountToModule(s.ctx, s.alice, types.ModuleName, gomock.Any()).DoAndReturn(
		func(_ sdk.Context, from sdk.AccAddress, to string, amt sdk.Coins) error {
			for _, c := range amt {
				s.govAcctBalance = s.govAcctBalance.Add(c)
			}

			return nil
		},
	).AnyTimes()
}