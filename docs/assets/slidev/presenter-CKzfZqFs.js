import{g as W,h as j,k as G,l as H}from"../modules/unplugin-icons-BoFdX82U.js";import{d as E,o as n,c,i as M,B as e,t as $,z as b,E as z,R as q,O as K,K as O,ah as A,a5 as J,b as k,e as t,l as o,k as g,h as N,g as Q,x as U,F as X}from"../modules/vue-CmZZpkmn.js";import{a as Y,u as Z,h as ee,c as te,d as se,j as oe,s as ne,k as re,l as ae,m as ie,n as le,o as ce,_ as ue}from"../index-CV5TA4kf.js";import{r as me,u as de,a as pe,S as _e,_ as fe,G as xe,b as ve,c as ke,o as ge}from"./useWakeLock-BGkZaABZ.js";import{u as ye,S as be}from"./SlideWrapper-CWesSTso.js";import{a as Ce,S as F}from"./SlideContainer-Bw1ynjOY.js";import{_ as he}from"./NoteDisplay.vue_vue_type_style_index_0_lang-D7aAaJJk.js";import{_ as Se}from"./DrawingControls.vue_vue_type_style_index_0_lang-B-YwLpy5.js";import{_ as B}from"./IconButton.vue_vue_type_script_setup_true_lang-XtOiWmu4.js";import{C as we}from"./ClicksSlider-DmXu1Pot.js";import"../modules/shiki-CDYkYBvc.js";import"./context-Cudsr2jc.js";import"../helper-DwSG-dY1.js";import"../hashids-CTCUm3b4.js";import"../server-BdWkXIma.js";import"./DrawingPreview.vue_vue_type_script_setup_true_lang-DAcwpes3.js";const $e=E({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(C){const l=C,{info:i}=Ce(l.no);return(u,p)=>{var _,f;return n(),c(he,{class:M(l.class),note:(_=e(i))==null?void 0:_.note,"note-html":(f=e(i))==null?void 0:f.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),ze={class:"bg-main h-full slidev-presenter"},Ne={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Fe={key:1,class:"h-full flex justify-center items-center"},Be={key:0,class:"grid-section note of-auto"},Ee={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Me={class:"border-t border-main py-1 px-2 text-sm"},Pe={class:"grid-section bottom flex"},Re={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},De={class:"progress-bar"},Te=E({__name:"presenter",setup(C){const l=$();me(),de(l),pe();const{clicksContext:i,currentSlideNo:u,currentSlideRoute:p,hasNext:_,nextRoute:f,slides:P,getPrimaryClicks:R,total:D}=Y(),{isDrawing:T}=ye();Z({title:`Presenter - ${ne}`}),$(!1);const{timer:I,resetTimer:h}=ee(),L=b(()=>P.value.map(v=>te(v))),r=b(()=>i.value.current<i.value.total?[p.value,i.value.current+1]:_.value?[f.value,0]:null),x=b(()=>r.value&&L.value[r.value[0].no-1]);z(r,()=>{x.value&&r.value&&(x.value.current=r.value[1])},{immediate:!0});const S=q();return K(()=>{const v=l.value.querySelector("#slide-content"),s=O(A()),y=J();z(()=>{if(!y.value||T.value||!oe.value)return;const a=v.getBoundingClientRect(),m=(s.x-a.left)/a.width*100,d=(s.y-a.top)/a.height*100;if(!(m<0||m>100||d<0||d>100))return{x:m,y:d}},a=>{se.cursor=a})}),(v,s)=>{var w;const y=W,a=j,m=G,d=H;return n(),k(X,null,[t("div",ze,[t("div",{class:M(["grid-container",`layout${e(re)}`])},[t("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[o(F,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ge)},{default:g(()=>[o(_e,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(n(),c(we,{key:(w=e(p))==null?void 0:w.no,"clicks-context":e(R)(e(p)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),s[3]||(s[3]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1))],512),t("div",Ne,[r.value&&x.value?(n(),c(F,{key:"next"},{default:g(()=>[(n(),c(be,{key:r.value[0].no,"clicks-context":x.value,route:r.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(n(),k("div",Fe,s[4]||(s[4]=[t("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),s[5]||(s[5]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),S.value&&e(ae)?(n(),k("div",Be,[o(e(S))])):(n(),k("div",Ee,[(n(),c($e,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:N({fontSize:`${e(ie)}em`}),"clicks-context":e(i)},null,8,["no","style","clicks-context"])),t("div",Me,[o(B,{title:"Increase font size",onClick:e(le)},{default:g(()=>[o(y)]),_:1},8,["onClick"]),o(B,{title:"Decrease font size",onClick:e(ce)},{default:g(()=>[o(a)]),_:1},8,["onClick"]),Q("v-if",!0)])])),t("div",Pe,[o(fe,{persist:!0}),s[6]||(s[6]=t("div",{"flex-auto":""},null,-1)),t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[2]||(s[2]=(...V)=>e(h)&&e(h)(...V))},[o(m,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),t("div",Re,U(e(I)),1)]),(n(),c(Se,{key:2}))],2),t("div",De,[t("div",{class:"progress h-3px bg-primary transition-all",style:N({width:`${(e(u)-1)/(e(D)-1)*100+1}%`})},null,4)])]),o(xe),o(ve),o(ke)],64)}}}),Ze=ue(Te,[["__scopeId","data-v-d32c80bd"]]);export{Ze as default};
