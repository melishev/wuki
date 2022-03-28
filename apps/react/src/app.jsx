/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { Grid } from '@wuki-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import {
  Main, Introduction, Installation, Icons, Error404,
} from './pages';
import { LayoutDefault, LayoutGuide, LayoutComponent } from './layouts';

function App() {
  return (
    <Grid container>
      <Header />
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Main />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/guide" element={<LayoutGuide />}>
          <Route path="introduction" element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
          <Route path="icons" element={<Icons />} />
          <Route path="component/:componentName" element={<LayoutComponent />} />
        </Route>
      </Routes>
    </Grid>
  );
}

export default App;
