/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './index.scss';
import { Grid, Text } from '@wuki-ui/react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Popup from '../popup';

export default function header() {
  const [popup, setPopup] = useState(false);
  const navChild = [
    {
      title: 'Guide',
      slug: 'guide',
    },
    {
      title: 'Framework support',
      slug: 'frameworks',
    },
    {
      title: 'Css',
      slug: 'css',
    },
    {
      title: 'Theme',
      slug: 'theme',
    },
    {
      title: 'Utils',
      slug: 'utils',
    },
  ];

  return (
    <Grid tag="header" col={24}>
      <Link to="">
        <Text variant="h6">Wuki UI</Text>
        {/* <img src="https://raw.githubusercontent.com/melishev/wuki/master/.github/assets/logo.svg" alt="logo" /> */}
      </Link>
      <nav>
        {navChild.map(({ title, slug }) => (
          <Link to={`${slug}`} key={slug}>
            <Text variant="body2">{title}</Text>
          </Link>
        ))}
      </nav>
      <div>
        <button type="button" className={popup ? 'active' : ''} onClick={() => setPopup(!popup)}>
          <Globe size={20} strokeWidth={1} />
        </button>
        {popup ? <Popup /> : ''}
        <Text tag="a" href="#" variant="body2">
          Github
        </Text>
        <Text tag="a" href="#" variant="body2">
          npm
        </Text>
      </div>
    </Grid>
  );
}
