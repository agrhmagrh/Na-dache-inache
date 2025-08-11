import Image from "next/image";
import FormBlock from "@/app/HomeSections/FormBlock";
import PopularCategories from "@/app/HomeSections/PopularCategories";
import DeliveryCalcForm from "@/app/components/DeliveryCalcForm";

const BENEFITS = [
  {
    title: "Подготовка товара к отправке",
    desc: "Надежно упаковываем и проверяем комплектность готового изделия",
    icon: "/img/Icon-pack.png",
  },
  {
    title: "Доставка до места установки",
    desc: "Доставим и обеспечим бережную выгрузку товара на вашем участке",
    icon: "/img/Icon-truck.png",
  },
  {
    title: "Монтаж под ключ",
    desc: "Обеспечим качественный монтаж штатной группой профессионалов",
    icon: "/img/Icon-tools.png",
  },
  {
    title: "Сбор монтажных отходов",
    desc: "Сохраним чистоту и порядок на участке, соберем строительные отходы в мешки",
    icon: "/img/Icon-clean.png",
  },
];

export default function DeliveryPage() {
  return (
    <main className="bg-gray-light">
      {/* Intro benefits */}
      <section className="max-w-screen-xl m-auto px-6 py-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Доставка и установка</h1>
        <div className="grid md:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="bg-gray-dark-block text-white p-6 rounded">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative w-10 h-10">
                  <Image src={b.icon} alt="" fill className="object-contain" />
                </div>
                <div className="font-semibold">{b.title}</div>
              </div>
              <div className="text-sm text-gray-200">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Text blocks */}
      <section className="max-w-screen-xl m-auto px-6 space-y-4">
        <p>
          Наша команда профессионалов также предоставляет такие услуги как: разгрузка, занос на участок, сбор и уборка мусора – все это входит в наши обязательства перед клиентом и предоставляется бесплатно.
        </p>
        <p>
          Мы гарантируем качественную подготовку и установку всех наших изделий. Мы сделаем фундамент, подготовим и установим беседку, обеспечив ее надежность и долговечность.
        </p>
      </section>

      {/* Banner with form */}
      <section className="max-w-screen-xl m-auto px-6 py-10">
        <div className="relative rounded overflow-hidden">
          <Image
            src="/img/Banner.png"
            alt="Доставка"
            width={1200}
            height={420}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-start p-6">
            <DeliveryCalcForm />
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl m-auto px-6 space-y-4">
        <p>
          Мы также гарантируем прозрачность во всех наших сделках. И по завершении работ мы предоставляем договор, спецификацию на конструкцию, акты выполненных работ и гарантийные обязательства, которые передаются заказчику вместе с изделием.
        </p>
        <p>
          Выбирая нас, вы можете быть уверены в том, что ваш заказ будет доставлен и установлен профессионально, качественно и в срок.
        </p>
      </section>

      <PopularCategories />

      {/* Contact block reused */}
      <FormBlock />
    </main>
  );
}


