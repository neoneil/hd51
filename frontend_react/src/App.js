import './App.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Students from './components/Students/Students'
import OneStudent from './components/OneStudent/OneStudent'
import Posts from './components/Posts/Posts'
import SubNav from './components/TeachingModules/SubNav'
import NotFound from './components/NotFound/NotFound'
import PdfReader from './components/TeachingModules/PdfReader'
import Sidebar from './components/Sidebar/Sidebar'
import PhoneticChart from './components/PhoneticChart/PhoneticChart'
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/students/:id' element={<OneStudent/>} />
        <Route path='/subnav' element={<SubNav/>} />
        <Route path='/pdfReader' element={<PdfReader/>} />
        <Route path='/sidebar' element={<Sidebar/>} />
        <Route path='/phoneticChart' element={<PhoneticChart/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
