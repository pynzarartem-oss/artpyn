import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Camera } from "lucide-react";

export function Portfolio() {
  const handlePhotosClick = () => {
    window.open("https://disk.yandex.ru/d/dYTxZMZoqaTYyg", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Camera className="w-12 h-12 mx-auto mb-4 text-gray-900" />
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Портфолио
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мои работы и материалы
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handlePhotosClick}
            className="gap-2"
          >
            <Camera className="w-5 h-5" />
            Фотографии
          </Button>
        </div>
      </div>
    </section>
  );
}