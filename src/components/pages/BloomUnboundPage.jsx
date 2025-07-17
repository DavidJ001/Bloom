import React, { useState } from 'react';
import { Heart, ArrowRight, Play, Download, Users, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const BloomUnboundPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Bloom Unbound updates!');
    setEmail('');
  };

  const features = [
    {
      icon: Heart,
      title: 'Healing Circles',
      description: 'Join supportive group sessions focused on emotional healing and personal growth.'
    },
    {
      icon: BookOpen,
      title: 'Story Workshops',
      description: 'Learn to craft and share your story in a safe, encouraging environment.'
    },
    {
      icon: Users,
      title: 'Peer Support Network',
      description: 'Connect with others on similar journeys for mutual support and encouragement.'
    }
  ];

  const products = [
    {
      title: 'Healing Journal Workbook',
      description: 'A comprehensive guide to processing emotions and tracking your healing journey.',
      price: '$24.99',
      image: '/src/assets/mtkddWWi8I19.jpg',
      gumroadUrl: '#'
    },
    {
      title: 'Story Crafting Course',
      description: 'Learn the art of authentic storytelling with our step-by-step video course.',
      price: '$89.99',
      image: '/src/assets/AbUPz0usSTiy.jpeg',
      gumroadUrl: '#'
    },
    {
      title: 'Resilience Building Toolkit',
      description: 'Practical exercises and strategies for building emotional resilience.',
      price: '$34.99',
      image: '/src/assets/ZbmptFyvIGXe.jpg',
      gumroadUrl: '#'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Bloom Unbound gave me the courage to share my story and find healing in community.',
      rating: 5
    },
    {
      name: 'Michael R.',
      text: 'The healing circles provided exactly the support I needed during my darkest moments.',
      rating: 5
    },
    {
      name: 'Elena K.',
      text: 'This program helped me transform my pain into purpose and my story into strength.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bloom-peach to-bloom-gold py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <Heart size={32} className="text-bloom-peach" />
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                  Bloom Unbound
                </h1>
              </div>
              <p className="font-opensans text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Discover the power of authentic storytelling and community healing. Break free from 
                the chains of past trauma and step into your fullest, most authentic self.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onNavigate('story')}
                  className="bg-white text-bloom-peach hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 text-lg"
                >
                  Share Your Story
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-bloom-peach font-montserrat font-semibold px-8 py-3 text-lg"
                >
                  <Play className="mr-2" size={20} />
                  Watch Introduction
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/mtkddWWi8I19.jpg" 
                alt="Healing through storytelling"
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
              Your Journey to Healing
            </h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              Bloom Unbound offers a comprehensive approach to personal healing through storytelling, 
              community support, and guided self-discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-bloom-peach rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healing Resources
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Carefully crafted tools and courses to support your healing journey.
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
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-montserrat text-2xl font-bold text-bloom-peach">
                      {product.price}
                    </span>
                    <Button 
                      className="bg-bloom-peach hover:bg-orange-600 text-white font-montserrat font-semibold"
                      onClick={() => window.open(product.gumroadUrl, '_blank')}
                    >
                      <Download className="mr-2" size={16} />
                      Get Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Audio Embeds Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healing in Action
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Experience the power of storytelling through our featured content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* YouTube Placeholder */}
            <Card className="overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Play size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="font-opensans text-gray-600">
                    Featured Healing Story
                  </p>
                  <p className="font-opensans text-sm text-gray-500">
                    YouTube Video Embed
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                  Sarah's Journey: From Trauma to Triumph
                </h3>
                <p className="font-opensans text-gray-600 text-sm">
                  Watch Sarah share her powerful story of healing and transformation.
                </p>
              </CardContent>
            </Card>

            {/* SoundCloud Placeholder */}
            <Card className="overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play size={24} className="text-white" />
                  </div>
                  <p className="font-opensans text-gray-600">
                    Healing Meditation
                  </p>
                  <p className="font-opensans text-sm text-gray-500">
                    SoundCloud Audio Embed
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                  Guided Healing Meditation
                </h3>
                <p className="font-opensans text-gray-600 text-sm">
                  A 20-minute guided meditation for emotional healing and self-compassion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories of Transformation
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Hear from community members who found healing through Bloom Unbound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
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
                      Bloom Unbound Participant
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-bloom-peach text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Stay Connected to Your Healing Journey
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            Get weekly inspiration, healing resources, and community updates delivered to your inbox.
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
                className="bg-white text-bloom-peach hover:bg-gray-100 font-montserrat font-semibold px-6"
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
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="font-opensans text-lg text-gray-600 mb-8">
            Take the first step toward authentic healing and personal transformation. 
            Your story matters, and your healing journey starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('story')}
              className="bg-bloom-peach hover:bg-orange-600 text-white font-montserrat font-semibold px-8 py-3"
            >
              Share Your Story
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-bloom-peach text-bloom-peach hover:bg-bloom-peach hover:text-white font-montserrat font-semibold px-8 py-3"
            >
              Get Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BloomUnboundPage;

