import { Card } from "@/app/components/ui/card";
import { Trophy, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      year: "2025",
      title: "Участник Международного Форума Гражданского Участия #МЫВМЕСТЕ",
      description: "Построение диалогов с волонтёрами и волонтёрскими штабами из других стран и регионов",
      category: "Форумы и конференции",
    },
    {
      year: "2025",
      title: "Делегат IV съезда Движения Первых",
      description: "Участие в формировании стратегии развития Движения",
      category: "Представительство",
    },
    {
      year: "2025",
      title: "Полуфиналист 6-го сезона «Большая Перемена»",
      description: "Направление «Расскажи о главном» - достижение полуфинала конкурса",
      category: "Конкурсы",
    },
    {
      year: "2025",
      title: "Участник «Премия Первых»",
      description: "Номинация «Звезда Движения» за вклад в развитие молодёжного движения",
      category: "Награды",
    },
    {
      year: "2025",
      title: "Волонтёр проекта «Москва 2030»",
      description: "Помощь в организации регионального проекта и его проведение",
      category: "Проекты",
    },
    {
      year: "2025",
      title: "Курс всероссийского проекта «Первые Первым»",
      description: "Успешное прохождение образовательной программы медиа-наставничества",
      category: "Образование",
    },
    {
      year: "2025",
      title: "Онлайн-практика «Классного Радио»",
      description: "Освоение профессиональных навыков радиожурналистики и дикторского мастерства",
      category: "Образование",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-gray-900" />
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Достижения и награды
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Признание профессионального сообщества за вклад в развитие журналистики
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-2">{achievement.year}</div>
                  <h3 className="text-lg mb-2 text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-700 mb-2">{achievement.description}</p>
                  <p className="text-sm text-gray-500">{achievement.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}