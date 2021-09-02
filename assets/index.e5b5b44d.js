var t=Object.defineProperty,e=(e,i,s)=>(((e,i,s)=>{i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s})(e,"symbol"!=typeof i?i+"":i,s),s);import{d as i,r as s,a as n,c as a,w as r,o,b as l,F as h,e as c,u as d,f as u,v as m,g as f,h as p,t as A,i as V,j as g,l as v,k as w,m as x,n as M,p as y,q as b,s as E,P as C,x as z}from"./vendor.f4220d3b.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const i of t)if("childList"===i.type)for(const t of i.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();class P{constructor(t,i,s){e(this,"ctx"),e(this,"width",0),e(this,"height",0),e(this,"x",0),e(this,"r1",0),e(this,"r2",0),this.ctx=t,this.resize(i,s)}resize(t,e){this.width=t,this.height=e;let i=Math.min(this.width,this.height);i>600&&(i=600),i<300&&(i=300);let s=Math.floor(i/5),n=Math.floor(i/7);this.x=s,this.r1=Math.floor(.9*n),this.r2=n}draw(){let t=this.x,e=this.x,i=this.ctx,s=i.createRadialGradient(t,e,this.r1,t,e,this.r2);s.addColorStop(0,"rgb(255,255,255)"),s.addColorStop(1,"rgb(255,255,255,0)"),i.save(),i.fillStyle=s,i.beginPath(),i.arc(t,e,this.r2,0,2*Math.PI,!0),i.closePath(),i.fill(),i.restore()}}class H{constructor(t,i,s,n){e(this,"width",0),e(this,"height",0),e(this,"ctx"),e(this,"amount"),e(this,"stars",[]),this.ctx=t,this.amount=n,this.resize(i,s)}resize(t,e){this.width=t,this.height=e,this.stars=this.getStars(this.amount)}getStars(t){let e=[];for(;t--;)e.push({x:Math.random()*this.width,y:Math.random()*this.height,r:Math.random()+.2});return e}draw(){let t=this.ctx;t.save(),t.fillStyle="white",this.stars.forEach((e=>{t.beginPath(),t.arc(e.x,e.y,e.r,0,2*Math.PI),t.fill()})),t.restore()}blink(){this.stars=this.stars.map((t=>{let e=Math.random()>.5?1:-1;return t.r+=.2*e,t.r<0?t.r=-t.r:t.r>1&&(t.r-=.2),t}))}}class L{constructor(t,i,s){e(this,"ctx"),e(this,"y",0),e(this,"h",0),e(this,"x",0),e(this,"vx",0),e(this,"vy",0),e(this,"len",0),this.ctx=t,this.x=i,this.h=s,this.vx=-(4+4*Math.random()),this.vy=-this.vx,this.len=200*Math.random()+100}flow(){if(this.y>.5*this.h){if(Math.random()>.9)return!1}return!(this.x<-this.len||this.y>this.h+this.len)&&(this.x+=this.vx,this.y+=this.vy,!0)}draw(){let t=this.ctx,e=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.len);const i=Math.PI;e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.save(),t.fillStyle=e,t.beginPath(),t.arc(this.x,this.y,1,i/4,5*i/4),t.lineTo(this.x+this.len,this.y-this.len),t.closePath(),t.fill(),t.restore()}}function R(t,e){return[1721,947,547,233,73,31,7].reduce(((i,s)=>i*e-Math.cos(s*t)),0)}class I{constructor(t,i,s){e(this,"ctx"),e(this,"width",0),e(this,"height",0),this.ctx=t,this.resize(i,s)}resize(t,e){this.width=t,this.height=e}draw(){let t=this.ctx;t.save();let e=this.width,i=4*this.height/5;t.fillStyle="hsl(7, 10%, 8%)";for(let s=e;s--;){let e=60*R(s/2e3,.45)+i;t.fillRect(s,e,1,999)}t.restore()}}function S(t){const e=t||document.body,i=document.createElement("canvas");return i.setAttribute("style","position:absolute;top:0;"),window.addEventListener("resize",(function(){let t=e.offsetWidth,s=e.offsetHeight;const n=window.devicePixelRatio||1;i.height=n*s,i.width=n*t;i.getContext("2d").scale(n,n),i.style.width=t+"px",i.style.height=s+"px"})),e.appendChild(i),i}const F=performance||Date;class j{constructor(){e(this,"delta"),e(this,"elapsed"),e(this,"previous"),e(this,"start");const t=j.now();this.delta=0,this.elapsed=0,this.start=t,this.previous=t}update(){const t=j.now();this.delta=t-this.previous,this.elapsed=t-this.start,this.previous=t}static now(){return F.now()/1e3}}function B(){const t=document.body;let e=t.offsetWidth,i=t.offsetHeight;const s=S(t),n=s.getContext("2d");let a=new P(n,e,i),r=new I(n,e,i),o=new H(n,e,.4*i,30),l=[],h=0;window.addEventListener("resize",(function(){e=s.clientWidth,i=s.clientHeight,a.resize(e,i),r.resize(e,i),o.resize(e,.4*i)})),function(){let t=new Event("resize");window.dispatchEvent(t)}();const c=new j;let d=10*Math.random();const u=function(){requestAnimationFrame(u);let t=n.createLinearGradient(0,0,0,s.height);t.addColorStop(.3,"#08254d"),t.addColorStop(1,"#00111e"),n.fillStyle=t,n.fillRect(0,0,s.width,s.height),h++,h%10==0&&o.blink(),a.draw(),r.draw(),o.draw(),(()=>{if(c.update(),c.elapsed<d)return;d=3+10*Math.random(),c.start=c.previous;let t=Math.random()*e/3+400;l.push(new L(n,t,i))})(),l.forEach(((t,e,i)=>{t.flow()?t.draw():i.splice(e,1)}))};return requestAnimationFrame(u),n}class D{constructor(t=0,i=0){e(this,"x",0),e(this,"y",0),this.x=t,this.y=i}add(t){return this.x+=t.x,this.y+=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}clone(){return new D(this.x,this.y)}}const O=class{constructor(t,i=new D,s="white",n=1,a=1,r=1){e(this,"position"),e(this,"velocity"),e(this,"radius"),e(this,"color"),e(this,"lifetime"),e(this,"mass"),e(this,"isInCanvas"),e(this,"createdOn"),this.position=t,this.velocity=i,this.color=s,this.radius=n,this.lifetime=a,this.mass=r,this.isInCanvas=!0,this.createdOn=j.now()}update(t){this.getRemainingLifetime()&&(this.velocity.add(O.GRAVITATION.clone().multiplyScalar(this.mass)),this.position.add(this.velocity.clone().multiplyScalar(t.delta)))}render(t){const e=this.getRemainingLifetime();if(!e)return;const i=this.radius*e;t.globalAlpha=e,t.globalCompositeOperation="lighter",t.fillStyle=this.color,t.beginPath(),t.arc(this.position.x,this.position.y,i,0,2*Math.PI),t.fill()}getRemainingLifetime(){const t=j.now()-this.createdOn;return Math.max(0,this.lifetime-t)/this.lifetime}};let q=O;function U(t,e){let{mass:i,lifetime:s}=e;const n=Math.random()*Math.PI*2,a=new D(8*Math.cos(n),8*Math.sin(n)),r=function(t={}){switch(t.idx){case 1:return"#f84";case 2:return"#84f";case 3:return"#8ff";case 4:return"#fff";case 5:return"#4f8";case 6:return"#f44";case 7:return"#f84";case 8:return"#84f";case 9:return"#fff";case 10:return"#44f"}return`hsl(${Math.floor(15*Math.random()+30)}, 100%, 75%`}(e),o=.5+Math.random();return new q(t.position.clone(),a,r,o,s,i)}e(q,"GRAVITATION",new D(0,9.81));class W extends q{constructor(t,i=new D,s=1,n=1){super(t,i),e(this,"isAlive",!1),e(this,"children"),this.children=[],this.lifetime=s,this.mass=n,this.isAlive=!0}update(t){super.update(t),this.isAlive&&this.getRemainingLifetime()&&this.children.push(U(this,{lifetime:.5+.5*Math.random(),mass:.01})),this.children=this.children.filter((function(t){return t instanceof W?t.isAlive:t.getRemainingLifetime()})),this.children.length||(this.isAlive=!1),this.children.forEach((function(e){e.update(t)}))}render(t){this.children.forEach((function(e){e.render(t)}))}}class N extends W{constructor(t,i,s=new D,n=1,a=1){super(i,s,n,a),e(this,"image"),e(this,"size"),this.image=t,this.size=60+60*Math.random()}render(t){super.render(t),this.size/=1.01;let e=this.size;this.getRemainingLifetime()>.3&&(t.globalAlpha=.3),t.drawImage(this.image,this.position.x-e/2,this.position.y-e/2,e,e)}}let Q={};function k(t,e){let{lifetime:i,mass:s}=e;const n=Math.random()*Math.PI*2,a=128*Math.random(),r=new D(Math.cos(n)*a,Math.sin(n)*a);let o=t.add(r.clone().multiplyScalar(.25));return e.idx?new N(function(t){if(Q[t])return Q[t];const e=new Image;return e.src="./spark/"+t+".png",Q[t]=e,e}(e.idx),o,r,i,s):new W(o,r,i,s)}class J extends W{constructor(t,i=new D,s=10){super(t,i),e(this,"lifetime",10),this.lifetime=s}update(t){this.getRemainingLifetime()&&this.velocity.y>0&&(!function(t){let e=30+Math.floor(30*Math.random()),i=[],s=Math.ceil(6*Math.random())+1;for(;s--;)i.push(Math.ceil(10*Math.random()));for(;e--;){let e=Math.floor(Math.random()*i.length),s=i[e];2!=s&&6!=s||(i.splice(e,1),i.length<1&&i.push(Math.ceil(10*Math.random()))),t.children.push(k(t.position.clone(),{idx:s,lifetime:.8+1.2*Math.random(),mass:.09}))}}(this),this.lifetime=0),super.update(t)}}function T(t){let e,i,s;if(t){let n=t.canvas;e=n.cloneNode(),i=n.clientWidth,s=n.clientHeight}else{const t=document.body;i=t.offsetWidth,s=t.offsetHeight,e=S(t)}const n=e.getContext("2d"),a=new j;let r=1+3*Math.random(),o=[];window.addEventListener("resize",(function(){t?(i=t.canvas.clientWidth,s=t.canvas.clientHeight):(i=e.clientWidth,s=e.clientHeight)}));const l=function(){requestAnimationFrame(l),n.clearRect(0,0,n.canvas.width,n.canvas.height),a.update(),function(){if(a.elapsed<r)return;r=1+3*Math.random(),a.start=a.previous;const t=new D(Math.random()*i,s),e=.75*s,n=Math.PI/-2+(Math.random()-.5)*Math.PI/8,l=new D(Math.cos(n)*e,Math.sin(n)*e);o.push(new J(t,l,3)),o=o.filter((function(t){return t.isAlive}))}(),o.forEach((function(t){t.update(a),t.render(n)})),t&&t.drawImage(e,0,0,n.canvas.width,n.canvas.height)};requestAnimationFrame(l)}var Y={groom:"李雷",bride:"韩梅梅",date:"2005年12月16日",dateEx:"(农历十一月十六)",address:"天涯八卦",lottie_name:"partyyy",music163_id:"1493994313",preCode:"",code:'const { 👦,👧 } = 🌏;\n👦.name = "李雷";\n👧.name = "韩梅梅";\n\nconst wedding = new Wedding(👦,👧);\nwedding.setDate("2005年12月16日");\nwedding.setLocation("天涯八卦");\nwedding.generateInvitation();\n',executions:[{name:"制作中...",time:"",visible:!1,duration:void 0}]};function G(t,e){return new Promise((i=>{let s=new Date,n=e||50*Math.random()+250;setTimeout((()=>{t.time=s.toLocaleTimeString(),t.duration=void 0!==t.duration?n.toFixed(2):void 0,t.visible=!0,i({})}),n)}))}function K(t,e){return new Promise(((i,s)=>{fetch(t).then((t=>t.json())).then((t=>{i({}),e&&e(t)})).catch((t=>{s(t)}))}))}const Z={class:"executions"},_=f("span",{class:"addon"},"~",-1),X=p(" [ "),$={class:"time"},tt=p("] "),et={class:"task"},it={key:0,class:"duration"},st={class:"code"},nt=f("span",{class:"addon"},"~",-1),at={class:"percentage"},rt={class:"code"},ot=f("span",{class:"addon"},"~",-1),lt=p(" [ "),ht={class:"time"},ct=p("] "),dt={class:"task"};var ut=i({props:{canExecute:Boolean},emits:["onFinish","onUpdating","music_ready","lottie_ready"],setup(t,{emit:e}){const i=t,g=Y.executions,v=s("--------------------------"),w=n({name:"制作完成",time:"",visible:!1,duration:void 0}),x=s(!1),M=a((()=>{const t=v.value.split("").filter((t=>"#"===t)).length,e=v.value.length;return Math.floor(100*t/e)})),y=async()=>{for(const e of g)await G(e);await b(Math.floor(50*Math.random()+20));try{await(t=t=>{e("lottie_ready",t)},K(`./lottie/${Y.lottie_name}.json`,(e=>{t&&t(e)}))),await b(20*Math.random()+75,2),await function(t){return K(`https://autumnfish.cn/song/url?id=${Y.music163_id}`,(e=>{200==e.code&&t&&t(e.data[0].url)}))}((t=>{e("music_ready",t)}))}catch(i){console.log(i)}var t;await b(100,2),await G(w),setTimeout((()=>{e("onFinish")}),800)};r((()=>{!0===i.canExecute&&y()}));const b=(t,e=3)=>new Promise((i=>{let s,n=0;x.value=!0;let a=()=>{let r=M.value;n%e==0&&(v.value=v.value.replace("-","#")),n++,r<t?s=requestAnimationFrame(a):(i({}),cancelAnimationFrame(s),100==t&&(v.value=v.value.replace(/-/g,"#")))};s=requestAnimationFrame(a)}));return(t,i)=>(o(),l("div",Z,[(o(!0),l(h,null,c(d(g),((t,e)=>u((o(),l("p",{class:"code",key:e},[_,X,f("span",$,A(t.time),1),tt,f("span",et,A(t.name),1),void 0!==t.duration?(o(),l("span",it,A(t.duration)+" ms",1)):V("",!0)],512)),[[m,t.visible]]))),128)),u(f("p",st,[nt,p(" "+A(v.value)+" ",1),f("span",at,A(d(M))+"%",1)],512),[[m,x.value]]),u(f("p",rt,[ot,lt,f("span",ht,A(d(w).time),1),ct,f("span",dt,A(d(w).name),1),f("a",{href:"#",onClick:i[0]||(i[0]=t=>e("onFinish"))},"查看")],512),[[m,d(w).visible]])]))}});const mt={},ft={class:"qingjian"},pt=[g('<svg class="qing" viewBox="0 0 140 136"><g transform="translate(0,136) scale(0.1,-0.1)"><path d="M860 1351 c-8 -5 -28 -15 -45 -22 l-30 -13 42 -6 c69 -10 84 -36 97\r\n-160 l5 -55 -104 -40 c-58 -22 -105 -43 -105 -46 0 -6 23 -14 55 -20 8 -1 90\r\n-29 90 -30 0 0 12 4 28 10 23 9 27 8 27 -8 0 -10 -10 -25 -22 -33 -29 -18\r\n-109 -42 -128 -39 -25 4 4 -20 46 -38 l36 -16 -31 -34 c-17 -18 -31 -35 -31\r\n-37 0 -4 26 4 69 23 28 13 35 13 42 2 5 -8 9 -16 9 -19 0 -9 -253 -110 -273\r\n-110 -10 0 -15 -4 -12 -10 10 -17 85 -11 124 10 20 11 62 31 94 44 l58 25 -19\r\n-27 c-21 -29 -52 -111 -58 -152 -2 -14 -6 -68 -9 -120 -4 -52 -9 -111 -12\r\n-130 -6 -39 -7 -124 -1 -156 5 -26 48 -94 48 -75 0 8 3 12 6 8 7 -7 26 9 41\r\n37 6 11 8 60 6 120 -3 70 -1 96 6 86 6 -8 18 -15 28 -16 10 -1 44 -4 76 -8\r\nl57 -7 0 -79 c0 -88 -8 -100 -69 -100 -40 0 -39 -11 2 -34 17 -10 45 -32 60\r\n-49 l29 -31 18 24 c27 36 29 59 22 215 -9 184 -4 385 9 401 7 8 3 20 -13 38\r\n-47 55 -142 36 -215 -41 -25 -26 -33 -30 -33 -17 0 33 42 105 66 114 13 5 24\r\n14 24 18 0 14 137 45 215 48 44 2 85 -3 110 -12 77 -29 86 -28 99 13 5 17 1\r\n26 -18 38 -47 31 -85 28 -301 -25 -97 -24 -95 -24 -95 -2 0 13 21 32 61 55 34\r\n21 66 37 70 37 5 0 13 9 19 20 24 44 -26 75 -92 58 -33 -8 -38 -2 -31 36 5 22\r\n17 33 57 52 28 13 64 24 79 24 40 0 92 29 78 43 -13 13 -107 12 -159 -3 -51\r\n-14 -51 -14 -42 23 5 17 11 60 14 95 4 53 2 66 -15 83 -10 10 -27 19 -36 20\r\n-10 0 -38 2 -63 4 -25 2 -52 0 -60 -4z m180 -773 c7 -29 14 -73 16 -98 3 -25\r\n6 -55 8 -67 2 -13 0 -23 -3 -24 -3 0 -25 -2 -48 -5 -24 -3 -43 -3 -43 0 0 13\r\n36 83 53 102 18 21 18 22 -4 38 -29 20 -35 20 -84 -4 l-40 -19 -3 29 c-6 52\r\n43 98 105 99 30 1 32 -1 43 -51z m-119 -120 c2 -23 -3 -53 -12 -68 -6 -10 -8\r\n1 -9 33 0 26 5 47 10 47 6 0 11 -6 11 -12z"></path><path d="M368 1234 c-4 -3 8 -34 25 -68 42 -80 43 -89 10 -118 -59 -50 -59\r\n-55 2 -57 31 0 65 -6 77 -12 28 -15 85 -2 99 22 20 39 1 106 -45 157 -41 45\r\n-150 94 -168 76z"></path><path d="M575 965 c-127 -35 -421 -138 -470 -163 -16 -9 -48 -19 -70 -22 l-40\r\n-6 69 -22 c37 -12 77 -22 87 -22 10 0 46 22 80 49 72 58 151 101 238 131 51\r\n17 77 20 126 15 51 -6 65 -4 79 10 34 34 -24 51 -99 30z"></path><path d="M434 779 c-49 -21 -97 -39 -106 -39 -33 0 -27 -18 12 -34 59 -23 97\r\n-20 159 15 68 38 91 57 91 77 0 9 -3 13 -6 10 -3 -4 -18 -3 -33 2 -21 6 -47\r\n-1 -117 -31z"></path><path d="M515 646 c-22 -6 -67 -25 -100 -42 -33 -17 -73 -34 -89 -38 -35 -9\r\n-29 -15 32 -36 40 -14 52 -15 84 -4 66 23 168 86 168 105 0 16 -56 25 -95 15z"></path><path d="M508 472 c-7 -10 -32 -26 -55 -36 -40 -18 -43 -18 -100 2 -32 11 -57\r\n25 -55 31 1 7 -2 10 -8 6 -14 -9 -12 -60 3 -98 15 -34 33 -111 41 -164 4 -31\r\n42 -91 58 -92 4 -1 17 12 29 28 12 16 27 27 34 25 17 -7 115 23 140 41 16 13\r\n18 20 8 44 -9 24 -7 31 8 42 19 13 69 116 69 142 0 27 -32 42 -96 44 -50 2\r\n-66 -1 -76 -15z m1 -99 c-14 -38 -49 -93 -59 -93 -4 0 -8 20 -8 43 -1 40 2 45\r\n31 60 44 22 48 21 36 -10z"></path></g></svg><svg class="jian" viewBox="0 0 124 140"><g transform="translate(0,140) scale(0.1,-0.1)"><path d="M375 1380 c-26 -18 -23 -26 9 -21 4 1 14 -3 22 -9 12 -10 16 -31 29\r\n-131 1 -15 0 -31 -4 -36 -11 -17 -123 -54 -186 -62 l-60 -7 35 -19 c27 -14 57\r\n-19 127 -19 l91 -1 4 -33 c2 -18 0 -36 -5 -39 -6 -3 -55 -28 -109 -54 -88 -43\r\n-103 -48 -136 -41 -38 9 -169 9 -177 0 -3 -3 18 -20 46 -38 60 -38 83 -81 104\r\n-192 11 -61 19 -76 46 -98 31 -26 32 -26 67 -9 47 24 57 15 33 -29 -11 -20\r\n-31 -62 -44 -92 -29 -66 -99 -161 -161 -218 -60 -55 -34 -54 41 2 33 24 75 51\r\n94 60 19 9 58 47 87 84 29 37 66 83 83 102 l30 35 -5 -85 c-3 -47 -6 -126 -7\r\n-177 -1 -50 -5 -96 -9 -103 -4 -7 -31 -20 -59 -30 -51 -17 -51 -17 -25 -29 15\r\n-6 24 -14 21 -17 -9 -9 44 -54 64 -54 10 0 21 -5 24 -10 14 -22 42 11 60 69\r\n15 51 17 81 12 193 -4 73 -10 151 -13 173 l-6 40 28 -25 c16 -14 50 -45 77\r\n-70 28 -25 55 -50 61 -55 78 -71 180 -124 229 -120 18 2 64 7 102 10 39 4 86\r\n9 105 10 60 4 104 17 122 35 15 16 15 18 -10 30 -82 39 -198 78 -282 95 -44 9\r\n-129 43 -250 100 -74 34 -147 67 -161 73 -21 8 -26 15 -22 36 5 22 11 26 39\r\n26 27 0 34 -4 34 -20 0 -11 3 -20 8 -21 4 0 17 -2 29 -5 12 -2 33 0 45 5 31\r\n13 84 61 80 73 -1 5 2 7 8 3 10 -6 78 127 95 185 4 14 18 44 32 68 13 24 22\r\n50 19 57 -6 18 -89 60 -136 70 -50 11 -155 8 -179 -5 -12 -6 -21 -8 -21 -6 0\r\n3 -11 1 -25 -4 -28 -11 -32 0 -16 42 7 18 25 29 68 43 66 21 94 45 86 76 -8\r\n28 -46 41 -105 33 l-50 -7 4 73 c3 66 1 74 -21 91 -30 25 -78 24 -116 -1z\r\nm357 -385 c3 -4 1 -25 -4 -48 -6 -23 -11 -48 -11 -54 0 -16 0 -17 -44 7 -46\r\n24 -149 37 -120 15 17 -12 16 -16 -18 -69 -19 -31 -38 -56 -41 -56 -6 0 1 158\r\n7 164 5 4 95 33 124 39 30 7 101 8 107 2z m-287 -193 c-6 -140 -14 -158 -68\r\n-148 -20 4 -30 0 -39 -14 -20 -32 -34 -23 -36 23 -2 38 -1 40 12 24 8 -10 22\r\n-17 32 -15 22 4 83 103 79 126 -2 10 -4 25 -4 35 -1 10 -5 16 -10 13 -5 -3\r\n-24 9 -43 28 l-34 34 50 15 c28 8 55 12 59 10 5 -3 6 -62 2 -131z m-125 80 c0\r\n-16 -6 -36 -13 -47 -13 -17 -15 -16 -30 14 -15 30 -15 31 11 46 15 8 28 14 30\r\n15 1 0 2 -13 2 -28z m353 -109 c-27 -56 -30 -58 -73 -64 -25 -4 -60 -11 -77\r\n-17 -25 -8 -33 -8 -33 1 0 23 37 53 100 84 14 7 43 23 65 36 22 14 41 23 43\r\n22 2 -2 -9 -30 -25 -62z"></path></g></svg>',2)];mt.render=function(t,e){return o(),l("div",ft,pt)};const At={class:"invitation-cover"},Vt={class:"cover-content"},gt={class:"content-inside"},vt=["src"],wt={class:"cover left"},xt={class:"border"},Mt=["src"],yt=f("div",{class:"cover right"},[f("div",{class:"border"})],-1);var bt=i({props:{canOpen:Boolean},emits:["music_status"],setup(t,{expose:e,emit:i}){const n=s(),a=s(),r=s(!1),h=()=>{r.value=!0};w(r,(t=>{i("music_status",!t)}));return e({play:t=>{setTimeout((()=>{!function(t,e,i){if(!v||!e)return;const s=t.appendChild(document.createElement("div"));let n=t.scrollWidth,a=t.scrollHeight;s.setAttribute("style",`position:absolute;top:0;left:0;z-index:1000;width:${n}px;height:${a}px`),s.addEventListener("click",(t=>{i&&i(t)}));const r=v.loadAnimation({container:s,renderer:"svg",loop:!1,autoplay:!0,animationData:e});r.setSpeed(.8),r.addEventListener("complete",(()=>{r.destroy(),s.parentNode.removeChild(s)}))}(n.value,t,(t=>{let{x:e,y:i}=t,{left:s,right:n,top:r,bottom:o}=a.value.getBoundingClientRect();e>s&&e<n&&i>r&&i<o&&h()}))}),600)}}),(e,i)=>(o(),l("div",{class:M(["wedding-invitation",{"invitation-bounce":t.canOpen}]),ref:n},[f("div",{class:M(["invitation-container",{"invitation-down":r.value}])},[f("div",At,[f("div",Vt,[f("div",gt,[f("img",{class:"photo",src:d("./assets/photo.f237d682.jpeg")},null,8,vt),f("p",null,A(d(Y).groom)+" & "+A(d(Y).bride),1),f("p",null,"地点："+A(d(Y).address),1),f("p",null,"时间："+A(d(Y).date)+A(d(Y).dateEx),1)])]),f("div",wt,[f("div",xt,[x(mt,{class:"title"}),f("img",{class:"seal",src:d("./assets/seal.693ef3a6.png"),onClick:h,ref:a},null,8,Mt)])]),yt])],2)],2))}});function Et(t,e){t&&(e?t.pause():t.play())}const Ct=["innerHTML"],zt=p();var Pt=i({setup(t){const e=s(),i=s(),r=n({currentCode:"",isCursorVisible:1,canExecute:!1,canOpen:!1,animationData:null}),h=a((()=>`${C.highlight(r.currentCode,C.languages.javascript)}<span style="opacity:${r.isCursorVisible};" >▍</span>`)),c=()=>{let t=e.value;t&&(t.scrollTop=1e5)};let u;E(c),function(t){const e=Y.code,i=Y.preCode;let s;y((()=>{s=new b.Howl({src:["data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjEyLjEwMAAAAAAAAAAAAAAA//NwwAAAAAAAAAAAAEluZm8AAAAPAAAACAAAA/oAR0dHR0dHR0dHR0dHYmJiYmJiYmJiYmJifHx8fHx8fHx8fHx8fJaWlpaWlpaWlpaWlrGxsbGxsbGxsbGxsbHLy8vLy8vLy8vLy8vl5eXl5eXl5eXl5eXl////////////////AAAAAExhdmM1OC4xOAAAAAAAAAAAAAAAACQEUQAAAAAAAAP6rkHFBwAAAAAAAAAAAAAAAAD/80DEAAAAA0gBQAAACBCAYEAJA8Bgkff2/k4UBcH5EDcuf5KB8AjwZf/wbrhZWFhYe+Lg//uFvYcWAxhzQxWNIR///+fNE9lW////zhob/L7rJs3/////6C1Jm+x/NH7D4/KBHpV5Av/zQsRbFHryZFuHgAGRPm7jHhMLqNOxOZwtUz+hd4BKH81HQfPkqTqZkbmxoPw6XkQuIxMEc2MRCAfj0TR+BMAuQRaHsUh0j4fE48JmBaP4IgIJ4PJOYxEnvINi7LTdSKxavFPcgZMYyv/zQMRlJRMSfMvPWAD9dU4hMMhN0j5f3L7mnoHJtBtm+u97/hx03YlP/DVXfqX8oIruW072X/+n/6lf5yoqIqEBouiAxiM4gh3AHmWQjjyxHeER4WuDpFK754QUFBSDDHGi4hjy3oiU//NCxCsdQyKqLkJF4gcEWhkAEFhMtoWeWM8xJo/av/HzHNSefzby8T/wrl8PNllmoxaDCAgJFZmjqaNoZYJR4vqb/M4d0Dv//0aOVrPDP+X6t7NEZcQITiSwIBQacMlTIkE0I2wfEIpR//NAxBIYO1quD0koA8YreMYeVSWYPPsYxi5REVKHQ6JCQGcqUgMARyI4qVJjPQxjFKxWdi95UR5VLexSmT//9DGR+ra//zf//+jr0/8/9U2HED7yh4pBAUw4KREHVOfgoPJb8QNn7xL/80LEDBczLngBhigAAYCMxuODBjmFuQFAcPENf2A4dKJmdDfiomUPC6Hc5bF/5XGCJfshvVbpZUTSOHxgb/o6pZ3vlomucKILtxZr9jMiudbMqqRmNX/+80Y3+80p5CE5iEIQhCEIIQj/80DECxUDRiABwRAAcwhN9Sl5jGMYy9DGN5jP83oYpSlL8xjZSlNyl/MY35jGfUoCAiSlb/6Gf/ylKX6lKUz/1KUBKUv+hjF9SgICBGMaYwEBCS5UFkxBTUUzLjEwMFVVVVVVVVVVVf/zQsQSAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="],loop:!1}),document.addEventListener("WeixinJSBridgeReady",(function(){Et(s)}),!1),new Promise((n=>{let a=0,r=0,o=0,l=0,h=c=>{0===o&&(o=c);const d=c-o;a%24==0&&(t.isCursorVisible=0===t.isCursorVisible?1:0),a++,d<50||"\n"==e[r-1]&&"\n"!==e[r-2]&&d<1e3?l=requestAnimationFrame(h):(Math.round(6*Math.random())%4==0&&(o=c,t.currentCode=i+e.substring(0,r),r++,Et(s)),r<=e.length?l=requestAnimationFrame(h):(n({}),t.canExecute=!0,t.isCursorVisible=0,cancelAnimationFrame(l)))};l=requestAnimationFrame(h)}))}))}(r),w((()=>r.canOpen),(t=>{t&&i.value.play(r.animationData)}));const m=t=>{u=new b.Howl({src:t,loop:!0}),Et(u,!0)},p=t=>{Et(u,t)},A=t=>{r.animationData=t};return y((()=>{T(B())})),(t,s)=>(o(),l("div",{class:"wedding-editor",ref:e},[f("pre",null,[f("code",{innerHTML:d(h)},null,8,Ct),zt]),x(ut,{canExecute:d(r).canExecute,onOnUpdating:c,onOnFinish:s[0]||(s[0]=t=>d(r).canOpen=!0),onMusic_ready:m,onLottie_ready:A},null,8,["canExecute"]),x(bt,{canOpen:d(r).canOpen,onMusic_status:p,ref:i},null,8,["canOpen"])],512))}});const Ht={class:"wedding"};z(i({setup:t=>(t,e)=>(o(),l("div",Ht,[x(Pt)]))})).mount("#app");