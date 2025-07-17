import React, { useState } from 'react';
import { Send, Heart, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const StoryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    category: '',
    story: '',
    anonymous: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Story submission logic would go here
    alert('Thank you for sharing your story! We will review it and get back to you soon.');
    setFormData({
      name: '',
      email: '',
      title: '',
      category: '',
      story: '',
      anonymous: false
    });
  };

  const categories = [
    'Personal Resilience',
    'Parenting & Autism',
    'Impact & Community',
    'Faith & Reflection',
    'Travel & Cultural Exchange'
  ];

  const guidelines = [
    {
      icon: Heart,
      title: 'Authentic & Honest',
      description: 'Share your genuine experiences and emotions. Vulnerability creates connection.'
    },
    {
      icon: BookOpen,
      title: 'Respectful & Constructive',
      description: 'Honor others\' experiences while sharing your own perspective with kindness.'
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'Consider how your story might help, inspire, or support others in similar situations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bloom-peach to-bloom-gold py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Share Your Story
          </h1>
          <p className="font-opensans text-lg md:text-xl text-white/90 leading-relaxed">
            Your journey matters. Your voice has power. Your story can heal, inspire, and transform lives—
            starting with your own.
          </p>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Story Guidelines
            </h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              To create a safe and supportive environment for all, please keep these principles in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guidelines.map((guideline, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-bloom-peach rounded-full flex items-center justify-center mx-auto mb-4">
                    <guideline.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {guideline.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    {guideline.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Submission Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tell Us Your Story
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Fill out the form below to share your experience with our community.
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
                    Story Title *
                  </label>
                  <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Give your story a compelling title"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloom-teal focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-montserrat font-medium text-gray-700 mb-2">
                    Your Story *
                  </label>
                  <Textarea
                    name="story"
                    value={formData.story}
                    onChange={handleInputChange}
                    placeholder="Share your story here. Be as detailed as you'd like - there's no word limit. Remember, your authentic voice is what makes your story powerful."
                    required
                    className="w-full min-h-[200px] resize-y"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="anonymous"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                    className="mr-3 h-4 w-4 text-bloom-teal focus:ring-bloom-teal border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="font-opensans text-gray-700">
                    I would like to publish this story anonymously
                  </label>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-opensans text-sm text-gray-600 leading-relaxed">
                    By submitting your story, you agree to our{' '}
                    <span className="text-bloom-teal cursor-pointer hover:underline">Terms of Service</span>{' '}
                    and{' '}
                    <span className="text-bloom-teal cursor-pointer hover:underline">Privacy Policy</span>.
                    Your story will be reviewed by our team before publication to ensure it meets our community guidelines.
                  </p>
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-bloom-teal hover:bg-blue-600 text-white font-montserrat font-semibold px-8 py-3 text-lg"
                  >
                    Submit Your Story
                    <Send className="ml-2" size={20} />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 px-4 bg-bloom-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Every Story Matters
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90 leading-relaxed">
            Whether you're sharing a triumph, a struggle, a lesson learned, or a moment of growth, 
            your story has the power to touch hearts and change lives. We can't wait to hear from you.
          </p>
          <div className="bg-white/10 p-6 rounded-lg max-w-2xl mx-auto">
            <p className="font-opensans italic text-lg">
              "The cave you fear to enter holds the treasure you seek. Your story is that treasure, 
              waiting to illuminate the path for others walking in similar darkness."
            </p>
            <p className="font-montserrat font-medium mt-4">— The Bloom Umbrella Community</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;

