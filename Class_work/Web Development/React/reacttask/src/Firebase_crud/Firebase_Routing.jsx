import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Firebase_Table_handeling from './Firebase_Table_handeling'
import Firebase_Form_handeling from './Firebase_Form_handeling'
import Firebase_Header from './Firebase_Header'

function Firebase_Routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Firebase_Header/><Firebase_Table_handeling/></>}></Route>
                <Route path="/add_data" element={<><Firebase_Header/><Firebase_Form_handeling/></>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Firebase_Routing