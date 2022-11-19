import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from './Layout';
import Index from './pages/Index';
import Justificativos from './pages/Justificativos'
import Solicitudes from './pages/Solicitudes'

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path='/' element={<Index />} exact/>
          <Route path='/Justificativos' element={<Justificativos/>} exact />
          <Route path='/Solicitudes' element={<Solicitudes/>} exact />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
