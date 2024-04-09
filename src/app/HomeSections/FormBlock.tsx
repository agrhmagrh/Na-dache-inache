import Form from "../components/Form";

export default function FormBlock() {
  return (
    <section className="form-section bg-[url('/img/Form-bg.png')] min-h-[930px] bg-no-repeat bg-cover grid grid-cols-12 items-center bg-bottom">
      <div className="form-wrapper relative bg-gray-dark-block py-[100px] xl:min-w-[450px] px-[180px] col-span-7 my-20 h-fit before:bg-[url('/img/BG-Form.png')] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-no-repeat">
        <div className="title-form uppercase text-white text-3xl text-center p-5">
          Связаться с нами
        </div>
        <div className="decription-form uppercase text-center text-sm text-orange border border-orange px-10  py-3">
          Получить бесплатную консультацию
        </div>
        <Form btn={"Отправить"}></Form>
      </div>
    </section>
  );
}
