/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { Grid } from '@wuki-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Header, Aside } from './components';
import { Start, Installation, Icons } from './pages';

function App() {
  return (
    <Grid container>
      <Header />
      <Aside />
      <Grid tag="main" col={10} offset={8}>
        <Routes>
          <Route path="/start" element={<Start />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/icons" element={<Icons />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;