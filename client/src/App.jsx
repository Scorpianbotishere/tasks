import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register';
import Create from './pages/Create';
import Profile from './pages/Profile';
function App() {
  return (
    <div className='container'>
      <Header />
      <Routes exact>
        <Route  path='/' Component={Home} />
        <Route  path='/login' Component={Login} />
        <Route  path='/register' Component={Register} />
        <Route  path='/create' Component={Create} />
        <Route  path='/profile' Component={Profile} />
      </Routes>
    </div>
  )
}

export default App
