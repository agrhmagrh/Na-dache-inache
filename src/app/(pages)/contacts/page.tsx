import { BiPhone, BiMessageDetail, BiEnvelope, BiBuilding } from "react-icons/bi";
import Form from "../../components/Form";

export default function Contacts() {
  return (
    <main className="bg-gray-light">
      <section className="max-w-screen-xl m-auto px-6 py-8 grid md:grid-cols-12 gap-6">
        {/* Sidebar info */}
        <aside className="col-span-12 md:col-span-4">
          <div className="bg-white border border-gray-additional p-5">
            <div className="text-gray-500 text-sm mb-4">Контакты</div>

            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold mb-2">Контакты для связи</div>
                <div className="flex items-center gap-2"><BiPhone className="text-gray-500"/> <a href="tel:+74990000102">+7 (499) 000-01-02</a></div>
                <div className="flex items-center gap-2"><BiPhone className="text-gray-500"/> <a href="tel:+79998971122">+7 (999) 897-11-22</a></div>
              </div>

              <div>
                <div className="font-semibold mb-2">Отдел снабжения</div>
                <div className="flex items-center gap-2"><BiPhone className="text-gray-500"/> <a href="tel:+79998971122">+7 (999) 897-11-22</a></div>
              </div>

              <div>
                <div className="font-semibold mb-2">Наши мессенджеры</div>
                <div className="flex items-center gap-2"><BiMessageDetail className="text-gray-500"/> <a href="tel:+74990000102">+7 (499) 000-01-02</a></div>
                <div className="flex items-center gap-2"><BiMessageDetail className="text-gray-500"/> <a href="tel:+79998971122">+7 (999) 897-11-22</a></div>
              </div>

              <div>
                <div className="font-semibold mb-2">Напишите нам</div>
                <div className="flex items-center gap-2"><BiEnvelope className="text-gray-500"/> <a href="mailto:info@besedkaloft.ru">info@besedkaloft.ru</a></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Map */}
        <div className="col-span-12 md:col-span-8">
          <div className="yandex-map grayscale">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1ac460d28df242a48f2acb2124b96d659a3b9c4903a5202e39e0ed58a7d0b91f&source=constructor&scroll=false"
              width="100%"
              height="360"
            />
          </div>
        </div>
      </section>

      {/* Schedule + Questions */}
      <section className="max-w-screen-xl m-auto px-6 grid md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 bg-orange text-white p-6 rounded">
          <div className="text-xl font-semibold mb-3">График работы</div>
          <ul className="space-y-2 text-sm">
            <li><span className="font-semibold">Офис:</span> пн – пт с 09:00 до 18:00 (без обеда)</li>
            <li><span className="font-semibold">Прием заказов:</span> пн – вс с 09:00 до 21:00 (без обеда)</li>
            <li><span className="font-semibold">Производство:</span> пн – вс с 09:00 до 21:00 (без обеда)</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 bg-orange text-white p-6 rounded flex items-center justify-center">
          <div className="text-xl font-semibold">Остались вопросы?</div>
        </div>
      </section>

      {/* Requisites */}
      <section className="max-w-screen-xl m-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Реквизиты “Беседка Лофт”</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-200 h-72 rounded flex items-center justify-center text-gray-500">
            <div className="flex items-center gap-2"><BiBuilding/> Реквизиты компании</div>
          </div>
          <div className="bg-gray-200 h-72 rounded"></div>
        </div>
      </section>

      {/* Bottom form to match style */}
      <section className="bg-gray-dark-block py-10">
        <div className="wrapper max-w-screen-xl m-auto px-6">
          <Form btn={"Отправить"} />
        </div>
      </section>
    </main>
  );
}
