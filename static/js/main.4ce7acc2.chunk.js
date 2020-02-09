(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a(272)},136:function(e,t,a){},137:function(e,t,a){},151:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(60),c=a.n(s),o=a(20),i=a(21),l=a(23),m=a(22),u=a(24),p=(a(134),a(135),a(136),a(61)),d=a.n(p),h=(a(137),a(6)),f=a(8),b=a(113),g=(a(151),a(37)),E=a(119),v=a(11),O=a(17),j=a.n(O),N=a(34),k=a(62),w=a(274),y=Object(w.a)("THROW_ERROR","TRY_AGAIN","SET_REPOS","SET_TO_DATE","REQUEST_REPOS","RECEIVE_REPOS"),S=y.throwError,T=y.tryAgain,R=y.setRepos,x=y.setToDate,A=y.requestRepos,_=y.receiveRepos;var Y=Object(w.a)("SET_THEME","SET_PERIOD","SET_LANGUAGE","SET_REPOS_POOL_SIZE","SET_USERNAME","SET_PERSONAL_ACCESS_TOKEN"),L=Y.setTheme,D=Y.setPeriod,C=Y.setLanguage,M=Y.setReposPoolSize,I=Y.setUsername,P=Y.setPersonalAccessToken,H="DARK",z="LIGHT",U={DAILY:"DAILY",WEEKLY:"WEEKLY",MONTHLY:"MONTHLY",YEARLY:"YEARLY"};var W=a(128),F=a(275),G=a(273);function B(){return(B=Object(N.a)(j.a.mark(function e(t,a){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.username){e.next=2;break}throw new W.a({username:"form-control-empty",_error:"empty"});case 2:if(""!==t.accessToken){e.next=4;break}throw new W.a({accessToken:"form-control-empty",_error:"empty"});case 4:return e.prev=4,e.next=7,k.b(t.username,t.accessToken);case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new W.a({accessToken:"form-control-invalid",username:"form-control-invalid",_error:"invalid"});case 12:return e.abrupt("return",a.onSubmit(t));case 13:case"end":return e.stop()}},e,null,[[4,9]])}))).apply(this,arguments)}var K,V,q=function(e){var t=e.meta.error;return!e.meta.error&&e.submitSucceeded&&(t="form-control-valid"),r.a.createElement("input",Object.assign({},e.input,{className:"form-control form-control-sm ".concat(t),type:e.type,name:"username",placeholder:e.label}))},J=function(e){var t=e.meta.error;return!e.meta.error&&e.submitSucceeded&&(t="form-control-valid"),r.a.createElement("input",Object.assign({},e.input,{className:"form-control form-control-sm ".concat(t),type:e.type,name:"accessToken",placeholder:e.label}))},X=Object(G.a)({form:"tokenForm"})(function(e){var t=function(t){switch(e.error){case"empty":return"btn-warning";case"invalid":return"btn-danger";default:return e.submitSucceeded?"btn-success":"btn-light"}}();return r.a.createElement("form",{className:"input-group personal-access-token-input",onSubmit:e.handleSubmit(function(t){return function(e,t){return B.apply(this,arguments)}(t,e)})},r.a.createElement(F.a,{type:"text",name:"username",component:q,label:"username",submitSucceeded:e.submitSucceeded}),r.a.createElement(F.a,{type:"password",name:"accessToken",component:J,label:"token",submitSucceeded:e.submitSucceeded}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"btn btn-sm border border-dark ".concat(t)},r.a.createElement(h.a,{icon:f.k}),"\xa0Verify")))}),Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).GITHUNT_REPO="https://git.io/fN2H2",a.CHROME_WEB_STORE="https://chrome.google.com/webstore/detail/githunt/fkdnnmnoacofoklehaokcabccnbahfhm",a.FIREFOX_ADDON="https://addons.mozilla.org/en-US/firefox/addon/githunt",a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"reset",value:function(){localStorage.clear(),window.location.reload()}},{key:"render",value:function(){var e=this,t={modal:{backgroundColor:this.props.settings.theme===H?"#343a40":"#fff",color:this.props.settings.theme===H?"#A5A5A5":"#212529"}};return r.a.createElement(b.a,{open:this.props.settingsOpened,styles:t,contentLabel:"Info",onClose:this.props.closeSettings,closeTimeoutMS:100},r.a.createElement("h2",{className:"aboutHeader"},"About Githunt"),r.a.createElement("h3",{className:"aboutHeader"},"v",g.version),r.a.createElement("div",null,r.a.createElement("div",{className:"list-element"},r.a.createElement("img",{src:d.a,alt:"logo",id:"logo"})),r.a.createElement("div",{className:"list-element"},"Please report any issue:",r.a.createElement("a",{className:"float-right",target:"_blank",rel:"noopener noreferrer",href:this.GITHUNT_REPO},r.a.createElement("button",{className:"btn btn-sm btn-light border border-dark"},r.a.createElement(h.a,{icon:E.a})))),r.a.createElement("div",{className:"list-element"},"Chrome web store:",r.a.createElement("a",{className:"float-right",href:this.CHROME_WEB_STORE,target:"_blank",rel:"noopener noreferrer"},"Chrome \xa0",r.a.createElement(h.a,{icon:f.f}))),r.a.createElement("div",{className:"list-element"},"Firefox addon:",r.a.createElement("a",{className:"float-right",href:this.FIREFOX_ADDON,target:"_blank",rel:"noopener noreferrer"},"Firefox \xa0",r.a.createElement(h.a,{icon:f.f}))),r.a.createElement("div",{className:"list-element"},"Switch light/dark mode",r.a.createElement("div",{className:"float-right",style:{display:"flex"}},r.a.createElement("div",{className:"theme-selector theme-selector-light ".concat(this.props.settings.theme===z&&"theme-selected"),onClick:function(){return e.props.setTheme(z)}}),r.a.createElement("div",{className:"theme-selector theme-selector-dark ".concat(this.props.settings.theme===H&&"theme-selected"),onClick:function(){return e.props.setTheme(H)}}))),r.a.createElement("div",{className:"list-element"},"Invalid caches:",r.a.createElement("button",{onClick:this.reset,className:"btn btn-danger btn-sm float-right"},r.a.createElement(h.a,{icon:f.b}))),r.a.createElement("div",{className:"list-element"},"Repos pool size:",r.a.createElement("select",{value:this.props.settings.repoAmount,onChange:function(t){return e.props.setRepoPoolSizeAndRefresh(t.target.value)},className:"form-control form-control-sm select-amount"},r.a.createElement("option",null,"3"),r.a.createElement("option",null,"12"),r.a.createElement("option",null,"30"),r.a.createElement("option",null,"60"))),r.a.createElement("div",{className:"list-element"},"\xa0Personal access token:",r.a.createElement("div",{className:"alert alert-".concat(this.props.settings.theme.toLowerCase()," border border-dark py-2")},r.a.createElement(h.a,{icon:f.h,className:"info-icon"}),"No scopes are needed."),r.a.createElement(X,{onSubmit:function(t){e.props.setUsername(t.username),e.props.setPersonalAccessToken(t.accessToken)},initialValues:{accessToken:this.props.settings.accessToken,username:this.props.settings.username}}))))}}]),t}(n.Component),Z=Q=Object(v.b)(function(e){return e},{setTheme:L,setRepoPoolSizeAndRefresh:function(e){return function(t){t(M(e)),t(R([]))}},setUsername:I,setPersonalAccessToken:P})(Q),$=Object(G.a)({form:"language"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"input-group"},r.a.createElement(F.a,{component:"input",name:"language",type:"text",placeholder:"All languages",className:"form-control form-control-sm"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",title:"Valid",className:"btn btn-sm btn-light",style:{zIndex:"unset"}},r.a.createElement(h.a,{icon:f.c}))))}),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).openSettings=function(){a.setState({settingsOpened:!0})},a.closeSettings=function(){a.setState({settingsOpened:!1})},a.state={settingsOpened:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.repos.repos.length>0?r.a.createElement(h.a,{onClick:function(){return e.props.setRepos([])},icon:f.j,size:"lg",className:"icon"}):r.a.createElement(h.a,{icon:f.j,size:"lg",className:"icon",spin:!0});return r.a.createElement("div",null,r.a.createElement(Z,{settingsOpened:this.state.settingsOpened,closeSettings:this.closeSettings}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 my-1 col-lg-4 mx-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:d.a,className:"logo-main",alt:"logo"}),r.a.createElement("h1",null,g.name)),r.a.createElement("p",{className:"text-center"},"Hunting the best GitHub projects")),r.a.createElement("div",{className:"col-lg-2"}),r.a.createElement("div",{className:"col-12 col-lg-6 text-center row ml-1"},r.a.createElement("div",{className:"col-12 p-1 col-lg-4 p-lg-3 mt-lg-3"},r.a.createElement("select",{value:this.props.settings.period,onChange:function(t){return e.props.setPeriodAndRefresh(t.target.value)},className:"form-control form-control-sm"},r.a.createElement("option",{value:U.DAILY},"Daily"),r.a.createElement("option",{value:U.WEEKLY},"Weekly"),r.a.createElement("option",{value:U.MONTHLY},"Monthly"),r.a.createElement("option",{value:U.YEARLY},"Yearly"))),r.a.createElement("div",{className:"col-12 p-1 col-lg-5 p-lg-3 mt-lg-3"},r.a.createElement($,{onSubmit:function(t){return e.props.setLanguageAndRefresh(t.language)},initialValues:{language:this.props.settings.language}})),r.a.createElement("div",{className:"col-12 p-1 col-lg-3 p-lg-3 mt-lg-3"},t,r.a.createElement(h.a,{onClick:this.openSettings,icon:f.h,size:"lg",className:"icon ml-4"})))))}}]),t}(n.Component),te=ee=Object(v.b)(function(e){return e},{setRepos:R,setLanguageAndRefresh:function(e){return function(t){t(C(e)),t(R([]))}},setPeriodAndRefresh:function(e){return function(t){t(D(e)),t(R([]))}}})(ee),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("span",null,"Something went wrong. ",this.props.errorMessage):this.props.children}}]),t}(n.Component),ne=a(13),re=a.n(ne),se=a(120),ce=a.n(se),oe=a(121),ie=a.n(oe),le=(a(266),function(e){return r.a.createElement("div",{className:"date"},re()(e.since).fromNow()," - ",re()(e.since).format("MMM DD, YYYY")," \u2013"," ",re()(e.to).format("MMM DD, YYYY"))}),me=(a(267),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.license?r.a.createElement("div",{className:"badge badge-".concat(this.props.settings.theme.toLowerCase()),title:"license"},r.a.createElement(h.a,{icon:f.g}),"\xa0",r.a.createElement("span",{className:"metadataText"},this.props.license)):null;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement("a",{href:this.props.htmlURL},this.props.fullName)),r.a.createElement("p",{className:"card-text"},this.props.description?this.props.description:r.a.createElement("i",null,"No description provided"))),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("div",{className:"row align-self-center"},r.a.createElement("div",{className:"badge badge-".concat(this.props.settings.theme.toLowerCase()),title:"forks"},r.a.createElement(h.a,{icon:f.d}),"\xa0",r.a.createElement("span",{className:"metadataText"},this.props.forks)),r.a.createElement("div",{className:"badge badge-".concat(this.props.settings.theme.toLowerCase()),title:"stars"},r.a.createElement(h.a,{icon:f.i}),"\xa0",r.a.createElement("span",{className:"metadataText"},this.props.stars)),r.a.createElement("div",{className:"badge badge-".concat(this.props.settings.theme.toLowerCase()),title:"issues"},r.a.createElement(h.a,{icon:f.e}),"\xa0",r.a.createElement("span",{className:"metadataText"},this.props.openIssues)),e))))}}]),t}(n.Component)),ue=me=Object(v.b)(function(e){return e})(me),pe=a(122),de=a.n(pe),he=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).fetchRepos=function(){var e=a.props.repos.repos[a.props.repos.repos.length-1],t=e?re()(e.since):re()(),n=function(e){switch(a.props.settings.period){case U.DAILY:return t.clone().subtract(1,"days");case U.WEEKLY:return t.clone().subtract(1,"weeks");case U.MONTHLY:return t.clone().subtract(1,"months");case U.YEARLY:return t.clone().subtract(1,"years");default:return re()()}}();a.props.fetchRepos("stars",a.props.settings.language,a.props.settings.repoAmount,n,t,a.props.settings.username,a.props.settings.accessToken)},re()(e.repos.cacheDate).diff(re()(),"hours")<-12&&(e.setRepos([]),e.setToDate(re()())),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.repos.repos.map(function(e,t){return r.a.createElement("div",{className:"animated fadeIn",key:t},r.a.createElement("div",{className:"text-center w-100"},r.a.createElement(le,{since:e.since,to:e.to})),r.a.createElement("div",{className:"row"},e.items.map(function(e){return r.a.createElement(ue,{key:e.id,fullName:e.full_name,description:e.description,forks:e.forks_count,stars:e.stargazers_count,openIssues:e.open_issues,htmlURL:e.html_url,createdAt:e.created_at,watchers:e.watchers_count,license:e.license?e.license.key:null})})))}),a=r.a.createElement("div",{className:"loader-small",key:0},r.a.createElement(h.a,{icon:f.j,spin:!0}),"\xa0",r.a.createElement("strong",null,"Wait, hunting them down..."),r.a.createElement("br",null),r.a.createElement("span",null,this.props.repos.error),r.a.createElement("span",null,this.props.repos.error&&r.a.createElement("button",{onClick:function(){return e.props.tryAgain()}},"try again")));return r.a.createElement("div",{className:this.props.settings.theme.toLowerCase(),id:"theme-container"},r.a.createElement("div",{className:"App container"},r.a.createElement(ce.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("link",{rel:"manifest",href:"manifest.json"}),r.a.createElement("link",{rel:"shortcut icon",href:"favicon.ico"}),r.a.createElement("title",null,g.name)),r.a.createElement(ae,{errorMessage:this.props.repos.error},r.a.createElement(de.a,{showUnder:160,style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s",zIndex:1}},r.a.createElement(h.a,{icon:f.a,size:"3x"})),r.a.createElement(te,null),r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(ie.a,{pageStart:0,loadMore:function(){return e.props.repos.error||e.props.repos.fetching||e.fetchRepos()},hasMore:!0,loader:a},t)))))}}]),t}(n.Component),fe=he=Object(v.b)(function(e){return e},{tryAgain:T,fetchRepos:function(e,t,a,n,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return function(){var o=Object(N.a)(j.a.mark(function o(i){var l;return j.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i(A()),o.prev=1,o.next=4,k.a(e,t,a,n,r,s,c);case 4:return l=o.sent,o.abrupt("return",i(_({items:l.items,since:n.clone(),to:r.clone()})));case 8:return o.prev=8,o.t0=o.catch(1),o.abrupt("return",i(S(o.t0.message)));case 11:case"end":return o.stop()}},o,null,[[1,8]])}));return function(e){return o.apply(this,arguments)}}()},setRepos:R,setToDate:x})(he),be=a(5),ge=a(10),Ee=a(12),ve=a(276),Oe={theme:z,period:U.DAILY,language:"",repoAmount:30,accessToken:""},je=Object(ve.a)((K={},Object(ge.a)(K,L,function(e,t){return Object(Ee.a)({},e,{theme:t.payload})}),Object(ge.a)(K,D,function(e,t){return Object(Ee.a)({},e,{period:t.payload})}),Object(ge.a)(K,C,function(e,t){return Object(Ee.a)({},e,{language:t.payload})}),Object(ge.a)(K,M,function(e,t){return Object(Ee.a)({},e,{repoAmount:t.payload})}),Object(ge.a)(K,P,function(e,t){return Object(Ee.a)({},e,{accessToken:t.payload})}),Object(ge.a)(K,I,function(e,t){return Object(Ee.a)({},e,{username:t.payload})}),K),Oe),Ne=a(127),ke={fetching:!1,error:null,repos:[],cacheDate:re()()},we=Object(ve.a)((V={},Object(ge.a)(V,S,function(e,t){return Object(Ee.a)({},e,{error:t.payload})}),Object(ge.a)(V,T,function(e){return Object(Ee.a)({},e,{fetching:!1,error:null})}),Object(ge.a)(V,R,function(e,t){return Object(Ee.a)({},e,{repos:t.payload})}),Object(ge.a)(V,x,function(e,t){return Object(Ee.a)({},e,{cacheDate:t.payload})}),Object(ge.a)(V,A,function(e){return Object(Ee.a)({},e,{fetching:!0})}),Object(ge.a)(V,_,function(e,t){return Object(Ee.a)({},e,{repos:[].concat(Object(Ne.a)(e.repos),[t.payload]),fetching:!1})}),V),ke),ye=a(88),Se=a.n(ye),Te=a(49),Re=a(277),xe={key:"repos",storage:Se.a,blacklist:["error"]},Ae={key:"settings",storage:Se.a},_e=Object(be.combineReducers)({settings:Object(Te.a)(Ae,je),repos:Object(Te.a)(xe,we),form:Re.a}),Ye=a(123),Le=a(124),De=a(125),Ce=a(126),Me=Object(Ce.composeWithDevTools)({trace:!0}),Ie=Object(be.createStore)(_e,Me(Object(be.applyMiddleware)(Ye.a,Object(Le.createLogger)())));c.a.render(r.a.createElement(v.a,{store:Ie},r.a.createElement(De.a,{loading:"loading from cache",persistor:Object(Te.b)(Ie)},r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)))),document.getElementById("root"))},37:function(e){e.exports={name:"githunt",version:"1.3.0",private:!0,homepage:".",dependencies:{"@fortawesome/fontawesome-free":"^5.12.1","@fortawesome/fontawesome-svg-core":"^1.2.27","@fortawesome/free-brands-svg-icons":"^5.12.1","@fortawesome/free-solid-svg-icons":"^5.12.1","@fortawesome/react-fontawesome":"^0.1.8","animate.css":"^3.7.2",bootstrap:"^4.4.1","gh-pages":"^1.2.0",husky:"^0.14.3","lint-staged":"^7.2.0",moment:"^2.24.0","node-sass-chokidar":"^1.4.0","npm-run-all":"^4.1.3",prettier:"^1.19.1",react:"^16.12.0","react-dom":"^16.12.0","react-helmet":"^5.2.1","react-infinite-scroller":"^1.2.1","react-redux":"^6.0.1","react-responsive-modal":"^3.6.0","react-scripts":"^2.1.8","react-scroll-up":"^1.3.3","react-tooltip":"^3.11.6",redux:"^4.0.5","redux-actions":"^2.6.5","redux-devtools-extension":"^2.13.8","redux-form":"^8.3.0","redux-logger":"^3.0.6","redux-persist":"^5.10.0","redux-thunk":"^2.3.0"},"lint-staged":{"src/**/*.{js,jsx,json,scss}":["prettier --print-width 120 --single-quote --write"]},scripts:{flow:"flow",lint:"prettier --print-width 120 --single-quote --write src/**/*.{js,jsx,json,scss}",precommit:"lint-staged",start:"npm-run-all -p watch-css start-js",build:"npm-run-all build-css build-js","start-js":"react-scripts start","build-js":"react-scripts build && cp src/assets/img/icon* build/static/media",test:"react-scripts test --env=jsdom",eject:"react-scripts eject",predeploy:"npm run build",deploy:"gh-pages -d build","build-css":"node-sass-chokidar src/ -o src/","watch-css":"npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"],devDependencies:{"flow-bin":"^0.92.1"}}},61:function(e,t,a){e.exports=a.p+"static/media/logo.797028d8.png"},62:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return o}),a.d(t,"b",function(){return l});var n=a(17),r=a.n(n),s=a(34),c="https://api.github.com";function o(e,t,a,n,r){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(r.a.mark(function t(a,n,s,o,i){var l,m,u,p,d,h,f=arguments;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=f.length>5&&void 0!==f[5]?f[5]:"",m=f.length>6&&void 0!==f[6]?f[6]:"",u=new Headers({Authorization:"Basic ".concat(e.from("".concat(l,":").concat(m)).toString("base64"))}),p=n?" language:".concat(n):"",t.next=6,fetch("".concat(c,"/search/repositories?sort=").concat(a,"&q=created:").concat(o.format("YYYY-MM-DD"),"..").concat(i?i.format("YYYY-MM-DD"):"*").concat(p,"&per_page=").concat(s),{headers:u});case 6:if((d=t.sent).ok){t.next=12;break}return t.next=10,d.json();case 10:throw h=t.sent,Error(h.message);case 12:return t.abrupt("return",d.json());case 13:case"end":return t.stop()}},t)}))).apply(this,arguments)}function l(e,t){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(r.a.mark(function t(a,n){var s,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=new Headers({Authorization:"Basic ".concat(e.from("".concat(a,":").concat(n)).toString("base64"))}),t.next=3,fetch("".concat(c),{headers:s});case 3:if((o=t.sent).ok){t.next=6;break}throw Error(o.messageText);case 6:return t.abrupt("return",o.json());case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}}).call(this,a(157).Buffer)}},[[129,1,2]]]);