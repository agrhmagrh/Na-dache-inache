import Form from "../components/Form";

export default function Banner() {
  return (
    <section className="first-screen bg-white w-full pb-5">
      <div className="w-auto max-w-screen-xl m-auto flex flex-col xl:flex-row xl:pb-20">
        <div className="banner bg-[url('/img/Banner.png')] bg-cover w-full min-h-[450px] bg-no-repeat xl:m-auto z-10 xl:mt-5 xl:w-4/6">
          <div className="banner-info flex flex-col gap-12 pl-16 pt-24 xl:pb-44">
            <div className="banner-title text-white text-2xl text-wrap md:w-3/6 w-5/6 relative font-medium leading-[2.5rem]">
              Строительство современных конструкций для дома и дачи
            </div>
            <div className="banner-description text-white md:w-6/12 w-5/6 text-sm	relative pl-8">
              Возможность работы по каталогу готовых решений и по
              индивидуальному проекту. <br /> Работаем по Москве и Московской
              области
            </div>
            <div className="banner-social-links text-gray-additional md:pb-0 pb-20">
              <ul className="social-links flex sm:flex-row flex-col gap-10">
                <li className="social-links-item">Instagram*</li>
                <li className="social-links-item">Telegram</li>
                <li className="social-links-item">WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-wrapper form-border bg-gray-dark-block xl:w-2/6 relative">
          <div className="background-form hidden xl:block"></div>
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
