import{aK as e,aL as t,j as s,f as l,w as a,x as r,m as i,v as n,aM as o,i as d,r as c,o as u,b as h,d as p,e as f,k as g,l as v,t as _,K as x,N as y,V as m,O as w,s as P,W as b,aJ as I,a0 as k,A as C,q as j}from"./index-CPBjD6nT.js";import{_ as S}from"./uv-icon.BeAryk0A.js";import{_ as z}from"./uv-button.DCe9cTzF.js";import{_ as D}from"./uv-popup.RS38a-ll.js";import{_ as W}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{k as N,b as M}from"./bizDesign.CXIgWGo9.js";import{r as A}from"./workloadAuditApi.DCMGF6kR.js";import"./uv-loading-icon.Bz59kkyK.js";import"./uv-transition.57FirIXI.js";const B=W({name:"circle-progress",props:{percent:{type:Number,default:0,validator:e=>e>=0&&e<=100},inactiveColor:{type:String,default:"#ececec"},activeColor:{type:String,default:"#009dff"},borderWidth:{type:[Number,String],default:14},width:{type:[Number,String],default:200},duration:{type:[Number,String],default:1500},bgColor:{type:String,default:"transparent"}},data(){return{canvasId:this.randomId(),elId:this.randomId(),widthPx:e(this.width),borderWidthPx:e(this.borderWidth),startAngle:-Math.PI/2,progressContext:null,newPercent:0,oldPercent:0}},watch:{percent(e,t=0){e>100&&(e=100),e<0&&(t=0),this.newPercent=e,this.oldPercent=t,setTimeout((()=>{this.drawCircleByProgress(t)}),50)}},created(){this.newPercent=this.percent,this.oldPercent=0},mounted(){this.drawProgressBg(),this.drawCircleByProgress(this.oldPercent)},methods:{randomId:()=>"progressId"+parseInt(1e6*Math.random()),drawProgressBg(){let e=t(this.canvasId,this);e.setLineWidth(this.borderWidthPx),e.setStrokeStyle(this.inactiveColor),e.beginPath();let s=this.widthPx/2;e.arc(s,s,s-this.borderWidthPx,0,2*Math.PI,!1),e.stroke(),e.draw()},drawCircleByProgress(e){if(0===this.oldPercent&&0===this.newPercent)return;let s=this.progressContext;s||(s=t(this.elId,this),this.progressContext=s),s.setLineCap("round"),s.setLineWidth(this.borderWidthPx),s.setStrokeStyle(this.activeColor);let l=Math.floor(this.duration/200),a=2*Math.PI/100*e+this.startAngle;s.beginPath();let r=this.widthPx/2;if(s.arc(r,r,r-this.borderWidthPx,this.startAngle,a,!1),s.stroke(),s.draw(),this.newPercent>this.oldPercent){if(++e>this.newPercent)return}else if(--e<this.newPercent)return;setTimeout((()=>{this.drawCircleByProgress(e)}),l)}}},[["render",function(e,t,c,u,h,p){const f=o,g=d;return s(),l(g,{class:"circle-progress",style:r({width:h.widthPx+"px",height:h.widthPx+"px",backgroundColor:c.bgColor})},{default:a((()=>[h.canvasId?(s(),l(f,{key:0,class:"canvas-bg","canvas-id":h.canvasId,id:h.canvasId,style:r({width:h.widthPx+"px",height:h.widthPx+"px"})},null,8,["canvas-id","id","style"])):i("",!0),h.elId?(s(),l(f,{key:1,class:"canvas","canvas-id":h.elId,id:h.elId,style:r({width:h.widthPx+"px",height:h.widthPx+"px"})},null,8,["canvas-id","id","style"])):i("",!0),n(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-c334dc51"]]),J=W({__name:"detailjd",setup(e){const t=c(),r=c([]),i=c(),n=c(),o=c(),W=c(),J=c(!1);u((e=>{let s=h("storage_data");console.log("jdj",s),W.value=s.userInfo.account;let l=JSON.parse(e.id);o.value=JSON.parse(e.id),N({id:l.id,projectId:l.projectId}).then((e=>{r.value=e.data,r.value.yesDisclosure.includes(W.value)?J.value=!0:J.value=!1,t.value=r.value.yesDisclosure.length/(r.value.noDisclosure.length+r.value.yesDisclosure.length)*100})),M({id:l.actId}).then((e=>{console.log(e),n.value=e.data}))}));const L=()=>{A({id:r.value.id}).then((e=>{200==e.code&&(console.log(e),x({title:"确认交底",duration:2e3,icon:"none"}),y())}))},T=()=>{console.log("委托书"),m({title:"加载中"}),w({url:`${P.getters.allEnv[P.getters.envKey].baseUrl}/biz/projectflw/exportwts?actId=${n.value.processInstanceId}`,success:e=>{b(),I({filePath:e.tempFilePath,fileType:"pdf",showMenu:!0,success:function(e){}})}})},$=()=>{m({title:"加载中"}),w({url:`${P.getters.allEnv[P.getters.envKey].baseUrl}/biz/disclosurerecord/export?actId=${n.value.processInstanceId}`,header:{token:k()},success:e=>{b(),I({filePath:e.tempFilePath,showMenu:!0,success:function(e){}})}})},K=()=>{C({url:"/pages/design/designbookjd?id="+JSON.stringify(o.value)})};return(e,n)=>{const o=d,c=p(f("uv-icon"),S),u=j,h=p(f("uv-button"),z),x=p(f("uv-popup"),D);return s(),l(o,null,{default:a((()=>[g(o,{class:"title_class"},{default:a((()=>[v(" 交底时间 ")])),_:1}),g(o,{class:"content_class"},{default:a((()=>[v(_(r.value.disclosureTime),1)])),_:1}),g(o,{class:"title_class"},{default:a((()=>[v(" 交底内容 ")])),_:1}),g(o,{class:"content_class"},{default:a((()=>[v(_(r.value.disclosureWhat),1)])),_:1}),g(o,{class:"title_class"},{default:a((()=>[v(" 项目委托书")])),_:1}),g(o,{class:"wts"},{default:a((()=>[g(c,{name:"file-text",size:"70px",color:"006266",onClick:T})])),_:1}),g(o,{class:"title_class"},{default:a((()=>[v(" 项目设计书（设计书撰写）")])),_:1}),g(o,{class:"wts"},{default:a((()=>[g(c,{name:"empty-order",size:"70px",color:"error",onClick:K})])),_:1}),g(o,{class:"title_class"},{default:a((()=>[v(" 技术质量交底 "),g(o,null,{default:a((()=>[g(c,{name:"download",size:"30",onClick:$})])),_:1})])),_:1}),g(o,{class:"content_class"},{default:a((()=>[g(u,null,{default:a((()=>{var e;return[v(_(null==(e=r.value.technologyQuality)?void 0:e.replace("|","\n")),1)]})),_:1})])),_:1}),g(o,{class:"title_class"},{default:a((()=>[v(" 环境交底 ")])),_:1}),g(o,{class:"content_class"},{default:a((()=>[g(u,null,{default:a((()=>{var e;return[v(_(null==(e=r.value.environment)?void 0:e.replace("|","\n")),1)]})),_:1})])),_:1}),g(o,{class:"title_class"},{default:a((()=>[v(" 职业健康安全 ")])),_:1}),g(o,{class:"content_class"},{default:a((()=>[g(u,null,{default:a((()=>{var e;return[v(_(null==(e=r.value.occupationalHealth)?void 0:e.replace("|","\n")),1)]})),_:1})])),_:1}),g(o,{style:{height:"200px",display:"flex","justify-content":"center","align-items":"center"}}),g(o,{style:{position:"fixed",bottom:"0px",left:"0",width:"100%",height:"40px","justify-content":"space-evenly",display:"flex","box-sizing":"border-box",background:"#fff","align-items":"center","border-top":"1px solid #000"}},{default:a((()=>[g(h,{style:{"border-right":"1px solid",width:"45%","box-sizing":"border-box","text-align":"center",border:"none",height:"35px","line-height":"40px"},onClick:L,type:"primary",disabled:J.value},{default:a((()=>[v(" 确认交底 ")])),_:1},8,["disabled"]),g(h,{style:{width:"45%",height:"35px","text-align":"center","line-height":"40px"},onClick:n[0]||(n[0]=e=>i.value.open())},{default:a((()=>[v(" 查看交底情况 ")])),_:1})])),_:1}),g(x,{ref_key:"popupjd",ref:i,mode:"center","close-on-click-overlay":!1,onChange:e.change},{default:a((()=>[g(o,{class:"title_class"},{default:a((()=>[v(" 交底情况 ")])),_:1}),r.value.noDisclosure.length>0?(s(),l(o,{key:0,class:"content_class"},{default:a((()=>[g(u,{style:{"font-size":"17px",color:"red"}},{default:a((()=>[v(" 未交底：")])),_:1}),v(" "+_(r.value.noDisclosure.join(",")),1)])),_:1})):(s(),l(o,{key:1,class:"content_class"},{default:a((()=>[g(u,{style:{"font-size":"17px",color:"green"}},{default:a((()=>[v("已全部交底")])),_:1})])),_:1})),g(o,{class:"content_class"},{default:a((()=>[g(u,{style:{"font-size":"17px",color:"red"}},{default:a((()=>[v(" 已交底：")])),_:1}),v(" "+_(r.value.yesDisclosure.join(",")),1)])),_:1}),g(o,{class:"wts"},{default:a((()=>[g(B,{percent:t.value},{default:a((()=>[g(u,null,{default:a((()=>[v(_(r.value.yesDisclosure.length)+" / "+_(r.value.noDisclosure.length+r.value.yesDisclosure.length),1)])),_:1})])),_:1},8,["percent"])])),_:1}),g(h,{onClick:n[1]||(n[1]=e=>i.value.close())},{default:a((()=>[v("确定")])),_:1})])),_:1},8,["onChange"]),g(o,{class:"circle"})])),_:1})}}},[["__scopeId","data-v-84fa3e18"]]);export{J as default};
