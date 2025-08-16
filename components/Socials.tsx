'use client';

import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Heart, BookOpen, Image as ImageIcon, MessageCircle, Coffee } from 'lucide-react';
import Script from 'next/script'; // Import the Next.js Script component

export default function Socials() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const socialLinks = [
    {  
      name: 'LinkedIn',  
      url: 'https://www.linkedin.com/in/yash-jaiswal-093684344',  
      icon: '💼',
      description: 'Professional network & career updates',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600'
    },
    {  
      name: 'Instagram',  
      url: 'https://www.instagram.com/jaiswalyashhh/',  
      icon: '📸',
      description: 'Visual stories & behind the scenes',
      color: 'from-pink-500 to-rose-500',
      hoverColor: 'hover:from-pink-400 hover:to-rose-400'
    },
    {  
      name: 'X (Twitter)',  
      url: 'https://x.com/yashjaiswal28_',  
      icon: '🐦',
      description: 'Thoughts, ideas & quick updates',
      color: 'from-slate-700 to-slate-800',
      hoverColor: 'hover:from-slate-600 hover:to-slate-700'
    },
    {  
      name: 'Pinterest',  
      url: 'https://in.pinterest.com/yashjaiswal2803/',  
      icon: '📌',
      description: 'Visual inspiration & mood boards',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-400 hover:to-red-500'
    }
  ];

  const currentlyReading = {
    title: "Everything Is F*cked: A Book About Hope",
    author: "Mark Manson",
    cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
    progress: 65,
    thoughts: "A thought-provoking exploration of hope, meaning, and human nature in our modern world."
  };

  // The useEffect for the intersection observer is fine and doesn't need to be changed
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="py-12 lg:py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500/8 rounded-full blur-3xl animate-pulse-soft delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Find me across the digital universe - always up for a good conversation
            </p>
          </div>

          {/* Social Links Grid */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4">
              {socialLinks.map((social, index) => (
                <Card 
                  key={index}
                  className="glass-effect-strong border-0 hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardContent className="p-4 lg:p-6 text-center relative z-10">
                    <div className="text-3xl lg:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <h3 className="font-bold text-base lg:text-lg mb-2">{social.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {social.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full group-hover:bg-white/10 transition-all duration-300 text-xs lg:text-sm"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      Connect <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Content Widgets */}
          <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Currently Reading (Goodreads) */}
            <Card className="glass-effect-strong border-0 soft-border mx-4 lg:mx-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl lg:text-2xl">
                  <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" />
                  Currently Reading
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div id="gr_custom_widget_1754217918" className="goodreads-widget">
                  {/* Goodreads widget will be injected here */}
                </div>
                <p className="text-sm text-muted-foreground">
                  A curated collection of design inspiration, mood boards, and visual ideas that fuel my creativity.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full glass-effect hover:bg-white/10 text-xs lg:text-sm"
                  onClick={() => window.open('https://www.goodreads.com/user/show/169836596-yash-jaiswal', '_blank')}
                >
                  View My Library <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Visual Inspiration (Pinterest) */}
            <Card className="glass-effect-strong border-0 soft-border mx-4 lg:mx-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl lg:text-2xl">
                  <ImageIcon className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
                  Visual Inspiration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div className="pinterest-widget">
                  <a 
                    data-pin-do="embedBoard" 
                    data-pin-board-width="400" 
                    data-pin-scale-height="120" 
                    data-pin-scale-width="100" 
                    href="https://in.pinterest.com/yashjaiswal2803/dil-x-duniya/"
                  >
                    View Pinterest Board
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  A curated collection of design inspiration, mood boards, and visual ideas that fuel my creativity.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full glass-effect hover:bg-white/10 text-xs lg:text-sm"
                  onClick={() => window.open('https://in.pinterest.com/yashjaiswal2803/dil-x-duniya/', '_blank')}
                >
                  Explore Board <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="glass-effect-strong border-0 max-w-2xl mx-auto">
              <CardContent className="p-6 lg:p-8">
                <Coffee className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-4 text-amber-400 animate-gentle-glow" />
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Let's Grab a Virtual Coffee</h3>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 px-4">
                  Always excited to connect with fellow creators, developers, and curious minds.  
                  Drop me a message and let's chat about ideas, projects, or just life in general!
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="secondary" className="glass-effect text-xs lg:text-sm">
                    <Heart className="w-3 h-3 mr-1" />
                    Open to collaborations
                  </Badge>
                  <Badge variant="secondary" className="glass-effect text-xs lg:text-sm">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Always learning
                  </Badge>
                  <Badge variant="secondary" className="glass-effect text-xs lg:text-sm">
                    <Coffee className="w-3 h-3 mr-1" />
                    Coffee enthusiast
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Load external scripts using the Next.js Script component */}
      <Script src="//assets.pinterest.com/js/pinit.js" strategy="lazyOnload" />
      <Script 
        src="https://www.goodreads.com/review/custom_widget/169836596.Yash's%20bookshelf:%20currently-reading?cover_position=left&cover_size=small&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=222&widget_bg_transparent=&widget_border_width=1&widget_id=1754217918&widget_text_color=ddd&widget_title_size=medium&widget_width=medium" 
        type="text/javascript" 
        charSet="utf-8"
        strategy="lazyOnload"
      />
    </>
  );
}