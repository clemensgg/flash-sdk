"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[6102],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(g,c(c({ref:n},u),{},{components:t})):a.createElement(g,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var l=2;l<i;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const i={},c="ADR 011: Generalize Genesis Accounts",r={unversionedId:"architecture/adr-011-generalize-genesis-accounts",id:"architecture/adr-011-generalize-genesis-accounts",title:"ADR 011: Generalize Genesis Accounts",description:"Changelog",source:"@site/docs/architecture/adr-011-generalize-genesis-accounts.md",sourceDirName:"architecture",slug:"/architecture/adr-011-generalize-genesis-accounts",permalink:"/main/architecture/adr-011-generalize-genesis-accounts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 010: Modular AnteHandler",permalink:"/main/architecture/adr-010-modular-antehandler"},next:{title:"ADR 012: State Accessors",permalink:"/main/architecture/adr-012-state-accessors"}},s={},l=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"1) (Un)Marshal accounts directly using amino",id:"1-unmarshal-accounts-directly-using-amino",level:3},{value:"2) Register custom account types on the <code>auth</code> codec",id:"2-register-custom-account-types-on-the-auth-codec",level:3},{value:"3) Genesis validation for custom account types",id:"3-genesis-validation-for-custom-account-types",level:3},{value:"4) Move add-genesis-account cli to <code>auth</code>",id:"4-move-add-genesis-account-cli-to-auth",level:3},{value:"5) Update module and vesting accounts",id:"5-update-module-and-vesting-accounts",level:3},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-011-generalize-genesis-accounts"},"ADR 011: Generalize Genesis Accounts"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2019-08-30: initial draft")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Currently, the Cosmos SDK allows for custom account types; the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," keeper stores any type fulfilling its ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," interface. However ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," does not handle exporting or loading accounts to/from a genesis file, this is done by ",(0,o.kt)("inlineCode",{parentName:"p"},"genaccounts"),", which only handles one of 4 concrete account types (",(0,o.kt)("inlineCode",{parentName:"p"},"BaseAccount"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ContinuousVestingAccount"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DelayedVestingAccount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleAccount"),")."),(0,o.kt)("p",null,"Projects desiring to use custom accounts (say custom vesting accounts) need to fork and modify ",(0,o.kt)("inlineCode",{parentName:"p"},"genaccounts"),"."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"In summary, we will (un)marshal all accounts (interface types) directly using amino, rather than converting to ",(0,o.kt)("inlineCode",{parentName:"p"},"genaccounts"),"\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"GenesisAccount")," type. Since doing this removes the majority of ",(0,o.kt)("inlineCode",{parentName:"p"},"genaccounts"),"'s code, we will merge ",(0,o.kt)("inlineCode",{parentName:"p"},"genaccounts")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),". Marshalled accounts will be stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),"'s genesis state."),(0,o.kt)("p",null,"Detailed changes:"),(0,o.kt)("h3",{id:"1-unmarshal-accounts-directly-using-amino"},"1) (Un)Marshal accounts directly using amino"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," module's ",(0,o.kt)("inlineCode",{parentName:"p"},"GenesisState")," gains a new field ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts"),". Note these aren't of type ",(0,o.kt)("inlineCode",{parentName:"p"},"exported.Account")," for reasons outlined in section 3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// GenesisState - all auth state that must be provided at genesis\ntype GenesisState struct {\n    Params   Params           `json:"params" yaml:"params"`\n    Accounts []GenesisAccount `json:"accounts" yaml:"accounts"`\n}\n')),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"InitGenesis")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ExportGenesis")," (un)marshal accounts as well as the defined params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// InitGenesis - Init store state from genesis data\nfunc InitGenesis(ctx sdk.Context, ak AccountKeeper, data GenesisState) {\n    ak.SetParams(ctx, data.Params)\n    // load the accounts\n    for _, a := range data.Accounts {\n        acc := ak.NewAccount(ctx, a) // set account number\n        ak.SetAccount(ctx, acc)\n    }\n}\n\n// ExportGenesis returns a GenesisState for a given context and keeper\nfunc ExportGenesis(ctx sdk.Context, ak AccountKeeper) GenesisState {\n    params := ak.GetParams(ctx)\n\n    var genAccounts []exported.GenesisAccount\n    ak.IterateAccounts(ctx, func(account exported.Account) bool {\n        genAccount := account.(exported.GenesisAccount)\n        genAccounts = append(genAccounts, genAccount)\n        return false\n    })\n\n    return NewGenesisState(params, genAccounts)\n}\n")),(0,o.kt)("h3",{id:"2-register-custom-account-types-on-the-auth-codec"},"2) Register custom account types on the ",(0,o.kt)("inlineCode",{parentName:"h3"},"auth")," codec"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," codec must have all custom account types registered to marshal them. We will follow the pattern established in ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," for proposals."),(0,o.kt)("p",null,"An example custom account definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"\n\n// Register the module account type with the auth module codec so it can decode module accounts stored in a genesis file\nfunc init() {\n    authtypes.RegisterAccountTypeCodec(ModuleAccount{}, "cosmos-sdk/ModuleAccount")\n}\n\ntype ModuleAccount struct {\n    ...\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," codec definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var ModuleCdc *codec.LegacyAmino\n\nfunc init() {\n    ModuleCdc = codec.NewLegacyAmino()\n    // register module msg's and Account interface\n    ...\n    // leave the codec unsealed\n}\n\n// RegisterAccountTypeCodec registers an external account type defined in another module for the internal ModuleCdc.\nfunc RegisterAccountTypeCodec(o interface{}, name string) {\n    ModuleCdc.RegisterConcrete(o, name, nil)\n}\n")),(0,o.kt)("h3",{id:"3-genesis-validation-for-custom-account-types"},"3) Genesis validation for custom account types"),(0,o.kt)("p",null,"Modules implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateGenesis")," method. As ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," does not know of account implementations, accounts will need to validate themselves."),(0,o.kt)("p",null,"We will unmarshal accounts into a ",(0,o.kt)("inlineCode",{parentName:"p"},"GenesisAccount")," interface that includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Validate")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type GenesisAccount interface {\n    exported.Account\n    Validate() error\n}\n")),(0,o.kt)("p",null,"Then the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateGenesis")," function becomes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// ValidateGenesis performs basic validation of auth genesis data returning an\n// error for any failed validation criteria.\nfunc ValidateGenesis(data GenesisState) error {\n    // Validate params\n    ...\n\n    // Validate accounts\n    addrMap := make(map[string]bool, len(data.Accounts))\n    for _, acc := range data.Accounts {\n\n        // check for duplicated accounts\n        addrStr := acc.GetAddress().String()\n        if _, ok := addrMap[addrStr]; ok {\n            return fmt.Errorf("duplicate account found in genesis state; address: %s", addrStr)\n        }\n        addrMap[addrStr] = true\n\n        // check account specific validation\n        if err := acc.Validate(); err != nil {\n            return fmt.Errorf("invalid account found in genesis state; address: %s, error: %s", addrStr, err.Error())\n        }\n\n    }\n    return nil\n}\n')),(0,o.kt)("h3",{id:"4-move-add-genesis-account-cli-to-auth"},"4) Move add-genesis-account cli to ",(0,o.kt)("inlineCode",{parentName:"h3"},"auth")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"genaccounts")," module contains a cli command to add base or vesting accounts to a genesis file."),(0,o.kt)("p",null,"This will be moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),". We will leave it to projects to write their own commands to add custom accounts. An extensible cli handler, similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"gov"),", could be created but it is not worth the complexity for this minor use case."),(0,o.kt)("h3",{id:"5-update-module-and-vesting-accounts"},"5) Update module and vesting accounts"),(0,o.kt)("p",null,"Under the new scheme, module and vesting account types need some minor updates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type registration on ",(0,o.kt)("inlineCode",{parentName:"li"},"auth"),"'s codec (shown above)"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Validate")," method for each ",(0,o.kt)("inlineCode",{parentName:"li"},"Account")," concrete type")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Proposed"),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"custom accounts can be used without needing to fork ",(0,o.kt)("inlineCode",{parentName:"li"},"genaccounts")),(0,o.kt)("li",{parentName:"ul"},"reduction in lines of code")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"genaccounts")," module no longer exists"),(0,o.kt)("li",{parentName:"ul"},"accounts in genesis files are stored under ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"auth")," rather than in the ",(0,o.kt)("inlineCode",{parentName:"li"},"genaccounts")," module.\n-",(0,o.kt)("inlineCode",{parentName:"li"},"add-genesis-account")," cli command now in ",(0,o.kt)("inlineCode",{parentName:"li"},"auth"))),(0,o.kt)("h2",{id:"references"},"References"))}d.isMDXComponent=!0}}]);