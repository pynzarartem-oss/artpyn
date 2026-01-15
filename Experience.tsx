import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      year: "2025",
      title: "Диктор",
      organization: "«Спасибо, Первый»",
      description: "Ведение эфиров и озвучивание материалов для медиа-проекта",
      tags: ["Радио", "Дикторское мастерство", "Движение Первых"],
      current: true,
      link: "https://vk.com/spasibopervyi",
    },
    {
      year: "2025",
      title: "Руководитель медиа отдела",
      organization: "ШСК «РоСпорт»",
      description: "Управление медиа-отделом, создание контента и координация медиа-активностей",
      tags: ["Менеджмент", "Медиа"],
      current: true,
      link: "https://t.me/rosport806",
    },
    {
      year: "2025",
      title: "Медиа-наставник",
      organization: "Всероссийский проект «Первые Первым»",
      description: "Обучение и наставничество начинающих журналистов",
      tags: ["Наставничество", "Образование", "Движение Первых"],
      current: true,
      link: "https://xn--b1aahba7bpdge1jf.xn--90acagbhgpca7c8c7f.xn--p1ai/?ysclid=mkfi4jl3rg501149369",
    },
    {
      year: "2025",
      title: "Член медиа отдела и организационного комитета",
      organization: "Акселератор проектов «О! Идея!»",
      description: "Участие в медиа-сопровождении проекта",
      tags: ["Проектная работа", "Медиа", "Движение Первых"],
      current: true,
      link: "https://t.me/pervye_start_v_nastavnichestve",
    },
    {
      year: "2025",
      title: "Член регионального медиа-центра Движения Первых",
      organization: "г. Москва",
      description: "Работа в региональном медиа-центре столицы",
      tags: ["Региональные медиа", "Движение Первых"],
      current: true,
      link: "https://t.me/mypervie77",
    },
    {
      year: "2025",
      title: "Диктор",
      organization: "Классное Радио «Движения Первых»",
      description: "Ведение радиоэфиров и озвучивание материалов",
      tags: ["Радио", "Эфир", "Движение Первых"],
      current: true,
      link: "https://t.me/klassnoetvradio",
    },
    {
      year: "2025",
      title: "Корреспондент",
      organization: "«Новости Первых»",
      description: "Ведение репортажей с мест событий и мероприятий",
      tags: ["Новости", "Репортаж", "Движение Первых"],
      current: true,
      link: "https://t.me/novostipervyh",
    },
    {
      year: "2024-2025",
      title: "Член окружного медиа-центра",
      organization: "«Команда ЗАО»",
      description: "Участие в работе окружного медиа-центра",
      tags: ["Окружные медиа", "Движение Первых"],
      current: true,
      link: "https://t.me/mypervie77",
    },
    {
      year: "2024-2025",
      title: "Участник",
      organization: "«Команда ЗАО»",
      description: "Активное участие в деятельности команды Западного округа",
      tags: ["Командная работа", "Движение Первых"],
      current: true,
      link: "https://t.me/mypervie77",
    },
    {
      year: "2024-2025",
      title: "Председатель совета первичного отделения",
      organization: "Движение Первых ГБОУ Школа №806",
      description: "Руководство первичным отделением Движения в школе",
      tags: ["Лидерство", "Движение Первых"],
      current: true,
      link: "https://t.me/school806",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-900" />
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Опыт работы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мой профессиональный путь в журналистике и медиа
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <a 
                key={index} 
                href={exp.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 md:w-24">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.year}</span>
                      </div>
                      {exp.current && (
                        <Badge variant="default" className="mt-2 text-xs">
                          Актуально
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-1 text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600 mb-3">{exp.organization}</p>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}