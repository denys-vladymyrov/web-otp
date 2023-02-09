(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["participants"],{"26bf":function(e,t,a){"use strict";a.r(t);var i=a("79c4");const n={class:"grid gap-2"},r=Object(i["i"])("p",{class:"text-lg font-semibold"},"Sign Up",-1),o={class:"flex"},s=Object(i["i"])("p",{class:"mr-2"},"Already have an account?",-1),c=Object(i["l"])("Sign In");function d(e,t,a,d,l,u){const m=Object(i["O"])("Link"),b=Object(i["O"])("ParticipantRegistrationForm"),p=Object(i["O"])("ParticipantFundraiser");return Object(i["F"])(),Object(i["f"])(p,{headerLabel:"Sign Up",headerSubText:"Wrong campaign? Let your group leader know."},{default:Object(i["X"])(()=>[Object(i["i"])("div",n,[r,Object(i["i"])("div",o,[s,Object(i["m"])(m,{to:{name:"participants-login",query:{join:e.$route.query.join}}},{default:Object(i["X"])(()=>[c]),_:1},8,["to"])])]),Object(i["m"])(b)]),_:1})}var l=a("6dbe"),u=a("9fa7"),m=a("c3e6");const b={class:"mt-4"},p={class:"md:ml-auto md:w-48"},j=Object(i["l"])("Sign Up ");function O(e,t,a,n,r,o){const s=Object(i["O"])("Alert"),c=Object(i["O"])("InputField"),d=Object(i["O"])("snap-button"),l=Object(i["P"])("autofocus");return Object(i["F"])(),Object(i["h"])("div",b,[e.error?(Object(i["F"])(),Object(i["f"])(s,{key:0,type:"danger",class:"mb-6 absolute top-8 inset-x-8"},{default:Object(i["X"])(()=>[Object(i["l"])(Object(i["S"])(e.error.message),1)]),_:1})):Object(i["g"])("",!0),Object(i["i"])("form",{onSubmit:t[4]||(t[4]=Object(i["Z"])(t=>e.signup(),["prevent"]))},[Object(i["Y"])(Object(i["m"])(c,{class:"mb-4",label:"Email",type:"email",modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),validation:e.v$.email},null,8,["modelValue","validation"]),[[l]]),Object(i["m"])(c,{class:"mb-4",label:"Mobile Number",name:"phoneNumber",type:"text",modelValue:e.phoneNumber,"onUpdate:modelValue":t[1]||(t[1]=t=>e.phoneNumber=t),validation:e.v$.phoneNumber},null,8,["modelValue","validation"]),Object(i["m"])(c,{class:"mb-4",label:"Password",name:"password",type:"password","help-text":"Your password must be 8-32 characters, and include at least one lowercase letter, one uppercase letter, and a number.",modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=t=>e.password=t),validation:e.v$.password},null,8,["modelValue","validation"]),Object(i["m"])(c,{class:"mb-4",label:"Confirm Password",name:"password",type:"password",modelValue:e.confirmPassword,"onUpdate:modelValue":t[3]||(t[3]=t=>e.confirmPassword=t),validation:e.v$.confirmPassword},null,8,["modelValue","validation"]),Object(i["i"])("div",p,[Object(i["m"])(d,{"full-width":"","button-type":"submit",disabled:e.state$.is("SUBMITTING"),shape:"circular",size:"lg",variant:"primary",icon:""},{default:Object(i["X"])(()=>[j]),_:1},8,["disabled"])])],32)])}var f=a("b082"),v=a("163c"),h=a("3580"),g=a("af34"),k=a("c182"),y=a("a0ea"),w=a.n(y);const x=async e=>k["a"].mutate({mutation:w.a,variables:e}).then(({data:e})=>e.participantSignup);var S=a("d92d");let N=class extends v["a"]{constructor(){super(...arguments),this.email="",this.password="",this.confirmPassword="",this.phoneNumber=""}async signup(){if(this.isFormValid()){const e=await x({email:this.email,phoneNumber:this.phoneNumber,password:this.password,apps:this.consumer?[this.consumer]:null});await this.$store.dispatch("setConfirmationData",{email:this.email,usedTransports:e}),await this.$router.push({name:"participants-verification",query:{join:this.$route.query.join}})}}reset(){this.email="",this.phoneNumber="",this.password=""}};Object(l["__decorate"])([Object(v["b"])({required:Object(S["e"])("Email is required."),email:Object(S["a"])("Email is invalid.")})],N.prototype,"email",void 0),Object(l["__decorate"])([Object(v["b"])({required:Object(S["e"])("Password is required."),strong:Object(S["c"])("Your password must be 8-32 characters, and include at least one lowercase letter, one uppercase letter, and a number.")})],N.prototype,"password",void 0),Object(l["__decorate"])([Object(v["b"])({sameAs:Object(S["f"])("Passwords don't match.","password")})],N.prototype,"confirmPassword",void 0),Object(l["__decorate"])([Object(v["b"])({required:Object(S["e"])("Phone number is required."),phone:Object(S["d"])("Please enter a valid phone number.")})],N.prototype,"phoneNumber",void 0),Object(l["__decorate"])([Object(v["c"])()],N.prototype,"signup",null),N=Object(l["__decorate"])([Object(u["a"])({components:{Alert:h["a"],InputField:g["a"]},computed:{...Object(f["c"])(["consumer"])}})],N);var F=N,P=a("41ec"),_=a.n(P);const V=_()(F,[["render",O]]);var $=V,q=a("3853");let D=class extends u["b"]{};D=Object(l["__decorate"])([Object(u["a"])({components:{Link:q["a"],ParticipantFundraiser:m["a"],ParticipantRegistrationForm:$}})],D);var T=D;const L=_()(T,[["render",d]]);t["default"]=L},"2ea2":function(e,t,a){},"32d2":function(e,t,a){"use strict";a("2ea2")},"49a1":function(e,t,a){"use strict";a.r(t);var i=a("79c4");const n={class:"grid gap-2"},r=Object(i["i"])("p",{class:"text-lg font-semibold"},"Sign In",-1),o={class:"flex"},s=Object(i["i"])("p",{class:"mr-2"},"Don't have an account?",-1),c=Object(i["l"])("Sign Up");function d(e,t,a,d,l,u){const m=Object(i["O"])("Link"),b=Object(i["O"])("LoginForm"),p=Object(i["O"])("ParticipantFundraiser");return Object(i["F"])(),Object(i["f"])(p,{headerLabel:"Sign In",headerSubText:"Wrong campaign? Let your group leader know."},{default:Object(i["X"])(()=>[Object(i["i"])("div",n,[r,Object(i["i"])("div",o,[s,Object(i["m"])(m,{to:{name:"participants-signup",query:{join:e.$route.query.join}}},{default:Object(i["X"])(()=>[c]),_:1},8,["to"])])]),Object(i["m"])(b,{class:"mt-4",onResetPassword:t[0]||(t[0]=t=>e.$router.push({name:"participants-reset-password",query:{join:e.$route.query.join}}))})]),_:1})}var l=a("6dbe"),u=a("9fa7"),m=a("c3e6"),b=a("3853"),p=a("61b1");let j=class extends u["b"]{};j=Object(l["__decorate"])([Object(u["a"])({components:{Link:b["a"],ParticipantFundraiser:m["a"],LoginForm:p["a"]}})],j);var O=j,f=a("41ec"),v=a.n(f);const h=v()(O,[["render",d]]);t["default"]=h},a0ea:function(e,t){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"ParticipantSignup"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"phoneNumber"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"apps"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"participantSignup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"phoneNumber"},value:{kind:"Variable",name:{kind:"Name",value:"phoneNumber"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}},{kind:"Argument",name:{kind:"Name",value:"apps"},value:{kind:"Variable",name:{kind:"Name",value:"apps"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"recipient"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"transport"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:242}};a.loc.source={body:"mutation ParticipantSignup($email: String!, $phoneNumber: String!, $password: String!, $apps: [String]) {\r\n  participantSignup(email: $email, phoneNumber: $phoneNumber, password: $password, apps: $apps) {\r\n    recipient\r\n    transport\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&t.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,t)})),e.definitions&&e.definitions.forEach((function(e){i(e,t)}))}var n={};function r(e,t){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==t)return i}}function o(e,t){var a={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var i=n[t]||new Set,o=new Set,s=new Set;i.forEach((function(e){s.add(e)}));while(s.size>0){var c=s;s=new Set,c.forEach((function(e){if(!o.has(e)){o.add(e);var t=n[e]||new Set;t.forEach((function(e){s.add(e)}))}}))}return o.forEach((function(t){var i=r(e,t);i&&a.definitions.push(i)})),a}(function(){a.definitions.forEach((function(e){if(e.name){var t=new Set;i(e,t),n[e.name.value]=t}}))})(),e.exports=a,e.exports["ParticipantSignup"]=o(a,"ParticipantSignup")},c3e6:function(e,t,a){"use strict";var i=a("79c4");const n={class:"md:flex md:justify-center"},r={key:0,class:"flex md:block"},o={class:"flex justify-end md:justify-center mr-4 md:mr-auto overflow-hidden"},s={class:"text-xl font-semibold mr-auto md:mt-2 self-center md:text-2xl md:text-center"},c={class:"form-container px-4 py-6 md:px-7 md:py-5 bg-white md:rounded-xl sm:min-h-fit"};function d(e,t,a,d,l,u){var m,b,p,j;const O=Object(i["O"])("snap-avatar");return Object(i["F"])(),Object(i["h"])("div",n,[Object(i["i"])("div",{class:Object(i["x"])(["info-container flex opacity-75 bg-white p-6 rounded-t-xl md:rounded-l-xl md:rounded-tr-none self-center justify-center",e.headerSubText?["flex-col"]:[]])},[e.publicFundraiserData?(Object(i["F"])(),Object(i["h"])("div",r,[Object(i["i"])("div",o,[Object(i["m"])(O,{"img-alt":(null===(m=e.publicFundraiserData)||void 0===m?void 0:m.name)+" logo","image-src":null===(b=e.publicFundraiserData)||void 0===b?void 0:b.logo,size:"profile",shape:"rounded"},null,8,["img-alt","image-src"])]),Object(i["i"])("div",s,Object(i["S"])(null===(p=e.publicFundraiserData)||void 0===p?void 0:p.name),1)])):e.publicFundraiserData?Object(i["g"])("",!0):(Object(i["F"])(),Object(i["h"])("div",{key:1,class:Object(i["x"])(["text-xl font-semibold mr-auto self-center",e.headerImage?"md:text-2xl md:text-center":"md:mr-auto md:text-3xl"])},Object(i["S"])(e.headerLabel),3)),Object(i["i"])("div",{class:Object(i["x"])(["mt-2 md:mt-4 text-sm md:text-base",(null===(j=e.publicFundraiserData)||void 0===j?void 0:j.logo)?["md:text-center md:mt-12"]:[]])},Object(i["S"])(e.headerSubText),3)],2),Object(i["i"])("div",c,[Object(i["N"])(e.$slots,"default",{},void 0,!0)])])}var l=a("6dbe"),u=a("9fa7"),m=a("a7f4"),b=a.n(m);let p=class extends u["b"]{};p=Object(l["__decorate"])([Object(u["a"])({props:["headerLabel","headerSubText","headerImage"],apollo:{publicFundraiserData:{query:b.a,variables(){const e=this.$route.query.join||"";return{identifier:e}}}}})],p);var j=p,O=(a("32d2"),a("41ec")),f=a.n(O);const v=f()(j,[["render",d],["__scopeId","data-v-2ddd818c"]]);t["a"]=v},c7e8:function(e,t,a){"use strict";a.r(t);var i=a("79c4");const n=Object(i["i"])("div",{class:"grid gap-2"},[Object(i["i"])("p",{class:"text-lg font-semibold"},"Enter Verification Code")],-1);function r(e,t,a,r,o,s){const c=Object(i["O"])("VerifyForm"),d=Object(i["O"])("ParticipantFundraiser");return Object(i["F"])(),Object(i["f"])(d,{headerSubText:"Wrong campaign? Let your group leader know."},{default:Object(i["X"])(()=>[n,Object(i["m"])(c,{participants:!0,class:"mt-4",onCancel:t[0]||(t[0]=t=>e.$router.push({name:"participants-new-password",query:{join:e.$route.query.join}}))})]),_:1})}var o=a("6dbe"),s=a("9fa7"),c=a("c3e6"),d=a("19b4"),l=a("0613");const u=(e,t,a)=>{if(!l["a"].getters.isWaitingForConfirmation)return a({name:"participants-login",query:{join:e.query.join}});a()};let m=class extends s["b"]{};m=Object(o["__decorate"])([Object(s["a"])({components:{ParticipantFundraiser:c["a"],VerifyForm:d["a"]},beforeRouteEnter:u})],m);var b=m,p=a("41ec"),j=a.n(p);const O=j()(b,[["render",r]]);t["default"]=O},d7c4:function(e,t,a){"use strict";a.r(t);var i=a("79c4");const n=Object(i["i"])("div",{class:"grid gap-2"},[Object(i["i"])("p",{class:"text-lg font-semibold"},"Reset Password")],-1);function r(e,t,a,r,o,s){const c=Object(i["O"])("ResetPasswordForm"),d=Object(i["O"])("ParticipantFundraiser");return Object(i["F"])(),Object(i["f"])(d,{headerLabel:"Reset Password",headerSubText:"Wrong campaign? Let your group leader know."},{default:Object(i["X"])(()=>[Object(i["i"])("div",null,[n,Object(i["m"])(c,{class:"mt-4",onCancel:t[0]||(t[0]=t=>e.$router.push({name:"participants-login",query:{join:e.$route.query.join}}))})])]),_:1})}var o=a("6dbe"),s=a("9fa7"),c=a("c3e6"),d=a("2681");let l=class extends s["b"]{};l=Object(o["__decorate"])([Object(s["a"])({components:{ParticipantFundraiser:c["a"],ResetPasswordForm:d["a"]}})],l);var u=l,m=a("41ec"),b=a.n(m);const p=b()(u,[["render",r]]);t["default"]=p}}]);
//# sourceMappingURL=participants-legacy.bf6aef61.js.map