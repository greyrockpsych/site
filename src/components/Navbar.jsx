import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Our Clinicians', href: '/clinicians' },
  { name: 'Our Services', href: '/services' },
  { name: 'Billing', href: '/billing' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // Changed background, removed dark mode
    <header className="fixed inset-x-0 top-0 z-50 bg-[#fff7ed] shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Greyrock Psychological Services</span>
            {/* Increased desktop logo height */}
            <img className="h-16 w-auto" src="/logo-hor-trans.png" alt="Greyrock Psychological Services Logo" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            // Removed dark mode
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              // Removed dark mode
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-accent"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
           {/* Removed "Call us now" text */}
           {/* Wrapped phone and LGBTQ+ text for vertical alignment */}
           {/* Removed items-end to align text left with button */}
           {/* Changed layout to horizontal, phone left */}
           <div className="flex items-center gap-x-4">
             <a href="tel:970-698-0439" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent/80">
               (970) 698-0439
             </a>
             {/* Adjusted LGBTQ+ Friendly text styling */}
             {/* Increased flag size */}
             {/* Removed dark mode */}
             <div className="text-xs text-gray-600"><span className="text-3xl align-middle">🏳️‍🌈</span> LGBTQ+ Friendly</div>
           </div>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" /> {/* Full screen overlay */}
        {/* Changed background for mobile menu */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fff7ed] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Greyrock Psychological Services</span>
              <img
                className="h-8 w-auto"
                src="/logo-hor-trans.png" // Using transparent horizontal logo
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Mobile Menu Body */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                 <a href="tel:970-698-0439" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                   Call: (970) 698-0439
                 </a>
                 {/* Added LGBTQ+ Friendly */}
                 {/* Adjusted LGBTQ+ Friendly text styling for mobile */}
                 <p className="px-3 pt-1 text-sm text-gray-700">
                   <span className="text-2xl align-middle">🏳️‍🌈</span> LGBTQ+ Friendly
                 </p>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}