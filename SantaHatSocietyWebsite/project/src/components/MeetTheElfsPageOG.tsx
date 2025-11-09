import React, { useState } from 'react';
import { useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface MeetTheElfsPageProps {
  onBack: () => void;
  onNavigateToAbout: () => void;
  onNavigateToEvents: () => void;
}

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

      {/* Main Content */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">Meet the Elfs</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated volunteers who make the magic happen
            </p>
          </div>

          <div className="text-center text-gray-600 text-lg">
            Content coming soon...
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheElfsPage;
