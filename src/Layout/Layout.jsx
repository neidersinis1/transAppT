/* eslint-disable react/prop-types */
import Sidebar from '@/components/Sidebar'
import { Outlet } from "react-router-dom";
import '@/index.css'

export default  function Layout ({ children }) {
  return (
    <>
      <Sidebar />
      {children}s
      <Outlet />
    </>   
  )
}
