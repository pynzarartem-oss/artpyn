import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
    alert("Спасибо за ваше сообщение! Я отвечу в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "pynzarartem@gmail.com",
      link: "mailto:pynzarartem@gmail.com",
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (916) 914-96-87",
      link: "tel:+79169149687",
    },
    {
      icon: MapPin,
      label: "Местоположение",
      value: "Москва, Россия",
      link: null,
    },
  ];

  const social = [
    {
      icon: "vk",
      label: "VK",
      link: "https://vk.com/artpyn",
    },
    {
      icon: "telegram",
      label: "Telegram",
      link: "https://t.me/ArtPyn",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Свяжитесь со мной
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Открыт для предложений о сотрудничестве, комментариев и интервью
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6 text-gray-900">Контактная информация</h3>
            <div className="space-y-6 mb-8">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          className="text-gray-900 hover:text-gray-700 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-gray-900">{contact.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg mb-4 text-gray-900">Социальные сети</h4>
              <div className="flex gap-4">
                {social.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
                      aria-label={item.label}
                    >
                      {item.icon === "vk" ? (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.29 14.31h-1.24c-.52 0-.68-.42-1.61-1.35-.82-.79-1.18-.89-1.38-.89-.29 0-.37.08-.37.47v1.23c0 .33-.1.53-1 .53-1.49 0-3.13-.91-4.29-2.6-1.75-2.45-2.23-4.3-2.23-4.68 0-.2.08-.39.47-.39h1.24c.35 0 .48.16.62.54.68 1.98 1.82 3.71 2.29 3.71.18 0 .26-.08.26-.54v-2.14c-.06-1.09-.64-1.18-.64-1.57 0-.16.13-.31.34-.31h1.95c.29 0 .4.16.4.51v2.89c0 .29.13.4.21.4.18 0 .33-.11.67-.45 1.02-1.15 1.75-2.92 1.75-2.92.1-.2.26-.39.61-.39h1.24c.42 0 .51.21.42.51-.16.73-1.76 3.03-1.76 3.03-.15.23-.19.33 0 .59.14.19.6.59 1 1.08.51.58 1.01 1.07 1.12 1.41.12.33-.06.5-.39.5z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                        </svg>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-xl mb-6 text-gray-900">Отправить сообщение</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Петров"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о вашем предложении..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Отправить
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}