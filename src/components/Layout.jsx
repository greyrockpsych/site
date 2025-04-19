import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link to="/">
              <img 
                className="h-48 w-auto"
                src="/logo-trans.png"
                alt="Greyrock Psychological Services" 
              />
            </Link>
            <div className="text-center text-sm text-neutral">
              <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
              {' '} | {' '}
              <Link to="/contact" className="hover:text-primary">Contact Us</Link>
            </div>
            {/* Added Contact Info */}
            {/* Rearranged Contact Info */}
            <div className="text-center text-sm text-neutral mt-4 space-y-1">
              {/* Phone and Fax on one line */}
              <p>
                Phone: <a href="tel:970-698-0439" className="hover:text-primary">(970) 698-0439</a>
                <span className="mx-2">|</span>
                Fax: (844) 691-0060
              </p>
              {/* Address */}
              <p>
                2627 Redwing Road, Suite 130, Fort Collins, CO 80526
                <br />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2627+Redwing+Road+Suite+130+Fort+Collins+CO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark font-semibold"
                >
                  Get Directions
                </a>
              </p>
              <p className="mt-2">¡Hablamos Español!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}