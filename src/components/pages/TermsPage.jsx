import React from 'react';
import { FileText, Users, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TermsPage = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: `
        <p>By accessing and using The Bloom Umbrella website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        <p>These Terms of Service ("Terms") govern your use of our website located at bloomumbrella.com (the "Service") operated by The Bloom Umbrella ("us", "we", or "our").</p>
      `
    },
    {
      title: 'User Accounts and Responsibilities',
      icon: Users,
      content: `
        <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:</p>
        <ul>
          <li>Safeguarding the password and all activities that occur under your account</li>
          <li>Maintaining the security of your account and password</li>
          <li>Notifying us immediately of any unauthorized use of your account</li>
          <li>Ensuring all content you submit complies with our community guidelines</li>
        </ul>
        <p>We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.</p>
      `
    },
    {
      title: 'Content and Community Guidelines',
      icon: Shield,
      content: `
        <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.</p>
        <p>By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.</p>
        <p>You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.</p>
      `
    },
    {
      title: 'Prohibited Uses',
      icon: AlertTriangle,
      content: `
        <p>You may not use our Service:</p>
        <ul>
          <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
          <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
          <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
          <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
          <li>To submit false or misleading information</li>
          <li>To upload or transmit viruses or any other type of malicious code</li>
        </ul>
      `
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bloom-plum to-bloom-teal py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="font-opensans text-lg md:text-xl text-white/90 leading-relaxed">
            These terms and conditions outline the rules and regulations for the use of 
            The Bloom Umbrella website and services.
          </p>
          <p className="font-opensans text-white/80 mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="font-opensans text-gray-700 leading-relaxed text-lg">
              Welcome to The Bloom Umbrella. These Terms of Service ("Terms") govern your use 
              of our website and services. By accessing or using our services, you agree to be 
              bound by these Terms.
            </p>
            <p className="font-opensans text-gray-700 leading-relaxed">
              Please read these Terms carefully before using our services. If you disagree with 
              any part of these terms, then you may not access the Service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-bloom-plum rounded-full flex items-center justify-center mr-4">
                      <section.icon size={24} className="text-white" />
                    </div>
                    <h2 className="font-playfair text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div 
                    className="prose prose-gray max-w-none font-opensans"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intellectual Property */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Intellectual Property Rights
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                The Service and its original content, features, and functionality are and will remain 
                the exclusive property of The Bloom Umbrella and its licensors. The Service is protected 
                by copyright, trademark, and other laws. Our trademarks and trade dress may not be used 
                in connection with any product or service without our prior written consent.
              </p>
            </div>
          </div>

          {/* User-Generated Content */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              User-Generated Content
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                Our Service may allow you to submit, upload, publish or otherwise make available content 
                such as stories, comments, and other materials. You retain ownership of your content, but 
                you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, 
                and distribute your content in connection with the Service.
              </p>
              <p className="font-opensans text-gray-700 leading-relaxed">
                You represent and warrant that you own or have the necessary rights to use and authorize 
                us to use all content you submit in the manner contemplated by the Service and these Terms.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the Service, to understand our practices.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Termination
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                We may terminate or suspend your account and bar access to the Service immediately, 
                without prior notice or liability, under our sole discretion, for any reason whatsoever 
                and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="font-opensans text-gray-700 leading-relaxed">
                If you wish to terminate your account, you may simply discontinue using the Service 
                or contact us to request account deletion.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                The information on this website is provided on an "as is" basis. To the fullest extent 
                permitted by law, this Company excludes all representations, warranties, conditions and 
                terms whether express or implied, statutory or otherwise.
              </p>
              <p className="font-opensans text-gray-700 leading-relaxed">
                The Service is provided "AS IS" and "AS AVAILABLE" without any representation or 
                endorsement made and without warranty of any kind whether express or implied.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Limitation of Liability
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                In no event shall The Bloom Umbrella, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses, resulting from your use of the Service.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Governing Law
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the United States, without 
                regard to its conflict of law provisions. Our failure to enforce any right or provision 
                of these Terms will not be considered a waiver of those rights.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Changes to Terms
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="font-opensans text-gray-700 leading-relaxed">
                By continuing to access or use our Service after any revisions become effective, you agree 
                to be bound by the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-bloom-plum text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Questions About These Terms?
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            If you have any questions about these Terms of Service, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@bloomumbrella.com"
              className="inline-flex items-center justify-center bg-white text-bloom-plum hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Email Legal Team
            </a>
            <a
              href="mailto:hello@bloomumbrella.com"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-bloom-plum font-montserrat font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              General Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;

