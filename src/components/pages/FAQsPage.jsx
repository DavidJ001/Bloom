import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const FAQsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What is The Bloom Umbrella?',
          answer: 'The Bloom Umbrella is a purpose-driven community focused on healing, storytelling, and financial literacy. We provide a safe space for individuals to share their stories, learn from others, and grow together through our four specialized branches: Bloom Unbound, Bloom-a-Bean, Resonant Resilience, and Bloom in Transit.'
        },
        {
          question: 'How do I join the community?',
          answer: 'Joining our community is free and easy! You can start by sharing your story, subscribing to our newsletter, or participating in our blog discussions. For more structured programs, each branch offers specific courses and resources that you can access through our platform.'
        },
        {
          question: 'Is The Bloom Umbrella free to use?',
          answer: 'Basic community participation is completely free, including reading stories, joining discussions, and accessing our newsletter. We also offer premium resources, courses, and one-on-one support through our various branches for those seeking more structured guidance.'
        }
      ]
    },
    {
      title: 'Sharing Your Story',
      faqs: [
        {
          question: 'How do I submit my story?',
          answer: 'You can submit your story through our "Your Story" page. Simply fill out the form with your story details, choose a category, and submit. Our team reviews all submissions to ensure they meet our community guidelines before publication.'
        },
        {
          question: 'Can I share my story anonymously?',
          answer: 'Yes! We understand that sharing personal experiences can be vulnerable. You have the option to publish your story anonymously when submitting through our story form. Your privacy and comfort are our top priorities.'
        },
        {
          question: 'What types of stories do you accept?',
          answer: 'We welcome authentic stories across our five categories: Personal Resilience, Parenting & Autism, Impact & Community, Faith & Reflection, and Travel & Cultural Exchange. Stories should be genuine, respectful, and focused on growth, healing, or positive impact.'
        }
      ]
    },
    {
      title: 'Branch Programs',
      faqs: [
        {
          question: 'What is Bloom Unbound?',
          answer: 'Bloom Unbound focuses on personal growth and healing through authentic storytelling and community support. It offers healing circles, story workshops, and peer support networks for individuals on their healing journey.'
        },
        {
          question: 'How does Bloom-a-Bean help with financial literacy?',
          answer: 'Bloom-a-Bean provides practical financial education through courses, workshops, and resources. We cover budgeting, investing, debt management, and building wealth, all designed for real people with real budgets.'
        },
        {
          question: 'What makes Resonant Resilience different?',
          answer: 'Resonant Resilience focuses on building mental and emotional strength through evidence-based strategies and community support. We address four pillars: emotional, mental, social, and physical resilience through interactive workshops and practical tools.'
        },
        {
          question: 'What is Bloom in Transit about?',
          answer: 'Bloom in Transit is for travelers seeking meaningful cultural exchanges and personal growth through travel. We provide resources for solo travel, cultural immersion, and connecting with like-minded travelers worldwide.'
        }
      ]
    },
    {
      title: 'Technical Support',
      faqs: [
        {
          question: 'I\'m having trouble accessing my account',
          answer: 'If you\'re experiencing account access issues, please try clearing your browser cache and cookies first. If the problem persists, contact our support team at hello@bloomumbrella.com with details about the issue you\'re experiencing.'
        },
        {
          question: 'How do I update my newsletter preferences?',
          answer: 'You can update your newsletter preferences by clicking the "Manage Preferences" link at the bottom of any newsletter email, or by contacting us directly. We offer different subscription options for each of our branches.'
        },
        {
          question: 'Can I delete my story after it\'s published?',
          answer: 'Yes, you maintain control over your content. If you wish to remove or edit your published story, please contact us at hello@bloomumbrella.com with your request. We\'ll process it within 24-48 hours.'
        }
      ]
    },
    {
      title: 'Community Guidelines',
      faqs: [
        {
          question: 'What are the community guidelines?',
          answer: 'Our community guidelines emphasize respect, authenticity, and constructive engagement. We prohibit harassment, spam, hate speech, and content that could harm others. All shared content should be genuine and focused on growth, healing, or positive impact.'
        },
        {
          question: 'How do you moderate content?',
          answer: 'All submitted stories and comments are reviewed by our moderation team before publication. We use a combination of automated tools and human review to ensure content meets our guidelines while maintaining the authentic voice of our community members.'
        },
        {
          question: 'What happens if someone violates the guidelines?',
          answer: 'Violations are handled on a case-by-case basis. Minor violations may result in content removal or editing requests. Serious or repeated violations may result in temporary or permanent suspension from the community. We always aim for education and growth over punishment.'
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bloom-plum to-bloom-teal py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-opensans text-lg md:text-xl text-white/90 leading-relaxed">
            Find answers to common questions about The Bloom Umbrella community, 
            our programs, and how to get the most out of your experience with us.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full text-lg py-3"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-gray-600 mb-2">
                No results found
              </h3>
              <p className="font-opensans text-gray-500">
                Try adjusting your search terms or browse our categories below.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const key = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <Card key={faqIndex} className="overflow-hidden">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(categoryIndex, faqIndex)}
                              className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                            >
                              <h3 className="font-montserrat font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-4 border-t bg-gray-50">
                                <p className="font-opensans text-gray-700 leading-relaxed pt-4">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="font-opensans text-lg text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help you 
            get the most out of your Bloom Umbrella experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@bloomumbrella.com"
              className="inline-flex items-center justify-center bg-bloom-teal hover:bg-blue-600 text-white font-montserrat font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Email Support
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center border border-bloom-teal text-bloom-teal hover:bg-bloom-teal hover:text-white font-montserrat font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Live Chat
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Explore these resources to get started with The Bloom Umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Getting Started Guide',
                description: 'New to our community? Start here for a complete overview.',
                link: '#'
              },
              {
                title: 'Story Submission Tips',
                description: 'Learn how to craft and share compelling stories.',
                link: '#'
              },
              {
                title: 'Community Guidelines',
                description: 'Understand our values and expectations for members.',
                link: '#'
              },
              {
                title: 'Technical Support',
                description: 'Get help with account issues and technical problems.',
                link: '#'
              }
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <a
                    href={resource.link}
                    className="text-bloom-teal hover:text-blue-600 font-montserrat font-medium text-sm transition-colors duration-200"
                  >
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;

