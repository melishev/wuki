/* eslint-disable max-len */
import React from 'react';

import { Grid, Text } from '../index';

import Doc from './docs.mdx';

export default {
  title: 'General/Text',
  component: Text,
  parameters: {
    docs: {
      page: Doc,
      description: {
        component:
          'Use typography to present your design and content as clearly and efficiently as possible.',
      },
    },
  },
};

export const Default = () => (
  <Grid container>
    <Grid col={24}>
      <Text tag="h1">The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid col={24}>
      <Text tag="h2">The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid col={24}>
      <Text tag="h3">The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid col={24}>
      <Text tag="h4">The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid col={24}>
      <Text tag="h5">The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid col={24}>
      <Text tag="h6">The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid col={24}>
      <Text tag="p" variant="subTitle">
        The quick brown fox jumps over the lazy dog
      </Text>
    </Grid>
    <Grid col={24}>
      <Text variant="body1">The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid col={24}>
      <Text variant="body2">The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid col={24}>
      <Text tag="small" variant="small">
        The quick brown fox jumps over the lazy dog
      </Text>
    </Grid>
  </Grid>
);

export const Tag = () => (
  <Grid container>
    <Grid col={24}>
      <Text tag="h1">Heading 1</Text>
      <Text tag="h2">Heading 2</Text>
      <Text tag="h3">Heading 3</Text>
      <Text tag="h4">Heading 4</Text>
      <Text tag="h5">Heading 5</Text>
      <Text tag="h6">Heading 6</Text>
      <Text tag="p">Paragraph</Text>
      <Text tag="small">Small</Text>
    </Grid>
  </Grid>
);

export const Variant = () => (
  <Grid container>
    <Grid col={24}>
      <Text variant="h6">Heading 6</Text>
      <Text variant="subTitle">SubTitle</Text>
      <Text tag="p" variant="body1">Body 1</Text>
      <Text tag="h3" variant="body2">Body 2</Text>
      <Text tag="span" variant="small">Small</Text>
    </Grid>
  </Grid>
);

// export const Example = () => {
//   const imgStyle = { maxWidth: '980px', width: '100vw', display: 'block', alignSelf: 'center' };
//   const figcaptionStyle = { color: '#757575', margin: '8px 0 48px' };

//   return (
//     <Grid container>
//       <Grid
//         col={10}
//         offset={8}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <Text tag="h1" style={{ marginBottom: 32 }}>
//           Game-changing MacBook Pro with M1 Pro and M1 Max delivers
//           extraordinary performance and battery life, and features the world’s
//           best notebook display
//         </Text>
//         <Text variant="subTitle" style={{ marginBottom: 48 }}>
//           The new MacBook Pro features a 1080p camera, the best audio system in
//           a notebook, and the most advanced connectivity ever in a MacBook Pro
//         </Text>
//         <img
//           src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large_2x.jpg"
//           alt="Macbook Pro"
//           style={imgStyle}
//         />
//         <Text tag="small" variant="small" style={figcaptionStyle}>
//           The completely reimagined 14- and 16-inch MacBook Pro is powered by
//           the all-new M1 Pro and M1 Max chips.
//         </Text>
//         <Text variant="body2" style={{ marginBottom: 22 }}>
//           CUPERTINO, CALIFORNIA - Apple today unveiled the completely reimagined
//           MacBook Pro powered by the all-new M1 Pro and M1 Max — the first pro
//           chips designed for the Mac. Available in 14- and 16-inch models,
//           MacBook Pro delivers groundbreaking processing, graphics, and machine
//           learning (ML) performance whether running on battery or plugged in, as
//           well as amazing battery life — enabling workflows previously
//           unimaginable on a notebook. The new MacBook Pro also features a
//           stunning Liquid Retina XDR display, a wide range of ports for advanced
//           connectivity, a 1080p FaceTime HD camera, and the best audio system in
//           a notebook. Combined with macOS Monterey, which is engineered down to
//           its core to take full advantage of M1 Pro and M1 Max, the user
//           experience is simply unrivaled. Shattering the limits of what a
//           notebook can do, MacBook Pro is designed for developers,
//           photographers, filmmakers, 3D artists, scientists, music producers,
//           and anyone who wants the world’s best notebook. The new MacBook Pro
//           joins the 13-inch MacBook Pro with M1 to form the strongest lineup of
//           pro notebooks ever. Customers can order the new 14- and 16-inch
//           MacBook Pro models today, and they will be available beginning
//           Tuesday, October 26.
//         </Text>
//         <Text variant="body2" style={{ marginBottom: 40 }}>
//           “We set out to create the world’s best pro notebook, and today we’re
//           excited to introduce the all-new MacBook Pro with M1 Pro and M1 Max —
//           a game-changing combination of phenomenal performance, unrivaled
//           battery life, and groundbreaking features,” said Greg Joswiak, Apple’s
//           senior vice president of Worldwide Marketing. “The all-new MacBook Pro
//           adds a breathtaking XDR display, more ports like MagSafe 3, an
//           advanced 1080p camera, and a sensational six-speaker sound system, all
//           in a stunning new design. The new MacBook Pro simply has no equal and
//           is by far the best pro notebook we’ve ever built.”
//         </Text>
//         <img
//           src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large_2x.jpg"
//           alt="Macbook Pro"
//           style={imgStyle}
//         />
//         <Text tag="small" variant="small" style={figcaptionStyle}>
//           The new MacBook Pro features an expansive Liquid Retina XDR display
//           with ProMotion.
//         </Text>
//         <Text tag="h2" variant="h5" style={{ marginBottom: 20 }}>Two New Pro Chips, Game-Changing Performance</Text>
//         <Text variant="body2" style={{ marginBottom: 22 }}>
//           M1 Pro and M1 Max revolutionize the MacBook Pro experience and mark a
//           huge step forward in the transition to Apple silicon on Mac. MacBook
//           Pro with M1 Pro and M1 Max applies a system-on-a-chip (SoC)
//           architecture to pro systems for the first time, featuring fast unified
//           memory and increased memory bandwidth for unparalleled performance
//           with best-in-class performance per watt and industry-leading power
//           efficiency.
//         </Text>
//         <Text variant="body2" style={{ marginBottom: 40 }}>
//           M1 Pro takes the groundbreaking architecture of M1 to a whole new
//           level. Featuring a powerful up-to-10-core CPU with eight
//           high-performance cores and two high-efficiency cores, along with an
//           up-to-16-core GPU, M1 Pro delivers up to 70 percent faster CPU
//           performance than M1, and up to 2x faster GPU performance. M1 Pro also
//           delivers up to 200GB/s of memory bandwidth — nearly 3x the bandwidth
//           of M1 — and supports up to 32GB of fast unified memory. Designed to
//           dramatically speed up pro video workflows, M1 Pro adds a ProRes
//           accelerator in the media engine, delivering unbelievably fast and
//           power-efficient video processing.
//         </Text>
//         <img
//           src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Workflow_10182021_big.jpg.large_2x.jpg"
//           alt="Macbook Pro"
//           style={imgStyle}
//         />
//         <Text tag="small" variant="small" style={figcaptionStyle}>
//           The new MacBook Pro, powered by M1 Pro and M1 Max, enables workflows
//           that were previously unthinkable on a notebook.
//         </Text>
//         <Text tag="h2" variant="h5" style={{ marginBottom: 20 }}>Most Powerful Mac Notebooks Ever</Text>
//         <Text variant="body2" style={{ marginBottom: 28 }}>
//           The new MacBook Pro pushes the limits of what a notebook can do,
//           delivering incredible performance and all-new capabilities.
//         </Text>
//         <Text variant="subTitle" style={{ marginBottom: 20 }}>
//           When compared to the previous-generation high-end 13-inch model, the
//           all-new 14-inch MacBook Pro is immensely more powerful.
//         </Text>
//         <Text variant="body2">
//           With the 10-core CPU in M1 Pro and M1 Max, the 14-inch MacBook Pro
//           enables:
//         </Text>
//         <ol style={{ margin: '0 0 20px' }}>
//           <li>
//             <Text variant="body2">Up to 3.7x faster project builds using Xcode.</Text>
//           </li>
//           <li>
//             <Text variant="body2">Up to 3x more Amp Designer plug-ins in Logic Pro.</Text>
//           </li>
//           <li>
//             <Text variant="body2">
//               Up to 2.8x faster computational fluid dynamics performance in NASA
//               TetrUSS.
//             </Text>
//           </li>
//         </ol>
//         <Text variant="body2">
//           Featuring the 16-core GPU in M1 Pro and the 32-core GPU in M1 Max, the
//           14-inch MacBook Pro transforms graphics-intensive workflows with:
//         </Text>
//         <ol style={{ margin: '0 0 20px' }}>
//           <li>
//             <Text variant="body2">
//               Up to 9.2x faster 4K render in Final Cut Pro with M1 Pro, and up
//               to 13.4x faster with M1 Max.
//             </Text>
//           </li>
//           <li>
//             <Text variant="body2">
//               Up to 5.6x faster combined vector and raster GPU performance in
//               Affinity Photo with M1 Pro, and up to 8.5x faster with M1 Max.
//             </Text>
//           </li>
//           <li>
//             <Text variant="body2">
//               Up to 3.6x faster effect render in Blackmagic Design DaVinci
//               Resolve Studio with M1 Pro, and up to 5x faster with M1 Max.
//             </Text>
//           </li>
//         </ol>
//         <Text variant="body2">
//           Both M1 Pro and M1 Max are supercharged with a 16-core Neural Engine,
//           allowing users to enjoy faster ML tasks, including:
//         </Text>
//         <ol style={{ margin: '0 0 40px' }}>
//           <li>
//             <Text variant="body2">
//               Up to 8.7x faster object tracking performance in Final Cut Pro
//               with M1 Pro, and up to 11.5x faster with M1 Max.
//             </Text>
//           </li>
//           <li>
//             <Text variant="body2">
//               Up to 7.2x faster scene edit detection in 1080p ProRes 422 video
//               in Adobe Premiere Pro.
//             </Text>
//           </li>
//           <li>
//             <Text variant="body2">
//               Up to 2.6x faster performance when selecting subjects in images in
//               Adobe Photoshop.
//             </Text>
//           </li>
//         </ol>
//         <img
//           src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Final-Cut-Pro_10182021_big_carousel.jpg.large_2x.jpg"
//           alt="Macbook Pro"
//           style={imgStyle}
//         />
//         <Text tag="small" variant="small" style={figcaptionStyle}>
//           The 16-inch MacBook Pro has up to 1.7x faster 8K render in Final Cut
//           Pro with M1 Pro, and up to 2.9x faster with M1 Max.
//         </Text>
//         <Text tag="h2" variant="h5" style={{ marginBottom: 20 }}>
//           Up to 2.6x faster performance when selecting subjects in images in
//           Adobe Photoshop.
//         </Text>
//         <Text variant="body2">
//           Up to 2.6x faster performance when selecting subjects in images in
//           Adobe Photoshop.
//         </Text>
//       </Grid>
//     </Grid>
//   );
// };

// Example.args = {
//   title: 'Example',
//   description: 'Example from Figma',
// };
