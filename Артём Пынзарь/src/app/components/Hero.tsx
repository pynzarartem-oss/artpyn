import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import profileImage from "figma:asset/3e7198178471e9f151ad6b4e10f3fd8da2c7a623.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-2 mb-4 flex-wrap">
              <Badge variant="secondary">Журналист</Badge>
              <Badge variant="secondary">Медиа-наставник</Badge>
              <Badge variant="secondary">Эксперт проектов Движения Первых</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Артём Пынзарь
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Журналист, медиа-наставник и эксперт федеральных конкурсов Движения Первых. 
              Корреспондент "Новости Первых", диктор "Классное Радио" и руководитель 
              медиа отдела ШСК "РоСпорт". Специализируюсь на молодёжной журналистике 
              и развитии медиа-проектов.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
              >
                Опыт работы
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Связаться
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Артём Пынзарь"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}