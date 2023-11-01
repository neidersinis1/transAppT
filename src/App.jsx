import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Messages from './pages/Messages'
import LayoutRouter from './pages/LayoutRouter'
import Users from './pages/Users'
import Header from './components/Header'
import Footer from './components/Footer'
import Auth from './pages/Auth';

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LayoutRouter />}>
          <Route path='/' element={<Layout />} />
          <Route path='messages' element={<Messages />} />
          <Route path='users' element={<Users />} />
          <Route path='auth' element={<Auth />} />
        </Route>
      </Routes>
      <Footer />
    </> 
  )
}

export default App
