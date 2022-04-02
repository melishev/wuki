/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components';

import i18n from '../../i18n';

export default function layoutComponent() {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { supportedLngs } = i18n.options;

  useEffect(() => {
    if (supportedLngs.includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      navigate(-1, { replace: true });
    }
  }, [lang]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
