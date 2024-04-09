import {FaPhoneSquare, FaWhatsapp } from "react-icons/fa"
import {RiTimeLine} from "react-icons/ri"
import {MdPlace} from "react-icons/md"
export default function Footer() {
  return (
    <footer className="footer bg-gray-dark text-white ">
      <div className="company-info grid grid-cols-2 py-5 px-28 text-white text-xl">
        <div className="contact-info">
          <h4 className="pb-2">КОНТАКТЫ</h4>
          <p className="phone pb-1 flex items-center gap-3"><FaPhoneSquare className="rotate-90"/> +7 (499) 000-01-02</p>
          <p className="whatsapp pb-1 flex items-center gap-3"><FaWhatsapp />+7 (999) 897-11-22</p>
          <p className="place pb-1 flex items-center gap-3">
          <MdPlace />  Московская область, г. Мытищи, ул. Пушкина 13
          </p>
        </div>
        <div className="worktime">
          <h4 className="pb-2">ЧАСЫ РАБОТЫ</h4>
          <p className="orders-time pb-1 flex items-center gap-3"> <RiTimeLine />Заказы: ПН-СБ c 09.00 до 20.00</p>
          <p className="working-time pb-1 pl-7">Производство: ПН-ПТ c 08.00 до 18.00</p>
          <p className="weekend pb-1 pl-7">Воскресенье - выходной</p>
        </div>
      </div>
      <div className="separator border border-gray-additional"></div>
      <div className="agreements grid grid-cols-3 py-10">
        <div className="copyright flex justify-center items-center text-xl">Все права защищены © 2012-2024</div>
        <div className="agreement flex justify-center items-center text-xl uppercase" >Пользовательское соглашение</div>
        <div className="privacy-policy flex justify-center items-center text-xl uppercase">Политика конфиденциальности</div>
      </div>
    </footer>
  );
}
