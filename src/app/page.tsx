// import Image from "next/image";

// App.tsx
const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <Pillars />
        <PhotoGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="#about"
              className="hover:text-blue-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#vision"
              className="hover:text-blue-300 transition duration-300"
            >
              Vision
            </a>
          </li>
          <li>
            <a
              href="#pillars"
              className="hover:text-blue-300 transition duration-300"
            >
              Pillars
            </a>
          </li>
          by
        </ul>
      </nav>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="https://media.licdn.com/dms/image/v2/D5603AQH8uOBf_eNUyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726406190879?e=1732147200&v=beta&t=JBFD-kg8seJ-SZBj9n5-jRMjLA_npJbeZiXB61uf6LU"
          alt={""}
          width={"250"}
          height={"250"}
          className="w-36 h-36 rounded-full mx-auto"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Joel Callistus Barboza
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">
          For Vice President 2024-2025
        </h2>
        <button className="bg-white text-blue-800 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Joel
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          As a dedicated member of our campus, I believe that we all deserve a
          university experience that empowers us, inspires us and prepares us
          for the future. This is why I am committed to creating a Student
          Council that is inclusive, accountable and driven by change.
        </p>
      </div>
    </section>
  );
};

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My Vision
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          In the role of Vice President, I aim to serve as a bridge between the
          administration and students, ensuring that your voices are not only
          heard but acted upon. The challenges we face as students today are
          unique, and I am ready to meet them with bold solutions and a
          collaborative spirit.
        </p>
      </div>
    </section>
  );
};

const Pillars: React.FC = () => {
  const pillars = [
    {
      title: "Hostel & Facilities",
      points: [
        "Bringing the mess' quality to acceptable standards",
        "Facilities like Gym and Recreational room to be kept open 24x7",
        "Every hostel block will have common vacuums and other cleaning equipment",
        // ... add more points
      ],
    },
    {
      title: "Academic",
      points: [
        "Have students poll on desired electives (pre-registration of electives)",
        "Diversity in lecture distribution",
        "Re-introduction of Peer-Assisted Learning",
        // ... add more points
      ],
    },
    {
      title: "Extra Curriculars",
      points: [
        "Reworking of the Constitution to make it acceptable to the General Body",
        "Involve general body in council meetings",
        "Revive TEDx @BITS Dubai",
        // ... add more points
      ],
    },
  ];

  return (
    <section id="pillars" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My 3 Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <ul className="list-disc list-inside">
                {pillar.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© 2024 Joel Callistus Barboza Campaign. All rights reserved.</p>
      </div>
    </footer>
  );
};

// src/components/PhotoGrid.tsx

import Image from "next/image";

const PhotoGrid: React.FC = () => {
  const images = [
    { src: "/IMG_0490.png", alt: "Campus life image 1" },
    { src: "/IMG_0491.png", alt: "Campus life image 2" },
    { src: "/IMG_0492.png", alt: "Campus life image 3" },
    { src: "/IMG_0493.png", alt: "Campus life image 4" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-screen-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900">
          Campus Life
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md w-full h-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                height={"500"}
                width={"500"}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
