'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Code, Camera, BookOpen, Coffee, Heart, Zap } from 'lucide-react';

export default function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const quotes = [
    "Building the future, one line of code at a time",
    "Turning caffeine into creative solutions",
    "Where curiosity meets innovation",
    "Crafting digital experiences with passion"
  ];

  const skills = [
    { icon: Code, label: "Learning new Tech", color: "bg-green-500/20 text-green-400" },
    { icon: Camera, label: "Showing up myself ", color: "bg-emerald-500/20 text-emerald-400" },
    { icon: BookOpen, label: "Curious", color: "bg-teal-500/20 text-teal-400" },
    { icon: Coffee, label: "Coffee Enthusiast", color: "bg-amber-500/20 text-amber-400" }
  ];

  const photos = [
    { src: "/images/img1.jpg", alt: "Photo 1" },
  { src: "/images/img2.jpg", alt: "Photo 2" },
  { src: "/images/img3.jpg", alt: "Photo 3" },
  { src: "/images/img4.jpg", alt: "Photo 4" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-soft delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/8 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4 lg:space-y-6">
            
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Hey, I'm{' '}
                <span className="gradient-text animate-gentle-glow">
                  Yash!
                </span>
              </h1>
              
              <div className="h-12 lg:h-16 flex items-center">
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground transition-all duration-700">
                  {quotes[currentQuote]}
                </p>
              </div>
            </div>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm a 19-year-old engineering student with a curious mind and way too many open tabs in life. 
              Think of me as a mix of a tech builder, a design junkie, a part-time philosopher, and a full-time overthinker.
            </p>

            <div className="flex flex-wrap gap-2 lg:gap-3">
              {skills.map((skill, index) => (
                <Card key={index} className={`glass-effect hover:scale-105 transition-all duration-500 ${skill.color} border-0 cursor-pointer`}>
                  <CardContent className="p-2 lg:p-3 flex items-center gap-2">
                    <skill.icon className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span className="text-xs lg:text-sm font-medium">{skill.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base"
                onClick={() => scrollToSection('projects')}
              >
                <Zap className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-effect hover:bg-white/10 transition-all duration-300 text-sm lg:text-base"
                onClick={() => scrollToSection('interests')}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="photo-gallery">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="photo-item glass-effect soft-border"
                    style={{ 
                      animationDelay: `${index * 0.6}s`,
                      animation: `float 8s ease-in-out infinite ${index * 0.5}s`
                    }}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="transition-all duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400/20 rounded-full blur-sm animate-pulse-soft"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400/20 rounded-full blur-sm animate-pulse-soft delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-teal-400/20 rounded-full blur-sm animate-pulse-soft delay-500"></div>
            </div>
          </div>
        </div>

        <div className={`mt-12 lg:mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            <Card className="glass-effect border-0 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-1">19</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Years Old</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-0 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-1">∞</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Ideas</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-0 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-teal-400 mb-1">24/7</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Learning</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-0 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-4 lg:p-6 text-center">
                <Coffee className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 text-amber-400" />
                <div className="text-xs lg:text-sm text-muted-foreground">Coffee Lover</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}