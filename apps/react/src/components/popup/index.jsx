/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './index.scss';
import { Text } from '@wuki-ui/react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

export default function popup() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const langs = [
    {
      title: 'English',
      code: 'en',
    },
    {
      title: 'Russian',
      code: 'ru',
    },
  ];

  return (
    <ul className="popup">
      {langs.map(({ title, code }) => (
        <li key={code} onClick={() => navigate(pathname.replace(/[^:/\s]+/, code), { replace: true })} className={i18n.language === code ? 'active' : ''}>
          <Text variant="body2">{title}</Text>
        </li>
      ))}
      <li>
        <Text tag="small">Add more</Text>
      </li>
    </ul>
  );
}
