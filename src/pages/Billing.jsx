import { Link } from 'react-router-dom';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'; // Removed unused icons

export default function Billing() {
  // Removed unused paymentMethods array
  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: `Yes! We currently accept Medicaid (Rocky Mountain Health Plans). Many people also have health savings accounts (HSA) which you can use for psychological evaluation. Additionally, we can provide all the information you’ll need to submit out-of-network claims on your own. Please call or reach out on our <Link to="/contact" class="text-primary hover:underline font-semibold">Contact Page</Link> to inquire about your specific insurance coverage.`
    },
    {
      question: 'Can I pay out of pocket?',
      answer: `Yes! If you’d prefer to not utilize your insurance or want to use your out-of-network benefits, we offer direct pay rates for all of our services. Private pay assessments vary widely depending on presenting concern. Please call or reach out on our <Link to="/contact" class="text-primary hover:underline font-semibold">Contact Page</Link> to learn more about our direct rates and more information regarding your specific situation.`
    },
    {
      question: 'Do you offer a sliding scale?',
      answer: `Yes! We offer an income-based sliding scale for uninsured clients and clients who have different insurance. Please call or reach out on our <Link to="/contact" class="text-primary hover:underline font-semibold">Contact Page</Link> to learn more about our sliding scale.`
    }
  ];

  return (
    // Added pt-32 for fixed navbar, changed background to white, adjusted pb
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Billing Information
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral">
            We strive to make our billing process transparent and straightforward.
          </p>
        </div>

        {/* Restored Payment & Insurance Section */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-primary">
              Payment & Insurance Overview
            </h3>
            <p className="mt-6 text-base leading-7 text-neutral">
              Payment is typically due at the time of service unless other arrangements are made. We accept Medicaid (RMHP) and Health Savings Accounts (HSA). For other insurance plans, we are considered out-of-network but can provide documentation ('superbills') for you to submit for potential reimbursement. See the FAQ below for more details.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                What's included in an evaluation fee
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-neutral sm:grid-cols-2 sm:gap-6">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-accent-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Comprehensive evaluation & testing time
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
                Documentation for insurance (if applicable)
              </li>
            </ul>
          </div>
        </div>

        {/* RMHP Medicaid Section */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <img 
              src="/rockymountain.png"
              alt="Rocky Mountain Health Plans Logo"
              className="h-16 w-auto object-contain flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Accepting Colorado Medicaid (RMHP)
              </h3>
              <p className="text-base leading-7 text-neutral">
                We are pleased to accept Colorado Medicaid administered through Rocky Mountain Health Plans (RMHP). If you have RMHP Medicaid coverage, please contact us to discuss scheduling an evaluation.
              </p>
            </div>
          </div>
        </div>


        {/* New Q&A Section */}
        <div className="mx-auto mt-16 max-w-4xl space-y-8">
           <h3 className="text-2xl font-bold tracking-tight text-primary text-center">
              Frequently Asked Questions
            </h3>
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-start gap-x-3 mb-3"> {/* Flex container for icon and question */}
                <QuestionMarkCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <h4 className="text-lg font-semibold leading-7 text-primary">
                  {faq.question}
                </h4>
              </div>
              {/* Use dangerouslySetInnerHTML to render the Link component within the answer */}
              {/* Added pl-9 for indentation matching the icon */}
              <p className="text-base leading-7 text-neutral pl-9" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          ))}
        </div>

        {/* Payment Methods Section Removed */}
        {/* Contact Prompt */}
        <div className="mx-auto max-w-2xl text-center mt-20">
          <div className="rounded-2xl bg-primary-light p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Further Questions?
            </h3>
            <p className="text-neutral mb-6">
              We understand that billing and insurance can be complex. Please don't hesitate to
              contact us with any additional questions about our fees, insurance, or payment policies.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
