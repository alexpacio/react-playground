import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Home, About, NetterDSQL } from '@/pages';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/netter-dsql" element={<NetterDSQL />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;