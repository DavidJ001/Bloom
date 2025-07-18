import React, { useState } from 'react';
import { DollarSign, ArrowRight, TrendingUp, PiggyBank, BookOpen, Calculator, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const BloomABeanPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Bloom-a-Bean updates!');
    setEmail('');
  };

  const features = [
    {
      icon: PiggyBank,
      title: 'Smart Budgeting',
      description: 'Learn practical budgeting strategies that actually work for real life situations.'
    },
    {
      icon: TrendingUp,
      title: 'Investment Basics',
      description: 'Demystify investing with simple, actionable strategies for building wealth.'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and achieve meaningful financial goals that align with your values.'
    }
  ];

  const products = [
    {
      title: 'Financial Freedom Workbook',
      description: 'A step-by-step guide to creating your personalized path to financial independence.',
      price: '$29.99',
      image: '/assets/9M91HxRDyOFS.jpg',
      gumroadUrl: '#'
    },
    {
      title: 'Budget Mastery Course',
      description: 'Master the art of budgeting with our comprehensive video course and templates.',
      price: '$79.99',
      image: '/assets/74X8rUnLEOLr.png',
      gumroadUrl: '#'
    },
    {
      title: 'Investment Starter Kit',
      description: 'Everything you need to start investing confidently, even with limited funds.',
      price: '$49.99',
      image: '/assets/fwWwttfdl7SK.png',
      gumroadUrl: '#'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Students Empowered' },
    { number: '$1.2M+', label: 'Debt Eliminated' },
    { number: '85%', label: 'Success Rate' },
    { number: '6 months', label: 'Average to Results' }
  ];

  const testimonials = [
    {
      name: 'Marcus J.',
      text: 'Bloom-a-Bean helped me eliminate $50,000 in debt and start building real wealth.',
      achievement: 'Debt-Free in 18 months'
    },
    {
      name: 'Lisa P.',
      text: 'I finally understand investing and have started building my retirement fund.',
      achievement: 'First-time Investor'
    },
    {
      name: 'Carlos M.',
      text: 'The budgeting strategies actually work! I\'ve saved more in 6 months than in 5 years.',
      achievement: 'Emergency Fund Built'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bloom-green to-bloom-teal py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <DollarSign size={32} className="text-bloom-green" />
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                  Bloom-a-Bean
                </h1>
              </div>
              <p className="font-opensans text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Transform your relationship with money and build lasting financial security. 
                Learn practical strategies that work for real people with real budgets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-bloom-green hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 text-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-bloom-green font-montserrat font-semibold px-8 py-3 text-lg"
                >
                  <Calculator className="mr-2" size={20} />
                  Free Budget Tool
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/9M91HxRDyOFS.jpg" 
                alt="Financial literacy and growth"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real People
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Our community has achieved incredible financial transformations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-playfair text-bloom-green mb-2">
                  {stat.number}
                </div>
                <div className="font-opensans text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Path to Financial Freedom
            </h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              Bloom-a-Bean provides practical, actionable financial education that fits into your real life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-bloom-green rounded-full flex items-center justify-center mx-auto mb-6">
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
              Financial Education Resources
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Comprehensive tools and courses to accelerate your financial journey.
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
                  <div className="absolute top-4 right-4 bg-bloom-green text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                    Best Seller
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
                    <span className="font-montserrat text-2xl font-bold text-bloom-green">
                      {product.price}
                    </span>
                    <Button 
                      className="bg-bloom-green hover:bg-green-600 text-white font-montserrat font-semibold"
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

      {/* Learning Path Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Follow our proven step-by-step approach to financial mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assess', description: 'Understand your current financial situation' },
              { step: '02', title: 'Plan', description: 'Create a personalized financial roadmap' },
              { step: '03', title: 'Execute', description: 'Implement strategies with ongoing support' },
              { step: '04', title: 'Thrive', description: 'Achieve financial freedom and security' }
            ].map((phase, index) => (
              <Card key={index} className="text-center relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-6xl font-bold text-bloom-green/20 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Real transformations from our Bloom-a-Bean community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-bloom-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-opensans text-gray-600 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-montserrat font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="font-opensans text-sm text-bloom-green font-medium">
                      {testimonial.achievement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join Our Financial Community
              </h2>
              <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                Connect with like-minded individuals on similar financial journeys. Share experiences, 
                get support, and celebrate milestones together in our exclusive community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="text-bloom-green mr-3" size={20} />
                  <span className="font-opensans text-gray-700">Weekly group coaching calls</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="text-bloom-green mr-3" size={20} />
                  <span className="font-opensans text-gray-700">Exclusive educational content</span>
                </div>
                <div className="flex items-center">
                  <Target className="text-bloom-green mr-3" size={20} />
                  <span className="font-opensans text-gray-700">Accountability partnerships</span>
                </div>
              </div>
              <Button className="mt-6 bg-bloom-green hover:bg-green-600 text-white font-montserrat font-semibold px-6 py-3">
                Join Community
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/assets/74X8rUnLEOLr.png" 
                alt="Financial community support"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-bloom-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Weekly Financial Wisdom
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            Get practical money tips, success stories, and exclusive resources delivered to your inbox every week.
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
                className="bg-white text-bloom-green hover:bg-gray-100 font-montserrat font-semibold px-6"
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
            Ready to Transform Your Financial Future?
          </h2>
          <p className="font-opensans text-lg text-gray-600 mb-8">
            Join thousands who have already started their journey to financial freedom. 
            Your future self will thank you for taking action today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-bloom-green hover:bg-green-600 text-white font-montserrat font-semibold px-8 py-3"
            >
              Start Free Assessment
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-bloom-green text-bloom-green hover:bg-bloom-green hover:text-white font-montserrat font-semibold px-8 py-3"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BloomABeanPage;

