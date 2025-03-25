import{Y as e,r as l,o as a,K as t,Z as o,D as r,d,e as i,f as u,w as n,i as s,j as m,k as c,A as p,_ as g}from"./index-CPBjD6nT.js";import{_ as v}from"./uv-input.D6qbiBl7.js";import{_ as f,a as h}from"./uv-form.D7lRPiGH.js";import{_ as b}from"./uv-icon.BeAryk0A.js";import{_}from"./uv-button.DCe9cTzF.js";import{_ as y}from"./uv-picker.CDlyhjqn.js";import{_ as V}from"./uv-modal.Y1UIb7uE.js";import{g as j}from"./gcVehicleRecordManage.B03dmY0w.js";import{s as k}from"./snowy-file-picker-api.DRNXbXpN.js";import{_ as T}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uv-transition.57FirIXI.js";import"./uv-line.DVWmxLog.js";import"./uv-loading-icon.Bz59kkyK.js";import"./uv-toolbar.BkXgWcPp.js";import"./uv-popup.RS38a-ll.js";const x={orgPage:l=>e({url:"/biz/org/page",method:"GET",data:l}),orgTree:l=>e({url:"/biz/org/tree",method:"GET",data:l}),orgList:l=>e({url:"/biz/org/selector",method:"GET",data:l}),submitForm:(l,a=!0)=>e({url:"/biz/org/"+(a?"add":"edit"),method:"POST",data:l}),orgDelete:l=>e({url:"/biz/org/delete",method:"POST",data:l}),orgDetail:l=>e({url:"/biz/org/detail",method:"GET",data:l}),orgTreeSelector:l=>e({url:"/biz/org/orgTreeSelector",method:"GET",data:l}),orgUserSelector:l=>e({url:"/biz/org/userSelector",method:"GET",data:l}),orgDynamicFieldConfigList:l=>e({url:"/biz/org/dynamicFieldConfigList",method:"GET",data:l})},I=T({__name:"add",setup(e){const T=l(),I=l("");l([]);const U=l([]),z=l(),C=l(),P=l({vehicleId:"",departmentName:"",startPlace:"",startMileage:"",startUrl:""}),w=l({vehicleId:{type:"string",required:!0,message:"请输入车牌号",trigger:["blur","change"]},departmentName:{type:"string",required:!0,message:"请选择用车部门",trigger:["blur","change"]},startPlace:{type:"string",required:!0,message:"请输入目的地",trigger:["blur","change"]},startMileage:{type:"string",required:!0,message:"请输入用车时里程",trigger:["blur","change"]},startUrl:{type:"string",required:!0,message:"请上传用车里程照片",trigger:["blur","change"]}}),N=l(!1);l(null),a((e=>{null!=e?(console.log(1234),P.value.vehicleId=e.vehicleId,t({title:`欢迎使用：${P.value.vehicleId}`,duration:1e3,icon:"none"})):P.value.vehicleId="",x.orgList().then((e=>{console.log(e.data),U.value=[e.data],console.log(U.value)}))})),o((e=>{console.log(e,"onRead")})),r((e=>{}));const E=e=>{P.value.departmentName=e.value[0].name,N.value=!1},G=()=>{N.value=!1},R=()=>{z.value.resetFields()},B=()=>{z.value.validate().then((e=>{e?j.gcVehicleRecordAddwhether(P.value).then((e=>{e.type?j.gcVehicleRecordAdd(P.value).then((e=>{t({title:"用车成功,请谨慎驾驶",duration:1e3,icon:"none"}),p({url:"/pages/vehicle/index"})})):(T.value.open(),I.value=`跟上次还车里程相差 <span style="font-size: 16px;color: #f56c6c; font-weight: 800;"   \n>${e.num}</span>Km,是否继续用车？`)})):t({title:"请检查填写内容！",duration:1e3,icon:"none"})})).catch((()=>{t({title:"请检查填写内容！",duration:1e3,icon:"none"})}))},M=()=>{j.gcVehicleRecordAdd(P.value).then((e=>{t({title:"用车成功,请谨慎驾驶",duration:1e3,icon:"none"}),p({url:"/pages/vehicle/index"})}))};return(e,l)=>{const a=d(i("uv-input"),v),t=d(i("uv-form-item"),f),o=d(i("uv-icon"),b),r=d(i("uv-form"),h),p=d(i("uv-button"),_),j=s,x=d(i("uv-picker"),y),N=g,S=d(i("uv-modal"),V);return m(),u(j,null,{default:n((()=>[c(j,{class:"box",style:{background:"#fff"}},{default:n((()=>[c(r,{labelPosition:"left",model:P.value,rules:w.value,ref_key:"formRef",ref:z},{default:n((()=>[c(t,{label:"* 车牌号",labelWidth:"145",prop:"vehicleId",borderBottom:""},{default:n((()=>[c(a,{modelValue:P.value.vehicleId,"onUpdate:modelValue":l[0]||(l[0]=e=>P.value.vehicleId=e),placeholder:"请输入车牌号",border:"none"},null,8,["modelValue"])])),_:1}),c(t,{label:"* 用车部门",labelWidth:"145",prop:"departmentName",borderBottom:""},{default:n((()=>[c(a,{onClick:l[1]||(l[1]=e=>C.value.open()),modelValue:P.value.departmentName,"onUpdate:modelValue":l[2]||(l[2]=e=>P.value.departmentName=e),disabled:"",disabledColor:"#ffffff",placeholder:"请选择",border:"none"},null,8,["modelValue"]),c(o,{slot:"right",name:"arrow-right"})])),_:1}),c(t,{label:"* 目的地",labelWidth:"145",prop:"startPlace",borderBottom:""},{default:n((()=>[c(a,{modelValue:P.value.startPlace,"onUpdate:modelValue":l[3]||(l[3]=e=>P.value.startPlace=e),placeholder:"请输入目的地",border:"none"},null,8,["modelValue"])])),_:1}),c(t,{label:"* 用车时里程",labelWidth:"145",prop:"startMileage",borderBottom:""},{default:n((()=>[c(a,{type:"number",modelValue:P.value.startMileage,"onUpdate:modelValue":l[4]||(l[4]=e=>P.value.startMileage=e),placeholder:"请输入用车时里程",border:"none"},null,8,["modelValue"])])),_:1}),c(t,{label:"* 用车里程照片",labelWidth:"145",prop:"startUrl",borderBottom:""},{default:n((()=>[c(k,{modelValue:P.value.startUrl,"onUpdate:modelValue":l[5]||(l[5]=e=>P.value.startUrl=e),limit:1},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),c(j,{style:{display:"flex"}},{default:n((()=>[c(p,{type:"error",text:"重置",onClick:R,style:{margin:"10rpx",width:"45%"}}),c(p,{type:"primary",text:"确定",style:{margin:"10rpx",width:"45%"},onClick:B})])),_:1}),c(x,{ref_key:"pickRef",ref:C,columns:U.value,keyName:"name",onConfirm:E,onCancel:G},null,8,["columns"]),c(S,{ref_key:"modal",ref:T,onConfirm:M,showCancelButton:""},{default:n((()=>[c(j,{class:"slot-content"},{default:n((()=>[c(N,{nodes:I.value},null,8,["nodes"])])),_:1})])),_:1},512)])),_:1})])),_:1})}}},[["__scopeId","data-v-eff4aaee"]]);export{I as default};
