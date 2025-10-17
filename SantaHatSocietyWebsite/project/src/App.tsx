import React, { useState, useEffect } from 'react';
import { Heart, Gift, Users, Mail, Phone, MapPin, Menu, X, Star, Snowflake, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import MeetTheElfsPage from './components/MeetTheElfsPage';
import FallingSnowflakes from './components/FallingSnowflakes';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'events' | 'elfs'>(() => {
    const savedPage = sessionStorage.getItem('currentPage');
    return (savedPage as 'home' | 'about' | 'events' | 'elfs') || 'home';
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    sessionStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  // Sample photos - replace with actual organization photos
  const photos = [
    {
      id: 1,
      src: "/mkandjennifer.jpg",
      alt: "MK and Jennifer at Santa Hat Society event",
      caption: "MK and Jennifer, key organizers of the Santa Hat Society, at our community event"
    },
    {
      id: 2,
      src: "/santabills.jpg",
      alt: "Fun Prizes",
      caption: "Fun Raffle Prizes"
    },
    {
      id: 3,
      src: "/fam.jpg",
      alt: "Announcing Raffle Winners",
      caption: "Announcing the Raffle Winners!"
    },
    {
      id: 4,
      src: "/reverseraffle.jpg",
      alt: "Reverse Raffle",
      caption: "Reverse Raffle Fun!"
    },
    {
      id: 5,
      src: "/shopping.jpg",
      alt: "Volunteers buying gifts for the holiday season!",
      caption: "Getting gifts for the holiday season!"
    },
    {
      id: 6,
      src: "/santaaht.jpg",
      alt: "Santa Hat Society",
      caption: "Santa Hat Society"
    },
    {
      id: 7,
      src: "/joshallen.jpg",
      alt: "Josh Allen",
      caption: "Josh Allen!!!!"
    },
    {
      id: 8,
      src: "/familiesgifts.jpg",
      alt: "Gifts",
      caption: "Gifts for families"
    },
    {
      id: 9,
      src: "/stonybrook.jpg",
      alt: "stonybrook",
      caption: "Thanks StonyBrook!"
    },
    {
      id: 10,
      src: "/lionsclub.jpg",
      alt: "lions club",
      caption: "Thanks Lions Club!"
    },
    {
      id: 11,
      src: "/therapy.jpg",
      alt: "Therapy",
      caption: "Much Love!"
    },
    {
      id: 12,
      src: "/flashback.jpg",
      alt: "Prizes",
      caption: "Prizes!"
    },
    {
      id: 13,
      src: "/emilyelf.jpg",
      alt: "Elf",
      caption: "Elfs are always preparing"
    },
    {
      id: 14,
      src: "/newsheddecor.jpg",
      alt: "New Shed",
      caption: "New Decor for the NEW Santa's Workshop!"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    // Scroll to top when navigating to about page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    // Scroll to top when navigating to home page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  if (currentPage === 'about') {
    return <AboutPage onBack={() => setCurrentPage('home')} onNavigateToEvents={() => setCurrentPage('events')} onNavigateToElfs={() => setCurrentPage('elfs')} />;
  }

  if (currentPage === 'events') {
    return <EventsPage onBack={() => setCurrentPage('home')} onNavigateToAbout={() => setCurrentPage('about')} onNavigateToElfs={() => setCurrentPage('elfs')} />;
  }

  if (currentPage === 'elfs') {
    return <MeetTheElfsPage onBack={() => setCurrentPage('home')} onNavigateToAbout={() => setCurrentPage('about')} onNavigateToEvents={() => setCurrentPage('events')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-green-50">
      {/* Falling Snowflakes */}
      <FallingSnowflakes />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
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
                onClick={navigateToHome}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium border-b-2 border-red-600 px-1 sm:px-2 whitespace-nowrap"
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium px-1 sm:px-2 whitespace-nowrap"
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('events')}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium px-1 sm:px-2 whitespace-nowrap"
              >
                Events
              </button>
              <button
                onClick={() => setCurrentPage('elfs')}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium px-1 sm:px-2 whitespace-nowrap"
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
                  navigateToHome();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  setCurrentPage('events');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
              >
                Events
              </button>
              <button
                onClick={() => {
                  setCurrentPage('elfs');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center py-8">
          <div className="space-y-8 sm:space-y-12">
            {/* Logo */}
            <div className="inline-block">
              <img 
                src="/santahatsocietyupdate.png" 
                alt="Santa Hat Society Logo" 
                className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto mx-auto"
              />
            </div>
            
            {/* Main Content */}
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight px-2">
                Bringing Holiday Magic
                <span className="block font-normal text-red-600">to Families in Need</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                We believe every family deserves to experience the warmth and joy of the holiday season, 
                regardless of their circumstances.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto px-4">
                <button
                  onClick={() => window.open('https://www.google.com', '_blank')}
                  className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  Donate Now
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="w-full sm:w-auto text-red-600 px-6 sm:px-8 py-3 rounded-lg border border-red-600 hover:bg-red-50 transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">Our Story in Photos</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              See the impact of your support through the smiles, joy, and community spirit 
              captured in these moments from our programs and events.
            </p>
          </div>
          
          {/* Slideshow Container */}
          <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
              {/* Main Image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <img
                  src={photos[currentSlide].src}
                  alt={photos[currentSlide].alt}
                  className="w-full h-full object-contain object-center bg-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                      {photos[currentSlide].caption}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : photos.length - 1)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-400/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-500/80 transition-all duration-200 group shadow-lg border-2 border-gray-300/50"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform duration-200 drop-shadow-lg" />
              </button>
              
              <button
                onClick={() => setCurrentSlide(currentSlide < photos.length - 1 ? currentSlide + 1 : 0)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-400/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-500/80 transition-all duration-200 group shadow-lg border-2 border-gray-300/50"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform duration-200 drop-shadow-lg" />
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-gray-500 text-xs sm:text-sm">
                {currentSlide + 1} of {photos.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">Our Mission</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The Santa Hat Society believes that every family deserves to experience the magic of the holidays. 
              We work year-round to ensure no child goes without presents, no family goes without a meal, 
              and no one feels forgotten during the season of giving.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">Compassionate Care</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                We approach every family with dignity and respect, ensuring they feel valued and supported 
                throughout their journey with us.
              </p>
            </div>
            
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">Community Focused</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                Our programs are designed to strengthen communities by bringing neighbors together 
                in the spirit of giving and mutual support.
              </p>
            </div>
            
            <div className="text-center group sm:col-start-1 sm:col-end-3 lg:col-start-auto lg:col-end-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">Creating Magic</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                We believe in the power of small gestures to create lasting memories and bring 
                genuine joy to those who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-400/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-500/80 transition-colors duration-200 shadow-lg border-2 border-gray-300/50"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" />
            </button>
            
            <button
              onClick={() => setSelectedPhoto(selectedPhoto > 0 ? selectedPhoto - 1 : photos.length - 1)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gray-400/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-500/80 transition-colors duration-200 shadow-lg border-2 border-gray-300/50"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-lg" />
            </button>
            
            <button
              onClick={() => setSelectedPhoto(selectedPhoto < photos.length - 1 ? selectedPhoto + 1 : 0)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gray-400/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-500/80 transition-colors duration-200 shadow-lg border-2 border-gray-300/50"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-lg" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                className="w-full h-[60vh] sm:h-[70vh] object-contain object-center bg-gray-100"
              />
              <div className="p-4 sm:p-6">
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {photos[selectedPhoto].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Impact Section */}
      <section id="impact" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">Our Impact</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Thanks to our incredible community of supporters, we've been able to make a real difference 
              in the lives of thousands of families.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-md mx-auto">
            <div className="text-center bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-1 sm:mb-2">600+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Families Served</div>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-1 sm:mb-2">14</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Have questions about our programs or want to get involved? We'd love to hear from you!
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 text-center max-w-2xl w-full">
            <div className="text-white">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Email Us</h3>
              <p className="text-sm sm:text-base text-gray-300 break-all">santahatsocietyinc@gmail.com</p>
            </div>
            
            <div className="text-white">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-sm sm:text-base text-gray-300">Dansville, NY - US</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/santahatsocietyupdate.png" 
                alt="Santa Hat Society Logo" 
                className="h-5 sm:h-6 w-auto"
              />
              <span className="text-sm sm:text-base font-bold">Santa Hat Society</span>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-xs sm:text-sm text-gray-400 px-4 md:px-0">
                © 2011 Santa Hat Society. All rights reserved. | 501(c)(3) Non-Profit Organization
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;