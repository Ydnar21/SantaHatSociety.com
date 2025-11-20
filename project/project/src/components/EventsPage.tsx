import React, { useState } from 'react';
import { useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Gift, Heart, Menu, X } from 'lucide-react';

interface EventsPageProps {
  onBack: () => void;
  onNavigateToAbout: () => void;
  onNavigateToElves?: () => void;
}

const EventsPage: React.FC<EventsPageProps> = ({ onBack, onNavigateToAbout, onNavigateToElves }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      
      id: 1,
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      spots: '',
      icon: Gift,
      color: 'bg-red-500'
    },
];

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
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium border-b-2 border-red-600 px-1 sm:px-2 whitespace-nowrap"
              >
                Events
              </button>
              {onNavigateToElves && (
                <button
                  onClick={() => {
                    onNavigateToElves();
                    setIsMenuOpen(false);
                  }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium px-1 sm:px-2 whitespace-nowrap"
                >
                  Meet the Elves
                </button>
              )}
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
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2 border-b-2 border-red-600"
              >
                Events
              </button>
              {onNavigateToElves && (
                <button
                  onClick={() => {
                    onNavigateToElves();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
                >
                  Meet the Elves
                </button>
              )}
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
            Upcoming Events
            <span className="block font-normal text-red-600">Join Us in Making a Difference</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Be part of our community events and help us spread joy throughout the year. 
            Every volunteer makes a difference!
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">Mark Your Calendar</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Events Grid */}
          <div className="space-y-6 sm:space-y-8">
            {upcomingEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Event Icon and Date */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 ${event.color} rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0`}>
                          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <div className="text-center lg:text-left">
                          <div className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{event.date}</div>
                          <div className="text-sm sm:text-base text-gray-600 flex items-center justify-center lg:justify-start">
                            <Clock className="w-4 h-4 mr-1" />
                            {event.time}
                          </div>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 text-center lg:text-left">{event.title}</h3>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-center lg:text-left">
                          <div className="flex items-center justify-center lg:justify-start text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm sm:text-base">{event.location}</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start text-red-600 font-medium">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="text-sm sm:text-base">{event.spots}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 text-center lg:text-left">
                          {event.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                          <button
                            onClick={() => window.open('https://www.google.com', '_blank')}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium text-sm sm:text-base"
                          >
                            Save My Spot!
                          </button>
                          <button className="text-red-600 px-6 py-2 rounded-lg border border-red-600 hover:bg-red-50 transition-colors duration-200 font-medium text-sm sm:text-base">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Can't Make It to an Event?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            There are many ways to support our mission! Consider making a donation or spreading the word about our work in the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <button
              onClick={() => window.open('http://santa-hat-society.square.site/', '_blank')}
              className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Make a Donation
            </button>
            <button
              onClick={() => window.open('https://www.google.com', '_blank')}
              className="w-full sm:w-auto text-red-600 px-8 py-3 rounded-lg border border-red-600 hover:bg-red-50 transition-colors duration-200 font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
