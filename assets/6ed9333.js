(window.webpackJsonp=window.webpackJsonp||[]).push([[42,3,4,5,9],{193:function(t,e,n){"use strict";n.r(e);n(23);var r=n(1).a.extend({props:{variant:{type:String,default:"primary",validator:function(t){return["primary","secondary"].includes(t)}}}}),o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("code",{staticClass:"font-mono font-normal text-sm",class:[{"text-primary-500 dark:text-primary-400":"primary"===t.variant}]},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},194:function(t,e,n){"use strict";n.r(e);n(10),n(25),n(26);var r=n(7);n(24),n(15),n(21),n(18),n(47),n(23);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c=n(1).a.extend({props:{components:{default:null,type:[Array,String]},title:{required:!0,type:String}},data:function(){return{anchors:[],anchorObserver:null,currentAnchor:null}},head:function(){return{title:this.title}},computed:{componentsProperties:function(){var t=this;if(!this.components)return null;var e=Array.isArray(this.components)?this.components:[this.components],n={};return e.forEach((function(component){var e,o,c,d="sections.atoms.".concat(component.toLowerCase()),v=null===(e=t.$root)||void 0===e||null===(o=e.$options)||void 0===o||null===(c=o.components["Mj".concat(component)])||void 0===c?void 0:c.options,_=v.props;if(_){var m=Object.keys(_).map((function(t){return{default:_[t].default,name:t,required:_[t].required,type:Array.isArray(_[t].type)?_[t].type.map((function(t){return t.name})):[_[t].type.name],validator:_[t].validator&&null!=v&&v.validator&&null!=v&&v.validator[t]?null==v?void 0:v.validator[t]:null}}));n[component]=l({props:m},n[component])}["events","methods","slots"].forEach((function(e){t.$te("".concat(d,".").concat(e))&&(n[component]=l(Object(r.a)({},e,t.$t("".concat(d,".").concat(e))),n[component]))}))})),n},nav:function(){var t=this,nav={},path=this.$nuxt.$route.path.split("/").filter((function(t){return!["","docs"].includes(t)})),e="".concat(path[0],".").concat(path[1]),n=Object.keys(this.$config.nav).map((function(section){return Object.keys(t.$config.nav[section]).map((function(t){return"".concat(section,".").concat(t)}))})).flat();function r(t){var e=t.split(".");return{section:e[0],page:e[1]}}return 0!==n.indexOf(e)&&(nav.previous=r(n[n.indexOf(e)-1])),n.indexOf(e)!==n.length-1&&(nav.next=r(n[n.indexOf(e)+1])),nav}},mounted:function(){this.setAnchorObserver(),this.setAnchors()},beforeDestroy:function(){this.anchorObserver.disconnect()},methods:{setAnchors:function(){var t=this;document.querySelectorAll("h2").forEach((function(element){var e;t.anchors.push({id:element.id,name:(null==element||null===(e=element.textContent)||void 0===e?void 0:e.trim())||""}),t.anchorObserver.observe(element)}))},setAnchorObserver:function(){var t=this;this.anchorObserver=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(t.currentAnchor=e.target.id)}))}),{root:null,threshold:1})},showEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e?"event: ".concat(t,", value: ").concat(e):"event: ".concat(t);this.$refs.toast.log(n)}}}),d=c,v=n(20),_=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:flex"},[n("div",{staticClass:"md:flex-1 px-4 md:px-10"},[n("MjHeadline",{staticClass:"pb-8",attrs:{level:1,size:2}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default"),t._v(" "),t.componentsProperties?[n("MjHeadline",{staticClass:"pb-8",attrs:{id:"api",level:2,size:2}},[t._v("\n        "+t._s(t.$t("common.properties"))+"\n      ")]),t._v(" "),t._l(t.componentsProperties,(function(component,e){return n("section",{key:e},[Object.keys(t.componentsProperties).length>1?n("MjHeadline",{staticClass:"pb-4",attrs:{id:e,level:3}},[t._v("\n          "+t._s(e)+"\n        ")]):t._e(),t._v(" "),t._l(component,(function(e,r){return n("div",{key:r},[n("MjHeadline",{staticClass:"pb-4 text-gray-800 dark:text-gray-300",attrs:{level:4}},[t._v("\n            "+t._s(t.$t("common."+r))+"\n          ")]),t._v(" "),n("MjTable",{staticClass:"mb-8",attrs:{fixed:""}},[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900 w-3/12"},[t._v("\n                "+t._s(t.$t("common.name"))+"\n              ")]),t._v(" "),"props"===r?[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.type"))+"\n                ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.required"))+"\n                ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.value"))+"\n                ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.default"))+"\n                ")])]:[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n                  "+t._s(t.$t("common.description"))+"\n                ")])]],2),t._v(" "),n("MjTableBody",t._l(e,(function(e,o,l){return n("MjTableRow",{key:l},["props"===r?[n("MjTableCell",[n("CodeInline",[t._v(t._s(e.name))])],1),t._v(" "),n("MjTableCell",t._l(e.type,(function(e){return n("CodeInline",{key:e,staticClass:"space-y-1",attrs:{variant:"secondary"}},[t._v("\n                      "+t._s(e)+"\n                    ")])})),1),t._v(" "),n("MjTableCell",[n("CodeInline",{attrs:{variant:"secondary"}},[t._v("\n                      "+t._s(e.required||!1)+"\n                    ")])],1),t._v(" "),n("MjTableCell",[e.validator?t._l(e.validator,(function(e){return n("CodeInline",{key:e,staticClass:"space-y-1",attrs:{variant:"secondary"}},[null===e?[t._v("\n                          null\n                        ")]:[t._v("\n                          "+t._s(e)+"\n                        ")]],2)})):n("span",{staticClass:"text-gray-300 dark:text-gray-700"},[t._v("\n                      -\n                    ")])],2),t._v(" "),n("MjTableCell",[e.default?n("CodeInline",{attrs:{variant:"secondary"}},[t._v("\n                      "+t._s(e.default)+"\n                    ")]):n("span",{staticClass:"text-gray-300 dark:text-gray-700"},[t._v("\n                      -\n                    ")])],1)]:[n("MjTableCell",[n("CodeInline",["events"===r?n("span",{staticClass:"text-primary-300 dark:text-primary-600"},[t._v("@")]):t._e(),t._v(t._s(o)),"methods"===r?n("span",{staticClass:"text-primary-300 dark:text-primary-600"},[t._v("()")]):t._e()])],1),t._v(" "),n("MjTableCell",[t._v("\n                    "+t._s(e.description)+"\n                  ")])]],2)})),1)],1)],1)}))],2)}))]:t._e(),t._v(" "),n("div",{staticClass:"grid grid-cols-2 gap-4 border-t border-gray-300 dark:border-gray-600 mt-10 pt-10"},[n("div",[t.nav.previous?n("MjLink",{staticClass:"inline-flex items-center",attrs:{tag:"nuxt-link",to:t.localePath("docs-"+t.nav.previous.section+"-"+t.nav.previous.page),color:"gray"}},[n("MjIcon",{staticClass:"mr-2",attrs:{name:"arrow-left"}}),t._v("\n          "+t._s(t.$t("sections."+t.nav.previous.section+"."+t.nav.previous.page+".title"))+"\n        ")],1):t._e()],1),t._v(" "),n("div",{staticClass:"text-right"},[t.nav.next?n("MjLink",{staticClass:"inline-flex items-center",attrs:{tag:"nuxt-link",to:t.localePath("docs-"+t.nav.next.section+"-"+t.nav.next.page),color:"gray"}},[t._v("\n          "+t._s(t.$t("sections."+t.nav.next.section+"."+t.nav.next.page+".title"))+"\n          "),n("MjIcon",{staticClass:"ml-2",attrs:{name:"arrow-right"}})],1):t._e()],1)])],2),t._v(" "),n("nav",{staticClass:"w-64 xl:w-72 sticky top-24 self-start text-sm hidden xl:block pt-4"},[t.anchors.length>1?n("ul",t._l(t.anchors,(function(e,r){return n("li",{key:e.id,class:{"pt-2":0!=r}},[n("a",{staticClass:"transition-colors duration-200 ease-in-out",class:{"text-primary-500 dark:text-primary-500":e.id===t.currentAnchor,"text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50":e.id!==t.currentAnchor},attrs:{href:"#"+e.id}},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0):t._e()]),t._v(" "),n("MjToast",{ref:"toast"})],1)}),[],!1,null,null,null);e.default=_.exports;installComponents(_,{CodeInline:n(193).default})},196:function(t,e,n){"use strict";n.r(e);n(23),n(15);var r=n(1).a.extend({props:{language:{type:String,default:null,validator:function(t){return["html","javascript",null].includes(t)}},snippets:{required:!0,type:Object}},data:function(){return{currentSnippet:Object.keys(this.snippets)[0]}},computed:{code:function(){return this.snippets[this.currentSnippet]}},methods:{onCopy:function(){this.$refs.toast.log(this.$t("common.copyCodeSuccess"))},onError:function(){this.$refs.toast.error(this.$t("common.copyCodeError"))}}}),o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 mb-8 rounded-lg bg-gray-800"},[Object.keys(t.snippets).length>1?[n("div",{staticClass:"text-sm border-b border-gray-700"},t._l(t.snippets,(function(e,r){return n("button",{key:r,staticClass:"p-4 focus:outline-none transition-colors duration-150 ease-in-out",class:[{"text-primary-400":t.currentSnippet===r,"text-white hover:text-primary-200":t.currentSnippet!==r}],on:{click:function(e){t.currentSnippet=r}}},[t._v("\n        "+t._s(r)+"\n      ")])})),0)]:t._e(),t._v(" "),n("div",{staticClass:"relative group overflow-x-auto"},[t.code?n("highlightjs",{staticClass:"p-4",attrs:{code:t.code,language:t.language}}):t._e(),t._v(" "),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out mt-4 mr-4 inline-flex items-center"},[n("MjIcon",{staticClass:"text-gray-50",attrs:{name:"copy","aria-label":t.$t("common.copyClipboard")}})],1)],1),t._v(" "),n("MjToast",{ref:"toast",attrs:{timeout:1800}})],2)}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,n){"use strict";n.r(e);var r=n(20),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-gray-800 dark:text-gray-200"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(198),l=n.n(o),c=r.a.extend({data:function(){return{theme:l.a.theme}}}),d=n(20),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LayoutDoc",{attrs:{title:t.$t("sections.general.customization.title")}},[n("TextP",[t._v("\n      "+t._s(t.$t("sections.general.customization.description"))+".\n    ")]),t._v(" "),n("MjHeadline",{staticClass:"pt-10 pb-8",attrs:{id:"Tailwind CSS",level:2,size:3}},[t._v("\n      Tailwind CSS\n    ")]),t._v(" "),n("TextP",[n("i18n",{attrs:{path:"sections.general.customization.tailwindOverride"},scopedSlots:t._u([{key:"tailwindConfigFile",fn:function(){return[n("CodeInline",[t._v("tailwind.config.js")])]},proxy:!0}])})],1),t._v(" "),n("CodeSnippet",{attrs:{language:"javascript",snippets:{tailwind:"// tailwind.config.js\n\nconst mijin = require('mijin/tailwind-preset.js');\nconst { colors, borderRadius } = require('tailwindcss/defaultTheme');\n\nmodule.exports = {\n  presets: [\n    mijin,\n  ],\n  theme: {\n    extend: {\n      // "+t.$t("sections.general.customization.overrideComponent")+"\n      borderRadius: {\n        button: borderRadius.sm,\n        form: borderRadius.sm,\n      },\n      // "+t.$t("sections.general.customization.overrideColor")+"\n      colors: {\n        primary: colors.pink,\n      },\n    },\n  },\n};"}}}),t._v(" "),n("MjHeadline",{staticClass:"pt-10 pb-8",attrs:{id:t.$t("common.presets"),level:3,size:4}},[t._v("\n      "+t._s(t.$t("common.presets"))+"\n    ")]),t._v(" "),n("MjTable",{attrs:{density:"tight"}},[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n          "+t._s(t.$t("common.attribute"))+"\n        ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n          "+t._s(t.$t("common.value"))+"\n        ")])],1),t._v(" "),n("MjTableBody",{staticClass:"text-sm font-mono"},[t._l(t.theme,(function(section,e){return[t._l(section,(function(r,o){return["object"==typeof r?t._l(r,(function(r,l){return n("MjTableRow",{key:e+"-"+o+"-"+l},[n("MjTableCell",[n("CodeInline",[t._v("\n                    "+t._s(e)+"."+t._s(o)+"."+t._s(l)+"\n                  ")])],1),t._v(" "),n("MjTableCell",[t._v("\n                  "+t._s(r)+"\n                ")])],1)})):[n("MjTableRow",{key:e+"-"+o},[n("MjTableCell",[n("CodeInline",[t._v("\n                    "+t._s(e)+"."+t._s(o)+"\n                  ")])],1),t._v(" "),n("MjTableCell",[t._v("\n                  "+t._s(r)+"\n                ")])],1)]]}))]}))],2)],1),t._v(" "),n("MjHeadline",{staticClass:"pt-10 pb-8",attrs:{id:t.$t("common.plugin"),level:2,size:3}},[t._v("\n      "+t._s(t.$t("common.plugin"))+"\n    ")]),t._v(" "),n("TextP",[n("i18n",{attrs:{path:"sections.general.customization.pluginOption"},scopedSlots:t._u([{key:"fromMj",fn:function(){return[n("CodeInline",[t._v("Mj")])]},proxy:!0},{key:"toM",fn:function(){return[n("CodeInline",[t._v("M")])]},proxy:!0}])})],1),t._v(" "),n("CodeSnippet",{attrs:{language:"javascript",snippets:{plugin:"import Vue from 'vue';\n\nVue.use(Mijin, {\n  prefix: 'M',\n})"}}}),t._v(" "),n("MjHeadline",{staticClass:"pt-10 pb-8",attrs:{id:t.$t("common.options"),level:3,size:4}},[t._v("\n      "+t._s(t.$t("common.options"))+"\n    ")]),t._v(" "),n("MjTable",[n("MjTableHead",[n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n          "+t._s(t.$t("common.name"))+"\n        ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n          "+t._s(t.$t("common.description"))+"\n        ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n          "+t._s(t.$t("common.type"))+"\n        ")]),t._v(" "),n("MjTableHeader",{staticClass:"bg-white dark:bg-gray-900"},[t._v("\n          "+t._s(t.$t("common.default"))+"\n        ")])],1),t._v(" "),n("MjTableBody",{staticClass:"text-sm"},t._l([{name:"extendIcons",description:t.$t("sections.general.customization.pluginOptions.extendIcons.description"),type:"Object",default:"{}"},{name:"prefix",description:t.$t("sections.general.customization.pluginOptions.prefix.description"),type:"String",default:"Mj"}],(function(option){return n("MjTableRow",{key:option.name},[n("MjTableCell",[n("CodeInline",[t._v("\n              "+t._s(option.name)+"\n            ")])],1),t._v(" "),n("MjTableCell",[t._v("\n            "+t._s(option.description)+"\n          ")]),t._v(" "),n("MjTableCell",{staticClass:"font-mono"},[t._v("\n            "+t._s(option.type)+"\n          ")]),t._v(" "),n("MjTableCell",{staticClass:"font-mono"},[t._v("\n            "+t._s(option.default)+"\n          ")])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextP:n(197).default,CodeInline:n(193).default,CodeSnippet:n(196).default,LayoutDoc:n(194).default})}}]);