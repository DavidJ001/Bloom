import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPage = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Eye,
      content: `
        <p>We collect information you provide directly to us, such as when you:</p>
        <ul>
          <li>Create an account or profile</li>
          <li>Submit stories or participate in community discussions</li>
          <li>Subscribe to our newsletter</li>
          <li>Contact us for support</li>
          <li>Participate in surveys or feedback forms</li>
        </ul>
        <p>This may include your name, email address, profile information, and any content you choose to share with our community.</p>
      `
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: `
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process and publish your stories (with your consent)</li>
          <li>Send you newsletters and community updates</li>
          <li>Respond to your comments, questions, and support requests</li>
          <li>Monitor and analyze usage patterns to improve user experience</li>
          <li>Protect against fraud and abuse</li>
        </ul>
        <p>We will never sell your personal information to third parties.</p>
      `
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: `
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li><strong>With your consent:</strong> When you choose to share stories or participate in community features</li>
          <li><strong>Service providers:</strong> With trusted third-party services that help us operate our platform</li>
          <li><strong>Legal requirements:</strong> When required by law or to protect our rights and safety</li>
          <li><strong>Business transfers:</strong> In connection with any merger, sale, or transfer of assets</li>
        </ul>
        <p>All service providers are bound by confidentiality agreements and data protection requirements.</p>
      `
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: `
        <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication measures</li>
          <li>Staff training on data protection practices</li>
        </ul>
        <p>While we strive to protect your information, no method of transmission over the internet is 100% secure.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bloom-plum to-bloom-teal py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="font-opensans text-lg md:text-xl text-white/90 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, 
            and protect your personal information when you use The Bloom Umbrella.
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
              At The Bloom Umbrella, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy describes how we 
              collect, use, disclose, and safeguard your information when you visit our website 
              and use our services.
            </p>
            <p className="font-opensans text-gray-700 leading-relaxed">
              By using our services, you agree to the collection and use of information in 
              accordance with this policy. If you do not agree with our policies and practices, 
              please do not use our services.
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
                    <div className="w-12 h-12 bg-bloom-teal rounded-full flex items-center justify-center mr-4">
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
          {/* Your Rights */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Your Rights and Choices
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                You have several rights regarding your personal information:
              </p>
              <ul className="font-opensans text-gray-700">
                <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You can request that we correct any inaccurate information</li>
                <li><strong>Deletion:</strong> You can request that we delete your personal information</li>
                <li><strong>Portability:</strong> You can request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> You can unsubscribe from our communications at any time</li>
              </ul>
              <p className="font-opensans text-gray-700 leading-relaxed">
                To exercise any of these rights, please contact us at privacy@bloomumbrella.com.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Cookies and Tracking
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies help us understand how you use our site, remember your preferences, and provide 
                personalized content.
              </p>
              <p className="font-opensans text-gray-700 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may 
                affect the functionality of our website.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Children's Privacy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian 
                and believe your child has provided us with personal information, please contact us 
                immediately.
              </p>
            </div>
          </div>

          {/* International Users */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              International Users
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                If you are accessing our services from outside the United States, please be aware 
                that your information may be transferred to, stored, and processed in the United States. 
                By using our services, you consent to this transfer.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
              Changes to This Policy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-opensans text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last updated" 
                date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-bloom-teal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Questions About Privacy?
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            If you have any questions about this Privacy Policy or our data practices, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@bloomumbrella.com"
              className="inline-flex items-center justify-center bg-white text-bloom-teal hover:bg-gray-100 font-montserrat font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Email Privacy Team
            </a>
            <a
              href="mailto:hello@bloomumbrella.com"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-bloom-teal font-montserrat font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              General Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;

