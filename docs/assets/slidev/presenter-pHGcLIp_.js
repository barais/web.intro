import{g as j,h as G,k as H,l as q}from"../modules/unplugin-icons-boBkwpe9.js";import{d as E,o,c as l,i as M,B as e,t as z,z as C,E as N,R as K,O,K as A,ah as J,a5 as Q,b as k,e as t,l as s,k as g,h as F,g as U,x as X,F as Y,p as Z,a as ee}from"../modules/vue-CHNgrS5A.js";import{a as te,u as se,h as oe,c as ne,d as ae,j as re,s as ie,k as ce,l as le,m as ue,n as de,o as me,_ as pe}from"../index-CC0CoKEQ.js";import{r as _e,u as fe,a as xe,S as ve,_ as he,G as ke,b as ge,c as be,o as ye}from"./useWakeLock-DhUN0boq.js";import{S as Ce}from"./SlideWrapper-Chyd7tIk.js";import{a as Se,S as B}from"./SlideContainer-BPWc47_g.js";import{_ as we}from"./NoteDisplay.vue_vue_type_style_index_0_lang-D33Eb61w.js";import{_ as $e}from"./DrawingControls.vue_vue_type_style_index_0_lang-xsdoIZxo.js";import{_ as I}from"./IconButton.vue_vue_type_script_setup_true_lang-BOsCaS-B.js";import{C as ze}from"./ClicksSlider-Cvu53K1k.js";import{u as Ne}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-BGQln8nj.js";import"../modules/shiki-B4CAAHVZ.js";import"./context-SSO1HXeM.js";import"../helper-BCI_if2J.js";import"../hashids-CTCUm3b4.js";import"../server-u2hIfvWc.js";const Fe=E({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(i){const c=i,{info:r}=Se(c.no);return(u,_)=>{var f,x;return o(),l(we,{class:M(c.class),note:(f=e(r))==null?void 0:f.note,"note-html":(x=e(r))==null?void 0:x.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),b=i=>(Z("data-v-d32c80bd"),i=i(),ee(),i),Be={class:"bg-main h-full slidev-presenter"},Ie=b(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),Ee={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Me={key:1,class:"h-full flex justify-center items-center"},Pe=b(()=>t("div",{class:"text-gray-500"}," End of the presentation ",-1)),Re=[Pe],De=b(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Te={key:0,class:"grid-section note of-auto"},Le={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ve={class:"border-t border-main py-1 px-2 text-sm"},We={class:"grid-section bottom flex"},je=b(()=>t("div",{"flex-auto":""},null,-1)),Ge={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He={class:"progress-bar"},qe=E({__name:"presenter",setup(i){const c=z();_e(),fe(c),xe();const{clicksContext:r,currentSlideNo:u,currentSlideRoute:_,hasNext:f,nextRoute:x,slides:P,getPrimaryClicks:R,total:D}=te(),{isDrawing:T}=Ne();se({title:`Presenter - ${ie}`}),z(!1);const{timer:L,resetTimer:S}=oe(),V=C(()=>P.value.map(h=>ne(h))),n=C(()=>r.value.current<r.value.total?[_.value,r.value.current+1]:f.value?[x.value,0]:null),v=C(()=>n.value&&V.value[n.value[0].no-1]);N(n,()=>{v.value&&n.value&&(v.value.current=n.value[1])},{immediate:!0});const w=K();return O(()=>{const h=c.value.querySelector("#slide-content"),d=A(J()),y=Q();N(()=>{if(!y.value||T.value||!re.value)return;const a=h.getBoundingClientRect(),m=(d.x-a.left)/a.width*100,p=(d.y-a.top)/a.height*100;if(!(m<0||m>100||p<0||p>100))return{x:m,y:p}},a=>{ae.cursor=a})}),(h,d)=>{var $;const y=j,a=G,m=H,p=q;return o(),k(Y,null,[t("div",Be,[t("div",{class:M(["grid-container",`layout${e(ce)}`])},[t("div",{ref_key:"main",ref:c,class:"relative grid-section main flex flex-col"},[s(B,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ye)},{default:g(()=>[s(ve,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),l(ze,{key:($=e(_))==null?void 0:$.no,"clicks-context":e(R)(e(_)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Ie],512),t("div",Ee,[n.value&&v.value?(o(),l(B,{key:"next"},{default:g(()=>[(o(),l(Ce,{key:n.value[0].no,"clicks-context":v.value,route:n.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),k("div",Me,Re)),De]),w.value&&e(le)?(o(),k("div",Te,[s(e(w))])):(o(),k("div",Le,[(o(),l(Fe,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:F({fontSize:`${e(ue)}em`}),"clicks-context":e(r)},null,8,["no","style","clicks-context"])),t("div",Ve,[s(I,{title:"Increase font size",onClick:e(de)},{default:g(()=>[s(y)]),_:1},8,["onClick"]),s(I,{title:"Decrease font size",onClick:e(me)},{default:g(()=>[s(a)]),_:1},8,["onClick"]),U("v-if",!0)])])),t("div",We,[s(he,{persist:!0}),je,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:d[2]||(d[2]=(...W)=>e(S)&&e(S)(...W))},[s(m,{class:"absolute"}),s(p,{class:"absolute opacity-0"})]),t("div",Ge,X(e(L)),1)]),(o(),l($e,{key:2}))],2),t("div",He,[t("div",{class:"progress h-3px bg-primary transition-all",style:F({width:`${(e(u)-1)/(e(D)-1)*100+1}%`})},null,4)])]),s(ke),s(ge),s(be)],64)}}}),it=pe(qe,[["__scopeId","data-v-d32c80bd"]]);export{it as default};
