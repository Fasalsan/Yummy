import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lucnh from './itemsMenu/Lucnh'
import Breakfast from './itemsMenu/Breakfast'
import Diner from './itemsMenu/Diner'

export default function MenuRoute() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/lucnh" element={<Lucnh />} />
          <Route path="/break" element={<Breakfast />} />
          <Route path="/diner" element={<Diner />} />
        </Routes>
      </BrowserRouter>
    )
}
