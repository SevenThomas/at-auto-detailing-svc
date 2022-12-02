import { Routes, Route } from 'react-router-dom';
import { SectionLayout } from './section-layout';
import { Home } from './pages/home';
import { Gallery } from './pages/gallery';
import { Services } from './pages/services';

export const Root: React.FC<any> = (_props) => {
  return (
    <Routes>
      <Route path="" element={<SectionLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
};
