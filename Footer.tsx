import { Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4">Артём Пынзарь</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Журналист, специализирующийся на социальных темах 
              и молодёжном медиа пространстве.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  О себе
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Опыт работы
                </a>
              </li>
              <li>
                <a href="#portfolio-section" className="text-gray-400 hover:text-white transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-400 hover:text-white transition-colors">
                  Достижения
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Контакты</h3>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:pynzarartem@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                pynzarartem@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Артём Пынзарь. Все права защищены.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Создано с <Heart className="w-4 h-4 text-red-500" /> для журналистики
          </p>
        </div>
      </div>
    </footer>
  );
}