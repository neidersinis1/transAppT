/* eslint-disable react/prop-types */
import Sidebar from '@/components/Sidebar'

import '@/index.css'
import Header from '@/components/Header'
import MobileFooter from '@/components/Footer'

export default  function Layout ({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <MobileFooter />
    </>   
  )
}
