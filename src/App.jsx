import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <div className="bg-white min-h-screen text-brand-ink antialiased">
      <Navbar />
      <Home />
      <Footer />
      <FloatingActions />
    </div>
  );
}
