import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

const Header = ({ onMenuToggle, isMenuOpen = false }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">WeCare AI</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                AI-powered skin health assistant
              </p>
            </div>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Home
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Scan History
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            About
          </Button>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="professional" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="professional" size="icon" className="sm:hidden">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;