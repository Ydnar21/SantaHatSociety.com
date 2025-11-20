import React, { useState } from 'react';
import { useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface MeetTheElvesPageProps {
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

const elfCategories = [
  {
    categoryTitle: 'Officers',
    elves: [
      {
        name: 'Jennifer Brushafer',
        title: 'President',
        description: 'Manages all of our major community outreach programs and ensures every event runs smoothly, bringing the magic of the holidays to life. Jennifer focuses on making every family feel special.',
        imageSrc: '/jenniferbrushafer.jpg',
        color: 'bg-pink-600',
      },
      {
        name: 'James Welch',
        title: 'Vice President',
        description: 'A dedicated elf supporting our mission to bring joy to families.',
        imageSrc: '/jameswelch.jpg',
        color: 'bg-green-600',
      },
      {
        name: 'Shelby Welch',
        title: 'Secretary',
        description: 'A dedicated elf supporting our mission to bring joy to families.',
        imageSrc: '/santahatsocietyupdate.png',
        color: 'bg-teal-500', // No image for Shelby Welch
      },
      {
        name: 'Mary Amelia Welch',
        title: 'Treasurer',
        description: 'A dedicated elf supporting our mission to bring joy to families.',
        imageSrc: '/maryameliawelchTresurer.jpg',
        color: 'bg-purple-500', 
      },
    ]
  },
  {
    categoryTitle: 'Board of Directors',
    elves: [
      {
        name: 'Robert Brushafer',
        title: 'Chairman of the Board',
        description: 'A dedicated elf supporting our mission to bring joy to families.',
        imageSrc: '/rob.jpg',
        color: 'bg-blue-600',
      },
      {
        name: 'Marykate Brushafer',
        title: 'Founder',
        description: 'Founded the Santa Hat Society in 2011 and continues to lead the team with passion and holiday spirit. Her vision is the driving force behind the organization.',
        imageSrc: '/santahatsocietyupdate.png',
        color: 'bg-red-600',
      },
      { name: 'Joseph Wyks', title: 'Board Member', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/joewyks.jpg', color: 'bg-orange-500' },
      { name: 'Steven Sweitzer', title: 'Board Member', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/stevensweitzer.jpg', color: 'bg-yellow-500' },
      { name: 'Kaitlyn Hoag', title: 'Board Member', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/kaitlyn.jpg', color: 'bg-lime-500' },
      { name: 'Lorri Welch', title: 'Board Member', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/lorriwelch.jpg', color: 'bg-cyan-500' },
      { name: 'Mary Ann Merle', title: 'Board Member', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/maryannmerle.jpg', color: 'bg-fuchsia-500' },
    ]
  },
  {
    categoryTitle: 'Executive Elves',
    elves: [
      { name: 'Mark Sick', title: 'Executive Elf', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/marksick.jpg', color: 'bg-gray-500' },
      { name: 'David Sick', title: 'Executive Elf', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/davidsick.jpg', color: 'bg-gray-500' },
      { name: 'Kinsley Sauerbier', title: 'Executive Elf', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/kinsleysauerbier.jpg', color: 'bg-gray-500' },
      { name: 'Mason Sauerbier', title: 'Executive Elf', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/masonsauerbier.jpg', color: 'bg-gray-500' },
      { name: 'Aiden O’Connor', title: 'Executive Elf', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/aidenoconnor.jpg', color: 'bg-gray-500' },
      { name: 'Madisyn Gascon', title: 'Executive Elf', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/madisyngascon.jpg', color: 'bg-gray-500' },
      { name: 'Maranda Morrow', title: 'Executive Elf', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/marandamarrow.png', color: 'bg-gray-500' },
      { name: 'Joclyn Morrow', title: 'Executive Elf', description: 'A dedicated elf supporting our mission to bring joy to families.', imageSrc: '/joclynmarrow.jpg', color: 'bg-gray-500' },
      {
        name: 'Emily Brushafer',
        title: 'Executive Elf',
        description: 'A dedicated elf supporting our mission to bring joy to families.',
        imageSrc: '/santahatsocietyupdate.png',
        color: 'bg-indigo-600',
      },
    ]
  }
]

const MeetTheElvesPage: React.FC<MeetTheElvesPageProps> = ({ onBack, onNavigateToAbout, onNavigateToEvents }) => {
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
                Meet the Elves
              </button>
              <button
                onClick={() => window.open('http://santa-hat-society.square.site/', '_blank')}
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
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2 border-b-2 border-red-600"
              >
                Meet the Elves
              </button>
              <button
                onClick={() => window.open('http://santa-hat-society.square.site/', '_blank')}
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
            Meet the Elves
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
          <div className="space-y-16">
            {elfCategories.map(category => (
              <div key={category.categoryTitle}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{category.categoryTitle}</h2>
                  <div className="w-24 h-1 bg-red-500 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
                  {category.elves.map((elf) => (
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
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed min-h-[60px]">
                          {elf.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheElvesPage;
