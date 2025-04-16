export default function Clinicians() {
  const clinicians = [
    {
      id: 'colleen',
      name: 'Dr. Colleen Mondo',
      image: '/Dr_Colleen_Mondo.jpg',
      role: 'Licensed Psychologist',
      description: `Dr. Mondo specializes in comprehensive psychological evaluations for children, 
      adolescents, and adults. She has extensive experience in diagnostic assessment, particularly 
      in areas of neurodevelopmental disorders, learning difficulties, and complex mental health 
      presentations.`
    },
    {
      id: 'liz',
      name: 'Dr. Liz Leggiadro',
      image: '/Dr_Liz_Leggiadro.jpg',
      role: 'Licensed Psychologist',
      description: `Dr. Leggiadro provides thorough psychological evaluations with a focus on 
      understanding each individual's unique strengths and challenges. She specializes in working 
      with both children and adults, bringing a comprehensive approach to assessment and diagnosis.`
    },
    {
      id: 'joselyne',
      name: 'Dr. Joselyne Perry',
      image: '/Dr_Joselyn_Perry.jpg',
      role: 'Licensed Psychologist',
      description: `Dr. Perry offers psychological evaluations in both English and Spanish, 
      specializing in culturally-informed assessment practices. She brings expertise in working 
      with diverse populations and addressing complex diagnostic questions.`
    }
  ];

  return (
    // Added pt-32 for fixed navbar, changed background to white, adjusted pb
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Clinicians
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral">
            Meet our team of experienced licensed psychologists dedicated to providing 
            comprehensive psychological evaluations and assessments.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {clinicians.map((clinician) => (
            <article 
              key={clinician.id} 
              id={clinician.id}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={clinician.image}
                  alt={clinician.name}
                  className="aspect-[3/4] w-full rounded-2xl bg-gray-100 object-cover"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-primary-light bg-primary rounded-full px-3 py-1.5 font-medium">
                    {clinician.role}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-primary">
                    {clinician.name}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-neutral">
                    {clinician.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center mt-20">
          <p className="text-lg leading-8 text-neutral">
            Our clinicians are committed to providing thorough, evidence-based psychological 
            assessments in a supportive and professional environment. Each member of our team 
            brings unique expertise and specialized training to meet diverse assessment needs.
          </p>
        </div>
      </div>
    </div>
  );
}