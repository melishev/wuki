import { Grid, Text, Code } from '../../../packages/_nameFramework_';

// import * as VueFeather from 'lucide-vue-next';
// import * as ReactFeather from 'lucide-react';

export default {
  title: 'Components/Code',
  component: Code,
};

export const Default = () => (
  <Grid container>
    <Grid col={8}>
      <Code>npm install wuki</Code>
    </Grid>
  </Grid>
);

export const MultiLine = () => (
  <Grid container>
    <Grid col={8}>
      <Code>
        {`<div>
  <p>Hello, world!</p>
</div>`}
      </Code>
    </Grid>
  </Grid>
);

export const Inline = () => (
  <Grid container>
    <Grid col={8}>
      <Text variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ullam maxime inventore,
        odio itaque minima quasi cum facere
        {' '}
        <Code inline>npm install wuki@latest</Code>
        {' '}
        quia quisquam expedita unde beatae officia aspernatur, quae,
        dignissimos nobis culpa accusamus quo!
      </Text>
    </Grid>
  </Grid>
);

// const CustomBeforeIcon = '_nameFramework_' === 'vue' ? <VueFeather.Clipboard size={20} stroke-width={1} /> : <ReactFeather.Clipboard size={20} strokeWidth={1} />
// const CustomAfterIcon = '_nameFramework_' === 'vue' ? <VueFeather.ThumbsUp size={20} stroke-width={1} /> : <ReactFeather.ThumbsUp size={20} strokeWidth={1} />

// export const ChangeIcons = () => (
//   <Grid container>
//     <Grid col={8}>
//       <Code
//         beforeIcon={CustomBeforeIcon}
//         afterIcon={CustomAfterIcon}
//       >
//         {`<div>
//   <p>Hello, world!</p>
// </div>`}
//       </Code>
//     </Grid>
//   </Grid>
// );