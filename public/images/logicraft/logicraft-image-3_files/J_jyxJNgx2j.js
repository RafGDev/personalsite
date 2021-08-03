if (self.CavalryLogger) { CavalryLogger.start_js(["M5fYsrQ"]); }

__d("CometUFIVoiceSwitcherActionRenderer_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={kind:"Variable",name:"scale",variableName:"scale"},d=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"CometUFIVoiceSwitcherActionRenderer_renderer$normalization",selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"share_fbid",storageKey:null},{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[a,b,{alias:null,args:[{kind:"Literal",name:"height",value:20},c,{kind:"Literal",name:"width",value:20}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:d,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VoiceSwitcherActorsConnection",kind:"LinkedField",name:"voice_switcher_actors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:36},c,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:d,storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"viewer_admin_access_for_biz_tool_user_v2",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_insights_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_plus_primary_platform_tool",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"requires_actor_swap_for_ufi",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"feed_object_identifier",storageKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFIVoiceSwitcherActionRenderer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:null,name:"CometUFIVoiceSwitcherActionRenderer_renderer",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"share_fbid",storageKey:null},{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"VoiceSwitcherActorsConnection",kind:"LinkedField",name:"voice_switcher_actors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:a,storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFIActorSelectorMenu_profiles"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFIActorSelectorMenu_feedback"},{args:null,kind:"FragmentSpread",name:"CometUFIActorButton_feedback"}],storageKey:null},action:"THROW",path:"feedback"}],type:"UFIVoiceSwitcherActionRenderer",abstractKey:null}}();e.exports=a}),null);
__d("CometUFIVoiceSwitcherActionRenderer.react",["fbt","ix","CometLazyPopoverTrigger.react","CometRelay","CometUFIActorButton.react","CometUFIVoiceSwitcherActionRenderer_renderer.graphql","JSResourceForInteraction","TetraIcon.react","fbicon","orEmptyArray","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=c("JSResourceForInteraction")("CometUFIActorSelectorMenu.react").__setRef("CometUFIVoiceSwitcherActionRenderer.react");function a(a){var e,f=a.onActorSelected;a=a.renderer;a=d("CometRelay").useFragment(j!==void 0?j:j=b("CometUFIVoiceSwitcherActionRenderer_renderer.graphql"),a);var g=a.feedback;a=g.voice_switcher_actors;return a==null||c("orEmptyArray")(a.nodes).length===0?null:k.jsx(c("CometLazyPopoverTrigger.react"),{align:"end",popoverProps:{currentActorID:(e=g.viewer_actor)==null?void 0:e.id,feedback$key:g,onActorSelected:f,postID:g.share_fbid,profiles:a},popoverResource:l,children:function(a,b){return k.jsx(c("CometUFIActorButton.react"),{ariaLabel:h._("Voice Selector"),contextRef:a,feedback:g,onShow:b,children:k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("481880"),12)})})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("isStringNullOrWhitespaceOnly",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||a.trim()===""}f["default"]=a}),66);