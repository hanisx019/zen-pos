import { useState } from 'react'  
import Header from '../components/shared/Header.jsx'
import Footer from '../components/shared/Footer.jsx'
import { Outlet } from 'react-router-dom'
import CreateOrder from '../components/shared/CreateOrder.jsx'

const Layout = () => {

  const [form, setForm] = useState(false)

  return (
    <div>
        <Header />
        <Outlet/>
        <CreateOrder form={form} setForm={setForm} />
        <Footer form={form} setForm={setForm}/>
    </div>
  )
}

export default Layout