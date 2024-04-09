import Form from "../components/Form";

export default function Banner() {
  return (
    <section className="first-screen bg-white w-full pb-5">
      <div className="content-form w-auto flex max-w-screen-xl m-auto">
        <div className="banner bg-[url('/img/Banner.png')] w-4/6 bg-no-repeat m-auto z-10 mt-5">
          <div className="banner-info pb-64 pt-24 pl-16 flex flex-col gap-12">
            <div className="banner-title text-white text-2xl text-wrap w-3/6 relative font-medium leading-[2.5rem]">
              Строительство современных конструкций для дома и дачи
            </div>
            <div className="banner-description text-white w-6/12 text-sm	relative pl-8">
              Возможность работы по каталогу готовых решений и по
              индивидуальному проекту. <br /> Работаем по Москве и Московской
              области
            </div>
            <div className="banner-social-links text-gray-additional">
              <ul className="social-links flex gap-10">
                <li className="social-links-item">Instagram*</li>
                <li className="social-links-item">Telegram</li>
                <li className="social-links-item">WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-wrapper form-border bg-gray-dark-block w-2/6 relative">
          <div className="background-form "></div>
          <div className="form-column mt-16 flex flex-col items-center">
            <div className="form-title relative z-10 text-white text-3xl text-center">
              <h2>Закажите эскиз конструкции</h2>
            </div>
            <Form btn={"Заказать проект"}></Form>
          </div>
        </div>
      </div>
    </section>
  );
}
