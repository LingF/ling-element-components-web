import{d as p,r as d,a as i,o as v,c as m}from"./index-c3fee512.js";const x=p({__name:"index",setup(u){const s=d([{title:"购物",start:"2022-12-12 08:00",end:"2022-12-12 12:00",editable:!0},{title:"学习",start:"2022-12-13 10:00",end:"2022-12-13 15:00"}]),o=e=>{const n=document.createElement("div");console.log(e);const t=e.timeText.split("-"),a=t[0].replace("上午","").replace("时",""),r=t[1].replace("下午","").replace("时","");return n.innerHTML=`
          <img src="src/assets/vue.svg" style="width:30px;height:30px;" />
          <p>开始时间：${a}</p>
          <p>结束时间：${r}</p>
          <p>标题：${e.event._def.title}</p>
        `,{domNodes:[n]}},c=e=>{s.value.push({start:e.dateStr+" 12:00",end:e.dateStr+" 18:00",title:"学习"}),console.log("date",e)},l=e=>{console.log("event",e)};return(e,n)=>{const t=i("l-calendar");return v(),m(t,{events:s.value,displayEventEnd:"","event-content":o,onDateClick:c,onEventClick:l},null,8,["events"])}}});export{x as default};
