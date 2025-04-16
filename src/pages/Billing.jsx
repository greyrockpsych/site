import { BanknotesIcon, CreditCardIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Billing() {
  const paymentMethods = [
    {
      icon: CreditCardIcon,
      title: 'Credit Card',
      description: 'We accept all major credit cards for your convenience.'
    },
    {
      icon: BanknotesIcon,
      title: 'Cash & Check',
      description: 'Personal checks and cash payments are accepted.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Insurance',
      description: 'We are out-of-network providers. We can provide documentation for insurance reimbursement.'
    }
  ];

  return (
    // Added pt-32 for fixed navbar, changed background to white, adjusted pb
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8"> {/* Removed py-24 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Billing Information
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral">
            We strive to make our billing process transparent and straightforward.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-primary">
              Payment & Insurance
            </h3>
            <p className="mt-6 text-base leading-7 text-neutral">
              We are out-of-network providers with all insurance companies. Payment is due at the time 
              of service. We will provide you with documentation that you can submit to your insurance 
              company for possible reimbursement.
            </p>
            
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                What's included
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-neutral sm:grid-cols-2 sm:gap-6">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-accent-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Comprehensive evaluation
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-accent-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Detailed written report
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-accent-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Feedback session
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-accent-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Insurance documentation
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {paymentMethods.map((method) => (
            <div key={method.title} className="bg-white rounded-2xl shadow-sm p-8 ring-1 ring-gray-200">
              <method.icon 
                className="h-12 w-12 text-primary mb-6" 
                aria-hidden="true" 
              />
              <h3 className="text-lg font-semibold text-primary mb-2">
                {method.title}
              </h3>
              <p className="text-neutral">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center mt-20">
          <div className="rounded-2xl bg-primary-light p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Questions About Billing?
            </h3>
            <p className="text-neutral mb-6">
              We understand that billing and insurance can be complex. Please don't hesitate to 
              contact us with any questions about our fees or payment policies.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
