import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import LearningUseState from './pages/LearningUseState'
import SinglePage from './pages/SinglePage'
import Edit from './pages/EditPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/single/:id' element={<SinglePage />} />
      <Route path='/edit/:id' element={<Edit />} />

      <Route path='/learning-usestate' element={<LearningUseState />} />
    </Routes>
    </BrowserRouter>
  )
}

// "/" - this is index page 
/*
Project - CRUD 
/ - Home page
/create - Create Page 
/edit - Edit Page 
/blog - Single Blog Page 
*/
export default App
