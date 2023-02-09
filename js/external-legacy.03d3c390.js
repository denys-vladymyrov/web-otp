(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["external"],{"0813":function(e,t,a){"use strict";a.r(t);var r=a("79c4");const o=Object(r["i"])("h1",{class:"text-3xl font-bold mb-4"},"Reset your password",-1);function s(e,t,a,s,i,l){const c=Object(r["O"])("ResetPasswordForm");return Object(r["F"])(),Object(r["h"])(r["a"],null,[o,Object(r["m"])(c,{onCancel:t[0]||(t[0]=t=>e.$router.push({name:"login"}))})],64)}var i=a("6dbe"),l=a("9fa7"),c=a("2681");let n=class extends l["b"]{};n=Object(i["__decorate"])([Object(l["a"])({components:{ResetPasswordForm:c["a"]}})],n);var d=n,m=a("41ec"),b=a.n(m);const u=b()(d,[["render",s]]);t["default"]=u},"3fd1":function(e,t,a){"use strict";a.r(t);var r=a("79c4");const o={class:"mt-10 text-right md:text-center text-sm"},s=Object(r["l"])(" Already have Snap! Mobile account? "),i=Object(r["l"])("Sign in here.");function l(e,t,a,l,c,n){const d=Object(r["O"])("RegistrationForm"),m=Object(r["O"])("Link");return Object(r["F"])(),Object(r["h"])(r["a"],null,[Object(r["m"])(d),Object(r["i"])("p",o,[s,Object(r["m"])(m,{to:{name:"login"},size:"sm"},{default:Object(r["X"])(()=>[i]),_:1})])],64)}var c=a("6dbe"),n=a("9fa7");const d={class:"registration-form"},m=Object(r["i"])("h1",{class:"text-3xl font-bold mb-4"},"Create your Snap! Mobile account",-1),b=Object(r["i"])("p",{class:"mb-4 font-bold text-sm"}," We’ll send you a verification code to complete your sign up, please check you’ve correctly entered your mobile number and email. ",-1),u={class:"text-right"},p=Object(r["l"])("Create Account ");function O(e,t,a,o,s,i){const l=Object(r["O"])("FormError"),c=Object(r["O"])("InputField"),n=Object(r["O"])("InputFileField"),O=Object(r["O"])("snap-button"),j=Object(r["P"])("autofocus");return Object(r["F"])(),Object(r["h"])("div",d,[Object(r["m"])(l,{error:e.error,class:"mb-6 absolute top-8 inset-x-8 z-20"},null,8,["error"]),m,Object(r["i"])("form",{onSubmit:t[7]||(t[7]=Object(r["Z"])(t=>e.signup(),["prevent"]))},[Object(r["Y"])(Object(r["m"])(c,{class:"mb-4",label:"First Name",type:"text",modelValue:e.firstName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.firstName=t),validation:e.v$.firstName},null,8,["modelValue","validation"]),[[j]]),Object(r["m"])(c,{class:"mb-4",label:"Last Name",name:"lastName",type:"text",modelValue:e.lastName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.lastName=t),validation:e.v$.lastName},null,8,["modelValue","validation"]),Object(r["m"])(c,{class:"mb-4",label:"Email Address",name:"email",type:"email",modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=t=>e.email=t),validation:e.v$.email},null,8,["modelValue","validation"]),Object(r["m"])(c,{class:"mb-4",label:"Mobile Number",name:"phoneNumber",type:"text",modelValue:e.phoneNumber,"onUpdate:modelValue":t[3]||(t[3]=t=>e.phoneNumber=t),validation:e.v$.phoneNumber},null,8,["modelValue","validation"]),Object(r["m"])(c,{class:"mb-4",label:"Password",name:"password",type:"password","help-text":"Your password must be 8-32 characters, and include at least one lowercase letter, one uppercase letter, and a number.",modelValue:e.password,"onUpdate:modelValue":t[4]||(t[4]=t=>e.password=t),validation:e.v$.password},null,8,["modelValue","validation"]),Object(r["m"])(c,{class:"mb-4",label:"Confirm Password",name:"password",type:"password",modelValue:e.confirmPassword,"onUpdate:modelValue":t[5]||(t[5]=t=>e.confirmPassword=t),validation:e.v$.confirmPassword},null,8,["modelValue","validation"]),Object(r["m"])(n,{class:"mb-4",label:"Profile Picture",accept:"image/*","corner-hint":"Optional",modelValue:e.profilePicture,"onUpdate:modelValue":t[6]||(t[6]=t=>e.profilePicture=t)},null,8,["modelValue"]),b,Object(r["i"])("div",u,[Object(r["m"])(O,{"button-type":"submit",disabled:e.state$.is("SUBMITTING"),shape:"circular",size:"lg",variant:"primary"},{default:Object(r["X"])(()=>[p]),_:1},8,["disabled"])])],32)])}var j=a("b082"),h=a("163c"),f=a("3580"),v=a("af34"),w=a("2f49"),N=a("1038"),y=a("2138"),_=a("d92d");let V=class extends h["a"]{constructor(){super(...arguments),this.email="",this.password="",this.confirmPassword="",this.firstName="",this.lastName="",this.phoneNumber="",this.profilePicture=""}async signup(){if(this.isFormValid()){const{availableTransport:e,result:t}=await Object(y["m"])({firstName:this.firstName,lastName:this.lastName,email:this.email,phoneNumber:this.phoneNumber,password:this.password,profilePicture:this.profilePicture,apps:this.consumer?[this.consumer]:null,consumer:this.consumer});await this.$store.dispatch("setConfirmationData",{availableTransports:e,usedTransports:t,email:this.email}),await this.$router.push({name:"verify"})}}reset(){this.email="",this.phoneNumber="",this.password="",this.firstName="",this.lastName="",this.profilePicture=""}};Object(c["__decorate"])([Object(h["b"])({required:Object(_["e"])("Email is required."),email:Object(_["a"])("Email is invalid.")})],V.prototype,"email",void 0),Object(c["__decorate"])([Object(h["b"])({required:Object(_["e"])("Password is required."),strong:Object(_["c"])("Your password must be 8-32 characters, and include at least one lowercase letter, one uppercase letter, and a number.")})],V.prototype,"password",void 0),Object(c["__decorate"])([Object(h["b"])({sameAs:Object(_["f"])("Passwords don't match.","password")})],V.prototype,"confirmPassword",void 0),Object(c["__decorate"])([Object(h["b"])({required:Object(_["e"])("First name is required.")})],V.prototype,"firstName",void 0),Object(c["__decorate"])([Object(h["b"])({required:Object(_["e"])("Last name is required.")})],V.prototype,"lastName",void 0),Object(c["__decorate"])([Object(h["b"])({required:Object(_["e"])("Phone number is required."),phone:Object(_["d"])("Please enter a valid phone number.")})],V.prototype,"phoneNumber",void 0),Object(c["__decorate"])([Object(h["b"])({})],V.prototype,"profilePicture",void 0),Object(c["__decorate"])([Object(h["c"])()],V.prototype,"signup",null),V=Object(c["__decorate"])([Object(n["a"])({components:{Alert:f["a"],InputField:v["a"],InputFileField:w["a"],FormError:N["a"]},computed:{...Object(j["c"])(["consumer"])}})],V);var P=V,F=a("41ec"),x=a.n(F);const g=x()(P,[["render",O]]);var q=g,$=a("3853");let U=class extends n["b"]{};U=Object(c["__decorate"])([Object(n["a"])({components:{RegistrationForm:q,Link:$["a"]}})],U);var C=U;const E=x()(C,[["render",l]]);t["default"]=E},b6d1:function(e,t,a){"use strict";a.r(t);var r=a("79c4");function o(e,t,a,o,s,i){const l=Object(r["O"])("VerifyForm");return Object(r["F"])(),Object(r["f"])(l)}var s=a("6dbe"),i=a("9fa7"),l=a("0613"),c=a("19b4");const n=(e,t,a)=>{if(!l["a"].getters.isWaitingForConfirmation)return a({name:"login"});a()};let d=class extends i["b"]{};d=Object(s["__decorate"])([Object(i["a"])({components:{VerifyForm:c["a"]},beforeRouteEnter:n})],d);var m=d,b=a("41ec"),u=a.n(b);const p=u()(m,[["render",o]]);t["default"]=p}}]);
//# sourceMappingURL=external-legacy.03d3c390.js.map