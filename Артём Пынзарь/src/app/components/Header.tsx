import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold text-gray-900">
            Артём Пынзарь
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              О себе
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Опыт работы
            </button>
            <button
              onClick={() => scrollToSection("portfolio-section")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Достижения
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                О себе
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                Опыт работы
              </button>
              <button
                onClick={() => scrollToSection("portfolio-section")}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                Достижения
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                Контакты
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}