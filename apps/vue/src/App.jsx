import { WukiProvider, Text } from '@wuki/vue'
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <WukiProvider>
        <Text tag='h1'>Hello, Vue!</Text>
      </WukiProvider>
    )
  }
})