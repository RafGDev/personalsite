if (self.CavalryLogger) { CavalryLogger.start_js(["y\/EvdPQ"]); }

__d("useCometMegaMenuTypeaheadDataSourceQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Literal",name:"folder",value:"SOCIAL"}],c={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={kind:"Variable",name:"scale",variableName:"scale"},f={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null};e={alias:null,args:[{kind:"Literal",name:"environment",value:"COMET"}],concreteType:"FolderBookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"nodes",plural:!0,selections:[d,c,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"icon_size",value:"DP36"},e],concreteType:"Image",kind:"LinkedField",name:"bookmark_icon_image",plural:!1,selections:[f],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Literal",name:"icon_style",value:"CASPIAN"},e,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"is_silhouette",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section",storageKey:null}],storageKey:null}],storageKey:'bookmarks(environment:"COMET")'};f=[c,e];var g=[{kind:"Literal",name:"folder",value:"ENTERTAINMENT"}],h=[{kind:"Literal",name:"folder",value:"SHOPPING"}],i=[{kind:"Literal",name:"folder",value:"PERSONAL"}],j=[{kind:"Literal",name:"folder",value:"PROFESSIONAL"}],k=[{kind:"Literal",name:"folder",value:"COMMUNITY_RESOURCES"}],l=[{kind:"Literal",name:"folder",value:"APPS_FROM_FACEBOOK"}];c=[c,e,d];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useCometMegaMenuTypeaheadDataSourceQuery",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:"social",args:b,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"SOCIAL")'},{alias:"entertainment",args:g,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"ENTERTAINMENT")'},{alias:"shopping",args:h,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"SHOPPING")'},{alias:"personal",args:i,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"PERSONAL")'},{alias:"professional",args:j,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"PROFESSIONAL")'},{alias:"communityResources",args:k,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"COMMUNITY_RESOURCES")'},{alias:"appsFromFacebook",args:l,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"APPS_FROM_FACEBOOK")'}],storageKey:null},action:"THROW",path:"viewer"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useCometMegaMenuTypeaheadDataSourceQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:"social",args:b,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"SOCIAL")'},{alias:"entertainment",args:g,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"ENTERTAINMENT")'},{alias:"shopping",args:h,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"SHOPPING")'},{alias:"personal",args:i,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"PERSONAL")'},{alias:"professional",args:j,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"PROFESSIONAL")'},{alias:"communityResources",args:k,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"COMMUNITY_RESOURCES")'},{alias:"appsFromFacebook",args:l,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"APPS_FROM_FACEBOOK")'}],storageKey:null}]},params:{id:"3566985010069206",metadata:{},name:"useCometMegaMenuTypeaheadDataSourceQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometMegaMenuTypeaheadInputRoundedStrategy.react",["ix","CometColumnItem.react","CometTypeaheadInputRoundedStrategy.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){return i.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingVertical:16,children:i.jsx(c("CometTypeaheadInputRoundedStrategy.react"),babelHelpers["extends"]({},a,{inputExtraProps:{icon:i.jsx(c("TetraIcon.react"),{color:"tertiary",icon:d("fbicon")._(h("491282"),16)})},ref:b}))})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("CometMegaMenuNullState.react",["fbt","CometAccessibilityAnnouncement.react","NullStateNoResults","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx(c("CometAccessibilityAnnouncement.react"),{isVisible:!0,children:i.jsx(c("TetraNullState.react"),{body:h._("Try different keywords or make sure everything is spelled correctly."),headline:h._("We didn't find anything"),icon:c("NullStateNoResults")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("logMegaMenuClick",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("WebBookmarkClickFalcoEvent").__setRef("logMegaMenuClick");function a(a){var b=a.index,c=a.pa,d=a.tracking;h.onReady(function(a){var e=b.toString();a.log(function(){return{interface_override:"comet_www",item_rank:e,pa:c,surface:"COMET_MEGA_MENU",tracking_data:d}})})}g["default"]=a}),98);
__d("CometMegaMenuTypeaheadListViewItem.react",["CometPassiveGetRouterStateContext","CometProductAttribution","TetraAccessoryListCell.react","logMegaMenuClick","react","useBookmarkFalcoFullViewLogger"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext;function a(a){var b=a.entry,e=a.isActive,f=a.onPressEntry;a.queryString;a=b.getLabel();var g=b.getRawData(),j=g.addOnPrimary,k=g.body,l=g.index,m=g.tracking;g=g.url;var n=c("useBookmarkFalcoFullViewLogger")(m,l,null,"COMET_MEGA_MENU"),o=i(c("CometPassiveGetRouterStateContext"));return h.jsx(c("TetraAccessoryListCell.react"),{addOnPrimary:j,body:k,headline:a,level:4,linkProps:{productAttribution:{tap_point:"mega_menu"},url:g},onPress:function(a){f&&f(b,a),m!=null&&c("logMegaMenuClick")({index:l,pa:d("CometProductAttribution").getMinifiedTopMostRouteProductAttribution(o),tracking:m})},paddingHorizontal:0,ref:n,selected:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMegaMenuTypeaheadListViewStrategy.react",["CometColumn.react","CometColumnItem.react","CometMegaMenuTypeaheadListViewItem.react","CometTypeaheadViewList.react","CometUnitHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.ariaProps,d=a.entries,e=a.highlightedEntry,f=a.onHighlightEntry,g=a.onPressEntry,i=a.queryString,j=new Map();d.forEach(function(a){var b=a.getRawData().folderName,c=j.get(b);c!=null?c.push(a):j.set(b,[a])});var k=[];j.forEach(function(a,d){var j=k.length>0;k.push(h.jsxs(c("CometColumn.react"),{paddingHorizontal:8,paddingTop:0,paddingVertical:20,children:[h.jsx(c("CometColumnItem.react"),{paddingTop:0,paddingVertical:8,children:h.jsx(c("CometUnitHeader.react"),{hasTopDivider:j,headline:d,level:3,paddingHorizontal:8,paddingTop:j?20:8})}),h.jsx(c("CometColumnItem.react"),{paddingTop:0,children:h.jsx(c("CometTypeaheadViewList.react"),{ariaProps:b,entries:a,highlightedEntry:e,children:function(a){var b=a.entry,d=a.isActive;a=a.itemRole;return h.jsx(c("CometMegaMenuTypeaheadListViewItem.react"),{entry:b,isActive:d,onHighlightEntry:f,onPressEntry:g,queryString:i,role:a},b.getKey())}})})]},d))});return k}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMegaMenuViewStrategy.react",["CometMegaMenuListSectionsLoadingState.react","CometMegaMenuNullState.react","CometMegaMenuTypeaheadListViewItem.react","CometMegaMenuTypeaheadListViewStrategy.react","CometScrollableArea.react","react","useCometInternalTypeaheadState","useCometTypeaheadKeyboardForScrollableArea"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.entries;a.isLoading;var d=a.queryString;a=babelHelpers.objectWithoutPropertiesLoose(a,["entries","isLoading","queryString"]);var e=c("useCometInternalTypeaheadState")();e=e.highlightedEntry;var f=c("useCometTypeaheadKeyboardForScrollableArea")(e);if(b.length===0)if(d.length>0)return h.jsx("div",{className:"datstx6m j83agx80",children:h.jsx(c("CometMegaMenuNullState.react"),{})});else if(d.length===0)return h.jsx(c("CometMegaMenuListSectionsLoadingState.react"),{});return h.jsx(c("CometScrollableArea.react"),{horizontal:!1,ref:f,children:h.jsx(c("CometMegaMenuTypeaheadListViewStrategy.react"),babelHelpers["extends"]({},a,{entries:b,highlightedEntry:e,isLoading:!1,queryString:d,viewItemStrategyRenderer:c("CometMegaMenuTypeaheadListViewItem.react")}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometMegaMenuTypeaheadDataSource",["CometBookmarksAddOnUtils","CometRelay","CometTypeaheadDataEntry","cometTypeaheadContainsMatchBuilder","useCometMegaMenuTypeaheadDataSourceQuery.graphql","useCometTypeaheadStaticDataSource","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useCometMegaMenuTypeaheadDataSourceQuery.graphql");function j(a){var b;a=[a==null?void 0:(b=a.viewer)==null?void 0:b.social,a==null?void 0:(b=a.viewer)==null?void 0:b.entertainment,a==null?void 0:(b=a.viewer)==null?void 0:b.shopping,a==null?void 0:(b=a.viewer)==null?void 0:b.personal,a==null?void 0:(b=a.viewer)==null?void 0:b.professional,a==null?void 0:(b=a.viewer)==null?void 0:b.communityResources,a==null?void 0:(b=a.viewer)==null?void 0:b.appsFromFacebook].filter(Boolean);b=a.map(function(a){var b;b=a==null?void 0:(b=a.bookmarks)==null?void 0:b.nodes;var e=a==null?void 0:a.name;return b==null||e==null?null:b.map(function(a,b){var f=a.bookmark_icon_image,g=a.description,h=a.id,i=a.image,j=a.name,k=a.section,l=a.tracking;a=a.url;f=d("CometBookmarksAddOnUtils").getBookmarkAddOnPrimary(f==null?void 0:f.uri,i==null?void 0:i.uri,i==null?void 0:i.is_silhouette,k);return h==null||j==null||f==null?null:new(c("CometTypeaheadDataEntry"))({key:h,label:j,rawData:{addOnPrimary:f,body:g,folderName:e,index:b,tracking:l,url:a}})}).filter(Boolean).flat()}).filter(Boolean).flat();return b}function a(a){var b=d("CometRelay").usePreloadedQuery(i,a);a=c("useStable")(function(){return j(b)});return c("useCometTypeaheadStaticDataSource")({entries:a,limit:Number.MAX_VALUE,matchBuilder:c("cometTypeaheadContainsMatchBuilder")})}g["default"]=a}),98);
__d("CometMegaMenuTypeahead.react",["fbt","BaseTypeahead.react","CometMegaMenuTypeaheadInputRoundedStrategy.react","CometMegaMenuViewStrategy.react","CometTypeaheadLayoutInlineStrategy.react","react","useCometMegaMenuTypeaheadDataSource","useCometTypeaheadNavigate"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback;function a(a){var b=a.megaMenuTypeaheadQueryRef,d=a.onChange,e=a.onPressEntry;a=a.queryString;b=c("useCometMegaMenuTypeaheadDataSource")(b);var f=c("useCometTypeaheadNavigate")({tapPoint:"tap_mega_menu_search_bar"}),g=j(function(a){var b=a.getRawData();b=b.url;f(b);e&&e(a)},[f,e]);return i.jsx(c("BaseTypeahead.react"),{dataSource:b,inputStrategyRenderer:c("CometMegaMenuTypeaheadInputRoundedStrategy.react"),layoutStrategyRenderer:c("CometTypeaheadLayoutInlineStrategy.react"),onChange:d,onPressEntry:g,placeholder:h._("Search Menu"),queryString:a,viewStrategyRenderer:c("CometMegaMenuViewStrategy.react")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeMegaMenuAllProducts.react",["CometCard.react","CometColumn.react","CometColumnItem.react","CometMegaMenuTypeahead.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j={cardWidth:{width:"o36gj0jk"},minHeight:{minHeight:"pxmt8ct2"}};function a(a){var b=a.onClose;a=a.queryRef;var d=i(""),e=d[0];d=d[1];return h.jsx(c("CometCard.react"),{background:"white",dropShadow:1,xstyle:j.minHeight,children:h.jsx(c("CometColumn.react"),{paddingHorizontal:8,xstyle:j.cardWidth,children:h.jsx(c("CometColumnItem.react"),{paddingHorizontal:0,children:h.jsx(c("CometMegaMenuTypeahead.react"),{megaMenuTypeaheadQueryRef:a,onChange:d,onPressEntry:b,queryString:e})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeMegaMenuCreateMenu.react",["fbt","CometCard.react","CometHomeCreateMenuContent.react","CometRow.react","CometRowItem.react","TetraText.react","react","useCreateMenuComposerDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.onClose;var b=c("useCreateMenuComposerDialog")();b=b[0];return i.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,children:[i.jsx(c("CometRow.react"),{paddingVertical:16,children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraText.react"),{type:"headlineEmphasized2",children:h._("Create")})})}),i.jsx(c("CometHomeCreateMenuContent.react"),{hideBody:!0,onClose:a,showComposerDialog:b,tapPoint:"mega_menu"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeMegaMenuRoot.react",["fbt","CometColumn.react","CometColumnItem.react","CometDirectionalDockingView.react","CometHomeMegaMenuAllProducts.react","CometHomeMegaMenuCreateMenu.react","CometResponsiveColumns.react","CometScrollView.react","CometTopNavListDropdown.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={createMenu:{maxWidth:"cxpb2tes",overflowAnchor:"rek2kq2y"},scrollView:{height:"b4l40cvg",paddingBottom:"ihqw7lf3",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}};function a(a){var b=a.props.onClose;a=a.queries;a=a.megaMenuTypeaheadQueryRef;return i.jsx(c("CometTopNavListDropdown.react"),{label:h._("Menu"),name:"MegaMenu",children:i.jsxs(c("CometTopNavListDropdown.react").Card,{background:"card-flat",useFullWidth:!0,useMaxHeight:!0,children:[i.jsx(c("CometColumn.react"),{paddingHorizontal:16,paddingVertical:16,children:i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("TetraText.react"),{type:"headlineEmphasized1",children:h._("Menu")})})}),i.jsx(c("CometScrollView.react"),{showsHorizontalScrollIndicator:!1,xstyle:j.scrollView,children:i.jsxs(d("CometResponsiveColumns.react").Container,{children:[i.jsx(d("CometResponsiveColumns.react").Column,{children:i.jsx(c("CometHomeMegaMenuAllProducts.react"),{onClose:b,queryRef:a})}),i.jsx(d("CometResponsiveColumns.react").Column,{xstyle:j.createMenu,children:i.jsx(c("CometDirectionalDockingView.react"),{bottom:16,bottomStickyAdjustment_DO_NOT_USE:-16,top:0,children:i.jsx(c("CometHomeMegaMenuCreateMenu.react"),{onClose:b})})})]})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WpWwwNewsfeedModuleDeletePostFromNewsfeedQPLEvent.modern",["createQPLEvent_DO_NOT_USE","getQPLEventConfig_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getQPLEventConfig_DO_NOT_USE")._("8399");b=c("createQPLEvent_DO_NOT_USE")(55246849,a);g["default"]=b}),98);