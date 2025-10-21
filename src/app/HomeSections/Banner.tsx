import Form from "../components/Form";

// Константы для социальных ссылок
const SOCIAL_LINKS = [
  { name: "Instagram*", href: "#" },
  { name: "Telegram", href: "#" },
  { name: "WhatsApp", href: "#" },
] as const;

export default function Banner(): JSX.Element {
  return (
    <section className="first-screen bg-white w-full" aria-label="Главный баннер">
      <div className="w-auto max-w-screen-xl m-auto flex flex-col xl:flex-row">
        {/* Левая часть с контентом */}
        <div 
          className="banner bg-[url('/img/Banner.png')] bg-cover w-full min-h-[600px] bg-no-repeat xl:m-auto z-10 xl:w-4/6"
          role="banner"
        >
          <div className="banner-info flex flex-col gap-8 pl-16 pt-12 xl:pb-44">
            <h1 className="banner-title text-white text-2xl text-wrap relative font-medium leading-[2.5rem]">
              Строительство современных конструкций для дома и дачи
            </h1>
            <p className="banner-description text-white w-5/6 text-sm relative pl-8">
              Возможность работы по каталогу готовых решений и по
              индивидуальному проекту. <br /> Работаем по Москве и Московской
              области
            </p>
            <nav className="banner-social-links text-gray-additional md:pb-0 pb-20" aria-label="Социальные сети">
              <ul className="social-links flex sm:flex-row flex-col gap-10">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.name} className="social-links-item">
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors duration-200"
                      aria-label={`Перейти в ${link.name}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Правая часть с формой */}
        <aside className="form-wrapper bg-gray-dark-block xl:w-2/6 relative" aria-label="Форма заказа">
          <div className="form-column mt-24 flex flex-col items-center xl:w-5/6 sm:w-3/6 m-auto">
            <div className="form-title relative z-10 text-white text-3xl text-center">
              <h2>Закажите эскиз конструкции</h2>
            </div>
            <Form btn="Заказать проект" />
          </div>
        </aside>
      </div>
    </section>
  );
}
