import{d,a as n,o as r,e as m,f as i,g as a,w as _,u as c,F as p}from"./index-b0e8711a.js";const g=[{title:"通知",content:[{title:"xxx回复了你的邮件",time:"2022-12-22 14:23:15",avatar:""},{title:"xxx邀请你参加会议",time:"2022-12-23 10:33:45",avatar:""},{title:"xxx提交了休假申请",time:"2022-12-25 12:08:55",avatar:""}]},{title:"关注",content:[{title:"xxx 评论了你",time:"1小时前",desc:"评论了你描述信息描述信息",avatar:""},{title:"xxx 评论了你",time:"2小时前",desc:"评论了你描述信息描述信息描述信息",avatar:""},{title:"xxx 关注了你",time:"3小时前",desc:"关注了你描述信息描述信息描述信息描述信息",avatar:""}]},{title:"代办",content:[{title:"xxx 紧急变更 XXXXXX",desc:"评论了你描述信息描述信息",tag:"未开始",tagType:""},{title:"第三方变更",desc:"指派提交于 2022-10-10，需在 2022-12-30 前完成变更任务",tag:"马上到期",tagType:"danger"},{title:"信息安全考试",desc:"关注了你描述信息描述信息描述信息描述信息",tag:"已耗时8天",tagType:"warning"}]}],u=[{text:"清空代办",icon:"delete"},{text:"查看更多",icon:"edit"}],v={class:"demo"},f={class:"demo"},C=d({__name:"index",setup(k){const s=(t,e)=>{console.log(t,e)},l=(t,e)=>{console.log(t,e)};return(t,e)=>{const x=n("l-list"),o=n("l-notification");return r(),m(p,null,[i("div",v,[a(o,{value:50},{default:_(()=>[a(x,{list:c(g),actions:c(u),onClickItem:s,onClickAction:l},null,8,["list","actions"])]),_:1})]),i("div",f,[a(o,{value:50,max:30})])],64)}}});export{C as default};
