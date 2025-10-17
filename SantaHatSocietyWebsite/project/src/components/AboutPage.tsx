import React, { useState } from 'react';
import { useEffect } from 'react';
import { ArrowLeft, Calendar, Users, Gift, Heart, Award, MapPin, Menu, X } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onNavigateToEvents: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, onNavigateToEvents }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineEvents = [
    {
      year: '2011',
      title: 'The Beginning',
      description: 'Founded by Marykate Brushafer. Started with just a few families and a handful of volunteers.',
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      year: '2015',
      title: 'Officially became a 501(c) non-profit Organization',
      description: 'Received 501(c)(3) status. Expanded the number of families helped and expanded our network of Elfs (volunteers).',
      icon: Users,
      color: 'bg-orange-500'
    },
    {
      year: '2016',
      title: 'Big Auction Items',
      description: 'Our largest auction ever is live, alongside thrilling cash raffles! Prizes range from an Apple Watch and a COACH purse to a signed Peyton Manning jersey!',
      icon: Gift,
      color: 'bg-amber-500'
    },
    {
      year: '2018',
      title: 'AmazonSmile Initiative',
      description: 'Partnered with AmazonSmile, making it easier for supporters to give back while shopping online. Along with our yearly cash raffles and auctions, this milestone year brought record growth in donations, allowing us to reach more families than ever before.',
      icon: Gift,
      color: 'bg-yellow-500'
    },
    {
      year: '2020',
      title: 'Expanding Reach in and outside the Community',
      description: 'Adapted quickly to COVID-19 challenges with contactless delivery and virtual events. Our yearly cash raffles and auctions grew bigger than ever, raising more support for families in need. We also formed new partnerships within the local community, expanding our reach and strengthening our ability to help families during challenging times.',
      icon: MapPin,
      color: 'bg-teal-500'
    },
    {
      year: '2022',
      title: 'Support through more Community Partnerships!',
      description: 'With our cash raffles and auctions continuing to grow and strong support from community partnerships, 2022 marked our record growth to date. This incredible milestone allowed us to reach and support more families than ever before.',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      year: '2025',
      title: 'First ever Benefit Bash!',
      description: 'We hosted our first-ever Benefit Bash, featuring silent auctions, live auctions, a reverse raffle, delicious food, drinks, and tons of fun! The event was a huge success and marked our biggest milestone yet, bringing the community together in an unforgettable way to support families in need. In addition, construction of the new North Pole was officially completed. This exciting new space will now serve as the main workpoint for Santa Hat Society moving forward',
      icon: Users,
      color: 'bg-indigo-500'
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
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium border-b-2 border-red-600 px-1 sm:px-2 whitespace-nowrap"
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
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2 border-b-2 border-red-600"
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
            Our Story
            <span className="block font-normal text-red-600">12 Years of Making Magic</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From a small neighborhood initiative to a regional force for good, 
            discover how the Santa Hat Society has grown to touch thousands of lives.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
       <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">Our Journey</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-orange-500"></div>

            {/* Timeline Events */}
            <div className="space-y-8 sm:space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div key={event.year} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="ml-4 sm:ml-6 lg:ml-8 bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 flex-1 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <span className="text-2xl sm:text-3xl font-bold text-red-600 mb-2 sm:mb-0 sm:mr-4">{event.year}</span>
                        {event.year === '2025' ? (
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Santa Hats Biggest Events to date!</h3>
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">First ever Benefit Bash!</h4>
                                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                                  We hosted our first-ever Benefit Bash, featuring silent auctions, live auctions, a reverse raffle, delicious food, drinks, and tons of fun! The event was a huge success and marked our biggest milestone yet, bringing the community together in an unforgettable way to support families in need.
                                </p>
                              </div>
                              <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Construction of Santa`s Workshop Complete!</h4>
                                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                                  Construction of a Santa`s Workshop was completed! This will now serve as the main workpoint for Santa Hat Society moving forward.
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{event.title}</h3>
                        )}
                      </div>
                      {event.year !== '2025' && (
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;