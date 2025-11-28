import { Routes , Route } from 'react-router-dom'

import { HomePage, LoginPage, OrderPage } from './pages/index.js'
import Layout from './layouts/Layout.jsx'


const App = () => {
  return (
    <>t 
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='order' element={<OrderPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App