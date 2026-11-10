
import './App.css'
import MainLayout from './components/layout/mainlayout'
import AboutPage from './pages/about'
import HomePage from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
      {/* <Home></Home> */}
    </>
  )
}

export default App
