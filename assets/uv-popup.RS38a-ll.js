var t,e,o,s;import{_ as i}from"./uv-transition.57FirIXI.js";import{ac as n,ad as a,d as r,e as l,j as u,f as p,w as d,v as h,R as c,x as m,i as f,y,ag as g,k as b,m as v}from"./index-CPBjD6nT.js";import{_ as k}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as x}from"./uv-icon.BeAryk0A.js";const w=k({name:"uv-overlay",emits:["click"],mixins:[n,a,{props:{show:{type:Boolean,default:!1},zIndex:{type:[String,Number],default:10070},duration:{type:[String,Number],default:300},opacity:{type:[String,Number],default:.5},...null==(e=null==(t=uni.$uv)?void 0:t.props)?void 0:e.overlay}}],watch:{show(t){document.querySelector("body").style.overflow=t?"hidden":""}},computed:{overlayStyle(){const t={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":`rgba(0, 0, 0, ${this.opacity})`};return this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))}},methods:{clickHandler(){this.$emit("click")},clear(){}}},[["render",function(t,e,o,s,n,a){const m=r(l("uv-transition"),i);return u(),p(m,{show:t.show,mode:"fade","custom-class":"uv-overlay",duration:t.duration,"custom-style":a.overlayStyle,onClick:a.clickHandler,onTouchmove:c(a.clear,["stop","prevent"])},{default:d((()=>[h(t.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style","onClick","onTouchmove"])}],["__scopeId","data-v-10825c8d"]]);const C=k({name:"uv-status-bar",mixins:[n,a,{props:{bgColor:{type:String,default:"transparent"}}}],data:()=>({}),computed:{style(){const t={};return t.height=this.$uv.addUnit(this.$uv.sys().statusBarHeight,"px"),this.bgColor&&(this.bgColor.indexOf("gradient")>-1?t.backgroundImage=this.bgColor:t.background=this.bgColor),this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))}}},[["render",function(t,e,o,s,i,n){const a=f;return u(),p(a,{style:m([n.style]),class:"uv-status-bar"},{default:d((()=>[h(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-c48287dc"]]);const S=k({name:"uv-safe-bottom",mixins:[n,a],data:()=>({safeAreaBottomHeight:0,isNvue:!1}),computed:{style(){return this.$uv.deepMerge({},this.$uv.addStyle(this.customStyle))}},mounted(){}},[["render",function(t,e,o,s,i,n){const a=f;return u(),p(a,{class:y(["uv-safe-bottom",[!i.isNvue&&"uv-safe-area-inset-bottom"]]),style:m([n.style])},null,8,["style","class"])}],["__scopeId","data-v-71c4b1ce"]]);const _=k({name:"uv-popup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const o=Object.keys(t).find((o=>{const s=e.key,i=t[o];return i===s||Array.isArray(i)&&i.includes(s)}));o&&setTimeout((()=>{this.$emit(o,{})}),0)}))},render:()=>{}}},mixins:[n,a],emits:["change","maskClick"],props:{mode:{type:String,default:"center"},duration:{type:[String,Number],default:300},zIndex:{type:[String,Number],default:997},bgColor:{type:String,default:"#ffffff"},safeArea:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},overlayOpacity:{type:[Number,String],default:.4},overlayStyle:{type:[Object,String],default:""},safeAreaInsetBottom:{type:Boolean,default:!0},safeAreaInsetTop:{type:Boolean,default:!1},closeable:{type:Boolean,default:!1},closeIconPos:{type:String,default:"top-right"},zoom:{type:Boolean,default:!0},round:{type:[Number,String],default:0},...null==(s=null==(o=uni.$uv)?void 0:o.props)?void 0:s.popup},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.mode]](!0)},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},transitionStyle:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupClass:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.bgColor||"none"===this.bgColor||this.$uv.getPx(this.round)>0?"transparent":this.bgColor},contentStyle(){const t={};if(this.bgColor&&(t.backgroundColor=this.bg),this.round){const e=this.$uv.addUnit(this.round);t.backgroundColor=this.bgColor,"top"===this.mode?(t.borderBottomLeftRadius=e,t.borderBottomRightRadius=e):"bottom"===this.mode?(t.borderTopLeftRadius=e,t.borderTopRightRadius=e):"center"===this.mode&&(t.borderRadius=e)}return this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))}},unmounted(){this.setH5Visible()},created(){this.messageChild=null,this.clearPropagation=!1},methods:{setH5Visible(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask(){this.maskShow=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){if(this.showPopup)return;if(t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.mode),!this.config[t])return this.$uv.error(`缺少类型：${t}`);this[this.config[t]](),this.$emit("change",{show:!0,type:t})},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.mode}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.closeOnClickOverlay&&this.close())},top(t){this.popupClass=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.mode&&this.messageChild.timerClose()})))},bottom(t){this.popupClass="bottom",this.ani=["slide-bottom"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,left:0,right:0,bottom:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupClass="center",this.ani=this.zoom?["zoom-in","fade"]:["fade"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupClass="left",this.ani=["slide-left"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupClass="right",this.ani=["slide-right"],this.transitionStyle={position:"fixed",zIndex:this.zIndex,bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,e,o,s,n,a){const k=r(l("uv-overlay"),w),_=r(l("uv-status-bar"),C),I=r(l("uv-safe-bottom"),S),T=r(l("uv-icon"),x),$=f,z=r(l("uv-transition"),i),P=g("keypress");return n.showPopup?(u(),p($,{key:0,class:y(["uv-popup",[n.popupClass,a.isDesktop?"fixforpc-z-index":""]]),style:m([{zIndex:o.zIndex}])},{default:d((()=>[b($,{onTouchstart:a.touchstart},{default:d((()=>[n.maskShow&&o.overlay?(u(),p(k,{key:"1",show:n.showTrans,duration:o.duration,"custom-style":o.overlayStyle,opacity:o.overlayOpacity,zIndex:o.zIndex,onClick:a.onTap},null,8,["show","duration","custom-style","opacity","zIndex","onClick"])):v("",!0),b(z,{key:"2",mode:n.ani,name:"content","custom-style":n.transitionStyle,duration:o.duration,show:n.showTrans,onClick:a.onTap},{default:d((()=>[b($,{class:y(["uv-popup__content",[n.popupClass]]),style:m([a.contentStyle]),onClick:a.clear},{default:d((()=>[o.safeAreaInsetTop?(u(),p(_,{key:0})):v("",!0),h(t.$slots,"default",{},void 0,!0),o.safeAreaInsetBottom?(u(),p(I,{key:1})):v("",!0),o.closeable?(u(),p($,{key:2,onClick:c(a.close,["stop"]),class:y(["uv-popup__content__close",["uv-popup__content__close--"+o.closeIconPos]]),"hover-class":"uv-popup__content__close--hover","hover-stay-time":"150"},{default:d((()=>[b(T,{name:"close",color:"#909399",size:"18",bold:""})])),_:1},8,["onClick","class"])):v("",!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode","custom-style","duration","show","onClick"])])),_:3},8,["onTouchstart"]),n.maskShow?(u(),p(P,{key:0,onEsc:a.onTap},null,8,["onEsc"])):v("",!0)])),_:3},8,["class","style"])):v("",!0)}],["__scopeId","data-v-9e9becf7"]]);export{_};
