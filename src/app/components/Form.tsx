"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useFormik } from "formik";

type FormPropsType = {
  btn: string;
};
type FormType = { name: string; phone: string };
type FormErrorsType = { [key: string]: boolean };

function validate(values: FormType) {
  const errors: FormErrorsType = {};
  if (!values.name) {
    errors.name = true;
  }
  if (!values.phone) {
    errors.phone = true;
  }

  return errors;
}

type Responsetype = { status: "ok" | "error" };
export default function Form({ btn }: FormPropsType) {
  const [status, setStatus] = useState<"ok" | "error" | null>(null);

  const handleSubmit = async (values: FormType) => {
    try {
      const f = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (f.status == 200 || f.status == 500) {
        const r: Responsetype = await f.json();
        setStatus(r.status);
      }
    } catch (error) {
      setStatus("error");
    } finally {
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validate,
    onSubmit: handleSubmit,
  });

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
      onSubmit={formik.handleSubmit}
      action=""
      className="relative z-10 mx-auto my-10 flex flex-col gap-10 w-5/6"
    >
      <div className={`field relative`}>
        <input
          onBlur={(e) => {
            formik.handleBlur(e), isDirty(e);
          }}
          onChange={formik.handleChange}
          type="text"
          name="name"
          id="name"
          className={`peer h-full w-full absolute bg-[transparent] focus-within:outline-none text-white  border-b-2 border-solid border-gray-additional ${formik.touched.name && formik.errors.name && "border-red"}`}
          autoComplete="off"
          value={formik.values.name}
        />
        <label
          htmlFor="name"
          className={` w-full block text-xl cursor-pointer h-10 transition-all peer-focus:text-sm  peer-focus:-translate-y-4 peer-focus:text-orange peer-[.is-dirty]:text-orange peer-[.is-dirty]:text-sm peer-[.is-dirty]:-translate-y-4 pointer-events-none ${formik.touched.name && formik.errors.name ? "text-red" : "text-white"}`}
        >
          Имя
        </label>
      </div>
      <div className="field relative">
        <input
          onBlur={(e) => {
            formik.handleBlur(e), isDirty(e);
          }}
          onChange={formik.handleChange}
          type="phone"
          name="phone"
          id="phone"
          className={`peer h-full w-full absolute bg-[transparent] focus-within:outline-none text-white  border-b-2 border-solid border-gray-additional ${formik.touched.phone && formik.errors.phone && "border-red"}`}
          autoComplete="off"
          value={formik.values.phone}
        />

        <label
          htmlFor="phone"
          className={`${formik.touched.phone && formik.errors.phone ? "text-red" : "text-white"} w-full block text-xl cursor-pointer h-10  transition-all peer-focus:text-sm  peer-focus:-translate-y-4 peer-focus:text-orange peer-[.is-dirty]:text-orange peer-[.is-dirty]:text-sm peer-[.is-dirty]:-translate-y-4 pointer-events-none `}
        >
          Телефон
        </label>
      </div>
      <div className="form-submit-wrapper flex flex-col gap-6 items-center m-2">
        {status == "ok" && (
          <div className="text-center p-2 text-green">
            Заявка отправлена. В ближайшее время менеджер перезвонит вам
          </div>
        )}
        {status == "error" && (
          <div className="text-center text-red">
            Произошла ошибка при отправке, перезвоните нам
          </div>
        )}
        <div className="submit w-full text-center text-white bg-orange m-3 text-xl h-11">
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="flex justify-center items-center w-full h-full cursor-pointer disabled:backdrop-brightness-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formik.isSubmitting && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {formik.isSubmitting ? "Отправка..." : btn}
          </button>
        </div>
        <div className="additional-btn text-gray-additional h-8 text-base flex border-b border-solid border-gray-additional">
          <Link href="/projects">Примеры работ</Link>
        </div>
      </div>
    </form>
  );
}
