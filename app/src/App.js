import HeaderComponent from './components/HeaderComponent'
import Main from './pages/Main'
import Details from './pages/Details'
import AddEdit from './pages/AddEdit'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return(
    <div className='flex flex-col h-screen font-normal'>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/phones/:id" element={<Details />} />
          <Route path="/edit/:id" element={<AddEdit />} />
          <Route path="/add/" element={<AddEdit />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  )
}

export default App;
