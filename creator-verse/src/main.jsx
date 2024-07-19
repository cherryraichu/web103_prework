import React from 'react'
import ReactDOM from 'react-dom/client'

import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ShowCreators from "./pages/ShowCreators.jsx"
import ViewCreator from "./pages/ViewCreator.jsx"


import './index.css'

import {BrowserRouter,Route,Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<ShowCreators/>}/>
        <Route index={false} path="AddCreator" element={<AddCreator/>}/>
        <Route index={false} path="EditCreator/:id" element={<EditCreator/>}/>
        <Route index={false} path="ViewCreator/:id" element={<ViewCreator/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
