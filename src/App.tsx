import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Home, About, NetterDSQL, BackendDevelopment, FrontendDevelopment, DatabaseAdministration, VirtualizationInfrastructure, NetworkInfrastructure, VDIMigration, DesktopFleetSolutioning, ObservabilitySRE } from '@/pages';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/netter-dsql" element={<NetterDSQL />} />
          <Route path="/services/backend" element={<BackendDevelopment />} />
          <Route path="/services/frontend" element={<FrontendDevelopment />} />
          <Route path="/services/dba" element={<DatabaseAdministration />} />
          <Route path="/services/virtualization" element={<VirtualizationInfrastructure />} />
          <Route path="/services/networking" element={<NetworkInfrastructure />} />
          <Route path="/services/vdi" element={<VDIMigration />} />
          <Route path="/services/desktop-fleet" element={<DesktopFleetSolutioning />} />
          <Route path="/services/observability-sre" element={<ObservabilitySRE />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;