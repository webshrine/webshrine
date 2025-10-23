<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, h } from 'vue'
import * as LINKS from '../../api/gen/names-to-links.json'

export default defineComponent({
  name: 'ApiLink',
  props: {
    name: {
      type: String as PropType<keyof typeof LINKS>,
      required: true,
    },
  },
  setup(props) {
    return () => h('a', {
      // class: 'api-link',
      href: LINKS[props.name],
    }, [
      props.name,
    ])
  },
})
</script>

