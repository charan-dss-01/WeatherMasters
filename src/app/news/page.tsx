'use client';
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

function NewsPage() {
  // Sample news articles
  const [data, setData]:any = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?sources=the-times-of-india&q=weather&sortBy=publishedAt&apiKey=95fe113873824099bfdd205718cdaf46');
      const data = await response.json();
      setData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    // Hide the success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Loading header */}
          <div className="mb-12">
            <div className="h-8 w-48 bg-gray-800 rounded-lg animate-pulse"></div>
            <div className="h-4 w-64 bg-gray-800 rounded-lg animate-pulse mt-2"></div>
          </div>

          {/* Loading featured article */}
          <div className="relative rounded-xl overflow-hidden mb-12 bg-gray-800/30 h-[400px] animate-pulse">
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="h-6 w-24 bg-gray-700 rounded-full mb-3"></div>
              <div className="h-8 w-3/4 bg-gray-700 rounded-lg mb-3"></div>
              <div className="h-4 w-full bg-gray-700 rounded-lg mb-3"></div>
              <div className="flex items-center justify-between">
                <div className="h-4 w-32 bg-gray-700 rounded-lg"></div>
                <div className="h-10 w-32 bg-gray-700 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Loading news grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
                <div className="h-48 bg-gray-800 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 w-24 bg-gray-700 rounded-full mb-3"></div>
                  <div className="h-6 w-full bg-gray-700 rounded-lg mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-700 rounded-lg mb-3"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 bg-gray-700 rounded-lg"></div>
                    <div className="h-4 w-20 bg-gray-700 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // const articles = [
  //   {
  //     id: 1,
  //     title: 'Record-Breaking Heat Wave Expected This Weekend',
  //     excerpt: 'Meteorologists predict temperatures to reach 40°C in several regions, breaking previous records set in 2018.',
  //     date: 'July 12, 2023',
  //     category: 'Alert',
  //     image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=400&auto=format&fit=crop'
  //   },
  //   {
  //     id: 2,
  //     title: 'New Satellite Technology Improving Weather Predictions',
  //     excerpt: 'Advanced satellite systems launched last month are already providing more accurate data for forecasting models.',
  //     date: 'July 8, 2023',
  //     category: 'Technology',
  //     image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=400&auto=format&fit=crop'
  //   },
  //   {
  //     id: 3,
  //     title: 'Hurricane Season Forecast: What to Expect This Year',
  //     excerpt: 'Experts predict an above-average hurricane season with potentially 15-20 named storms in the Atlantic.',
  //     date: 'June 28, 2023',
  //     category: 'Forecast',
  //     image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=400&auto=format&fit=crop'
  //   },
  //   {
  //     id: 4,
  //     title: 'Climate Change Impact on Local Weather Patterns',
  //     excerpt: 'New study reveals how climate change is altering seasonal weather patterns across multiple regions.',
  //     date: 'June 20, 2023',
  //     category: 'Research',
  //     image: 'https://images.unsplash.com/photo-1593978301851-40c1849d47d4?q=80&w=400&auto=format&fit=crop'
  //   },
  //   {
  //     id: 5,
  //     title: 'Preparing for Summer Storms: Expert Tips',
  //     excerpt: 'Weather safety experts share their top recommendations for staying safe during severe summer weather.',
  //     date: 'June 15, 2023',
  //     category: 'Safety',
  //     image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=400&auto=format&fit=crop'
  //   }
  // ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page header */}
        <div className="mt-10 mb-12">
          <h1 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Weather News
            </span>
          </h1>
          <p className="text-gray-400 mt-2 text-lg">Stay informed with the latest weather news and updates</p>
        </div>
        
        {/* Featured article */}
        <div className="relative rounded-xl overflow-hidden mb-12 group cursor-pointer hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          <img 
            src={data?.articles[0]?.urlToImage} 
            alt={data?.articles[0]?.title}
            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 max-w-3xl">
            <div className="bg-orange-500 text-white text-xs px-3 py-1.5 rounded-full mb-4 font-medium">
              {data?.articles[0]?.source?.name}
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">{data?.articles[0]?.title}</h2>
            <p className="text-gray-200 mb-4 text-lg">{data?.articles[0]?.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">{new Date(data?.articles[0]?.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <Link href={data?.articles[0]?.url} className="text-white bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors duration-300">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        
        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.articles?.slice(1).map((article:any, index:number) => (
            <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.urlToImage} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-orange-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    {article.source.name}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <Link href={article.url} className="text-orange-500 text-sm font-medium hover:text-orange-400 transition-colors">
                    Read more <i className="fa-solid fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter section */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-10 relative">
          {isSubscribed && (
            <div className="absolute top-4 right-4 bg-green-500/90 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle"></i>
                <span>Successfully subscribed! (Testing Stage)</span>
              </div>
            </div>
          )}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
            <p className="text-gray-400 mb-8 text-lg">Subscribe to our newsletter for weekly weather updates and breaking news</p>
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                required
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg whitespace-nowrap font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage; 