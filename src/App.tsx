import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './views'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
