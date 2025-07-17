import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Contact form submission logic would go here
    alert('Thank you for reaching out! We will get back to you within 24-48 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
  };

  const inquiryTypes = [
    'General Information',
    'Story Submission Support',
    'Partnership Opportunities',
    'Media Inquiries',
    'Technical Support',
    'Community Feedback',
    'Other'
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@bloomumbrella.com',
      detail: 'We typically respond within 24-48 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      detail: 'Monday - Friday, 9 AM - 5 PM EST'
    },
    {
      icon: MapPin,
      title: 'Our Community',
      description: 'Everywhere & Anywhere',
      detail: 'We serve a global community online'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat Support',
      description: 'Get instant help with technical issues or general questions.',
      action: 'Start Chat',
      available: true
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other community members and find peer support.',
      action: 'Visit Forum',
      available: true
    },
    {
      icon: BookOpen,
      title: 'Help Center',
      description: 'Browse our comprehensive guides and frequently asked questions.',
      action: 'Browse Help',
      available: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bloom-teal to-bloom-plum py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="font-opensans text-lg md:text-xl text-white/90 leading-relaxed">
            We're here to listen, support, and help you on your journey. Reach out to us anytime—
            your voice matters to our community.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Choose the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-bloom-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="font-montserrat text-bloom-teal font-medium mb-2">
                    {method.description}
                  </p>
                  <p className="font-opensans text-gray-600 text-sm">
                    {method.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-montserrat font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block font-montserrat font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloom-teal focus:border-transparent"
                  >
                    <option value="">Select an inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your inquiry"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry. The more information you share, the better we can assist you."
                    required
                    className="w-full min-h-[150px] resize-y"
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-bloom-teal hover:bg-blue-600 text-white font-montserrat font-semibold px-8 py-3 text-lg"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Ways to Get Help
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Explore additional support resources available to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-bloom-peach rounded-full flex items-center justify-center mb-4">
                    <option.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-bloom-teal text-bloom-teal hover:bg-bloom-teal hover:text-white"
                    disabled={!option.available}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-opensans text-lg text-gray-600 mb-8">
            Before reaching out, you might find the answer to your question in our comprehensive FAQ section.
          </p>
          <Button 
            className="bg-bloom-plum hover:bg-purple-700 text-white font-montserrat font-semibold px-8 py-3"
          >
            Browse FAQs
          </Button>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-12 px-4 bg-bloom-gold text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4">
            We Value Your Time
          </h3>
          <p className="font-opensans text-lg opacity-90">
            We aim to respond to all inquiries within 24-48 hours during business days. 
            For urgent matters, please call us directly or use our live chat feature.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

