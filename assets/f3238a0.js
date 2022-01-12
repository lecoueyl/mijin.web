(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3,5,6],{193:function(t,e,n){"use strict";n.r(e);n(23);var r=n(1).a.extend({props:{variant:{type:String,default:"primary",validator:function(t){return["primary","secondary"].includes(t)}}}}),o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("code",{staticClass:"font-mono font-normal text-sm",class:[{"text-primary-500 dark:text-primary-400":"primary"===t.variant}]},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},194:function(t,e,n){"use strict";n.r(e);n(10),n(25),n(26);var r=n(7);n(24),n(15),n(21),n(18),n(47),n(23);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c=n(1).a.extend({props:{components:{default:null,type:[Array,String]},title:{required:!0,type:String}},data:function(){return{anchors:[],anchorObserver:null,currentAnchor:null}},head:function(){return{title:this.title}},computed:{componentsProperties:function(){var t=this;if(!this.components)return null;var e=Array.isArray(this.components)?this.components:[this.components],n={};return e.forEach((function(component){var e,o,c,m="sections.atoms.".concat(component.toLowerCase()),d=null===(e=t.$root)||void 0===e||null===(o=e.$options)||void 0===o||null===(c=o.components["Mj".concat(component)])||void 0===c?void 0:c.options,v=d.props;if(v){var _=Object.keys(v).map((function(t){return{default:v[t].default,name:t,required:v[t].required,type:Array.isArray(v[t].type)?v[t].type.map((function(t){return t.name})):[v[t].type.name],validator:v[t].validator&&null!=d&&d.validator&&null!=d&&d.validator[t]?null==d?void 0:d.validator[t]:null}}));n[component]=l({props:_},n[component])}["events","methods","slots"].forEach((function(e){t.$te("".concat(m,".").concat(e))&&(n[component]=l(Object(r.a)({},e,t.$t("".concat(m,".").concat(e))),n[component]))}))})),n},nav:function(){var t=this,nav={},path=this.$nuxt.$route.path.split("/").filter((function(t){return!["","docs"].includes(t)})),e="".concat(path[0],".").concat(path[1]),n=Object.keys(this.$config.nav).map((function(section){return Object.keys(t.$config.nav[section]).map((function(t){return"".concat(section,".").concat(t)}))})).flat();function r(t){var e=t.split(".");return{section:e[0],page:e[1]}}return 0!==n.indexOf(e)&&(nav.previous=r(n[n.indexOf(e)-1])),n.indexOf(e)!==n.length-1&&(nav.next=r(n[n.indexOf(e)+1])),nav}},mounted:function(){this.setAnchorObserver(),this.setAnchors()},beforeDestroy:function(){this.anchorObserver.disconnect()},methods:{setAnchors:function(){var t=this;document.querySelectorAll("h2").forEach((function(element){var e;t.anchors.push({id:element.id,name:(null==element||null===(e=element.textContent)||void 0===e?void 0:e.trim())||""}),t.anchorObserver.observe(element)}))},setAnchorObserver:function(){var t=this;this.anchorObserver=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(t.currentAnchor=e.target.id)}))}),{root:null,threshold:1})},showEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e?"event: ".concat(t,", value: ").concat(e):"event: ".concat(t);this.$refs.toast.log(n)}}}),m=c,d=n(20),v=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:flex"},[n("div",{staticClass:"md:flex-1 px-4 md:px-10"},[n("MjHeadline",{staticClass:"pb-8",attrs:{level:1,size:2}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default"),t._v(" "),t.componentsProperties?[n("MjHeadline",{staticClass:"pb-8",attrs:{id:"api",level:2,size:2}},[t._v("\n        "+t._s(t.$t("common.properties"))+"\n      ")]),t._v(" "),t._l(t.componentsProperties,(function(component,e){return n("section",{key:e},[Object.keys(t.componentsProperties).length>1?n("MjHeadline",{staticClass:"pb-4",attrs:{id:e,level:3}},[t._v("\n          "+t._s(e)+"\n        ")]):t._e(),t._v(" "),t._l(component,(function(e,r){return n("div",{key:r},[n("MjHeadline",{staticClass:"pb-4 text-gray-800 dark:text-gray-300",attrs:{level:4}},[t._v("\n            "+t._s(t.$t("common."+r))+"\n          ")]),t._v(" "),n("MjTable",{staticClass:"mb-8",attrs:{fixed:""}},[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900 w-3/12"},[t._v("\n                "+t._s(t.$t("common.name"))+"\n              ")]),t._v(" "),"props"===r?[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.type"))+"\n                ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.required"))+"\n                ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.value"))+"\n                ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.default"))+"\n                ")])]:[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.description"))+"\n                ")])]],2),t._v(" "),n("MjTableBody",t._l(e,(function(e,o,l){return n("MjTableRow",{key:l},["props"===r?[n("MjTableCell",[n("CodeInline",[t._v(t._s(e.name))])],1),t._v(" "),n("MjTableCell",t._l(e.type,(function(e){return n("CodeInline",{key:e,staticClass:"space-y-1",attrs:{variant:"secondary"}},[t._v("\n                      "+t._s(e)+"\n                    ")])})),1),t._v(" "),n("MjTableCell",[n("CodeInline",{attrs:{variant:"secondary"}},[t._v("\n                      "+t._s(e.required||!1)+"\n                    ")])],1),t._v(" "),n("MjTableCell",[e.validator?t._l(e.validator,(function(e){return n("CodeInline",{key:e,staticClass:"space-y-1",attrs:{variant:"secondary"}},[null===e?[t._v("\n                          null\n                        ")]:[t._v("\n                          "+t._s(e)+"\n                        ")]],2)})):n("span",{staticClass:"text-gray-300 dark:text-gray-700"},[t._v("\n                      -\n                    ")])],2),t._v(" "),n("MjTableCell",[e.default?n("CodeInline",{attrs:{variant:"secondary"}},[t._v("\n                      "+t._s(e.default)+"\n                    ")]):n("span",{staticClass:"text-gray-300 dark:text-gray-700"},[t._v("\n                      -\n                    ")])],1)]:[n("MjTableCell",[n("CodeInline",["events"===r?n("span",{staticClass:"text-primary-300 dark:text-primary-600"},[t._v("@")]):t._e(),t._v(t._s(o)),"methods"===r?n("span",{staticClass:"text-primary-300 dark:text-primary-600"},[t._v("()")]):t._e()])],1),t._v(" "),n("MjTableCell",[t._v("\n                    "+t._s(e.description)+"\n                  ")])]],2)})),1)],1)],1)}))],2)}))]:t._e(),t._v(" "),n("div",{staticClass:"grid grid-cols-2 gap-4 border-t border-gray-300 dark:border-gray-600 mt-10 pt-10"},[n("div",[t.nav.previous?n("MjLink",{staticClass:"inline-flex items-center",attrs:{tag:"nuxt-link",to:t.localePath("docs-"+t.nav.previous.section+"-"+t.nav.previous.page),color:"gray"}},[n("MjIcon",{staticClass:"mr-2",attrs:{name:"arrow-left"}}),t._v("\n          "+t._s(t.$t("sections."+t.nav.previous.section+"."+t.nav.previous.page+".title"))+"\n        ")],1):t._e()],1),t._v(" "),n("div",{staticClass:"text-right"},[t.nav.next?n("MjLink",{staticClass:"inline-flex items-center",attrs:{tag:"nuxt-link",to:t.localePath("docs-"+t.nav.next.section+"-"+t.nav.next.page),color:"gray"}},[t._v("\n          "+t._s(t.$t("sections."+t.nav.next.section+"."+t.nav.next.page+".title"))+"\n          "),n("MjIcon",{staticClass:"ml-2",attrs:{name:"arrow-right"}})],1):t._e()],1)])],2),t._v(" "),n("nav",{staticClass:"w-64 xl:w-72 sticky top-24 self-start text-sm hidden xl:block pt-4"},[t.anchors.length>1?n("ul",t._l(t.anchors,(function(e,r){return n("li",{key:e.id,class:{"pt-2":0!=r}},[n("a",{staticClass:"transition-colors duration-200 ease-in-out",class:{"text-primary-500 dark:text-primary-500":e.id===t.currentAnchor,"text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50":e.id!==t.currentAnchor},attrs:{href:"#"+e.id}},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0):t._e()]),t._v(" "),n("MjToast",{ref:"toast"})],1)}),[],!1,null,null,null);e.default=v.exports;installComponents(v,{CodeInline:n(193).default})},195:function(t,e,n){"use strict";n.r(e);n(48);var r=n(1).a.extend({props:{snippet:{default:function(){return[]},type:Array},title:{required:!0,type:String}},data:function(){return{codeSnippetMaxHeight:104,collapsed:!0,isSnippetCodeOverflow:!1,mounted:!1}},computed:{id:function(){return this.title.toLowerCase().replace(/ /g,"-")}},beforeMount:function(){window.addEventListener("resize",this.resizeSnippetContent)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeSnippetContent)},mounted:function(){var t=this;this.setSnippetContentHeight(),this.resizeSnippetContent(),setTimeout((function(){t.mounted=!0}),100)},methods:{onCopy:function(){this.$refs.toast.log(this.$t("common.copyCodeSuccess"))},onError:function(){this.$refs.toast.error(this.$t("common.copyCodeError"))},setSnippetContentHeight:function(){this.$refs.dummyCode&&this.$refs.snippet&&(this.codeSnippetMaxHeight=this.$refs.dummyCode.offsetHeight,this.isSnippetCodeOverflow=this.$refs.snippet.offsetHeight>this.codeSnippetMaxHeight)},toggleCollapse:function(){this.collapsed=!this.collapsed,this.$emit("toggle",this.collapsed),this.resizeSnippetContent()},resizeSnippetContent:function(){this.$refs.snippet&&(this.collapsed?this.codeSnippetMaxHeight=this.$refs.dummyCode.offsetHeight:this.codeSnippetMaxHeight=this.$refs.snippet.offsetHeight+this.$refs.expandButton.offsetHeight)}}}),o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pb-10"},[n("MjHeadline",{staticClass:"pb-8 text-gray-800 dark:text-gray-200",attrs:{id:t.id,level:2,size:4}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"p-4 sm:p-8 border-t border-r border-l border-gray-100 dark:border-gray-800",class:t.snippet.length>0?"rounded-t-lg":"rounded-lg border-b"},[t._t("default")],2),t._v(" "),t.snippet.length>0?n("div",{staticClass:"bg-gray-800 rounded-b-lg overflow-y-hidden relative",class:{"transition-all duration-500 ease-out-mijin":t.mounted},style:[t.isSnippetCodeOverflow?{maxHeight:t.codeSnippetMaxHeight+"px"}:{}]},[n("div",{ref:"sample",staticClass:"p-4"},[n("div",{ref:"dummyCode",staticClass:"invisible absolute p-4"},[n("code",{staticClass:"whitespace-pre-wrap text-sm"},[t._v("​\n          ​\n          ​\n          ​")])]),t._v(" "),n("div",{ref:"snippet",staticClass:"space-y-8 overflow-x-auto",class:{"pb-4":t.isSnippetCodeOverflow}},t._l(t.snippet,(function(code,e){return n("div",{key:e,staticClass:"relative group"},[n("highlightjs",{attrs:{language:"html",code:code}}),t._v(" "),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out inline-flex items-center"},[n("MjIcon",{staticClass:"text-gray-50",attrs:{name:"copy","aria-label":t.$t("common.copyClipboard")}})],1)],1)})),0)]),t._v(" "),t.isSnippetCodeOverflow?n("div",{ref:"expandButton",staticClass:"absolute bottom-0 p-2 text-center w-full bg-gradient-to-t from-gray-800"},[n("button",{staticClass:"bg-gray-700 text-gray-100 rounded-full px-2 py-1 text-sm leading-tight focus:outline-none",on:{click:function(e){return t.toggleCollapse()}}},[t.collapsed?[t._v("\n          "+t._s(t.$t("common.expand"))+"\n        ")]:[t._v("\n          "+t._s(t.$t("common.collapse"))+"\n        ")]],2)]):t._e()]):t._e(),t._v(" "),n("MjToast",{ref:"toast",attrs:{timeout:1800}})],1)}),[],!1,null,null,null);e.default=component.exports},233:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({data:function(){return{samples:{default:["<MjList>\n  <MjListItem>\n    ".concat(this.$t("examples.items.1.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.2.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.3.name"),"\n  </MjListItem>\n</MjList>")],divided:["<MjList divided>\n  <MjListItem>\n    ".concat(this.$t("examples.items.1.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.2.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.3.name"),"\n  </MjListItem>\n</MjList>")],inline:["<MjList inline>\n  <MjListItem>\n    ".concat(this.$t("examples.items.1.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.2.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.3.name"),"\n  </MjListItem>\n</MjList>")],gutter:['<MjList gutter="lg">\n  <MjListItem>\n    '.concat(this.$t("examples.items.1.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.2.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.3.name"),"\n  </MjListItem>\n</MjList>"),'<MjList gutter="xl">\n  <MjListItem>\n    '.concat(this.$t("examples.items.1.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.2.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.3.name"),"\n  </MjListItem>\n</MjList>")],ol:['<MjList tag="ol">\n  <MjListItem>\n    '.concat(this.$t("examples.items.1.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.2.name"),"\n  </MjListItem>\n  <MjListItem>\n    ").concat(this.$t("examples.items.3.name"),"\n  </MjListItem>\n</MjList>")]}}}}),o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LayoutDoc",{attrs:{title:t.$t("sections.atoms.list.title"),components:["List"]}},[n("Sample",{attrs:{title:t.$t("props.default"),snippet:t.samples.default}},[n("MjList",[n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.1.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.2.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.3.name"))+"\n      ")])],1)],1),t._v(" "),n("Sample",{attrs:{title:t.$t("props.divided"),snippet:t.samples.divided}},[n("MjList",{attrs:{divided:""}},[n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.1.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.2.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.3.name"))+"\n      ")])],1)],1),t._v(" "),n("Sample",{attrs:{title:t.$t("props.inline"),snippet:t.samples.inline}},[n("MjList",{attrs:{inline:""}},[n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.1.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.2.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.3.name"))+"\n      ")])],1)],1),t._v(" "),n("Sample",{attrs:{title:t.$t("props.gutter"),snippet:t.samples.gutter}},[n("MjList",{attrs:{gutter:"lg"}},[n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.1.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.2.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.3.name"))+"\n      ")])],1),t._v(" "),n("MjList",{staticClass:"mt-4",attrs:{gutter:"xl"}},[n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.1.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.2.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.3.name"))+"\n      ")])],1)],1),t._v(" "),n("Sample",{attrs:{title:t.$t("props.orderedList"),snippet:t.samples.ol}},[n("MjList",{attrs:{tag:"ol"}},[n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.1.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.2.name"))+"\n      ")]),t._v(" "),n("MjListItem",[t._v("\n        "+t._s(t.$t("examples.items.3.name"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Sample:n(195).default,LayoutDoc:n(194).default})}}]);