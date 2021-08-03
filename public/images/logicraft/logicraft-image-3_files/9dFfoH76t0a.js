if (self.CavalryLogger) { CavalryLogger.start_js(["EX1lzzN"]); }

__d("CometHovercardQueryRendererQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:"DEFAULT",kind:"LocalArgument",name:"context"},b={defaultValue:null,kind:"LocalArgument",name:"entityID"},c={defaultValue:null,kind:"LocalArgument",name:"groupID"},d={defaultValue:null,kind:"LocalArgument",name:"scale"},e=[{kind:"Variable",name:"id",variableName:"entityID"}],f={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[a,b,c,d],kind:"Fragment",metadata:null,name:"CometHovercardQueryRendererQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometHovercard_entity"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,b,a,c],kind:"Operation",name:"CometHovercardQueryRendererQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"context",variableName:"context"},{kind:"Literal",name:"supported",value:["CometHovercardCoworkerUserRenderer","CometHovercardMarketplaceUserRenderer","CometHovercardUserRenderer","CometHovercardProfilePlusUserRenderer","WIGHovercardAdminUserRenderer","WIGHovercardUserRenderer","WIGHovercardUserRP4SMBRenderer","WIGHovercardUserWorkPlatformRenderer","CometHovercardPageRenderer","WIGHovercardPageRenderer","CometHovercardGamingStreamerRenderer","CometHovercardGroupRenderer","CometHovercardGroupContextualProfileRenderer","WIGHovercardGroupRenderer","WIGHovercardGroupPrivacyInfoRenderer","CometHovercardEventRenderer","WIGHovercardEventRenderer","CometHovercardGroupAnonProfileRenderer","CometHovercardGroupMemberRenderer","CometHovercardGameRenderer","CometHovercardApplicationInstantGameRenderer","CometHovercardRemovedCommentRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_hovercard_renderer",plural:!1,selections:[f,{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardCoworkerUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardCoworkerUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardMarketplaceUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardMarketplaceUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardProfilePlusUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardProfilePlusUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardAdminUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardAdminUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardUserRP4SMBRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardUserRP4SMBRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardUserWorkPlatformRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardUserWorkPlatformRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"WIGHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGamingStreamerRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardGamingStreamerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupContextualProfileRenderer_profile",fragmentPropName:"profile",kind:"ModuleImport"}],type:"CometHovercardGroupContextualProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WIGHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardGroupPrivacyInfoRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WIGHovercardGroupPrivacyInfoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"CometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"WIGHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupAnonProfileRenderer_anon",fragmentPropName:"anon",kind:"ModuleImport"}],type:"CometHovercardGroupAnonProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupMemberRenderer_actor",fragmentPropName:"actor",kind:"ModuleImport"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGameRenderer_game",fragmentPropName:"game",kind:"ModuleImport"}],type:"CometHovercardGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardApplicationInstantGameRenderer_application",fragmentPropName:"application",kind:"ModuleImport"}],type:"CometHovercardApplicationInstantGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardRemovedCommentRenderer_comment",fragmentPropName:"comment",kind:"ModuleImport"}],type:"CometHovercardRemovedCommentRenderer",abstractKey:null}],storageKey:null}],type:"CometHovercard",abstractKey:"__isCometHovercard"}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null}]},params:{id:"4126009520850631",metadata:{},name:"CometHovercardQueryRendererQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometHovercard_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"context"}],kind:"Fragment",metadata:null,name:"CometHovercard_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"context",variableName:"context"},{kind:"Literal",name:"supported",value:["CometHovercardCoworkerUserRenderer","CometHovercardMarketplaceUserRenderer","CometHovercardUserRenderer","CometHovercardProfilePlusUserRenderer","WIGHovercardAdminUserRenderer","WIGHovercardUserRenderer","WIGHovercardUserRP4SMBRenderer","WIGHovercardUserWorkPlatformRenderer","CometHovercardPageRenderer","WIGHovercardPageRenderer","CometHovercardGamingStreamerRenderer","CometHovercardGroupRenderer","CometHovercardGroupContextualProfileRenderer","WIGHovercardGroupRenderer","WIGHovercardGroupPrivacyInfoRenderer","CometHovercardEventRenderer","WIGHovercardEventRenderer","CometHovercardGroupAnonProfileRenderer","CometHovercardGroupMemberRenderer","CometHovercardGameRenderer","CometHovercardApplicationInstantGameRenderer","CometHovercardRemovedCommentRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_hovercard_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardCoworkerUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardCoworkerUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardMarketplaceUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardMarketplaceUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardProfilePlusUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardProfilePlusUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardAdminUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardAdminUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardUserRP4SMBRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardUserRP4SMBRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardUserWorkPlatformRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WIGHovercardUserWorkPlatformRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"WIGHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGamingStreamerRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardGamingStreamerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupContextualProfileRenderer_profile",fragmentPropName:"profile",kind:"ModuleImport"}],type:"CometHovercardGroupContextualProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WIGHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardGroupPrivacyInfoRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WIGHovercardGroupPrivacyInfoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"CometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WIGHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"WIGHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupAnonProfileRenderer_anon",fragmentPropName:"anon",kind:"ModuleImport"}],type:"CometHovercardGroupAnonProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupMemberRenderer_actor",fragmentPropName:"actor",kind:"ModuleImport"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGameRenderer_game",fragmentPropName:"game",kind:"ModuleImport"}],type:"CometHovercardGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardApplicationInstantGameRenderer_application",fragmentPropName:"application",kind:"ModuleImport"}],type:"CometHovercardApplicationInstantGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardRemovedCommentRenderer_comment",fragmentPropName:"comment",kind:"ModuleImport"}],type:"CometHovercardRemovedCommentRenderer",abstractKey:null}],storageKey:null}],type:"CometHovercard",abstractKey:"__isCometHovercard"}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("CometHovercard.react",["CometHovercard_entity.graphql","CometRelay","CometTrackingNodeProvider.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.entity;a=a.visualStyle;a=a===void 0?"default":a;e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometHovercard_entity.graphql"),e);var f=e==null?void 0:e.comet_hovercard_renderer;return f==null?c("recoverableViolation")("Unhandled entity for Hovercard "+e.__typename,"comet_ui"):i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:250,children:i.jsx(d("CometRelay").MatchContainer,{fallback:null,match:f,props:{visualStyle:a}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHovercardQueryRenderer.react",["CometHovercard.react","CometHovercardQueryRendererQuery.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.props;a=a.queries;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometHovercardQueryRendererQuery.graphql"),a.hovercardQueryReference);a=a==null?void 0:a.node;return a==null?null:i.jsx(c("CometHovercard.react"),{entity:a,visualStyle:e.visualStyle})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LiveProducerCommentsCommonEntryPointVariables",[],(function(a,b,c,d,e,f){"use strict";a={feedLocation:"LIVE_PRODUCER",useDefaultActor:!1};f["default"]=a}),66);