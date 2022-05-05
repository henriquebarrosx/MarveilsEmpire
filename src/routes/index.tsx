import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { SignIn } from '@pages/SignIn';
import { NotFoundPage } from '@pages/404';
import { SpellList } from '@pages/Spells/List';
import { SpellDetails } from '@pages/Spells/Details';
import { SpellCreation } from '@pages/Spells/Creation';

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="spells" element={<SpellList />} />
        <Route path="spells/new" element={<SpellCreation />} />
        <Route path="spells/:id" element={<SpellDetails />} />
        <Route path="" element={<Navigate to="spells" />} />
      </Routes>
    </BrowserRouter>
  )
}