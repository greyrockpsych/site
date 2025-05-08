// Removed useState import
import { Link } from 'react-router-dom'; // Import Link
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    // Added pt-32 for fixed navbar, changed background to white, adjusted pb
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral">
            We're here to help. Reach out to schedule an evaluation or learn more about our services.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Updated Contact Form (Now on Left) */}
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            encType="multipart/form-data"
            className="mx-auto w-full max-w-xl lg:mx-0 lg:pr-8"
          >
            {/* Hidden input for Netlify form name */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary">
                  Name <span className="text-red-600">*</span>
                </label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-primary/50 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">
                  Email <span className="text-red-600">*</span>
                </label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-primary/50 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input type="tel" name="phone" id="phone" required className="mt-1 block w-full rounded-md border-primary/50 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
              </div>

              {/* Preferred Contact Method (Dropdown) */}
              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-primary">
                  Preferred Method of Contact <span className="text-red-600">*</span>
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  required
                  className="mt-1 block w-full rounded-md border-primary/50 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                >
                  <option value="" disabled>Select one option</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </select>
              </div>

              {/* Preferred Time of Day (Dropdown) */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-primary">
                  Preferred Time of Day for Contact <span className="text-red-600">*</span>
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  required
                  className="mt-1 block w-full rounded-md border-primary/50 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                >
                  <option value="" disabled>Select one option</option>
                  <option value="Morning">Morning</option>
                  <option value="Day">Day</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              {/* Service Requested */}
              <fieldset>
                <legend className="block text-sm font-medium text-primary">
                  Service Requested <span className="text-red-600">*</span>
                </legend>
                <p className="text-xs text-neutral mb-1">(Check all that apply)</p>
                <div className="mt-2 space-y-2">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input id="service-adult" name="services[]" type="checkbox" value="Adult Assessment" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="service-adult" className="font-medium text-neutral">Adult Assessment</label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input id="service-child" name="services[]" type="checkbox" value="Child Assessment" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="service-child" className="font-medium text-neutral">Child Assessment</label>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input id="service-both" name="services[]" type="checkbox" value="Both" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="service-both" className="font-medium text-neutral">Both</label>
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* Insurance */}
              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-primary">
                  Insurance <span className="text-red-600">*</span>
                </label>
                <input type="text" name="insurance" id="insurance" required placeholder="e.g., RMHP Medicaid, Out-of-Network, Private Pay" className="mt-1 block w-full rounded-md border-primary/50 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
              </div>

              {/* Reason */}
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-primary">
                  Please share a few sentences about the services you're seeking and why. <span className="text-red-600">*</span>
                </label>
                <textarea name="reason" id="reason" rows={3} required className="mt-1 block w-full rounded-md border-primary/50 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary">
                  Additional Message (Optional)
                </label>
                <textarea name="message" id="message" rows={4} className="mt-1 block w-full rounded-md border-primary/50 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
              </div>
            </div>

            {/* Submission Info */}
            <div className="mt-8 text-center text-sm text-neutral">
              <p>You can expect a response within 24 hours on business days.</p>
              <p>Review our <Link to="/privacy-policy" className="font-medium text-primary hover:underline">Privacy Policy</Link> here.</p>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="block w-full rounded-full bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Information (Now on Right) */}
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:pl-8 lg:border-l lg:border-gray-200">
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

                  {/* Map Buttons */}
                  <div className="mt-4 flex gap-x-4">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=2627+Redwing+Road+Suite+130+Fort+Collins+CO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-x-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent/80"
                    >
                      <img src="/googlemaps.png" alt="Google Maps icon" className="h-4 w-auto" />
                      Google Maps
                    </a>
                    <a
                      href="http://maps.apple.com/?q=2627+Redwing+Road+Suite+130+Fort+Collins+CO+80526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-x-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent/80"
                    >
                      <img src="/applemaps.png" alt="Apple Maps icon" className="h-4 w-auto" />
                      Apple Maps
                    </a>
                  </div>

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
                Spanish language psychological services available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}