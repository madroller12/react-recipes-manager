import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { AddPage } from './pages/AddPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="items/:id" element={<DetailPage />} />
        <Route path="add" element={<AddPage />} />
        <Route path="*" element={<p style={{ color: 'red' }}>Pagina non trovata (404)</p>} />
      </Route>
    </Routes>
  );
}