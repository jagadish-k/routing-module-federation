import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import PageA from './pages/page-a';
import PageB from './pages/page-b';
import Home from './pages/home';
import './styles.css';

const RemoteRootApp = React.lazy(() => import('remote/RemoteRootApp'))

export default function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h2>This the root App in Host</h2>
      <nav className="horizontal-nav">
        <Link to="/page-a">Host/Page A</Link>
        <Link to="/page-b">Host/Page B</Link>
        <Link to="/remote">Remote</Link>
      </nav>
      <React.Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-a" element={<PageA />} />
          <Route path="/page-b" element={<PageB />} />
          <Route path="/remote/*" element={<RemoteRootApp />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}
