/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { Grid } from '@wuki-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Main, Introduction, Installation, Icons, Error404,
} from './pages';
import { LayoutDefault, LayoutGuide, LayoutComponent } from './layouts';

function App() {
  return (
    <Grid container>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<LayoutDefault />}>
          <Route index element={<Main />} />
          <Route path="guide" element={<LayoutGuide />}>
            <Route index element={<Navigate to="introduction" replace />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="installation" element={<Installation />} />
            <Route path="icons" element={<Icons />} />
            <Route path="component/:componentName" element={<LayoutComponent />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Grid>
  );
}

export default App;
