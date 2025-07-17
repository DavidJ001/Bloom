import React from 'react';
import { ArrowLeft, Clock, User, Share2, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '../../data/blogPosts';

const BlogPostPage = ({ postId, onNavigate }) => {
  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
            Story Not Found
          </h1>
          <p className="font-opensans text-gray-600 mb-6">
            The story you're looking for doesn't exist or has been moved.
          </p>
          <Button onClick={() => onNavigate('blog')}>
            Back to Stories
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Personal Resilience': 'bg-bloom-peach text-white',
      'Parenting & Autism': 'bg-bloom-green text-white',
      'Impact & Community': 'bg-bloom-teal text-white',
      'Faith & Reflection': 'bg-bloom-plum text-white',
      'Travel & Cultural Exchange': 'bg-bloom-gold text-white'
    };
    return colors[category] || 'bg-gray-500 text-white';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4 px-4 border-b">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('blog')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Stories
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-montserrat font-medium ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span className="font-opensans">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span className="font-opensans">{post.readTime}</span>
            </div>
            <div className="font-opensans">
              {formatDate(post.date)}
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="font-opensans text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Engagement Section */}
          <div className="border-t border-b py-8 mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <Button variant="ghost" className="text-gray-600 hover:text-red-500">
                  <Heart size={20} className="mr-2" />
                  <span>47</span>
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:text-blue-500">
                  <MessageCircle size={20} className="mr-2" />
                  <span>12</span>
                </Button>
              </div>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <Share2 size={20} className="mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-bloom-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    {post.author}
                  </h3>
                  <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                    A valued member of The Bloom Umbrella community, sharing their journey to inspire and support others on similar paths.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-8">
                More {post.category} Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card 
                    key={relatedPost.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    onClick={() => onNavigate(`blog-post-${relatedPost.id}`)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="font-opensans text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
            Inspired by This Story?
          </h2>
          <p className="font-opensans text-lg text-gray-600 mb-8">
            Join our community and share your own journey of growth, healing, and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('story')}
              className="bg-bloom-teal hover:bg-blue-600 text-white font-montserrat font-semibold px-6 py-3"
            >
              Share Your Story
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('blog')}
              className="border-bloom-teal text-bloom-teal hover:bg-bloom-teal hover:text-white font-montserrat font-semibold px-6 py-3"
            >
              Read More Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;

