"use client";
import Link from "next/link";
import { ChangeEvent, SyntheticEvent, useState } from "react";

type FormType = {
  btn: string;
};

type Responsetype = { status: "ok" | "error" };
export default function Form({ btn }: FormType) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [status, setStatus] = useState<"ok" | "error" | null>(null);
  const [disabled, setDisableForm] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setDisableForm((p)=>!p)
    try {
      const f = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (f.status == 200 || f.status == 500) {
        const r: Responsetype = await f.json();
        setStatus(r.status);
      }
      
    } catch (error) {
      setStatus("error")
    } finally {
      setDisableForm((p)=>!p)
    }
  };

  function isDirty(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;

    if (target?.value.length > 0) {
      target.classList.add("is-dirty");
    } else {
      target.classList.remove("is-dirty");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="relative z-10 mx-auto my-10 flex flex-col gap-10  w-5/6"
    >
      <div className="field relative">
        <input
          onBlur={isDirty}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          className="peer h-full w-full absolute bg-[transparent] focus-within:outline-none text-white  border-b-2 border-solid border-gray-additional "
          autoComplete="off"
        />
        <label
          htmlFor="name"
          className="text-white w-full block text-xl  cursor-pointer h-10  transition-all peer-focus:text-sm  peer-focus:-translate-y-4 peer-focus:text-orange peer-[.is-dirty]:text-orange peer-[.is-dirty]:text-sm peer-[.is-dirty]:-translate-y-4 pointer-events-none"
        >
          Имя
        </label>
      </div>
      <div className="field relative">
        <input
          onBlur={isDirty}
          onChange={handleChange}
          type="phone"
          name="phone"
          id="phone"
          className="peer h-full w-full absolute bg-[transparent] focus-within:outline-none text-white  border-b-2 border-solid border-gray-additional"
          autoComplete="off"
        />

        <label
          htmlFor="phone"
          className="text-white w-full block text-xl  cursor-pointer h-10  transition-all peer-focus:text-sm  peer-focus:-translate-y-4 peer-focus:text-orange peer-[.is-dirty]:text-orange peer-[.is-dirty]:text-sm peer-[.is-dirty]:-translate-y-4 pointer-events-none"
        >
          Телефон
        </label>
      </div>
      <div className="form-submit-wrapper flex flex-col gap-6 items-center m-2">
        {status == "ok" && (
          <div className="text-center text-xl p-2">
            Заявка отправлена. В ближайшее время менеджер перезвонит вам
          </div>
        )}
        {status == "error" && (
          <div className="text-center text-xl">
            Произошла ошибка при отправке, перезвоните нам
          </div>
        )}
        <div className="submit w-full text-center text-white bg-orange m-3 text-xl h-11">
          <input
            disabled={disabled}
            type="submit"
            value={btn}
            className="block w-full h-full cursor-pointer disabled:backdrop-brightness-50 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div className="additional-btn text-gray-additional h-8 text-base flex border-b border-solid border-gray-additional">
          <Link href="/projects">Примеры работ</Link>
        </div>
      </div>
    </form>
  );
}
