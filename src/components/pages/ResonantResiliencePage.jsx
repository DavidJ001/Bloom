import React, { useState } from 'react';
import { BookOpen, ArrowRight, Shield, Users, Lightbulb, Heart, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const ResonantResiliencePage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Resonant Resilience updates!');
    setEmail('');
  };

  const features = [
    {
      icon: Shield,
      title: 'Resilience Building',
      description: 'Develop mental and emotional strength to navigate life\'s challenges with grace.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others who understand your journey and provide mutual encouragement.'
    },
    {
      icon: Lightbulb,
      title: 'Practical Strategies',
      description: 'Learn evidence-based techniques for building lasting resilience and well-being.'
    }
  ];

  const products = [
    {
      title: 'Resilience Toolkit',
      description: 'A comprehensive collection of exercises and strategies for building mental strength.',
      price: '$39.99',
      image: '/assets/ZbmptFyvIGXe.jpg',
      gumroadUrl: '#'
    },
    {
      title: 'Mindfulness Mastery Course',
      description: 'Learn mindfulness techniques to stay centered and resilient in challenging times.',
      price: '$69.99',
      image: '/assets/1okZfg8rPIvh.png',
      gumroadUrl: '#'
    },
    {
      title: 'Stress Management Workbook',
      description: 'Practical tools and techniques for managing stress and building emotional resilience.',
      price: '$24.99',
      image: '/assets/tEnhyts2bQAK.jpg',
      gumroadUrl: '#'
    }
  ];

  const resilienceAreas = [
    {
      title: 'Emotional Resilience',
      description: 'Learn to process and regulate emotions in healthy ways.',
      icon: Heart
    },
    {
      title: 'Mental Resilience',
      description: 'Develop cognitive flexibility and positive thinking patterns.',
      icon: Lightbulb
    },
    {
      title: 'Social Resilience',
      description: 'Build strong relationships and support networks.',
      icon: Users
    },
    {
      title: 'Physical Resilience',
      description: 'Maintain physical health to support overall well-being.',
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'Elena K.',
      text: 'Resonant Resilience gave me the tools to bounce back from my darkest moments stronger than ever.',
      role: 'Program Graduate'
    },
    {
      name: 'James T.',
      text: 'The community support and practical strategies helped me navigate my career transition with confidence.',
      role: 'Community Member'
    },
    {
      name: 'Maria S.',
      text: 'I learned that resilience isn\'t about being tough—it\'s about being adaptable and kind to yourself.',
      role: 'Workshop Participant'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bloom-gold to-bloom-plum py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <BookOpen size={32} className="text-bloom-gold" />
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                  Resonant Resilience
                </h1>
              </div>
              <p className="font-opensans text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Build unshakeable inner strength through meaningful connections and proven resilience strategies. 
                Transform challenges into opportunities for growth and deeper understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-bloom-gold hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 text-lg"
                >
                  Build Resilience
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-bloom-gold font-montserrat font-semibold px-8 py-3 text-lg"
                >
                  <Play className="mr-2" size={20} />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/ZbmptFyvIGXe.jpg" 
                alt="Building resilience through community"
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
              Your Resilience Journey
            </h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              Resonant Resilience combines evidence-based strategies with community support to help you 
              build lasting strength and adaptability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-bloom-gold rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Resilience Areas Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four Pillars of Resilience
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Comprehensive approach to building strength in all areas of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resilienceAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-bloom-plum rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resilience Resources
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Practical tools and courses to strengthen your resilience muscle.
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
                  <div className="absolute top-4 right-4 bg-bloom-gold text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                    Popular
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
                    <span className="font-montserrat text-2xl font-bold text-bloom-gold">
                      {product.price}
                    </span>
                    <Button 
                      className="bg-bloom-gold hover:bg-yellow-600 text-white font-montserrat font-semibold"
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

      {/* Interactive Workshop Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interactive Resilience Workshops
              </h2>
              <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                Join our live, interactive workshops where you'll practice resilience techniques in real-time 
                with expert facilitators and supportive community members.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-bloom-gold rounded-full mt-2 mr-3"></div>
                  <span className="font-opensans text-gray-700">Weekly live sessions with expert facilitators</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-bloom-gold rounded-full mt-2 mr-3"></div>
                  <span className="font-opensans text-gray-700">Small group breakouts for personalized attention</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-bloom-gold rounded-full mt-2 mr-3"></div>
                  <span className="font-opensans text-gray-700">Recorded sessions for flexible learning</span>
                </div>
              </div>
              <Button className="bg-bloom-gold hover:bg-yellow-600 text-white font-montserrat font-semibold px-6 py-3">
                Join Next Workshop
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="font-opensans text-gray-600">
                    Workshop Preview
                  </p>
                  <p className="font-opensans text-sm text-gray-500">
                    Vimeo Video Embed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories of Strength
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Hear from community members who have built resilience through our programs.
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
                    <p className="font-opensans text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Tool Section */}
      <section className="py-16 px-4 bg-bloom-plum text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Discover Your Resilience Level
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            Take our free resilience assessment to understand your current strengths and areas for growth.
          </p>
          <Button 
            className="bg-white text-bloom-plum hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 text-lg"
          >
            Take Free Assessment
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-bloom-gold text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Weekly Resilience Insights
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            Get practical resilience tips, inspiring stories, and exclusive resources delivered weekly.
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
                className="bg-white text-bloom-gold hover:bg-gray-100 font-montserrat font-semibold px-6"
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
            Ready to Build Unshakeable Resilience?
          </h2>
          <p className="font-opensans text-lg text-gray-600 mb-8">
            Join our community of resilient individuals who support each other through life's challenges 
            and celebrate each other's growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-bloom-gold hover:bg-yellow-600 text-white font-montserrat font-semibold px-8 py-3"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-bloom-gold text-bloom-gold hover:bg-bloom-gold hover:text-white font-montserrat font-semibold px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResonantResiliencePage;

