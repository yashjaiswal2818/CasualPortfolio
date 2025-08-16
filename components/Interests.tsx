'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Film, BookOpen, Palette, Brain, Zap } from 'lucide-react';

export default function Interests() {
  const [activeTab, setActiveTab] = useState('tech');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const interests = {
    tech: {
      icon: Code2,
      title: 'Tech & Code',
      description: 'Building the future with cutting-edge technology',
      points: [
        'I love building stuff for the web—simple tools, experimental apps, or just things that make people go, "Wait, that\'s cool."',
        'I enjoy turning quirky ideas into real products using technologies like React/Next.js and TypeScript.',
        'I’m a curious mind who loves exploring new tech, from AI/ML to UI/UX design, even if it gets overwhelming at times.',
        'My passion lies in creating seamless user experiences that are both innovative and user-friendly.'
      ],
      tags: ['React', 'Next.js', 'AI','TypeScript', 'Web Development']
    },
    creative: {
      icon: Film,
      title: 'Cinema & Creativity',
      description: 'Storytelling through visual narratives and hosting',
      points: [
        'Movies, storytelling, and video editing are how I express all the things I can’t say out loud.',
        'I enjoy creating visual content, from designing posters to editing videos for fun.',
        'Being in front of the camera, especially through anchoring and hosting, helps me overcome stage fear and connect with people.',
        'My socials reflect this passion, with aesthetic visuals and a narrative-driven approach.'
      ],
      tags: ['InterACTING', 'Hosting', 'Storytelling', 'Tamasha', 'The Mentalist']
    },
    learning: {
      icon: BookOpen,
      title: 'Bookshelf Wisdom',
      description: 'Expanding horizons through continuous learning',
      points: [
        'I’m a bookworm who reads self-help books not because I’m lost, but because I like the idea of getting better.',
        'I dive into topics like philosophy and psychology to better understand human nature and the world.',
        'Continuous learning is a core part of who I am, always expanding my horizons.',
        'A strong believer that knowledge is a key tool for personal growth and development.'
      ],
      tags: ['Philosophy', 'Non-Fiction', 'Self-Growth', 'Research']
    }
  };

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
    <section ref={sectionRef} id="interests" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What I'm <span className="gradient-text">Into</span>
           
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of technology, creativity, and human connection
          </p>
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 glass-effect">
              {Object.entries(interests).map(([key, interest]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex items-center gap-2 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
                >
                  <interest.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{interest.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(interests).map(([key, interest]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                <Card className="glass-effect border-0 neon-border">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <interest.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold">{interest.title}</CardTitle>
                    <p className="text-muted-foreground text-lg">{interest.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Descriptive Points */}
                    <ul className="list-disc list-inside space-y-2 text-left text-muted-foreground">
                      {interest.points.map((point, index) => (
                        <li key={index}>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {interest.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="glass-effect hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Interactive elements */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="glass-effect border-0 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:animate-pulse" />
              <h3 className="font-bold mb-2">Always Learning</h3>
              <p className="text-sm text-muted-foreground">Constantly expanding my knowledge and skills</p>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-0 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Palette className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:animate-pulse" />
              <h3 className="font-bold mb-2">Creative Problem Solving</h3>
              <p className="text-sm text-muted-foreground">Finding innovative solutions to complex challenges</p>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-0 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400 group-hover:animate-pulse" />
              <h3 className="font-bold mb-2">High Energy</h3>
              <p className="text-sm text-muted-foreground">Bringing enthusiasm to everything I do</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}