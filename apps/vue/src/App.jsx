import { WukiProvider, Text } from '@wuki-ui/vue'
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <WukiProvider>
        <Text tag='h1'>Hello, Vue!</Text>
        <Text tag='small'>Test</Text>
      </WukiProvider>
    )
  }
})