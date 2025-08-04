import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Video, Phone, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#courses", label: "Khóa học" },
    { href: "#instructors", label: "Giảng viên" },
    { href: "#pricing", label: "Học phí" },
    { href: "#contact", label: "Liên hệ" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Video className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">HDT AI</h1>
              <p className="text-xs text-slate-600">CapCut Mastery</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+84334734875"
              className="hidden sm:flex items-center space-x-2 text-slate-700 hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">+84 33 473 4875</span>
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="text-slate-700" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-slate-700 hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
