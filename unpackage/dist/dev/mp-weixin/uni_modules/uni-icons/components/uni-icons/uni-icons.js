"use strict";const s=require("./icons.js"),t=require("../../../../common/vendor.js"),u=e=>typeof e=="number"||/^[0-9]*$/g.test(e)?e+"px":e,r={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customPrefix:{type:String,default:""}},data(){return{icons:s.icons.glyphs}},computed:{unicode(){let e=this.icons.find(c=>c.font_class===this.type);return e?unescape(`%u${e.unicode}`):""},iconSize(){return u(this.size)}},methods:{_onClick(){this.$emit("click")}}};function _(e,c,n,d,f,i){return{a:n.color,b:i.iconSize,c:t.n("uniui-"+n.type),d:t.n(n.customPrefix),e:t.n(n.customPrefix?n.type:""),f:t.o((...o)=>i._onClick&&i._onClick(...o))}}const m=t._export_sfc(r,[["render",_],["__file","D:/WeChatProj/uni_app/NetEaseMusic/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);wx.createComponent(m);