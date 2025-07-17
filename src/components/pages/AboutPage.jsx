import React from 'react';
import { Heart, Users, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Healing',
      description: 'We believe in the power of genuine storytelling to heal wounds and build bridges between hearts.'
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'Our umbrella shelters all voices, creating a safe space for diverse experiences and perspectives.'
    },
    {
      icon: Target,
      title: 'Purpose-Driven Growth',
      description: 'Every initiative is designed to foster meaningful personal and financial development.'
    },
    {
      icon: Award,
      title: 'Excellence in Support',
      description: 'We are committed to providing high-quality resources and unwavering community support.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Chief Storyteller',
      bio: 'A passionate advocate for healing through narrative, Sarah founded The Bloom Umbrella after her own transformative journey.',
      image: '/src/assets/1okZfg8rPIvh.png'
    },
    {
      name: 'Michael Chen',
      role: 'Financial Literacy Director',
      bio: 'With 15 years in financial education, Michael leads our Bloom-a-Bean initiative with expertise and compassion.',
      image: '/src/assets/tEnhyts2bQAK.jpg'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Community Wellness Coordinator',
      bio: 'Elena brings her background in psychology and community building to foster resilience and connection.',
      image: '/src/assets/ZbmptFyvIGXe.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bloom-teal to-bloom-peach py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            About The Bloom Umbrella
          </h1>
          <p className="font-opensans text-lg md:text-xl text-white/90 leading-relaxed">
            We are a purpose-driven community dedicated to creating spaces where healing happens, 
            stories are honored, and financial empowerment becomes accessible to all.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                The Bloom Umbrella exists to provide shelter and support for individuals on their journey 
                toward healing, growth, and financial independence. We believe that every person has a story 
                worth telling and the potential to flourish when given the right environment and resources.
              </p>
              <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                Through our four specialized branches, we address the interconnected aspects of human 
                development: emotional healing, financial literacy, resilience building, and cultural understanding.
              </p>
              <p className="font-opensans text-gray-600 leading-relaxed">
                Our approach is holistic, recognizing that true growth happens when we address both 
                the practical and emotional aspects of life's challenges.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/AbUPz0usSTiy.jpeg" 
                alt="Community healing in action"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the culture of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-bloom-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
              The Bloom Umbrella was born from a simple yet profound realization: that healing happens 
              best in community, and that financial empowerment is inseparable from emotional well-being. 
              Our founder, Sarah Johnson, experienced this truth firsthand during her own journey through 
              personal challenges and financial uncertainty.
            </p>
            
            <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
              What started as informal gatherings in living rooms has grown into a comprehensive platform 
              serving thousands of individuals worldwide. We've maintained our core commitment to authentic 
              storytelling while expanding our resources to include financial education, resilience training, 
              and cultural exchange programs.
            </p>
            
            <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
              Today, The Bloom Umbrella stands as a testament to the power of community-driven healing 
              and growth. We continue to evolve, always listening to our community's needs and adapting 
              our approach to serve them better.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              The passionate individuals behind The Bloom Umbrella's mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="font-montserrat text-bloom-teal font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-bloom-plum text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="font-opensans text-lg opacity-90">
              Numbers that reflect the lives we've touched and the growth we've fostered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-playfair mb-2">5,000+</div>
              <div className="font-opensans opacity-90">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-playfair mb-2">1,200+</div>
              <div className="font-opensans opacity-90">Stories Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-playfair mb-2">800+</div>
              <div className="font-opensans opacity-90">Financial Goals Achieved</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-playfair mb-2">50+</div>
              <div className="font-opensans opacity-90">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

