(self.webpackChunk_uiengine_ui=self.webpackChunk_uiengine_ui||[]).push([[372],{5616:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var n=r(1212),s=r.n(n),i=r(1069),u=r(9105),c=r(2241);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var a={threshold:.2,keys:[{name:"title",weight:.7},{name:"keywords",weight:.5}]},f={components:{ContentHeader:c.Z},props:{query:{type:String,required:!0}},data:function(){return{results:[]}},computed:l(l(l({},(0,u.Se)("state",["navigation"])),(0,u.Se)("preferences",["locale"])),{},{repo:function(){var t=Object.values(this.navigation).filter((function(t){return!t.isStructural}));return new i.Z(t,a)},title:function(){return this.$options.filters.localize("search.title",{query:this.query})}}),watch:{$route:"search"},created:function(){this.search()},methods:{search:function(){this.results=this.repo.search(this.query).map((function(t){return t.item})),1===this.results.length&&this.$router.replace(this.results[0])}},metaInfo:function(){return{title:this.title}}},h=(0,r(5129).Z)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page"},[r("ContentHeader",{staticClass:"uie-sob-l",attrs:{title:t.title}}),t._v(" "),r("article",{staticClass:"content"},[0===t.results.length?r("p",[t._v("\n      "+t._s(t._f("localize")("search.no_results"))+"\n    ")]):r("ul",t._l(t.results,(function(e){return r("li",{key:e.id},[r("RouterLink",{attrs:{to:e}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v("\n        ("+t._s(t._f("upcaseFirstChar")(e.type))+")\n      ")],1)})),0)])],1)}),[],!1,null,null,null).exports}}]);