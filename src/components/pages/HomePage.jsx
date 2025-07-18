import React from 'react';
import { ArrowRight, Heart, BookOpen, DollarSign, Plane, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = ({ onNavigate }) => {
  const branches = [
    {
      id: 'bloom-unbound',
      title: 'Bloom Unbound',
      icon: Heart,
      description: 'Personal growth and healing through authentic storytelling and community support.',
      color: 'bg-bloom-peach'
    },
    {
      id: 'bloom-a-bean',
      title: 'Bloom-a-Bean',
      icon: DollarSign,
      description: 'Financial literacy and empowerment for sustainable growth and independence.',
      color: 'bg-bloom-green'
    },
    {
      id: 'resonant-resilience',
      title: 'Resonant Resilience',
      icon: BookOpen,
      description: 'Building strength through shared experiences and meaningful connections.',
      color: 'bg-bloom-gold'
    },
    {
      id: 'bloom-in-transit',
      title: 'Bloom in Transit',
      icon: Plane,
      description: 'Cultural exchange and travel stories that broaden perspectives and understanding.',
      color: 'bg-bloom-teal'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'The Bloom Umbrella helped me find my voice and share my story with confidence.',
      role: 'Community Member'
    },
    {
      name: 'Michael R.',
      text: 'Through Bloom-a-Bean, I finally understood how to manage my finances effectively.',
      role: 'Financial Literacy Student'
    },
    {
      name: 'Elena K.',
      text: 'This community has been a source of healing and growth during my toughest times.',
      role: 'Healing Journey Participant'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bloom-teal to-bloom-peach py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to The Bloom Umbrella
          </h1>
          <p className="font-opensans text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            A nurturing space where healing meets storytelling, and financial literacy empowers growth. 
            Join our community of resilient souls sharing their journeys and building brighter futures together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('blog')}
              className="bg-white text-gray-900 hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 text-lg"
            >
              Explore the Ecosystem
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('about')}
              className="border-white text-white hover:bg-white hover:text-gray-900 font-montserrat font-semibold px-8 py-3 text-lg"
            >
              Choose Your Path
            </Button>
          </div>
        </div>
      </section>

      {/* Branch Grid Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Four Branches of Growth
            </h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              Each branch represents a unique pathway to personal development, offering specialized resources and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <Card 
                key={branch.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => onNavigate(branch.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${branch.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <branch.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {branch.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    {branch.description}
                  </p>
                  <div className="mt-4 text-blue-600 group-hover:text-blue-800 transition-colors duration-200">
                    <ArrowRight size={20} className="mx-auto" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Healing Through Stories, Growing Through Community
              </h2>
              <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                The Bloom Umbrella is more than a platform—it's a sanctuary for authentic expression and meaningful connection. 
                We believe that every story has the power to heal, inspire, and transform lives.
              </p>
              <p className="font-opensans text-gray-600 mb-8 leading-relaxed">
                Whether you're navigating personal challenges, seeking financial empowerment, or exploring new cultures, 
                our community provides the support and resources you need to flourish.
              </p>
              <Button 
                onClick={() => onNavigate('about')}
                className="bg-bloom-teal hover:bg-blue-600 text-white font-montserrat font-semibold px-6 py-3"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/assets/mtkddWWi8I19.jpg" 
                alt="Community storytelling illustration"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voices from Our Community
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Real stories from real people who found their path under The Bloom Umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-bloom-plum text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            Join thousands of others who have found healing, growth, and community under The Bloom Umbrella.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('story')}
              className="bg-white text-bloom-plum hover:bg-gray-100 font-montserrat font-semibold px-8 py-3"
            >
              Share Your Story
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-white text-white hover:bg-white hover:text-bloom-plum font-montserrat font-semibold px-8 py-3"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

