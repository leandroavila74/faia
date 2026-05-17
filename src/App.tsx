import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Framework } from './pages/Framework'
import { PhaseDetail } from './pages/PhaseDetail'
import { Trilhas } from './pages/Trilhas'
import { Recursos } from './pages/Recursos'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/framework/:id" element={<PhaseDetail />} />
          <Route path="/trilhas" element={<Trilhas />} />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
