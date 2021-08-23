import Vue from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import hljsVuePlugin from '@highlightjs/vue-plugin';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', xml);

Vue.use(hljsVuePlugin);
