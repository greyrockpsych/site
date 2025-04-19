import { Link } from 'react-router-dom';

import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Clinicians() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (clinicianId, sectionType) => {
    const key = `${clinicianId}-${sectionType}`;
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const clinicians = [
    {
      id: 'colleen',
      name: 'Dr. Colleen Mondo',
      image: '/Dr_Colleen_Mondo.jpg',
      role: 'Licensed Psychologist',
      description: `Dr. Mondo specializes in comprehensive psychological evaluations for children, 
      adolescents, and adults. She has extensive experience in diagnostic assessment, particularly 
      in areas of neurodevelopmental disorders, learning difficulties, and complex mental health 
      presentations.`,
     assessmentApproach: `Dr. Mondo brings extensive expertise to evaluating common childhood concerns such as ASD, ADHD, mood disorders, anxiety, and OCD. She doesn’t just view assessment as a means of gathering information. She considers it a supportive intervention in its own right. Her objective is to empower individuals and their families by facilitating insights into challenges, uncovering strengths, and providing guidance for the future. Recognizing the potential stress associated with participating in an evaluation, Dr. Mondo strongly prioritizes a warm and thoughtful approach to the assessment process. She actively collaborates with individuals and their families to address their unique needs.`,
     personalNote: `Originally from the Finger Lakes region of upstate New York, I received my Ph.D. in clinical psychology from Binghamton University. I completed my predoctoral internship at the University of Rochester Medical Center (URMC) in Rochester, NY, followed by a postdoctoral residency with the Child and Family Team at the Department of Mental Health and Addiction Medicine Recovery Services in Walnut Creek, CA. \n\nAfter receiving enthusiastic reviews of the quality of life in Fort Collins from friends and family, my husband and I decided to make it our home. During my free time, I enjoy attending concerts (especially punk and metal shows), tending to my garden, and playing tabletop games. You might occasionally spot me at local game shops, participating in Magic the Gathering tournaments.`
    },
    {
      id: 'liz',
      name: 'Dr. Liz Leggiadro',
      image: '/Dr_Liz_Leggiadro.jpg',
      role: 'Licensed Psychologist',
      description: `Dr. Leggiadro provides thorough psychological evaluations with a focus on 
      understanding each individual's unique strengths and challenges. She specializes in working 
      with both children and adults, bringing a comprehensive approach to assessment and diagnosis.`,
     assessmentApproach: `When it comes to assessment, my goal is getting to know your child or teen as well as I can! I will ask SO many questions (get ready) so I can gain the most accurate and comprehensive picture of who they are. I also look forward to brainstorming with folks about how to accomplish the things they want in their lives and how to avoid the things they really don’t want.`,
     personalNote: `On a personal note, in my free time I LOVE spending time listening to true crime podcasts and reading mystery novels. I am also a Dateline fanatic (don’t judge me!) I also love to spend time outside and playing and hanging out with my toddler, partner and our two huskies! We have SO much dog hair at our house : ) I look forward to working with you!`
    },
    {
      id: 'joselyne',
      name: 'Dr. Joselyne Perry',
      image: '/Dr_Joselyn_Perry.jpg',
      role: 'Licensed Psychologist',
      description: `Dr. Perry offers psychological evaluations in both English and Spanish, 
      specializing in culturally-informed assessment practices. She brings expertise in working 
      with diverse populations and addressing complex diagnostic questions.`,
     assessmentApproach: `Dr. Perry currently conducts psychological assessment with adults, including ADHD, autism, mood, and personality evaluations. She specializes in complex trauma and multiply-neurodivergent individuals. Dr. Perry’s approach is collaborative and holistic, where clients’ individual lived experience is seen as just as important as psychological tests.`,
     personalNote: `I love psychological assessment. I have had a lot of amazing jobs over the course of my life, including slinging ice cream on the beach and leading trail rides through the gorgeous Santa Barbara mountains. And yet, here I am doing this! Why?! I have always found people fascinating. Hearing someone’s history and helping them put the pieces together to help explain current issues is both intellectually stimulating and personally satisfying. There is absolute truth to the idea that helping others also helps oneself. I look forward to meeting you and hearing all about your life experiences – then together we can explore the best way forward.\n\nWhen I’m not at work, I enjoy spending time with my family, reading, reading, reading more, gardening, and running through the foothills with my alarmingly gigantic golden retriever, Winston.`
    }
  ];

  return (
    // Added pt-32 for fixed navbar, changed background to white, adjusted pb
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral">
            Meet our team of experienced licensed psychologists dedicated to providing 
            comprehensive psychological evaluations and assessments.
          </p>
        </div>

        {/* New Intro Section */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:items-center">
          <div>
            <img 
              src="/group.jpg" 
              alt="Greyrock Psychological Services Team" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Welcome to Greyrock Psychological Services
            </h3>
            <p className="text-neutral leading-7">
              Our team is dedicated to providing comprehensive and compassionate psychological assessments for individuals across the lifespan in Fort Collins, Colorado. We believe in a research-informed, "whole person" approach, carefully considering each client's unique history, strengths, and challenges. When you work with Greyrock, you can expect a supportive and transparent experience aimed at gaining clarity and identifying personalized pathways for growth and well-being, whether you're seeking understanding for a child's developmental journey or navigating complex questions as an adult. Our goal is to offer valuable insights and practical recommendations to empower you and those who support you.
            </p>
          </div>
        </div>

        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {clinicians.map((clinician) => (
            <article
              key={clinician.id}
              // Removed id={clinician.id} from here
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  id={clinician.id} // Added id={clinician.id} here
                  src={clinician.image}
                  alt={clinician.name}
                  className="aspect-square sm:aspect-[3/4] sm:h-auto w-full rounded-2xl bg-gray-100 object-cover object-top"
                />
              </div>
              <div className="max-w-xl">
                {/* Removed the div wrapping the role span */}
                <div className="group relative mt-8"> {/* Added mt-8 here */}
                  <h3 className="text-lg font-semibold leading-6 text-primary"> {/* Removed mt-3 */}
                    {clinician.name}
                  </h3>
                  {/* Moved role span here, changed text color, added margin */}
                  <span className="text-white bg-primary rounded-full px-3 py-1.5 font-medium text-xs mt-2 inline-block">
                    {clinician.role}
                  </span>
                  <p className="mt-4 text-sm leading-6 text-neutral"> {/* Adjusted margin */}
                    {clinician.description}
                  </p>

                  {/* Expandable Sections */}
                  <div className="mt-6 space-y-4">
                    {/* Assessment Approach Section */}
                    <div>
                      <button
                        onClick={() => toggleSection(clinician.id, 'approach')}
                        className="flex justify-between items-center w-full text-left text-sm font-medium text-primary hover:text-primary-dark focus:outline-none"
                      >
                        <span>{clinician.name}'s Assessment Approach</span>
                        {openSections[`${clinician.id}-approach`] ? (
                          <ChevronUpIcon className="h-5 w-5 text-primary" />
                        ) : (
                          <ChevronDownIcon className="h-5 w-5 text-primary" />
                        )}
                      </button>
                      {openSections[`${clinician.id}-approach`] && (
                        <div className="mt-2 text-sm text-neutral whitespace-pre-line"> {/* Added whitespace-pre-line */}
                          {clinician.assessmentApproach}
                        </div>
                      )}
                    </div>

                    {/* Personal Note Section */}
                    <div>
                      <button
                        onClick={() => toggleSection(clinician.id, 'note')}
                        className="flex justify-between items-center w-full text-left text-sm font-medium text-primary hover:text-primary-dark focus:outline-none"
                      >
                        <span>A Note From {clinician.name}</span>
                        {openSections[`${clinician.id}-note`] ? (
                          <ChevronUpIcon className="h-5 w-5 text-primary" />
                        ) : (
                          <ChevronDownIcon className="h-5 w-5 text-primary" />
                        )}
                      </button>
                      {openSections[`${clinician.id}-note`] && (
                        <div className="mt-2 text-sm text-neutral whitespace-pre-line"> {/* Added whitespace-pre-line */}
                          {clinician.personalNote}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Office Manager Section */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl text-center mb-10">
            Our Office Manager
          </h3>
          <div className="flex justify-center">
            <article className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg ring-1 ring-gray-900/10 max-w-lg">
              <div className="relative w-56 h-56 mb-6"> {/* Increased image size */}
                <img
                  src="/Ana_Pasini.jpg" 
                  alt="Ana Pasini"
                  className="w-full h-full rounded-full object-cover" /* Rounded image */
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold leading-6 text-primary">
                  Ana Pasini
                </h4>
                <span className="text-white bg-primary rounded-full px-3 py-1.5 font-medium text-xs mt-2 inline-block">
                  Office Manager
                </span>
                <p className="mt-4 text-sm leading-6 text-neutral">
                  Ana Pasini has been a Bilingual Care Coordinator in the community for many years, providing support and advocacy for clinicians and families. She is proud to be a member of the team, helping to provide answers and referrals – it’s the key to better outcomes for children and families (both Spanish and English). She is the proud mother of two wonderful grown daughters, enjoys being outdoors with dogs, reading, volunteering, and yoga.
                </p>
              </div>
            </article>
          </div>
        </div>


        <div className="mx-auto max-w-2xl text-center mt-20">
            <img 
              src="/clinicians.jpg" 
              alt="Greyrock Clinicians"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-lg mb-8"
            />

          <p className="text-lg leading-8 text-neutral">
            Our clinicians are committed to providing thorough, evidence-based psychological 
            assessments in a supportive and professional environment. Each member of our team 
            brings unique expertise and specialized training to meet diverse assessment needs.
          </p>
        </div>

          {/* Schedule Now Button - Moved Below Final Paragraph */}
          <div className="mt-8 text-center"> {/* Removed mb-8 */}
            <Link
              to="/contact"
              className="inline-block rounded-md bg-[#efaa1e] px-10 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#efaa1e]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efaa1e]"
            >
              Schedule Now!
            </Link>
          </div>

      </div>
    </div>
  );
}