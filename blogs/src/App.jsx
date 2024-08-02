import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Main from './component/Main/Main'
import SideEffect from './component/SideEffect/SideEffect'
import {Route, Routes} from 'react-router-dom';
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Services from './component/Services/Services'

function App() {

  
  return (
    <>  
        <Header />
          <Routes>
            <Route path='/'  element={<Main/>} />
            <Route path='/about'  element={<About/>} />
            <Route path='/contact'  element={<Contact/>} />
            <Route path='/services'  element={<Services/>} />

          </Routes>
        <Footer/>
    </>
  )
}

{/* <Main />
<SideEffect/> */}

export default App
