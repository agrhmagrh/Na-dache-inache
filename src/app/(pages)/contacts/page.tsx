import Form from "../../components/Form";

export default function Contacts() {
  return (
    <section className="flex flex-col justify-between h-full bg-gray-light">
      <div className="content mx-auto max-w-screen-xl ">
        <div className="title flex items-center justify-center p-20 ">
          <h3 className="relative font-bold text-4xl leading-9 z-10 h-[40px] bg-gray-light">
            Связаться с нами
          </h3>
          <div className="title-border"></div>
        </div>
      </div>
      <div className="form-wrapper bg-gray-dark-block p-10">
        <div className="wrapper max-w-screen-xl m-auto">
          <Form btn={"Отправить"} />
        </div>
      </div>

      <div className="yandex-map grayscale">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1ac460d28df242a48f2acb2124b96d659a3b9c4903a5202e39e0ed58a7d0b91f&amp;source=constructor&amp;scroll=false"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </section>
  );
}
