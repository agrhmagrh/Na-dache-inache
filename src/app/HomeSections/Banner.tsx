import Form from "../components/Form";

export default function Banner() {
  return (
    <section className="first-screen bg-white w-full">
      <div className="w-auto max-w-screen-xl m-auto flex flex-col xl:flex-row">
        <div className="banner bg-[url('/img/Banner.png')] bg-cover w-full min-h-[600px] bg-no-repeat xl:m-auto z-10 xl:w-4/6">
          <div className="banner-info flex flex-col gap-8 pl-16 pt-12 xl:pb-44">
            <div className="banner-title text-white text-2xl text-wrap relative font-medium leading-[2.5rem]">
              Строительство современных конструкций для дома и дачи
            </div>
            <div className="banner-description text-white w-5/6 text-sm	relative pl-8">
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
        <div className="form-wrapper bg-gray-dark-block xl:w-2/6 relative">
          <div className="form-column mt-24 flex flex-col items-center xl:w-5/6 sm:w-3/6 m-auto">
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
