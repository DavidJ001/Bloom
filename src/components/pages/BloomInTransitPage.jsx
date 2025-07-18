import React, { useState } from 'react';
import { Plane, ArrowRight, Globe, Camera, Map, Users, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const BloomInTransitPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Bloom in Transit updates!');
    setEmail('');
  };

  const features = [
    {
      icon: Globe,
      title: 'Cultural Exchange',
      description: 'Connect with people from different cultures and expand your worldview through meaningful exchanges.'
    },
    {
      icon: Camera,
      title: 'Travel Stories',
      description: 'Share and discover inspiring travel stories that go beyond typical tourist experiences.'
    },
    {
      icon: Map,
      title: 'Journey Planning',
      description: 'Get practical advice and resources for planning meaningful, transformative travel experiences.'
    }
  ];

  const products = [
    {
      title: 'Cultural Connection Guide',
      description: 'Learn how to make authentic connections and meaningful exchanges while traveling.',
      price: '$19.99',
      image: '/assets/1okZfg8rPIvh.png',
      gumroadUrl: '#'
    },
    {
      title: 'Solo Travel Confidence Course',
      description: 'Build the confidence and skills needed for safe, enriching solo travel adventures.',
      price: '$59.99',
      image: '/assets/Uyx5Tm33ZPfj.png',
      gumroadUrl: '#'
    },
    {
      title: 'Travel Journal Template Pack',
      description: 'Beautiful templates to document your journeys and preserve meaningful memories.',
      price: '$14.99',
      image: '/assets/kfKoqaQDZubE.png',
      gumroadUrl: '#'
    }
  ];

  const destinations = [
    {
      name: 'Tokyo, Japan',
      description: 'Discover the perfect blend of ancient tradition and modern innovation.',
      image: '/assets/1okZfg8rPIvh.png',
      stories: 12
    },
    {
      name: 'Tuscany, Italy',
      description: 'Experience the art of slow living and authentic Italian culture.',
      image: '/assets/Uyx5Tm33ZPfj.png',
      stories: 8
    },
    {
      name: 'Marrakech, Morocco',
      description: 'Immerse yourself in vibrant markets and rich cultural traditions.',
      image: '/assets/kfKoqaQDZubE.png',
      stories: 15
    }
  ];

  const testimonials = [
    {
      name: 'Yuki T.',
      text: 'Bloom in Transit helped me turn my solo travel anxiety into the most transformative experience of my life.',
      location: 'Tokyo, Japan'
    },
    {
      name: 'Carlos M.',
      text: 'The cultural exchange connections I made through this community enriched my travels beyond imagination.',
      location: 'Barcelona, Spain'
    },
    {
      name: 'Priya S.',
      text: 'I learned that travel isn\'t about the places you go, but the person you become along the way.',
      location: 'Mumbai, India'
    }
  ];

  const travelTypes = [
    {
      title: 'Solo Adventures',
      description: 'Embrace the freedom and self-discovery that comes with solo travel.',
      icon: '🎒'
    },
    {
      title: 'Cultural Immersion',
      description: 'Live like a local and experience authentic cultural exchanges.',
      icon: '🏛️'
    },
    {
      title: 'Mindful Journeys',
      description: 'Travel with intention, focusing on personal growth and reflection.',
      icon: '🧘'
    },
    {
      title: 'Community Connections',
      description: 'Meet fellow travelers and locals who share your values and interests.',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bloom-teal to-bloom-plum py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <Plane size={32} className="text-bloom-teal" />
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                  Bloom in Transit
                </h1>
              </div>
              <p className="font-opensans text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Transform your travels into meaningful journeys of cultural discovery and personal growth. 
                Connect with the world and yourself through authentic travel experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onNavigate('story')}
                  className="bg-white text-bloom-teal hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 text-lg"
                >
                  Share Your Journey
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-bloom-teal font-montserrat font-semibold px-8 py-3 text-lg"
                >
                  <Play className="mr-2" size={20} />
                  Watch Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/1okZfg8rPIvh.png" 
                alt="Cultural travel and exchange"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Journey of Discovery
            </h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              Bloom in Transit connects travelers who seek meaningful experiences, cultural understanding, 
              and personal transformation through their journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-bloom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon size={40} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-opensans text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Types Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to Bloom While Traveling
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Discover different approaches to meaningful travel and cultural exchange.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Explore destinations through the eyes of our community travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-bloom-teal text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                    {destination.stories} stories
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {destination.name}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="mt-4 text-bloom-teal hover:text-blue-600 p-0 font-montserrat font-medium"
                  >
                    Read Stories <ArrowRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Travel Resources
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Essential guides and tools for meaningful travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-bloom-teal text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                    New
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-montserrat text-2xl font-bold text-bloom-teal">
                      {product.price}
                    </span>
                    <Button 
                      className="bg-bloom-teal hover:bg-blue-600 text-white font-montserrat font-semibold"
                      onClick={() => window.open(product.gumroadUrl, '_blank')}
                    >
                      Get Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Stories from the Road
              </h2>
              <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                Our community shares authentic travel experiences that go beyond typical tourist stories. 
                Discover how travel can be a catalyst for personal growth, cultural understanding, and meaningful connections.
              </p>
              <Button 
                onClick={() => onNavigate('blog')}
                className="bg-bloom-teal hover:bg-blue-600 text-white font-montserrat font-semibold px-6 py-3"
              >
                Read Travel Stories
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="font-opensans text-gray-600">
                    Featured Travel Story
                  </p>
                  <p className="font-opensans text-sm text-gray-500">
                    YouTube Video Embed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traveler Testimonials
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Hear from community members who have transformed their travels into meaningful journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-opensans text-gray-600 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-montserrat font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="font-opensans text-sm text-bloom-teal">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Planning Tool Section */}
      <section className="py-16 px-4 bg-bloom-plum text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Plan Your Meaningful Journey
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            Use our free travel planning tool to create itineraries focused on cultural exchange and personal growth.
          </p>
          <Button 
            className="bg-white text-bloom-plum hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 text-lg"
          >
            Start Planning
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-bloom-teal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Travel Inspiration Weekly
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            Get inspiring travel stories, cultural insights, and practical tips delivered to your inbox.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70"
                required
              />
              <Button 
                type="submit"
                className="bg-white text-bloom-teal hover:bg-gray-100 font-montserrat font-semibold px-6"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Travels?
          </h2>
          <p className="font-opensans text-lg text-gray-600 mb-8">
            Join our community of mindful travelers who believe that the best journeys are those that 
            change us from the inside out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('story')}
              className="bg-bloom-teal hover:bg-blue-600 text-white font-montserrat font-semibold px-8 py-3"
            >
              Share Your Journey
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-bloom-teal text-bloom-teal hover:bg-bloom-teal hover:text-white font-montserrat font-semibold px-8 py-3"
            >
              Connect with Travelers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BloomInTransitPage;

