'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Coffee, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-white/10 py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-effect-strong border-0 max-w-2xl mx-auto">
          <CardContent className="p-6 lg:p-8 text-center">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-soft"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse-soft delay-300"></div>
              <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse-soft delay-700"></div>
            </div>
            
            <p className="text-sm lg:text-base text-muted-foreground mb-4">
              © {currentYear} Yash Jaiswal. Crafted with curiosity and caffeine.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="secondary" className="glass-effect text-xs lg:text-sm">
                <Heart className="w-3 h-3 mr-1 text-red-400" />
                Made with love
              </Badge>
              <Badge variant="secondary" className="glass-effect text-xs lg:text-sm">
                <Coffee className="w-3 h-3 mr-1 text-amber-400" />
                Fueled by coffee
              </Badge>
              <Badge variant="secondary" className="glass-effect text-xs lg:text-sm">
                <Code className="w-3 h-3 mr-1 text-green-400" />
                Built with Next.js
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground">
              "Motivated by the fear of being average."
            </p>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}