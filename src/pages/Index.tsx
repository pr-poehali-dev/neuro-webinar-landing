import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за регистрацию! Ссылка на вебинар придёт на ваш email.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-cyan-100/20" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm font-medium px-4 py-2">
              🎁 Подарок при регистрации
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Нейросети для бизнеса
              </span>
              <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl">
                Зарабатывай больше с ИИ
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 sm:text-xl">
              Узнай, как <strong>на самом деле</strong> внедрить нейросети в
              свой проект и начать зарабатывать больше. Реальные кейсы,
              проверенные стратегии, конкретные инструменты.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("registration")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Зарегистрироваться бесплатно
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <div className="flex items-center text-gray-600">
                <Icon name="Clock" className="mr-2" size={16} />
                <span className="text-sm">2 часа интенсива</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Запуск за 24 часа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Без вложений и команды. Конкретные шаги и инструменты для
                  быстрого старта.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Реальные кейсы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Проверенные стратегии привлечения аудитории и автоматизации
                  продаж.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Конкретные результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Воронки продаж, создание контента, автоматизация — всё
                  пошагово.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Спикер вебинара
              </h2>
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">
                    Екатерина
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700">
                    Эксперт по внедрению ИИ в бизнес
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Icon
                        name="Award"
                        className="mr-3 text-blue-600"
                        size={20}
                      />
                      <span>Спикер Т-Банка, Нетологии, Лайк Центра</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Users"
                        className="mr-3 text-blue-600"
                        size={20}
                      />
                      <span>Более 10 000 успешных внедрений ИИ</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        className="mr-3 text-blue-600"
                        size={20}
                      />
                      <span>Топ-эксперт по нейросетям в России</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/img/4540be3d-ece8-4b6f-928c-2b9b1d8b036a.jpg"
                  alt="Екатерина - эксперт по нейросетям"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Программа вебинара
            </h2>
            <p className="text-xl text-gray-600">
              2 часа практических знаний и реальных инструментов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">Привлечение аудитории</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Как нейросети помогают найти и привлечь целевую аудиторию
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="FileText" className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">Создание контента</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Автоматизация создания продающего контента для всех каналов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">Воронки продаж</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Построение автоматизированных воронок с помощью ИИ
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Settings" className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">Автоматизация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Полная автоматизация бизнес-процессов с нейросетями
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section
        id="registration"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Регистрация на бесплатный вебинар
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Зарегистрируйся сейчас и получи подарок
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <Icon name="Gift" className="mr-2" size={20} />
              <span className="font-semibold">
                "Ваш первый ИИ-сотрудник: маркетолог-стратег"
              </span>
            </div>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Имя *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300 focus:border-blue-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-gray-700 font-medium"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300 focus:border-blue-500"
                      placeholder="ваш@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300 focus:border-blue-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="comment"
                    className="text-gray-700 font-medium"
                  >
                    Комментарий
                  </Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300 focus:border-blue-500"
                    placeholder="Расскажите о своём бизнесе или вопросах по ИИ"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Зарегистрироваться и получить подарок
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Нажимая кнопку, вы соглашаетесь с условиями обработки
                  персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400">
            © 2024 Вебинар "Нейросети для бизнеса". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
