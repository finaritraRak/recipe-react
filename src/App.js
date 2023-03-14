import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Gallery from './Pages/Gallery/Gallery'
import GalleryCreate from './Pages/Gallery/Create'

import Blog from './Pages/blog/Blog'
import BlogCreate from './Pages/blog/Create'
import BlogEdit from './Pages/blog/Edit'
import BlogDetail from './Pages/blog/Detail'


import Articles from './Pages/Articles/Articles'
import Create from './Pages/Articles/Create'
import Detail from './Pages/Articles/Detail'
import Edit from './Pages/Articles/Edit'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <>
  
    <Navbar/>

    <Routes>
       <Route path='/' element={<Home/>}></Route>
       
       <Route path='/article' element={<Articles/>}></Route>
       <Route path='/article/create' element={<Create/>}></Route>
       <Route path='/article/detail/:id' element={<Detail/>}></Route>
       <Route path='/article/edit/:id' element={<Edit/>}></Route>

       <Route path='/blog' element={<Blog/>}></Route>
       <Route path='/blog/create' element={<BlogCreate/>}></Route>
       <Route path='/blog/edit/:id' element={<BlogEdit/>}></Route>
        <Route path='/blog/detail/:id' element={<BlogDetail/>}></Route> 
       
       <Route path='/gallery' element={<Gallery/>}></Route>
       <Route path='/gallery/create' element={<GalleryCreate/>}></Route>
            
    </Routes>

  
   </>
  );
  
}

export default App;
