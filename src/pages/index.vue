<script>
import Vue from 'vue';

export default Vue.extend({
  fetch({ redirect }) {
    redirect(301, '/docs/general/getting-started');
  },
});
</script>
