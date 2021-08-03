if (self.CavalryLogger) { CavalryLogger.start_js(["DJTI1Es"]); }

__d("ProgressiveDateUtil",["DateConsts"],(function(a,b,c,d,e,f,g){"use strict";function h(a){var b=a.day,c=a.month;a=a.year;if(a==null)return Object.freeze({});if(c==null)return{year:a};if(b==null)return{month:c,year:a};var e=d("DateConsts").getDaysInMonth(a,c);return b>e?{day:e,month:c,year:a}:{day:b,month:c,year:a}}function a(a){if(a==null)return{};a=a.split("-").map(function(a){return parseInt(a,10)});var b=a[0],c=a[1];a=a[2];return h({day:a,month:c,year:b})}function b(a){var b=null;a.day!=null&&(b=a.day);var c=null;a.month!=null&&(c=a.month);var d=null;a.year!=null&&(d=a.year);return{day:b,month:c,year:d}}function c(a){var b=null;a.day!=null&&a.month!=null&&a.year!=null?b=new Date(a.year,a.month-1,a.day+1):a.month!=null&&a.year!=null?b=new Date(a.year,a.month,1):a.year!=null&&(b=new Date(a.year+1,0,1));return b!=null?b.setSeconds(-1)/1e3:null}g.makeValidDate=h;g.parseDate=a;g.toMaybeDate=b;g.toLatestTimestamp=c}),98);
__d("ProfileCometTimelineEmptyState.react",["fbt","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:i.jsx(c("TetraText.react"),{align:"center",color:"secondary",type:"headlineEmphasized2",children:h._("No posts available")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometPostFiltersDialogReducer",["ProgressiveDateUtil"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){return{date:d("ProgressiveDateUtil").parseDate(null),postedBy:a?"YOU":"ANYONE",privacy:"ALL",taggedPosts:"ALL"}};b=function(a,b){switch(b.type){case"SET_FILTERS":return babelHelpers["extends"]({},a,{date:b.date,postedBy:b.postedBy,privacy:b.privacy,taggedPosts:b.taggedPosts});default:return babelHelpers["extends"]({},a)}};g.getInitialState=a;g.reducer=b}),98);
__d("ProfileCometPostFiltersDialogContext",["ProfileCometPostFiltersDialogReducer","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({dispatchAction:function(a){c("recoverableViolation")("ProfileCometPostFiltersDialogContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometPostFiltersDialogContext.Provider value={context} />","profile_comet")},state:d("ProfileCometPostFiltersDialogReducer").getInitialState(!1)});g["default"]=b}),98);
__d("ProfileCometTimelineFilterReducer",["ProgressiveDateUtil"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return{date:{},postedBy:"ANYONE",privacy:"ALL",taggedPosts:"ALL"}};b=function(a,b){switch(b.type){case"SET_FILTERS":var c=d("ProgressiveDateUtil").makeValidDate(d("ProgressiveDateUtil").toMaybeDate(b.date));return babelHelpers["extends"]({},a,{date:c,postedBy:b.postedBy,privacy:b.privacy,taggedPosts:b.taggedPosts});default:return babelHelpers["extends"]({},a)}};g.getInitialState=a;g.reducer=b}),98);
__d("ProfileCometTimelineFilterContext",["FBLogger","ProfileCometTimelineFilterReducer","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({dispatchAction:function(a){c("FBLogger")("comet_profile").mustfix("ProfileCometTimelineFilterContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometTimelineFilterContext.Provider value={context} />")},state:d("ProfileCometTimelineFilterReducer").getInitialState()});g["default"]=b}),98);
__d("useProfileCometTimelineFeedQueryRefetcherForFilters",["ProfileCometTimelineFilterContext","ProgressiveDateUtil","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useEffect,j=b.useRef,k=b.useState;function a(a){var b=a.fetchCount,e=a.refetch;a=a.variables;var f=a.userID;a=babelHelpers.objectWithoutPropertiesLoose(a,["userID"]);var g=j(a);a=k(!1);var l=a[0],m=a[1],n=j(!0),o=j(e),p=j(b),q=j(f);o.current=e;p.current=b;q.current=f;a=h(c("ProfileCometTimelineFilterContext"));var r=a.state,s=d("ProgressiveDateUtil").toLatestTimestamp(r.date),t=j({dispose:function(){}});i(function(){if(n.current){n.current=!1;return}var a;switch(r.postedBy){case"ANYONE":a=null;break;case"OTHERS":a={group:"NON_OWNER"};break;case"YOU":a={group:"OWNER"};break}var b;switch(r.privacy){case"PUBLIC":b={exclusivity:"EXCLUSIVE",filter:"PUBLIC"};break;case"FRIENDS":b={exclusivity:"EXCLUSIVE",filter:"FRIENDS"};break;case"ONLY_ME":b={exclusivity:"EXCLUSIVE",filter:"SELF"};break;case"ALL":b={exclusivity:"INCLUSIVE",filter:"ALL"};break}var c=r.taggedPosts==="TAGGED";m(!0);t.current.dispose();t.current=o.current(babelHelpers["extends"]({},g.current,{beforeTime:s,count:p.current,id:q.current,postedBy:a,privacy:b,taggedInOnly:c}),{fetchPolicy:"store-and-network",onComplete:function(){m(!1)}})},[s,r.postedBy,r.privacy,r.taggedPosts]);return l}g["default"]=a}),98);
__d("XCometProfileVanityControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/",Object.freeze({show_switched_toast:!1,show_switched_tooltip:!1,show_podcast_settings:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometProfileVanityTributesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/tributes/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/{sk}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityTimelineControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/timeline/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityWoodhengeSupportersURLControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/supporters/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("ProfileCometURIUtils",["ProfileCometContext","XCometProfileControllerRouteBuilder","XCometProfileVanityControllerRouteBuilder","XCometProfileVanityTributesControllerRouteBuilder","XCometVanityTabControllerRouteBuilder","XCometVanityTimelineControllerRouteBuilder","XCometVanityWoodhengeSupportersURLControllerRouteBuilder","react","unrecoverableViolation","useCurrentRouteEntityKey"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(a){var b=h(c("ProfileCometContext"));b=b.profileID;var d=c("useCurrentRouteEntityKey")();b=d!=null&&d.entity_type==="profile"&&d.entity_id===b&&d.section===a;return b}function b(){var a=h(c("ProfileCometContext")),b=a.profileID;a=a.profileVanity;if(a!=null&&a!=="")return c("XCometProfileVanityControllerRouteBuilder").buildURL({vanity:a});if(b!=null)return c("XCometProfileControllerRouteBuilder").buildURL({id:b});throw new(c("unrecoverableViolation"))("Cannot generate URI for profile when id and vanity are both null","profile_comet")}function e(a){var b=h(c("ProfileCometContext")),d=b.profileID;b=b.profileVanity;if(b!=null&&b!==""){if(a==="timeline")return c("XCometVanityTimelineControllerRouteBuilder").buildURL({vanity:b});if(a==="tributes")return c("XCometProfileVanityTributesControllerRouteBuilder").buildURL({vanity:b});return a==="supporters"?c("XCometVanityWoodhengeSupportersURLControllerRouteBuilder").buildURL({vanity:b}):c("XCometVanityTabControllerRouteBuilder").buildURL({sk:a,vanity:b})}if(d!=null)return c("XCometProfileControllerRouteBuilder").buildURL({id:d,sk:a});throw new(c("unrecoverableViolation"))("Cannot generate URI for profile section when id and vanity are both null","profile_comet")}g.useIsProfileSectionActive=a;g.useURIForProfile=b;g.useURIForProfileSection=e}),98);