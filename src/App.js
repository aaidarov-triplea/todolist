import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import HomePage from "./pages/home-page"
import FormPage from "./pages/form-page"

function App() {

  return (
    <BrowserRouter>    
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/form" element={<FormPage />}/>
    </Routes>
    
    </BrowserRouter>
  )

}


export default App
