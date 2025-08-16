'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Quote, Target, Rocket, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projectCategories = [
    {
      title: 'Past Adventures',
      description:
        'From AI-powered applications that solve real-world problems to hosting events that bring people together, my journey has been about creating meaningful impact.',
      highlights: ['AI Tools Development', 'Event Hosting', 'Creative Projects'],
      color: 'from-blue-500 to-cyan-500',
      icon: Rocket
    },
    {
      title: 'Future Goals',
      description:
        "I'm always looking ahead, planning the next adventure. Whether it's building innovative apps or finding new ways to connect with people.",
      highlights: ['Scale Impact', 'Master Craft', 'Connect Globally'],
      color: 'from-purple-500 to-pink-500',
      icon: Target
    }
  ];

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
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 lg:py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl animate-pulse-soft delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            Adventures & <span className="gradient-text">Aspirations</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Every project is a story, every line of code is a step towards something extraordinary
          </p>
        </div>

        {/* Motto Card */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="glass-effect-strong border-0 soft-border max-w-4xl mx-auto">
            <CardContent className="p-6 lg:p-8 text-center">
              <Quote className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-6 text-green-400 animate-gentle-glow" />
              <blockquote className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6 gradient-text">
                "Motivated by the fear of being average."
              </blockquote>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                This isn't just a quote—it's my driving force. Every project, every line of code, every creative
                endeavor stems from this fundamental belief that we're capable of extraordinary things.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Professional Portfolio CTA (Replaces Achievement Cards) */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="glass-effect border-0 max-w-3xl mx-auto text-center hover:scale-105 transition-all duration-500 shadow-lg">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text">
                Want to see the professional me?
              </h3>
              <p className="text-base lg:text-lg text-muted-foreground mb-6">
                Check out my dedicated portfolio showcasing my real-world work, experience, and impact.
              </p>
              <a
                href="https://your-professional-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg">
                  Visit Professional Portfolio
                </Button>
              </a>
              <p className="mt-4 text-base text-center text-muted-foreground italic">
  Then why this HeyYashSummary? Well, just to know me — where I’m, who I am.
</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Categories */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 px-4">
            {projectCategories.map((category, index) => (
              <Card
                key={index}
                className="glass-effect-strong border-0 hover:scale-105 transition-all duration-500 group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:animate-gentle-glow`}
                  >
                    <category.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-6">
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.highlights.map((highlight, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="glass-effect hover:scale-105 transition-all duration-300 text-xs lg:text-sm"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                   
                   
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Philosophy Card */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="glass-effect-strong border-0 max-w-4xl mx-auto">
            <CardContent className="p-6 lg:p-8 text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-green-600 flex items-center justify-center animate-gentle-glow">
                <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-teal-400 px-4">
                "There's a plentitude of wonders in the universe but we're stuck here."
              </blockquote>
              <p className="text-sm lg:text-base text-muted-foreground px-4">
                This reminds me to make the most of where I am while dreaming of where I could be.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
