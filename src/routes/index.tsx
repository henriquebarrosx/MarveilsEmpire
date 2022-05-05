import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from '../App';
import { SignIn } from '@pages/SignIn';
import { SpellList } from '@pages/Spells/List';
import { SpellDetails } from '@pages/Spells/Details';
import { SpellCreation } from '@pages/Spells/Creation';

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="spells" element={<SpellList />} />
        <Route path="spells/new" element={<SpellCreation />} />
        <Route path="spells/:id" element={<SpellDetails />} />
      </Routes>
    </BrowserRouter>
  )
}