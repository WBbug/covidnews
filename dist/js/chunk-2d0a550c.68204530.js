(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a550c"],{"09d1":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticClass:"title"},[t._v("风险地区")]),n("div",{staticClass:"content"},[t.high.length>0?[n("div",{staticClass:"title"},[t._v(" 高风险地区"+t._s(t.high.length)+"个")]),n("ul",t._l(t.high,(function(i,e){return n("li",{key:e},[t._v(" "+t._s(i)+" ")])})),0)]:t._e(),t.high.length>0?[n("div",{staticClass:"title"},[t._v("中风险地区"+t._s(t.mid.length)+"个")]),n("ul",t._l(t.mid,(function(i,e){return n("li",{key:e},[t._v(" "+t._s(i)+" ")])})),0)]:t._e()],2)])},l=[],s=n("365c"),a={created:function(){var t=this;s["a"].getConInfo().then((function(i){var n=i.data.newslist[0].riskarea;t.high=n.high,t.mid=n.mid,console.log(n)}))},data:function(){return{high:[],mid:[]}}},c=a,h=n("2877"),u=Object(h["a"])(c,e,l,!1,null,null,null);i["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0a550c.68204530.js.map