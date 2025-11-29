import { Routes , Route } from 'react-router-dom'

import { HomePage, LoginPage, OrderPage , TablePage } from './pages/index.js'
import Layout from './layouts/Layout.jsx'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='order' element={<OrderPage/>}/>
          <Route path='table' element={<TablePage/>}/>
          <Route path='login' element={<LoginPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App