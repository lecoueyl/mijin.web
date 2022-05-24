(window.webpackJsonp=window.webpackJsonp||[]).push([[32,3,5,6],{194:function(e,t,n){"use strict";n.r(t);n(22);var l=n(1).a.extend({props:{variant:{type:String,default:"primary",validator:function(e){return["primary","secondary"].includes(e)}}}}),r=n(19),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("code",{staticClass:"font-mono font-normal text-sm",class:[{"text-primary-500 dark:text-primary-400":"primary"===e.variant}]},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},195:function(e,t,n){"use strict";n.r(t);n(9),n(24),n(25);var l=n(7);n(23),n(14),n(20),n(17),n(48),n(22);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c=n(1).a.extend({props:{components:{default:null,type:[Array,String]},title:{required:!0,type:String}},data:function(){return{anchors:[],anchorObserver:null,currentAnchor:null}},head:function(){return{title:this.title}},computed:{componentsProperties:function(){var e=this;if(!this.components)return null;var t=Array.isArray(this.components)?this.components:[this.components],n={};return t.forEach((function(component){var t,r,c,d="sections.atoms.".concat(component.toLowerCase()),j=null===(t=e.$root)||void 0===t||null===(r=t.$options)||void 0===r||null===(c=r.components["Mj".concat(component)])||void 0===c?void 0:c.options,M=j.props;if(M){var T=Object.keys(M).map((function(e){return{default:M[e].default,name:e,required:M[e].required,type:Array.isArray(M[e].type)?M[e].type.map((function(e){return e.name})):[M[e].type.name],validator:M[e].validator&&null!=j&&j.validator&&null!=j&&j.validator[e]?null==j?void 0:j.validator[e]:null}}));n[component]=o({props:T},n[component])}["events","methods","slots"].forEach((function(t){e.$te("".concat(d,".").concat(t))&&(n[component]=o(Object(l.a)({},t,e.$t("".concat(d,".").concat(t))),n[component]))}))})),n},nav:function(){var e=this,nav={},path=this.$nuxt.$route.path.split("/").filter((function(e){return!["","docs"].includes(e)})),t="".concat(path[0],".").concat(path[1]),n=Object.keys(this.$config.nav).map((function(section){return Object.keys(e.$config.nav[section]).map((function(e){return"".concat(section,".").concat(e)}))})).flat();function l(e){var t=e.split(".");return{section:t[0],page:t[1]}}return 0!==n.indexOf(t)&&(nav.previous=l(n[n.indexOf(t)-1])),n.indexOf(t)!==n.length-1&&(nav.next=l(n[n.indexOf(t)+1])),nav}},mounted:function(){this.setAnchorObserver(),this.setAnchors()},beforeDestroy:function(){this.anchorObserver.disconnect()},methods:{setAnchors:function(){var e=this;document.querySelectorAll("h2").forEach((function(element){var t;e.anchors.push({id:element.id,name:(null==element||null===(t=element.textContent)||void 0===t?void 0:t.trim())||""}),e.anchorObserver.observe(element)}))},setAnchorObserver:function(){var e=this;this.anchorObserver=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(e.currentAnchor=t.target.id)}))}),{root:null,threshold:1})},showEvent:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t?"event: ".concat(e,", value: ").concat(t):"event: ".concat(e);this.$refs.toast.log(n)}}}),d=c,j=n(19),M=Object(j.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:flex"},[n("div",{staticClass:"md:flex-1 px-4 md:px-10"},[n("MjHeadline",{staticClass:"pb-8",attrs:{level:1,size:2}},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),e._t("default"),e._v(" "),e.componentsProperties?[n("MjHeadline",{staticClass:"pb-8",attrs:{id:"api",level:2,size:2}},[e._v("\n        "+e._s(e.$t("common.properties"))+"\n      ")]),e._v(" "),e._l(e.componentsProperties,(function(component,t){return n("section",{key:t},[Object.keys(e.componentsProperties).length>1?n("MjHeadline",{staticClass:"pb-4",attrs:{id:t,level:3}},[e._v("\n          "+e._s(t)+"\n        ")]):e._e(),e._v(" "),e._l(component,(function(t,l){return n("div",{key:l},[n("MjHeadline",{staticClass:"pb-4 text-gray-800 dark:text-gray-300",attrs:{level:4}},[e._v("\n            "+e._s(e.$t("common."+l))+"\n          ")]),e._v(" "),n("MjTable",{staticClass:"mb-8",attrs:{fixed:""}},[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900 w-3/12"},[e._v("\n                "+e._s(e.$t("common.name"))+"\n              ")]),e._v(" "),"props"===l?[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n                  "+e._s(e.$t("common.type"))+"\n                ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n                  "+e._s(e.$t("common.required"))+"\n                ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n                  "+e._s(e.$t("common.value"))+"\n                ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n                  "+e._s(e.$t("common.default"))+"\n                ")])]:[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n                  "+e._s(e.$t("common.description"))+"\n                ")])]],2),e._v(" "),n("MjTableBody",e._l(t,(function(t,r,o){return n("MjTableRow",{key:o},["props"===l?[n("MjTableCell",[n("CodeInline",[e._v(e._s(t.name))])],1),e._v(" "),n("MjTableCell",e._l(t.type,(function(t){return n("CodeInline",{key:t,staticClass:"space-y-1",attrs:{variant:"secondary"}},[e._v("\n                      "+e._s(t)+"\n                    ")])})),1),e._v(" "),n("MjTableCell",[n("CodeInline",{attrs:{variant:"secondary"}},[e._v("\n                      "+e._s(t.required||!1)+"\n                    ")])],1),e._v(" "),n("MjTableCell",[t.validator?e._l(t.validator,(function(t){return n("CodeInline",{key:t,staticClass:"space-y-1",attrs:{variant:"secondary"}},[null===t?[e._v("\n                          null\n                        ")]:[e._v("\n                          "+e._s(t)+"\n                        ")]],2)})):n("span",{staticClass:"text-gray-300 dark:text-gray-700"},[e._v("\n                      -\n                    ")])],2),e._v(" "),n("MjTableCell",[t.default?n("CodeInline",{attrs:{variant:"secondary"}},[e._v("\n                      "+e._s(t.default)+"\n                    ")]):n("span",{staticClass:"text-gray-300 dark:text-gray-700"},[e._v("\n                      -\n                    ")])],1)]:[n("MjTableCell",[n("CodeInline",["events"===l?n("span",{staticClass:"text-primary-300 dark:text-primary-600"},[e._v("@")]):e._e(),e._v(e._s(r)),"methods"===l?n("span",{staticClass:"text-primary-300 dark:text-primary-600"},[e._v("()")]):e._e()])],1),e._v(" "),n("MjTableCell",[e._v("\n                    "+e._s(t.description)+"\n                  ")])]],2)})),1)],1)],1)}))],2)}))]:e._e(),e._v(" "),n("div",{staticClass:"grid grid-cols-2 gap-4 border-t border-gray-300 dark:border-gray-600 mt-10 pt-10"},[n("div",[e.nav.previous?n("MjLink",{staticClass:"inline-flex items-center",attrs:{tag:"nuxt-link",to:e.localePath("docs-"+e.nav.previous.section+"-"+e.nav.previous.page),color:"gray"}},[n("MjIcon",{staticClass:"mr-2",attrs:{name:"arrow-left"}}),e._v("\n          "+e._s(e.$t("sections."+e.nav.previous.section+"."+e.nav.previous.page+".title"))+"\n        ")],1):e._e()],1),e._v(" "),n("div",{staticClass:"text-right"},[e.nav.next?n("MjLink",{staticClass:"inline-flex items-center",attrs:{tag:"nuxt-link",to:e.localePath("docs-"+e.nav.next.section+"-"+e.nav.next.page),color:"gray"}},[e._v("\n          "+e._s(e.$t("sections."+e.nav.next.section+"."+e.nav.next.page+".title"))+"\n          "),n("MjIcon",{staticClass:"ml-2",attrs:{name:"arrow-right"}})],1):e._e()],1)])],2),e._v(" "),n("nav",{staticClass:"w-64 xl:w-72 sticky top-24 self-start text-sm hidden xl:block pt-4"},[e.anchors.length>1?n("ul",e._l(e.anchors,(function(t,l){return n("li",{key:t.id,class:{"pt-2":0!=l}},[n("a",{staticClass:"transition-colors duration-200 ease-in-out",class:{"text-primary-500 dark:text-primary-500":t.id===e.currentAnchor,"text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50":t.id!==e.currentAnchor},attrs:{href:"#"+t.id}},[e._v("\n          "+e._s(t.name)+"\n        ")])])})),0):e._e()]),e._v(" "),n("MjToast",{ref:"toast"})],1)}),[],!1,null,null,null);t.default=M.exports;installComponents(M,{CodeInline:n(194).default})},196:function(e,t,n){"use strict";n.r(t);n(49);var l=n(1).a.extend({props:{snippet:{default:function(){return[]},type:Array},title:{required:!0,type:String}},data:function(){return{codeSnippetMaxHeight:104,collapsed:!0,isSnippetCodeOverflow:!1,mounted:!1}},computed:{id:function(){return this.title.toLowerCase().replace(/ /g,"-")}},beforeMount:function(){window.addEventListener("resize",this.resizeSnippetContent)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeSnippetContent)},mounted:function(){var e=this;this.setSnippetContentHeight(),this.resizeSnippetContent(),setTimeout((function(){e.mounted=!0}),100)},methods:{onCopy:function(){this.$refs.toast.log(this.$t("common.copyCodeSuccess"))},onError:function(){this.$refs.toast.error(this.$t("common.copyCodeError"))},setSnippetContentHeight:function(){this.$refs.dummyCode&&this.$refs.snippet&&(this.codeSnippetMaxHeight=this.$refs.dummyCode.offsetHeight,this.isSnippetCodeOverflow=this.$refs.snippet.offsetHeight>this.codeSnippetMaxHeight)},toggleCollapse:function(){this.collapsed=!this.collapsed,this.$emit("toggle",this.collapsed),this.resizeSnippetContent()},resizeSnippetContent:function(){this.$refs.snippet&&(this.collapsed?this.codeSnippetMaxHeight=this.$refs.dummyCode.offsetHeight:this.codeSnippetMaxHeight=this.$refs.snippet.offsetHeight+this.$refs.expandButton.offsetHeight)}}}),r=n(19),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pb-10"},[n("MjHeadline",{staticClass:"pb-8 text-gray-800 dark:text-gray-200",attrs:{id:e.id,level:2,size:4}},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("div",{staticClass:"p-4 sm:p-8 border-t border-r border-l border-gray-100 dark:border-gray-800",class:e.snippet.length>0?"rounded-t-lg":"rounded-lg border-b"},[e._t("default")],2),e._v(" "),e.snippet.length>0?n("div",{staticClass:"bg-gray-800 rounded-b-lg overflow-y-hidden relative",class:{"transition-all duration-500 ease-out-mijin":e.mounted},style:[e.isSnippetCodeOverflow?{maxHeight:e.codeSnippetMaxHeight+"px"}:{}]},[n("div",{ref:"sample",staticClass:"p-4"},[n("div",{ref:"dummyCode",staticClass:"invisible absolute p-4"},[n("code",{staticClass:"whitespace-pre-wrap text-sm"},[e._v("​\n          ​\n          ​\n          ​")])]),e._v(" "),n("div",{ref:"snippet",staticClass:"space-y-8 overflow-x-auto",class:{"pb-4":e.isSnippetCodeOverflow}},e._l(e.snippet,(function(code,t){return n("div",{key:t,staticClass:"relative group"},[n("highlightjs",{attrs:{language:"html",code:code}}),e._v(" "),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out inline-flex items-center"},[n("MjIcon",{staticClass:"text-gray-50",attrs:{name:"copy","aria-label":e.$t("common.copyClipboard")}})],1)],1)})),0)]),e._v(" "),e.isSnippetCodeOverflow?n("div",{ref:"expandButton",staticClass:"absolute bottom-0 p-2 text-center w-full bg-gradient-to-t from-gray-800"},[n("button",{staticClass:"bg-gray-700 text-gray-100 rounded-full px-2 py-1 text-sm leading-tight focus:outline-none",on:{click:function(t){return e.toggleCollapse()}}},[e.collapsed?[e._v("\n          "+e._s(e.$t("common.expand"))+"\n        ")]:[e._v("\n          "+e._s(e.$t("common.collapse"))+"\n        ")]],2)]):e._e()]):e._e(),e._v(" "),n("MjToast",{ref:"toast",attrs:{timeout:1800}})],1)}),[],!1,null,null,null);t.default=component.exports},237:function(e,t,n){"use strict";n.r(t);var l=n(132),r=(n(20),n(1).a.extend({data:function(){return{sort:{column:"description",dir:1}}},computed:{array:function(){return[{name:"".concat(this.$t("examples.items.1.name")),description:"".concat(this.$t("examples.items.1.description")),count:20},{name:"".concat(this.$t("examples.items.2.name")),description:"".concat(this.$t("examples.items.2.description")),count:16},{name:"".concat(this.$t("examples.items.3.name")),description:"".concat(this.$t("examples.items.3.description")),count:186}]},sortedArray:function(){var e=this;return Object(l.a)(this.array).sort((function(a,b){return a[e.sort.column]<b[e.sort.column]?-1*e.sort.dir:a[e.sort.column]>b[e.sort.column]?1*e.sort.dir:0}))},samples:function(){return{default:['<MjTable>\n  <MjTableHead>\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      '.concat(this.$t("examples.itemsHeader.name"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      ').concat(this.$t("examples.itemsHeader.description"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      ').concat(this.$t("examples.itemsHeader.count"),"\n    </MjTableHeader>\n  </MjTableHead>\n\n  <MjTableBody>\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[0].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[1].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[2].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].count,"\n      </MjTableCell>\n    </MjTableRow>\n  </MjTableBody>\n</MjTable>")],fixed:['<MjTable fixed>\n  <MjTableHead>\n    <MjTableHeader class="bg-white dark:bg-gray-900 w-2/12">\n      '.concat(this.$t("examples.itemsHeader.name"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      ').concat(this.$t("examples.itemsHeader.description"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900 w-1/12">\n      ').concat(this.$t("examples.itemsHeader.count"),"\n    </MjTableHeader>\n  </MjTableHead>\n\n  <MjTableBody>\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[0].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[1].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[2].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].count,"\n      </MjTableCell>\n    </MjTableRow>\n  </MjTableBody>\n</MjTable>")],truncate:['<MjTable fixed>\n  <MjTableHead>\n    <MjTableHeader class="bg-white dark:bg-gray-900 w-20">\n      '.concat(this.$t("examples.itemsHeader.name"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      ').concat(this.$t("examples.itemsHeader.description"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900 w-16">\n      ').concat(this.$t("examples.itemsHeader.count"),"\n    </MjTableHeader>\n  </MjTableHead>\n\n  <MjTableBody>\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[0].name,"\n      </MjTableCell>\n\n      <MjTableCell truncate>\n        ").concat(this.array[0].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[1].name,"\n      </MjTableCell>\n\n      <MjTableCell truncate>\n        ").concat(this.array[1].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[2].name,"\n      </MjTableCell>\n\n      <MjTableCell truncate>\n        ").concat(this.array[2].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].count,"\n      </MjTableCell>\n    </MjTableRow>\n  </MjTableBody>\n</MjTable>")],density:['<MjTable density="tight">\n  <MjTableHead>\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      '.concat(this.$t("examples.itemsHeader.name"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      ').concat(this.$t("examples.itemsHeader.description"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      ').concat(this.$t("examples.itemsHeader.count"),"\n    </MjTableHeader>\n  </MjTableHead>\n\n  <MjTableBody>\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[0].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[1].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow>\n      <MjTableCell>\n        ").concat(this.array[2].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].count,"\n      </MjTableCell>\n    </MjTableRow>\n  </MjTableBody>\n</MjTable>")],clickable:['<MjTable density="tight">\n  <MjTableHead>\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      '.concat(this.$t("examples.itemsHeader.name"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      ').concat(this.$t("examples.itemsHeader.description"),'\n    </MjTableHeader>\n\n    <MjTableHeader class="bg-white dark:bg-gray-900">\n      ').concat(this.$t("examples.itemsHeader.count"),"\n    </MjTableHeader>\n  </MjTableHead>\n\n  <MjTableBody>\n    <MjTableRow clickable>\n      <MjTableCell>\n        ").concat(this.array[0].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow clickable>\n      <MjTableCell>\n        ").concat(this.array[1].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow clickable>\n      <MjTableCell>\n        ").concat(this.array[2].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].count,"\n      </MjTableCell>\n    </MjTableRow>\n  </MjTableBody>\n</MjTable>")],sort:['<MjTable>\n  <MjTableHead>\n    <MjTableHeader\n      class="bg-white dark:bg-gray-900"\n      :sort="isSorted(\'name\')"\n      @click="sortColumn(\'name\')"\n    >\n      '.concat(this.$t("examples.itemsHeader.name"),'\n    </MjTableHeader>\n\n    <MjTableHeader\n      class="bg-white dark:bg-gray-900"\n      :sort="isSorted(\'description\')"\n      @click="sortColumn(\'description\')"\n    >\n      ').concat(this.$t("examples.itemsHeader.description"),'\n    </MjTableHeader>\n\n    <MjTableHeader\n      class="bg-white dark:bg-gray-900"\n      :sort="isSorted(\'count\')"\n      @click="sortColumn(\'count\')"\n    >\n      ').concat(this.$t("examples.itemsHeader.count"),"\n    </MjTableHeader>\n  </MjTableHead>\n\n  <MjTableBody>\n    <MjTableRow clickable>\n      <MjTableCell>\n        ").concat(this.array[0].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[0].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow clickable>\n      <MjTableCell>\n        ").concat(this.array[1].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[1].count,"\n      </MjTableCell>\n    </MjTableRow>\n\n    <MjTableRow clickable>\n      <MjTableCell>\n        ").concat(this.array[2].name,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].description,"\n      </MjTableCell>\n\n      <MjTableCell>\n        ").concat(this.array[2].count,"\n      </MjTableCell>\n    </MjTableRow>\n  </MjTableBody>\n</MjTable>")]}}},methods:{isSorted:function(e){return e!==this.sort.column||(1===this.sort.dir?"asc":"desc")},sortColumn:function(e){e!==this.sort.column?(this.sort.column=e,this.sort.dir=1):this.sort.dir*=-1}}})),o=n(19),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("LayoutDoc",{attrs:{title:e.$t("sections.atoms.table.title"),components:["Table","TableCell","TableRow","TableHeader"]}},[n("Sample",{attrs:{title:e.$t("props.default"),snippet:e.samples.default}},[n("MjTable",[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.name"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.description"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.count"))+"\n        ")])],1),e._v(" "),n("MjTableBody",e._l(e.array,(function(t,l){return n("MjTableRow",{key:l},[n("MjTableCell",[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("MjTableCell",[e._v("\n            "+e._s(t.description)+"\n          ")]),e._v(" "),n("MjTableCell",{attrs:{"text-align":"right"}},[e._v("\n            "+e._s(t.count)+"\n          ")])],1)})),1)],1)],1),e._v(" "),n("Sample",{attrs:{title:e.$t("props.fixed"),snippet:e.samples.fixed}},[n("MjTable",{attrs:{fixed:""}},[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900 w-2/12"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.name"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.description"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900 w-1/12",attrs:{"text-align":"right"}},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.count"))+"\n        ")])],1),e._v(" "),n("MjTableBody",e._l(e.array,(function(t,l){return n("MjTableRow",{key:l},[n("MjTableCell",[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("MjTableCell",[e._v("\n            "+e._s(t.description)+"\n          ")]),e._v(" "),n("MjTableCell",{attrs:{"text-align":"right"}},[e._v("\n            "+e._s(t.count)+"\n          ")])],1)})),1)],1)],1),e._v(" "),n("Sample",{attrs:{title:e.$t("props.truncate"),snippet:e.samples.truncate}},[n("MjTable",{attrs:{fixed:""}},[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900 w-20"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.name"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.description"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900 w-16",attrs:{"text-align":"right"}},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.count"))+"\n        ")])],1),e._v(" "),n("MjTableBody",e._l(e.array,(function(t,l){return n("MjTableRow",{key:l},[n("MjTableCell",[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("MjTableCell",{attrs:{truncate:""}},[e._v("\n            "+e._s(t.description)+"\n          ")]),e._v(" "),n("MjTableCell",{attrs:{"text-align":"right"}},[e._v("\n            "+e._s(t.count)+"\n          ")])],1)})),1)],1)],1),e._v(" "),n("Sample",{attrs:{title:e.$t("props.density"),snippet:e.samples.density}},[n("MjTable",{attrs:{density:"tight"}},[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.name"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.description"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.count"))+"\n        ")])],1),e._v(" "),n("MjTableBody",e._l(e.array,(function(t,l){return n("MjTableRow",{key:l},[n("MjTableCell",[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("MjTableCell",[e._v("\n            "+e._s(t.description)+"\n          ")]),e._v(" "),n("MjTableCell",{attrs:{"text-align":"right"}},[e._v("\n            "+e._s(t.count)+"\n          ")])],1)})),1)],1)],1),e._v(" "),n("Sample",{attrs:{title:e.$t("props.clickable"),snippet:e.samples.clickable}},[n("MjTable",[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.name"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.description"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.count"))+"\n        ")])],1),e._v(" "),n("MjTableBody",e._l(e.array,(function(t,l){return n("MjTableRow",{key:l,attrs:{clickable:""}},[n("MjTableCell",[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("MjTableCell",[e._v("\n            "+e._s(t.description)+"\n          ")]),e._v(" "),n("MjTableCell",{attrs:{"text-align":"right"}},[e._v("\n            "+e._s(t.count)+"\n          ")])],1)})),1)],1)],1),e._v(" "),n("Sample",{attrs:{title:e.$t("props.sort"),snippet:e.samples.sort}},[n("MjTable",[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900",attrs:{sort:e.isSorted("name")},on:{click:function(t){return e.sortColumn("name")}}},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.name"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900",attrs:{sort:e.isSorted("description")},on:{click:function(t){return e.sortColumn("description")}}},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.description"))+"\n        ")]),e._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900",attrs:{sort:e.isSorted("count")},on:{click:function(t){return e.sortColumn("count")}}},[e._v("\n          "+e._s(e.$t("examples.itemsHeader.count"))+"\n        ")])],1),e._v(" "),n("MjTableBody",e._l(e.sortedArray,(function(t,l){return n("MjTableRow",{key:l},[n("MjTableCell",[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("MjTableCell",[e._v("\n            "+e._s(t.description)+"\n          ")]),e._v(" "),n("MjTableCell",{attrs:{"text-align":"right"}},[e._v("\n            "+e._s(t.count)+"\n          ")])],1)})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Sample:n(196).default,LayoutDoc:n(195).default})}}]);