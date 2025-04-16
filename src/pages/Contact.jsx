import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    // Added pt-32 for fixed navbar, changed background to white, adjusted pb
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8"> {/* Removed py-24 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral">
            We're here to help. Reach out to schedule an evaluation or learn more about our services.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <div className="space-y-8">
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Office Location</h3>
                  <p className="mt-2 text-neutral">
                    2627 Redwing Road, Suite 130<br />
                    Fort Collins, CO
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Phone</h3>
                  <p className="mt-2 text-neutral">
                    Phone: (970) 698-0439<br />
                    Fax: (844) 691-0060
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Email</h3>
                  <p className="mt-2 text-neutral">
                    For general inquiries and scheduling
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-primary-light p-8">
              <h3 className="text-lg font-semibold text-primary">¡Hablamos Español!</h3>
              <p className="mt-2 text-neutral">
                Spanish language services available with Dr. Joselyne Perry.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl lg:mx-0">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="block w-full rounded-full bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}