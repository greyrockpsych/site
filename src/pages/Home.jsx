import { Link } from 'react-router-dom';
import { UserIcon, PencilIcon } from '@heroicons/react/24/outline'; // Removed AcademicCapIcon

export default function Home() {
  const clinicians = [
    {
      name: 'Dr. Colleen Mondo',
      image: '/Dr_Colleen_Mondo.jpg',
      link: '/clinicians#colleen'
    },
    {
      name: 'Dr. Liz Leggiadro',
      image: '/Dr_Liz_Leggiadro.jpg',
      link: '/clinicians#liz'
    },
    {
      name: 'Dr. Joselyne Perry',
      image: '/Dr_Joselyn_Perry.jpg',
      link: '/clinicians#joselyne'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* New Hero Section - MemoryStitcher Style */}
      <div
        // Removed min-h-screen, flex, items-center. Added padding.
        className="relative bg-cover bg-center pt-40 pb-24 lg:pt-56 lg:pb-32"
        style={{ backgroundImage: "url('/hero3.jpg')" }}
      >
        {/* Re-added full overlay */}
        <div className="absolute inset-0 bg-[#087e72]/75"></div>
        
        {/* Content Container - Removed mx-auto */}
        {/* Made hero content narrower */}
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          {/* Text Box Overlay - Made even more transparent */}
          <div className="max-w-xl rounded-xl bg-white/60 p-8 shadow-lg text-left"> {/* Changed to bg-white/60 */}
            <p className="text-base font-semibold text-primary mb-2">
              Welcome to Greyrock
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
              We'll help you find your way
            </h1>
            <p className="text-base leading-7 text-neutral mb-8">
              Psychological Assessment Services for Children & Adults in Fort Collins / Northern Colorado.
            </p>
            <div className="flex items-center gap-x-4">
              {/* Learn More Button (Outline Style) */}
              <Link
                to="/services" // Assuming link to services
                className="inline-flex items-center justify-center rounded-md border border-accent px-5 py-2 h-14 text-base font-semibold text-accent shadow-sm hover:bg-accent/10 flex-1" /* Added flex-1 */
              >
                Learn More {/* Removed inner spans */}
              </Link>
              {/* Schedule Now Button (Updated Background) */}
              <Link
                to="/contact" // Assuming link to contact
                // Changed bg and focus outline color to #efaa1e
                className="inline-flex flex-col items-center rounded-md bg-[#efaa1e] px-5 py-2 text-white shadow-sm hover:bg-[#efaa1e]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efaa1e] flex-1" /* Added flex-1 */
              >
                <span className="text-base font-semibold whitespace-nowrap">Schedule Now!</span> {/* Added whitespace-nowrap */}
                <span className="text-xs mt-1">¡Hablamos Español!</span>
              </Link>
            </div>
            {/* Removed separate Hablamos Español paragraph */}
          </div>
        </div>
      </div>

      {/* New Psychological Assessments Section - Reduced Padding */}
      <div className="bg-orange-50 py-5"> {/* Reduced py further */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-base font-semibold leading-7 text-accent">Our Expertise</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Psychological Assessments
            </h2>
            {/* Optional: Add a short paragraph description here if needed */}
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p> */}
          </div>
          <div className="mx-auto mt-8 max-w-none sm:mt-10 lg:mt-12 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Children Assessment Card - Updated Style */}
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/10 overflow-hidden flex flex-col">
                {/* Image and Icon Container */}
                <div className="relative">
                  <img
                    src='/children.jpg' // Updated image
                    alt="Psychological Assessment for Children illustration"
                    className="w-full h-48 object-cover"
                  />
                  {/* Icon */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#efaa1e] shadow-lg">
                       <PencilIcon className="h-8 w-8 text-white" aria-hidden="true" /> {/* Changed to PencilIcon */}
                    </span>
                  </div>
                </div>
                {/* Content Area */}
                <div className="p-8 pt-12 flex-grow flex flex-col"> {/* Added pt-12 for icon overlap */}
                  <h3 className="text-xl font-semibold leading-7 text-primary mb-4 text-center">
                    Psychological Assessment for Children
                  </h3>
                  <p className="text-base leading-7 text-gray-600 flex-grow">
                    At Greyrock, we are excited to offer comprehensive pediatric psychological evaluations. Our evaluations use well-researched tools and techniques to identify potential developmental concerns, learning difficulties, and mental health issues. We prioritize taking a well-rounded approach, aiming to uncover not just the difficulties a child may have but also their strengths and opportunities for growth. Our ultimate goals are to offer constructive insights for parents, educators, and healthcare providers and aid in identifying interventions and supports that best meet a child's unique needs.
                  </p>
                </div>
              </div>

              {/* Adult Assessment Card - Updated Style */}
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/10 overflow-hidden flex flex-col">
                 {/* Image and Icon Container */}
                 <div className="relative">
                  <img
                    src='/adult.jpg' // Updated image
                    alt="Psychological Assessment for Adults illustration"
                    className="w-full h-48 object-cover"
                  />
                  {/* Icon */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#efaa1e] shadow-lg">
                       <UserIcon className="h-8 w-8 text-white" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                 {/* Content Area */}
                 <div className="p-8 pt-12 flex-grow flex flex-col"> {/* Added pt-12 for icon overlap */}
                  <h3 className="text-xl font-semibold leading-7 text-primary mb-4 text-center">
                    Psychological Assessment for Adults
                  </h3>
                  <p className="text-base leading-7 text-gray-600 flex-grow">
                    Adult evaluations at Greyrock are thorough, research-informed, and take a "whole person" approach. Client's lived experience is valued, and special attention is paid to issues that might come up around neurodivergence, trauma, and life history. We offer comprehensive assessments for individuals who are seeking diagnostic clarity due to case complexity, but we also offer shorter or more tailored assessments for clients who have more specific questions or needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Meet Our Clinicians Section */}
      <div className="bg-orange-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
             <p className="text-base font-semibold leading-7 text-accent">Our Team</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Meet Our Clinicians
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-3">
            {clinicians.map((clinician) => (
              <Link
                key={clinician.name}
                to={clinician.link}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/10 transition-shadow hover:shadow-xl"
              >
                <div className="flex-shrink-0">
                  <img className="aspect-square sm:h-auto w-full object-cover object-top" src={clinician.image} alt={clinician.name} /> {/* Changed to aspect-square on mobile */}
                </div>
                {/* Restructured content area */}
                <div className="bg-white p-6">
                  <div className="flex items-center justify-between"> {/* Flex row for name and arrow */}
                    <p className="text-xl font-semibold text-primary">{clinician.name}</p>
                    <span className="inline-flex items-center justify-center rounded-full bg-accent p-2 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                  {/* Optional: Add role or short description here if needed */}
                  {/* <p className="mt-3 text-base text-gray-500">{clinician.role || 'Licensed Psychologist'}</p> */}
                </div>
              </Link>
            ))}
          </div>
          {/* Removed the general "Learn More" button as cards link directly */}
        </div>
      </div>
    </div>
  );
}