import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white scroll-smooth">


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image
    src="/profile.jpg"
    alt="Sai Eshwar"
    width={150}
    height={150}
    className="rounded-full border-4 border-indigo-500 shadow-lg shadow-indigo-500/30 mb-6"
    priority
  />
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Hello, I am <span className="text-indigo-400">Sai Eshwar</span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl">
        Software Engineer | Cloud-Native Builder | AI Enthusiast 
        </p>
        <div className="mt-6 flex gap-6 justify-center">
  <a
    href="https://www.linkedin.com/in/sai-eshwar-reddy-gangireddy-87821014b/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-400 hover:text-indigo-300 transition-colors text-2xl"
  >
    <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
  </a>
  <a
    href="https://github.com/Eshwar20"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-400 hover:text-indigo-300 transition-colors text-2xl"
  >
    <i className="fab fa-github"></i> {/* GitHub Icon */}
  </a>
</div>

        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          <a href="#skills" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 hover:scale-105 transform rounded-full text-white font-semibold transition-all duration-300"
          >
            Skills
          </a>
          <a href="#work" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 hover:scale-105 transform rounded-full text-white font-semibold transition-all duration-300"
          >
            Work
          </a>
          <a href="#education" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 hover:scale-105 transform rounded-full text-white font-semibold transition-all duration-300"
          >
            Education
          </a>
          <a href="#projects" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 hover:scale-105 transform rounded-full text-white font-semibold transition-all duration-300"
          >
            Projects
          </a>
          <a href="#certifications" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 hover:scale-105 transform rounded-full text-white font-semibold transition-all duration-300"
          >
            Certifications
          </a>
        </div>
      </section>

      {/* Skills Section */}


      <section id="skills" className="min-h-screen flex flex-col items-center justify-center p-8">
    
  <h2 className="text-4xl font-bold mb-10 text-center">Technical Skills</h2>

  {/* Languages */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Languages</h3>
    <div className="flex flex-wrap gap-3">
      {['Python', 'Java', 'JavaScript', 'C#', 'C'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

  {/* Machine Learning */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Machine Learning</h3>
    <div className="flex flex-wrap gap-3">
      {['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

  {/* Cloud Technologies and Version Control */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Cloud Technologies and Version Control</h3>
    <div className="flex flex-wrap gap-3">
      {['AWS', 'Git', 'GitLab'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

  {/* Project Management and SDLC */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Project Management and SDLC</h3>
    <div className="flex flex-wrap gap-3">
      {['JIRA', 'Agile Methodology', 'Behavior Driven Development', 'Test Driven Development'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

  {/* Test Frameworks and Tools */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Test Frameworks and Tools</h3>
    <div className="flex flex-wrap gap-3">
      {['JMeter', 'Cucumber', 'Selenium', 'Postman API Testing', 'Seetest Automation'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

  {/* Development Frameworks */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Development Frameworks</h3>
    <div className="flex flex-wrap gap-3">
      {['Spring Boot', '.Net'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

  {/* Databases */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Databases</h3>
    <div className="flex flex-wrap gap-3">
      {['MySQL', 'MongoDB'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

  {/* DevOps */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">DevOps</h3>
    <div className="flex flex-wrap gap-3">
      {['Docker', 'Kubernetes', 'Terraform', 'GitLab CI/CD'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

  {/* Web Technologies */}
  <div className="mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Web Technologies</h3>
    <div className="flex flex-wrap gap-3">
      {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'ReactJs', 'NextJs'].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-white text-sm">{skill}</span>
      ))}
    </div>
  </div>

</section>


      {/* Work Section */}



      <section id="work" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-950 text-white">
  <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>

  <div className="space-y-12 w-full max-w-4xl">

    {/* Tarrant County */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">Tarrant County, Texas</h3>
      <p className="text-sm text-gray-400">Senior Application Programmer Analyst | Fort Worth, TX | October 2024 – Present</p>
      <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-sm">
        <li>Engineered RESTful APIs in C#/.NET enhancing data retrieval by 40%.</li>
        <li>Built responsive UI with Razor and React.js, eliminating major crash causes.</li>
        <li>Created over 15 detailed test plans, reducing post-deployment defects by 40%.</li>
        <li>Implemented CI/CD pipelines with Octopus Deploy for consistent releases.</li>
        <li>Enhanced reporting through complex stored procedures in SSMS.</li>
        <li>Developed ETL pipelines and data workflows using Microsoft Fabric.</li>
        <li>Optimized caching with Redis and event-driven architecture with Kafka.</li>
      </ul>
    </div>

    {/* University of Louisiana */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">University of Louisiana at Lafayette</h3>
      <p className="text-sm text-gray-400">Graduate Teaching Assistant | Lafayette, LA | August 2022 – May 2024</p>
      <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-sm">
        <li>Researched and developed a custom linguistic keyboard using Keyman covering 99% IPA symbols.</li>
        <li>Built a robust SQL query generation and execution system for request management.</li>
      </ul>
    </div>

    {/* Tata Consultancy Services */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300" >
      <h3 className="text-2xl font-semibold text-indigo-400">Tata Consultancy Services (TCS)</h3>
      <p className="text-sm text-gray-400">Software Engineer | Hyderabad, India | June 2019 – June 2022</p>
      <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-sm">
        <li>Automated testing workflows using Cucumber BDD and Selenium (92% automation achieved).</li>
        <li>Optimized test environments using Docker containers (30% faster setup).</li>
        <li>Created and deployed REST APIs and Microservices using Java Spring Boot.</li>
        <li>Wrote JUnit tests with Mockito, improving bug detection by 40%.</li>
        <li>Built backend AWS SDK integrations for faster deployments (30% improvement).</li>
        <li>Enhanced operational efficiency by 30% through vital internal tool improvements.</li>
        <li>Mastered debugging via Graylog, CloudWatch, Splunk; reduced issue resolution time by 25%.</li>
        <li>Experience with AWS Serverless stack (Lambda, API Gateway, DynamoDB).</li>
      </ul>
    </div>

  </div>
</section>


      {/* Education Section */}


      <section id="education" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
  <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>

  <div className="space-y-8 w-full max-w-3xl">

    {/* UL Lafayette */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">University of Louisiana at Lafayette</h3>
      <p className="text-lg text-gray-300">Master of Science in Computer Science</p>
      <p className="text-sm text-gray-400">Lafayette, LA | August 2022 – May 2024</p>
    </div>

    {/* JNTU */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">Jawaharlal Nehru Technological University</h3>
      <p className="text-lg text-gray-300">Bachelor of Technology in Computer Science</p>
      <p className="text-sm text-gray-400">Hyderabad, India | August 2015 – May 2019</p>
    </div>

  </div>
</section>


      {/* Projects Section */}


      <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-950 text-white">
  <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

  <div className="space-y-8 w-full max-w-4xl">

    {/* Project 1 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">Medical Examiner Public Portal (Tarrant County)</h3>
      <p className="text-gray-300 mt-2">
        Developed and integrated RESTful APIs using C# and .NET, optimized SQL Server stored procedures, and built database synchronization systems using Windows Task Scheduler. Boosted reporting speed by 60% with Redis caching and Kafka queues.
      </p>
    </div>

    {/* Project 2 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">Human Services Financial Assistance Portal (Tarrant County)</h3>
      <p className="text-gray-300 mt-2">
        Revamped frontend UI aligning with modern standards, created ETL pipelines in Microsoft Fabric, and executed 15+ test plans improving .NET module quality by 40%.
      </p>
    </div>

    {/* Project 3 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">Share Management Backend (TCS - Vodafone GmbH)</h3>
      <p className="text-gray-300 mt-2">
        Developed integration for Neo kids smartwatches allowing guest user access to location, images, geofencing, and device activities. Handled backend service integration and defect resolution.
      </p>
    </div>

    {/* Project 4 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">Voice Chat Management Microservice (TCS - Vodafone GmbH)</h3>
      <p className="text-gray-300 mt-2">
        Enabled voice call and chat features for IoT users through Functional, Integration, and E2E Testing using Selenium, Cucumber, and Postman; integrated with GitLab CI/CD.
      </p>
    </div>

    {/* Project 5 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">SIM Microservice (TCS - Vodafone GmbH)</h3>
      <p className="text-gray-300 mt-2">
        Provided a unified entry point for IoT device cellular connectivity. Performed full Functional and E2E Testing and integrated automated pipelines using GitLab CI/CD.
      </p>
    </div>

  </div>
</section>


      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
  <h2 className="text-4xl font-bold mb-10 text-center">Certifications</h2>

  <div className="space-y-8 w-full max-w-4xl">

    {/* Certification 1 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
      <h3 className="text-2xl font-semibold text-indigo-400">Docker & Kubernetes: The Practical Guide</h3>
      <p className="text-sm text-gray-400 mt-2">Platform: Udemy</p>
    </div>

    {/* Certification 2 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">AWS Cloud Practitioner</h3>
      <p className="text-sm text-gray-400 mt-2">Platform: Udemy</p>
    </div>

    {/* Certification 3 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">Supervised Machine Learning: Regression & Classification</h3>
      <p className="text-sm text-gray-400 mt-2">Platform: Coursera</p>
      <a href="https://www.coursera.org/account/accomplishments/verify/ZHTBSYG701XA" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-400 hover:underline mt-2 inline-block">
        View Certificate ➔
      </a>
    </div>

    {/* Certification 4 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">Advanced Learning Algorithms</h3>
      <p className="text-sm text-gray-400 mt-2">Platform: Coursera</p>
      <a href="https://www.coursera.org/account/accomplishments/verify/JIBDQEF2IZZU" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-400 hover:underline mt-2 inline-block">
        View Certificate ➔
      </a>
    </div>

    {/* Certification 5 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"    >
      <h3 className="text-2xl font-semibold text-indigo-400">DevOps Engineer, SRE Learning Path</h3>
      <p className="text-sm text-gray-400 mt-2">Platform: Google Cloud Platform (GCP)</p>
    </div>

  </div>
</section>

<a
  href="#"
  className="fixed bottom-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110"
  title="Back to Top"
>
  ↑
</a>

      {/* Footer */}
      <footer className="flex justify-center items-center h-16 text-xs text-gray-500">
        © 2025 Sai Eshwar. All rights reserved.
      </footer>
    </main>
  );
}
