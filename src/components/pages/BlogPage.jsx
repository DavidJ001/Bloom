import React, { useState, useMemo } from 'react';
import { Search, Clock, User, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts, categories } from '../../data/blogPosts';

const BlogPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const featuredPosts = blogPosts.filter(post => post.featured);

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

  const handlePostClick = (postId) => {
    onNavigate(`blog-post-${postId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bloom-green to-bloom-teal py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Stories from the Umbrella
          </h1>
          <p className="font-opensans text-lg md:text-xl text-white/90 leading-relaxed">
            Real stories from real people. Discover journeys of healing, growth, resilience, and transformation 
            shared by our community members.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter size={20} className="mr-2" />
              Filters
            </Button>

            {/* Category Filters (Desktop) */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-bloom-teal hover:bg-blue-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-white rounded-lg border">
              <h3 className="font-montserrat font-semibold mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowFilters(false);
                    }}
                    className={selectedCategory === category ? "bg-bloom-teal hover:bg-blue-600" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && searchTerm === '' && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card 
                  key={post.id} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-montserrat font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3 group-hover:text-bloom-teal transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="font-opensans text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {formatDate(post.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Stories' : `${selectedCategory} Stories`}
            </h2>
            <div className="text-gray-600 font-opensans">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'story' : 'stories'} found
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-600 mb-2">
                No stories found
              </h3>
              <p className="font-opensans text-gray-500">
                Try adjusting your search terms or selecting a different category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-montserrat font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2 group-hover:text-bloom-teal transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-opensans text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      {formatDate(post.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-bloom-peach text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Have a Story to Share?
          </h2>
          <p className="font-opensans text-lg mb-8 opacity-90">
            Your journey could be the inspiration someone else needs. Join our community of storytellers 
            and help others find hope, healing, and growth through your experiences.
          </p>
          <Button 
            onClick={() => onNavigate('story')}
            className="bg-white text-bloom-peach hover:bg-gray-100 font-montserrat font-semibold px-8 py-3"
          >
            Share Your Story
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

