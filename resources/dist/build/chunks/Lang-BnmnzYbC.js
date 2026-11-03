var k=e=>{throw TypeError(e)};var y=(e,t,i)=>t.has(e)||k("Cannot "+i);var u=(e,t,i)=>(y(e,t,"read from private field"),i?i.call(e):t.get(e)),b=(e,t,i)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),g=(e,t,i,s)=>(y(e,t,"write to private field"),s?s.call(e,i):t.set(e,i),i),_=(e,t,i)=>(y(e,t,"access private method"),i);import{M as V}from"./base-class-C01B1n9o.js";import{a6 as c,o as n,V as m,ab as d,P as F,a3 as L,a8 as x,n as A,a5 as D,aj as H,F as $,a7 as C,M as S,af as N}from"./vue-runtime-BkZk7O1f.js";const f=(e,t)=>{const i=e.__vccOpts||e;for(const[s,a]of t)i[s]=a;return i},P=`
     .mw-ai-chat-box-footer{

        width: 100%;
        bottom: 15px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom:1px solid  #45454524;
        border-top: 1px solid #45454524;

     }
        html.dark .mw-ai-chat-box-footer{



            border-bottom: 1px solid #eeeeee24;
            border-top: 1px solid #eeeeee21;
        }
     .mw-ai-chat-box-footer svg{
        width: 22px;
        margin: 0 5px;
     }
    .mw-ai-chat-box-actions button.speaking{

        background: linear-gradient(-45deg,rgba(0, 68, 194, 0.32),rgba(0, 60, 255, 0.3),rgba(35, 165, 213, 0.27),rgba(35, 213, 171, 0.29));
        animation: speaking 2s ease infinite;
    }
    @keyframes speaking {

        0% {
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
        }
        100% {
            box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
        }
    }
    .mw-ai-chat-box-actions button:not(.speaking):hover{
    background: #eeeeee3d;
    }
    /* task-2026-05-27-df6d28 / AI-1175: 30px → 44px for WCAG 2.5.5 */
    .mw-ai-chat-box-actions button{
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 44px !important;
        color: #111;

    }

     .mw-ai-chat-box-area{
        position:relative;
        display: block;
        background: #ffffff;
        border: 1px solid #d1d5db;
        border-radius: 14px;
        padding-bottom: 1px;
        transition: border-color .15s ease, box-shadow .15s ease;
     }

     /* Base text-field sizing. Keep it in the widget's own CSS so the field
        renders full-width wherever the widget is mounted (e.g. the setup
        wizard), instead of depending on a consumer component shipping these
        rules in its own global <style>. Without this the textarea falls back
        to the browser default (small inline-block cols/rows box). */
     .mw-ai-chat-box .mw-ai-chat-box-area-field{
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-height: 100px;
        padding: 24px 20px 16px 20px;
        font-size: 14px;
        line-height: 1.5;
        color: #2d3748;
        border: none;
        background: transparent;
        box-shadow: none;
        outline: none;
        resize: none;
     }
     .mw-ai-chat-box .mw-ai-chat-box-area-field::placeholder{
        color: #a0aec0;
        opacity: 1;
     }

    html.dark .mw-ai-chat-box-area textareat::placeholder {
        color: white;
        opacity: 0.5;
    }
    html.dark .mw-ai-chat-box-area{
        background: rgba(var(--gray-800), var(--tw-bg-opacity, 1));
        border-color: rgba(var(--gray-600), var(--tw-bg-opacity, 1));
     }

     /* Modern focus state — ink ring instead of the old (undefined) tw-ring vars. */
     .mw-ai-chat-box-area:has(.mw-ai-chat-box-area-field:focus){
        border-color: #182433;
        box-shadow: 0 0 0 2px rgba(24, 36, 51, .15);
     }
     html.dark .mw-ai-chat-box-area:has(.mw-ai-chat-box-area-field:focus){
        border-color: #6b7fa0;
        box-shadow: 0 0 0 2px rgba(107, 127, 160, .25);
     }


      html.dark .mw-ai-chat-box .mw-ai-chat-box-area-field{

        color: white

      }

      .mw-ai-chat-box-options select selectedcontent{
        white-space: nowrap;
      }
      .mw-ai-chat-box-options button.active{
        background: white;
        color: #111;
      }
      .mw-ai-chat-box-options button{

    width: 35px;
    height: 35px;
    text-align: center;
   align-items:center;
    display: inline-flex;
    vertical-align: middle;
    margin-inline-end: 10px;
        svg{
            width: 25px;
        }
      }

      .mw-ai-chat-box-options select{
        width: 140px;
        height:31px;
        font-size:12px;


      }

      .mw-ai-chat-box-action-send[disabled]{
        opacity: .5;
        pointer-events: none
      }
      /* task-2026-05-28-414789 / AI-1221: 40px → 44px for WCAG 2.5.5 */
      .mw-ai-chat-box-action-send{
            display: flex;
            width: 92%;
            min-height: 44px;
            overflow: hidden;
            background: #003da4;
            margin: 14px 4%;

            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: bold;
            justify-content: center;
            align-items: center;
            gap: 8px;
            color: white;
            svg{
                width: 24px;
            }
      }

`,q=(e,t,i,s,a,o)=>{let l="";return Array.isArray(i)&&(l=`
            <div class="mw-ai-chat-box-options">

            </div>
        `),`
    <div class="mw-ai-chat-box" style="display:${a?"":"none"}">
        <div class="mw-ai-chat-box-area">
            <${e?"textarea":"input"} class="mw-ai-chat-box-area-field" aria-label="${o||t||mw.lang("Enter topic for AI assistance")}" placeholder="${t||mw.lang("Enter topic")}">${e?"</textarea>":""}
            <div class="mw-ai-chat-box-footer">
                <div class="mw-ai-chat-box-options">
                ${l}
                </div>
                <div class="mw-ai-chat-box-actions d-flex align-items-center gap-1">
                    <button type="button" class="mw-ai-chat-box-action-voice" aria-label="${mw.lang("Voice input")}" title="${mw.lang("Voice input")}" style="display: ${s?"":"none"}">${mw.top().app.iconService.icon("mic")}</button>


                    </div>
            </div>

            <button type="button" class="mw-ai-chat-box-action-send "> ${mw.lang("Submit")} ${mw.top().app.iconService.icon("send")} </button>
        </div>
     </div>

     <style>${P}</style>
`};var p,h;class I extends V{constructor(){super();b(this,p,!1);b(this,h,window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition);this.init()}isSupported(){return!!u(this,h)}init(){u(this,h)&&(this.recognition=new(u(this,h)),this.events())}events(){this.recognition.onstart=()=>{this.dispatch("start")},this.recognition.onend=()=>{this.dispatch("end"),g(this,p,!1)},this.recognition.onerror=i=>{this.dispatch("error",i)},this.recognition.onresult=i=>{const s=i.results[0][0].transcript;this.dispatch("result",s)}}start(){u(this,h)&&(this.recognition.start(),g(this,p,!0))}stop(){u(this,h)&&(this.recognition.stop(),g(this,p,!1))}toggle(){this[u(this,p)?"stop":"start"]()}}p=new WeakMap,h=new WeakMap;var w,B;class Se extends V{constructor(i=[]){super();b(this,w);const s={multiLine:!0,submitOnEnter:!1};this.settings=Object.assign({},s,i),this.init()}rend(){const i=document.createElement("div"),s=!!mw.top().win.MwAi;i.innerHTML=q(this.settings.multiLine,this.settings.placeholder,this.settings.chatOptions,this.speechRecognition.isSupported(),s,this.settings.ariaLabel);const a=i.querySelector("button.mw-ai-chat-box-action-send");if(a.disabled=!0,i.querySelector(".mw-ai-chat-box-area-field").addEventListener("input",o=>{a.disabled=!o.target.value.trim()}),i.className="mw-ai-chat-form",this.form=i,this.settings.chatOptions&&this.settings.chatOptions.length){const o=this.form.querySelector(".mw-ai-chat-box-options");mw.select({element:o,data:this.settings.chatOptions}).on("change",r=>{const O=r[0]&&r[0].id;this.dispatch("chatOptionChange",O)})}return this.area=i.querySelector(".mw-ai-chat-box-area-field"),this.micButton=i.querySelector(".mw-ai-chat-box-action-voice"),this.sendButton=i.querySelector(".mw-ai-chat-box-action-send"),i}areaSize(){this.area.style.height="auto",this.area.style.height=this.area.scrollHeight+"px"}handleArea(){this.area.addEventListener("keypress",i=>{(i.key==="Enter"||i.keyCode===13)&&this.settings.submitOnEnter&&!i.shiftKey&&(this.dispatch("submit",this.area.value),i.preventDefault())}),this.area.addEventListener("input",()=>{this.areaSize(),this.dispatch("areaValue",this.area.value)})}handleMic(){this.micButton.addEventListener("click",()=>{this.speechRecognition.toggle()})}handleSubmit(){this.sendButton.addEventListener("click",()=>{this.dispatch("submit",this.area.value)})}disable(){this.disabled=!0,this.enabled=!1,this.area.disabled=!0,this.micButton.disabled=!0,this.sendButton.disabled=!0}enable(){this.disabled=!1,this.enabled=!0,this.area.disabled=!1,this.micButton.disabled=!1,this.sendButton.disabled=!1}init(){_(this,w,B).call(this),this.rend(),this.handleArea(),this.handleMic(),this.handleSubmit(),this.enable()}}w=new WeakSet,B=function(){this.speechRecognition=new I,this.speechRecognition.on("start",()=>{this.micButton.classList.add("speaking")}),this.speechRecognition.on("end",()=>{this.micButton.classList.remove("speaking")}),this.speechRecognition.on("result",i=>{this.area.value=i,this.areaSize(),this.dispatch("areaValue",this.area.value)})};const z={emits:["change"],props:{label:{type:String,default:"Color"},color:{type:String,default:"#ffffff"}},data(){var e=this.color||"#ffffff",t=this.getHexColorDisplayValueText(e);return{selectedColor:e,selectedColorHex:t}},watch:{color(e){this.selectedColor=e,this.setHexColorDisplay(e)}},mounted(){this.$nextTick(()=>{this.setHexColorDisplay(this.color)})},methods:{getHexColorDisplayValueText(e){if(!e)return"transparent";if(e=="revert-layer"||e=="none"||e=="currentColor")return"";if(e=="rgb(0 0 0 / 0%)")return"transparent";if(e.includes("rgb")||e.includes("rgba")){var t=mw.color.rgbOrRgbaToHex(e);return t=="#00000000"?"":t}return e},setHexColorDisplay(e){this.$refs.colorPickerButton&&(!e||e==="transparent"||e===""?this.$refs.colorPickerButton.style.backgroundColor="transparent":this.$refs.colorPickerButton.style.backgroundColor=e),this.selectedColorHex=this.getHexColorDisplayValueText(e)},handleColorChange(e){const t=e.target.value;this.setNewColor(t)},setNewColor(e){this.selectedColor=e,this.setHexColorDisplay(e),this.$emit("change",e)},resetColor(){this.selectedColor="",this.setHexColorDisplay(""),this.$emit("change",this.selectedColor)},togglePicker(){let e=this.$refs.colorPickerButton;mw.app.colorPicker.openColorPicker(this.selectedColor,t=>{this.setNewColor(t)},e)}}},R={class:"form-control-live-edit-label-wrapper my-4"},j={class:"d-flex justify-content-between align-items-center"},U={class:"live-edit-label"},W=["aria-label"];function G(e,t,i,s,a,o){return d(),c("div",R,[n("div",j,[n("div",null,[n("label",U,m(i.label),1)]),n("div",null,[n("button",{onClick:t[0]||(t[0]=(...l)=>o.togglePicker&&o.togglePicker(...l)),ref:"colorPickerButton","aria-label":i.label,class:"picker-button",type:"button"},"Pick color",8,W)])])])}const Ve=f(z,[["render",G],["__scopeId","data-v-092699a2"]]),K={props:{showLabel:{type:Boolean,default:!0},label:String,modelValue:Number,min:Number,max:Number,step:Number,unit:String},data(){return{selectedValue:Number.isFinite(this.modelValue)?this.modelValue:null}},methods:{resetValue(){this.selectedValue=null},validateValue(){if(typeof this.selectedValue=="number"&&!Number.isFinite(this.selectedValue)){this.selectedValue=null;return}this.selectedValue!==null&&this.selectedValue!==void 0&&(this.min!==void 0&&this.selectedValue<this.min&&(this.selectedValue=this.min),this.max!==void 0&&this.selectedValue>this.max&&(this.selectedValue=this.max))}},watch:{selectedValue(e){e!==this.modelValue&&this.$emit("update:modelValue",e)},modelValue(e){this.selectedValue=Number.isFinite(e)?e:null}}},Z={class:"mw-live-edit-slider-small form-control-live-edit-label-wrapper"},Q={key:0,class:"d-flex justify-content-between align-items-center gap-2 slider-small-header"},J={class:"live-edit-label mb-0"},X={class:"d-flex align-items-center gap-1 slider-small-controls"},Y=["min","max","step","aria-label"],ee={key:0,class:"slider-small-unit"},te={"data-size":"medium",class:"slider-small-track-row"};function ie(e,t,i,s,a,o){const l=D("v-slider");return d(),c("div",Z,[i.showLabel?(d(),c("div",Q,[n("label",J,m(i.label),1),n("div",X,[F(n("input",{type:"number",class:"form-control-input-range-slider","onUpdate:modelValue":t[0]||(t[0]=r=>a.selectedValue=r),min:i.min,max:i.max,step:i.step,onBlur:t[1]||(t[1]=(...r)=>o.validateValue&&o.validateValue(...r)),"aria-label":i.label},null,40,Y),[[L,a.selectedValue,void 0,{number:!0}]]),i.unit?(d(),c("span",ee,m(i.unit),1)):x("",!0),n("button",{onClick:t[2]||(t[2]=(...r)=>o.resetValue&&o.resetValue(...r)),type:"button",class:"reset-field-btn",title:"Restore default value","aria-label":"Restore default value"},[...t[4]||(t[4]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:"14",viewBox:"0 -960 960 960",width:"14","aria-hidden":"true"},[n("path",{d:"M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"})],-1)])])])])):x("",!0),n("div",te,[A(l,{min:i.min,max:i.max,step:i.step,modelValue:a.selectedValue,"onUpdate:modelValue":t[3]||(t[3]=r=>a.selectedValue=r)},null,8,["min","max","step","modelValue"])])])}const Fe=f(K,[["render",ie],["__scopeId","data-v-fd1ffee3"]]),se={class:"form-control-live-edit-label-wrapper my-4"},ae={class:"d-flex justify-content-between align-items-center gap-2"},oe=["innerHTML"],ne=["selected","value"],le={props:{modelValue:String,label:String,options:Array},data(){return{selectedOption:this.modelValue}},watch:{modelValue(e){this.selectedOption!==e&&(this.selectedOption=e)}},methods:{handleInput(){this.selectedOption!==this.modelValue&&this.$emit("update:modelValue",this.selectedOption)}}},re=Object.assign(le,{__name:"DropdownSmall",emits:["update:modelValue"],setup(e){return(t,i)=>(d(),c("div",se,[n("div",ae,[e.label?(d(),c("label",{key:0,class:"live-edit-label mb-0",innerHTML:e.label},null,8,oe)):x("",!0),F(n("select",{"onUpdate:modelValue":i[0]||(i[0]=s=>t.selectedOption=s),class:"form-control-live-edit-input form-select dropdown-small-select",onInput:i[1]||(i[1]=s=>t.$emit("update:modelValue",s.target.value))},[(d(!0),c($,null,C(e.options,s=>(d(),c("option",{selected:t.selectedOption===s.key,value:s.key},m(s.value),9,ne))),256))],544),[[H,t.selectedOption]])])]))}}),$e=f(re,[["__scopeId","data-v-437b7bc8"]]),ce={inheritAttrs:!1,props:{value:String},watch:{value(e){typeof e=="string"&&(this.fontFamily=e,this.updateSelectElement())}},methods:{loadMoreFonts(){mw.top().app.fontManager.manageFonts()},isInSupportedFonts(e){return this.supportedFonts.includes(e)},updateSelectElement(){this.$nextTick(()=>{this.$refs.fontSelect&&(this.fontFamily&&typeof this.fontFamily=="string"?this.$refs.fontSelect.value=this.fontFamily:this.$refs.fontSelect.value="")})},handleFontChange(e){e.preventDefault();const t=e.target.value;typeof t=="string"&&(this.fontFamily=t,this.$emit("change",t),this.$emit("input",t),this.$forceUpdate())}},created(){typeof this.value=="string"?this.fontFamily=this.value:this.fontFamily=""},mounted(){setTimeout(()=>{this.supportedFonts=mw.top().app.fontManager.getFonts(),this.updateSelectElement(),mw.top().app.fontManager.subscribe(e=>{e&&(this.supportedFonts=e,this.updateSelectElement())}),mw.top().app.fontManager.subscribeToSelectedFont(e=>{if(!e||typeof e.fontFamily!="string"||e.fontFamily==="")return;const t=e.fontFamily;this.supportedFonts.includes(t)||(this.supportedFonts=mw.top().app.fontManager.getFonts()),this.fontFamily=t,this.updateSelectElement(),this.$emit("change",t),this.$emit("input",t)})},1e3)},updated(){this.updateSelectElement()},data(){return{supportedFonts:[],fontFamily:""}}},de={class:"form-control-live-edit-label-wrapper my-4",modelvalue:null},he={class:"d-flex justify-content-between align-items-center gap-2"},ue=["value"],pe=["value"],me=["value","selected"];function fe(e,t,i,s,a,o){return d(),c("div",de,[n("div",he,[t[4]||(t[4]=n("label",{class:"live-edit-label mb-0"},"Font",-1)),n("select",{class:"form-control-live-edit-input form-select dropdown-small-select font-picker-select",onChange:t[0]||(t[0]=(...l)=>o.handleFontChange&&o.handleFontChange(...l)),value:a.fontFamily,ref:"fontSelect"},[t[2]||(t[2]=n("option",{value:""},"Default",-1)),t[3]||(t[3]=n("option",{value:"inherit"},"Inherit",-1)),a.fontFamily&&!o.isInSupportedFonts(a.fontFamily)&&a.fontFamily!==""&&a.fontFamily!=="inherit"?(d(),c("option",{key:0,value:a.fontFamily,style:S({fontFamily:`${a.fontFamily}`})},m(a.fontFamily),13,pe)):x("",!0),(d(!0),c($,null,C(a.supportedFonts,(l,r)=>(d(),c("option",{key:r,value:l,selected:a.fontFamily===l,style:S({fontFamily:`${l}`})},m(l),13,me))),128))],40,ue)]),n("small",{class:"cursor-pointer d-flex ms-auto justify-content-end pt-2 pb-1 font-picker-add-more",onClick:t[1]||(t[1]=l=>o.loadMoreFonts())},"Add more fonts")])}const Ce=f(ce,[["render",fe],["__scopeId","data-v-fe9db46a"]]),M=function(){return document.ontouchstart!==null?"click":"touchstart"},v="__vue_click_away__",T=function(e,t,i){E(e);let s=i.context,a=t.value,o=!1;setTimeout(function(){o=!0},0),e[v]=function(l){if((!e||!e.contains(l.target))&&a&&o&&typeof a=="function")return a.call(s,l)},document.addEventListener(M(),e[v],!1)},E=function(e){document.removeEventListener(M(),e[v],!1),delete e[v]},be=function(e,t,i){t.value!==t.oldValue&&T(e,t,i)},Be={install:function(e){e.directive("click-away",ge)}},ge={mounted:T,updated:be,unmounted:E};function Me(e){return{all:e=e||new Map,on:function(t,i){var s=e.get(t);s?s.push(i):e.set(t,[i])},off:function(t,i){var s=e.get(t);s&&(i?s.splice(s.indexOf(i)>>>0,1):e.set(t,[]))},emit:function(t,i){var s=e.get(t);s&&s.slice().map(function(a){a(i)}),(s=e.get("*"))&&s.slice().map(function(a){a(t,i)})}}}const Te={install:(e,t)=>{e.config.globalProperties.$lang=i=>mw.lang(i)}},xe={mounted(){const e=this.$refs.lang;e&&(e.textContent=mw.lang(this.$slots.default()[0].children))}},ve={ref:"lang"};function we(e,t,i,s,a,o){return d(),c("span",ve,[N(e.$slots,"default")],512)}const Ee=f(xe,[["render",we]]);export{Se as A,Ve as C,$e as D,Ce as F,Ee as L,Fe as S,f as _,Te as i,Me as m,Be as p};
