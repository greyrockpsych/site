import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = {
    children: {
      title: 'Pediatric Psychological Evaluations',
      description: `Our comprehensive pediatric psychological evaluations help identify developmental 
      concerns, learning difficulties, and mental health issues. We take a well-rounded approach to 
      understand both challenges and strengths.`,
      features: [
        'Developmental assessments',
        'Learning disability evaluations',
        'ADHD assessments',
        'Autism spectrum evaluations',
        'Behavioral and emotional assessments',
        'Cognitive and academic testing',
        'Comprehensive reporting and recommendations',
        'School accommodation guidance'
      ]
    },
    adults: {
      title: 'Adult Psychological Evaluations',
      description: `We provide thorough, research-informed evaluations taking a "whole person" 
      approach. Our assessments can range from comprehensive diagnostic evaluations to more 
      focused assessments for specific concerns.`,
      features: [
        'Diagnostic clarity assessments',
        'ADHD evaluations',
        'Autism spectrum assessments',
        'Learning disability testing',
        'Personality assessments',
        'Cognitive functioning evaluations',
        'Detailed reporting and recommendations',
        'Treatment planning guidance'
      ]
    }
  };

  return (
    // Added pt-32 for fixed navbar, changed background to white, adjusted pb
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8"> {/* Removed py-24 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral">
            We offer comprehensive psychological assessment services for both children and adults, 
            providing thorough evaluations and actionable recommendations.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {Object.values(services).map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-sm p-8 ring-1 ring-gray-200"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-neutral mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-6 w-5 flex-none text-accent-green"
                      aria-hidden="true"
                    />
                    <span className="text-neutral">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center mt-20">
          <div className="rounded-2xl bg-primary-light p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              ¡Hablamos Español!
            </h3>
            <p className="text-neutral">
              We are committed to providing culturally-informed psychological services.
              Spanish language evaluations are available with our providers.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center mt-12">
          <p className="text-sm text-neutral">
            Note: All evaluations are tailored to meet individual needs and may vary in scope 
            and duration. Please contact us to discuss your specific assessment needs and to 
            schedule an initial consultation.
          </p>
        </div>
      </div>
    </div>
  );
}