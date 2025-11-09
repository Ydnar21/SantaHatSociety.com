import React, { useState } from 'react';
import { useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface MeetTheElfsPageProps {
  onBack: () => void;
  onNavigateToAbout: () => void;
  onNavigateToEvents: () => void;
}

interface Elf {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  color: string;
}

const elfs: Elf[] = [
    {
      name: 'Marykate B.',
      title: 'Founder & Head Elf',
      description: 'Founded the Santa Hat Society in 2011 and continues to lead the team with passion and holiday spirit. Her vision is the driving force behind the organization.',
      imageSrc: '/mkandjennifer.jpg',
      color: 'bg-red-600',
    },
    {
      name: 'Jennifer L.',
      title: 'Co-Organizer & Event Coordinator',
      description: 'Manages all of our major community outreach programs and ensures every event runs smoothly, bringing the magic of the holidays to life. Jennifer focuses on making every family feel special.',
      imageSrc: '/mkandjennifer.jpg',
      color: 'bg-pink-600',
    },
    {
      name: 'Emily E.',
      title: 'Chief Toy Wrapper',
      description: 'A dedicated Elf who oversees the North Pole Workshop, ensuring every gift is perfectly wrapped and ready for delivery for a family in need.',
      imageSrc: '/emilyelf.jpg',
      color: 'bg-indigo-600',
    },
    {
      name: 'Alex D.',
      title: 'Logistics & Outreach Elf',
      description: 'The silent hero, Alex coordinates all of our supply chain and community partner logistics, making sure gifts get where they need to go on time.',
      imageSrc: '/fam.jpg',
      color: 'bg-orange-600',
    },
];

const MeetTheElfsPage: React.FC<MeetTheElfsPageProps> = ({ onBack, onNavigateToAbout, onNavigateToEvents }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-green-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 lg:h-24">
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full overflow-hidden bg-white p-1 shadow-md">
                <img
                  src="/santahatsocietyupdate.png"
                  alt="Santa Hat Society Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-800 whitespace-nowrap">Santa Hat Society</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center space-x-1 md:space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8">
              <button
                onClick={() => {
                  onBack();
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 0);
                }}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium px-1 sm:px-2 whitespace-nowrap"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigateToAbout();
                  setIsMenuOpen(false);
                }}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium px-1 sm:px-2 whitespace-nowrap"
              >
                About
              </button>
              <button
                onClick={() => {
                  onNavigateToEvents();
                  setIsMenuOpen(false);
                }}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium px-1 sm:px-2 whitespace-nowrap"
              >
                Events
              </button>
              <button
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium border-b-2 border-red-600 px-1 sm:px-2 whitespace-nowrap"
              >
                Meet the Elfs
              </button>
              <button
                onClick={() => window.open('https://www.google.com', '_blank')}
                className="bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 2xl:px-8 2xl:py-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-full hover:bg-red-700 transition-colors duration-200 font-medium whitespace-nowrap"
              >
                Donate Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 p-1"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white/95 backdrop-blur-md border-t w-full">
            <nav className="px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  onBack();
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 0);
                }}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigateToAbout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  onNavigateToEvents();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                Events
              </button>
              <button
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2 border-l-4 border-red-600 pl-4"
              >
                Meet the Elfs
              </button>
              <button
                onClick={() => window.open('https://www.google.com', '_blank')}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="/santahatsocietyupdate.png" 
              alt="Santa Hat Society Logo" 
              className="h-24 sm:h-28 lg:h-32 w-auto mx-auto mb-4 sm:mb-6"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-4 sm:mb-6 px-4">
            Meet the Elfs
            <span className="block font-normal text-red-600">Our Dedicated Team Making Magic Happen</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Our volunteers are the heart of the Santa Hat Society, working year-round to spread joy and goodwill.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
            {elfs.map((elf, index) => (
              <div 
                key={elf.name} 
                className="relative bg-white rounded-xl shadow-xl overflow-visible transform hover:scale-[1.02] transition-all duration-300 group pt-16"
              >
                {/* Festive Background Accent */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${elf.color} group-hover:h-3 transition-all duration-300 rounded-t-xl`}></div>

                <div className="p-6 text-center">
                  {/* Profile Picture Container (Positioned to break out of the card top) */}
                  <div className="relative w-32 h-32 mx-auto -mt-32 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                    <img
                      src={elf.imageSrc}
                      alt={elf.name}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Decorative Heart Icon overlay */}
                    <div className={`absolute top-0 right-0 p-1 rounded-full bg-white/90 shadow-md transform translate-x-1 -translate-y-1`}>
                      <Heart className={`w-4 h-4 text-red-600`} />
                    </div>
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-1 mt-4">{elf.name}</h3>
                  <p className={`text-sm font-semibold text-white px-3 py-1 inline-block rounded-full ${elf.color} shadow-md`}>
                    {elf.title}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed min-h-20">
                    {elf.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the Team!</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              The more Elfs we have, the more magic we can create. If you have a passion for spreading holiday cheer, consider volunteering with us!
            </p>
            <button
              onClick={() => window.open('https://www.google.com', '_blank')}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Become an Elf Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheElfsPage;
