import Link from "next/link";

type FormType = {
  btn: string
}


export default function Form({btn}: FormType) {
  return (
    <form action="" className="relative z-10 mx-auto my-10 flex flex-col gap-10 w-5/6">
      <div className="field ">
        <label
          htmlFor="name"
          className="text-white w-full block text-xl border-b-2 border-solid cursor-pointer border-gray-additional h-10"
        >
          Имя
        </label>
        <input type="text" name="name" id="name" className="hidden" />
      </div>
      <div className="field">
        <label
          htmlFor="phone"
          className="text-white w-full h-10  block text-xl border-b-2 border-solid border-gray-additional  cursor-pointer"
        >
          Телефон
        </label>
        <input type="text" name="phone" id="phone" className="hidden" />
      </div>
      <div className="form-submit-wrapper flex flex-col gap-6 items-center m-2 mt-7">
        <div className="submit w-full text-center text-white bg-orange m-3 text-xl h-11">
          <input type="submit" value={btn} className="block w-full h-full cursor-pointer" />
        </div>
        <div className="additional-btn text-gray-additional h-8 text-base flex border-b border-solid border-gray-additional">
          <Link href="/projects">Примеры работ</Link>
        </div>
      </div>
    </form>
  );
}
