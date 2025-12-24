import { useState } from "react";
import { motion } from "motion/react";
import {
  Plane,
  Users,
  Calendar,
  Clock,
  CreditCard,
  Wifi,
  Laptop,
  MapPin,
  Coffee,
  Hotel,
  AlertCircle,
  Globe,
  MessageCircle,
  Award,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

export default function App() {
  const [activeGroup, setActiveGroup] = useState<number | null>(
    null,
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const modules = [
    {
      icon: Plane,
      title: "Аэропорт без стресса",
      description:
        "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Hotel,
      title: "В отеле: заселение и помощь",
      description:
        "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Coffee,
      title: "Кафе и рестораны",
      description:
        "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit:
        "Развитие гастрономического словаря и уверенности в общении.",
      color: "from-cyan-400 to-teal-500",
    },
    {
      icon: MapPin,
      title: "На улице: ориентирование и просьбы",
      description:
        "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit:
        "Понимание устной речи и произношения в реальных ситуациях.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: AlertCircle,
      title: "Экстренные случаи",
      description:
        "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск.",
      color: "from-rose-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Туризм и развлечения",
      description:
        "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык.",
      color: "from-cyan-500 to-emerald-500",
    },
    {
      icon: MessageCircle,
      title: "Дружба в путешествиях",
      description:
        "Как познакомиться с другими детьми или подростками за границей.",
      benefit:
        "Игровая практика диалогов и неформального общения.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description:
        "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      benefit:
        "Развитие связной речи и творческого самовыражения.",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const features = [
    {
      text: "Акцент на практическую, живую речь, а не на грамматику ради грамматики",
    },
    {
      text: "Все ситуации — из реальной жизни путешественника",
    },
    {
      text: "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты",
    },
    {
      text: "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-amber-500/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-amber-500/20 px-6 py-2 rounded-full mb-8 border border-cyan-500/30">
              <Plane className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-cyan-300">
                Английский для путешествий
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              Курс «Английский
              <br />
              для путешествий»
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа
              кофе до поиска утраченного чемодана? Этот курс
              научит вашего ребёнка реальному разговорному
              английскому, который пригодится в отпуске,
              поездках и будущих путешествиях!
            </p>

            <motion.a
              href="#registration"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Записаться на курс
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Users className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl sm:text-4xl font-bold">
                Для кого курс
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 cursor-pointer hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                setActiveGroup(activeGroup === 1 ? null : 1)
              }
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                    Первая группа
                  </h3>
                  <p className="text-slate-300">4–5 класс</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/30 cursor-pointer hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                setActiveGroup(activeGroup === 2 ? null : 2)
              }
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-300">
                    Вторая группа
                  </h3>
                  <p className="text-slate-300">6–8 класс</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
              Программа курса
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              8 увлекательных модулей для уверенного общения в
              любой ситуации
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <module.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-semibold mb-3 text-lg">
                    {module.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex items-start gap-2 pt-3 border-t border-slate-700/50">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-cyan-300">
                      {module.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Почему этот курс особенный?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Что потребуется
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Laptop className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Компьютер</h3>
              <p className="text-sm text-slate-400">
                Стационарный ПК или ноутбук с наушниками и
                микрофоном
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Wifi className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Интернет</h3>
              <p className="text-sm text-slate-400">
                Стабильное подключение и установленный Zoom
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">
                Желание учиться
              </h3>
              <p className="text-sm text-slate-400">
                Мотивация и готовность к интерактивным занятиям
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule and Pricing */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Schedule */}
            <motion.div
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30"
              {...fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Расписание
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50">
                  <Calendar className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-cyan-300 mb-1">
                      Четверг, 15:00 (МСК)
                    </p>
                    <p className="text-sm text-slate-400">
                      Группа 4–5 класс
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50">
                  <Calendar className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-amber-300 mb-1">
                      Пятница, 15:30 (МСК)
                    </p>
                    <p className="text-sm text-slate-400">
                      Группа 6–8 класс
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/30"
              {...fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-8 h-8 text-amber-400" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Стоимость
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                  <p className="text-sm text-amber-300 mb-2">
                    Полный курс (10 уроков)
                  </p>
                  <p className="text-3xl font-bold text-amber-200">
                    12 000 ₽
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-800/50">
                  <p className="text-sm text-slate-400 mb-2">
                    Абонемент
                  </p>
                  <p className="text-2xl font-bold">
                    1 300 ₽{" "}
                    <span className="text-base font-normal text-slate-400">
                      / урок
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="registration"
        className="py-20 sm:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-amber-500/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/20 to-orange-500/20 px-6 py-2 rounded-full mb-6 border border-rose-500/30">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              <span className="text-sm text-rose-300">
                Набор открыт!
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Места ограничены!
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
              Группы маленькие — максимум 6 детей, чтобы каждый
              получил внимание.
            </p>

            <p className="text-xl sm:text-2xl text-slate-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              Запишитесь сейчас — и следующее путешествие станет
              первым, где ваш ребёнок заговорит по-английски без
              страха!
            </p>

            <motion.button
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500 hover:from-cyan-400 hover:via-blue-400 hover:to-amber-400 px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plane className="w-6 h-6" />
              Записаться на курс
              <Award className="w-6 h-6" />
            </motion.button>

            <p className="mt-8 text-sm text-slate-500">
              Нажимая кнопку, вы сможете связаться с нами для
              записи
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm">
            © 2024 Курс «Английский для путешествий». Все права
            защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}