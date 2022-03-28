/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Grid, Text } from '@wuki-ui/react';
import { colors } from '@wuki-ui/theme';

export default function header() {
  const nav = [
    {
      name: 'Getting start',
      items: [
        {
          title: 'Introduction',
          slug: 'introduction',
        },
        {
          title: 'Installation',
          slug: 'installation',
        },
        {
          title: 'Icons',
          slug: 'icons',
        },
      ],
    },
    {
      name: 'General',
      items: [
        {
          title: 'Text',
          slug: 'component/text',
        },
      ],
    },
    {
      name: 'Layout',
      items: [
        {
          title: 'Grid',
          slug: 'component/grid',
        },
      ],
    },
    {
      name: 'Components',
      items: [
        {
          title: 'Code',
          slug: 'component/code',
        },
        {
          title: 'Button',
          slug: 'component/button',
        },
      ],
    },
  ];

  return (
    <Grid tag="aside" col={3}>
      {nav.map(({ name, items }) => (
        <ul key={name}>
          <Text tag="small" style={{ color: colors.grey[300] }}>{name}</Text>
          {items.map(({ title, slug }) => (
            <li key={slug}>
              <NavLink to={slug}><Text variant="body2">{title}</Text></NavLink>
            </li>
          ))}
        </ul>
      ))}
    </Grid>
  );
}
