!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);class s{constructor(t){this.items=[{name:"Спальни",value:t[0],endings:["спален","спальня","спальни","спален"]},{name:"Кровати",value:t[1],endings:["кроватей","кровать","кровати","кроватей"]},{name:"Ванные комнаты",value:t[2]}]}getItems(){return this.items}updataItemValueIncriment(t){0!==this.items[t].value&&(this.items[t].value=this.items[t].value-1)}updataItemValueDicriment(t){this.items[t].value=this.items[t].value+1}}class n{constructor(t,e){this.$this=t,this.items=e,this.isShow=!1}init(){$(this.$this).addClass("dropdown-number").append($("<div />",{class:"dropdown-number__expression",text:"",on:{click:()=>{this.isShow?(this.$this.removeClass("dropdown-number_active"),this.isShow=!1):(this.$this.addClass("dropdown-number_active"),this.isShow=!0)}}})).append($("<div />",{class:"dropdown-number__item-list"}));for(let t=0;t<this.items.length;t++)$(this.$this).find($(".dropdown-number__item-list")).append($("<div />",{class:"dropdown-number__item"}).append($("<span />",{class:"dropdown-number__item-name",text:this.items[t].name})).append($("<input />",{type:"button",value:"-",class:"dropdown-number__item-dicriment",on:{click:()=>this.$this.trigger("updataItemValueIncriment",{idx:t})}})).append($("<span />",{text:"",class:"dropdown-number__item-value"})).append($("<input />",{type:"button",value:"+",class:"dropdown-number__item-incriment",on:{click:()=>this.$this.trigger("updataItemValueDicriment",{idx:t})}}))),$(document).on("click",t=>{$(t.target).parents().is(this.$this)||(this.$this.removeClass("dropdown-number_active"),this.isShow=!1)}),this.updataExpression(),this.updataRenderItems()}updataItems(t){this.items=t,this.updataRenderItems()}updataRenderItems(){const t=$(this.$this).find(".dropdown-number__item-value");for(let e=0;e<t.length;e++)$(t[e]).text(this.items[e].value);this.updataExpression()}updataExpression(){let t="",e="";0===this.items[0].value?t=`${this.items[0].value} ${this.items[0].endings[0]}`:1===this.items[0].value?t=`${this.items[0].value} ${this.items[0].endings[1]}`:this.items[0].value>=2&&this.items[0].value<=4?t=`${this.items[0].value} ${this.items[0].endings[2]}`:this.items[0].value>4&&(t=`${this.items[0].value} ${this.items[0].endings[3]}`),0===this.items[1].value?e=`${this.items[1].value} ${this.items[1].endings[0]}`:1===this.items[1].value?e=`${this.items[1].value} ${this.items[1].endings[1]}`:this.items[1].value>=2&&this.items[1].value<=4?e=`${this.items[1].value} ${this.items[1].endings[2]}`:this.items[1].value>4&&(e=`${this.items[1].value} ${this.items[1].endings[3]}`);let i=`${t}, ${e}...`;this.$this.find($(".dropdown-number__expression")).text(i).append($("<i />",{class:"icon-expand_more"}))}}class a{constructor(t,e){this.$this=t,this.model=new s(e),this.view=new n(t,this.model.getItems())}init(){this.view.init(),this.$this.on("updataItemValueIncriment",(t,e)=>{this.model.updataItemValueIncriment(e.idx),this.view.updataItems(this.model.getItems())}),this.$this.on("updataItemValueDicriment",(t,e)=>{this.model.updataItemValueDicriment(e.idx),this.view.updataItems(this.model.getItems())})}}i(0);jQuery.fn.dropdownNumber=function(t){return this.add(new a(this,t).init())},$("#dropdown-number").dropdownNumber([3,2,1])}]);