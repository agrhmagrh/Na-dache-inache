"use client";
import Link from "next/link";
import { ChangeEvent, useState, useCallback, useMemo } from "react";
import { useFormik } from "formik";
import { IMaskInput } from "react-imask";

// Типы
interface FormProps {
  btn: string;
}

interface FormValues {
  name: string;
  phone: string;
}

interface FormErrors {
  [key: string]: boolean;
}

interface ApiResponse {
  status: "ok" | "error";
}

// Константы
const PHONE_MASK = "+7 (000) 000-00-00";
const PHONE_PLACEHOLDER = "+7 (999) 000-01-01";

// Валидация
const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};
  
  if (!values.name.trim()) {
    errors.name = true;
  }
  if (!values.phone.trim()) {
    errors.phone = true;
  }

  return errors;
};

// Компонент спиннера
const LoadingSpinner = () => (
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
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Компонент статуса
const StatusMessage = ({ status }: { status: "ok" | "error" | null }) => {
  if (status === "ok") {
    return (
      <div className="text-center p-2 text-green">
        Заявка отправлена. В ближайшее время менеджер перезвонит вам
      </div>
    );
  }
  
  if (status === "error") {
    return (
      <div className="text-center text-red">
        Произошла ошибка при отправке, перезвоните нам
      </div>
    );
  }
  
  return null;
};

export default function Form({ btn }: FormProps) {
  const [status, setStatus] = useState<"ok" | "error" | null>(null);
  const [focusPhone, setFocusPhone] = useState<boolean>(false);

  // Обработчик отправки формы
  const handleSubmit = useCallback(async (values: FormValues) => {
    const { name, phone } = values;
    const cleanPhone = phone.replace(/[\s\(\)\-]/g, "");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone: cleanPhone }),
      });

      if (response.status === 200 || response.status === 500) {
        const result: ApiResponse = await response.json();
        setStatus(result.status);
      } else {
        throw new Error("Network error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      formik.resetForm();
    }
  }, []);

  // Обработчик изменения поля
  const handleFieldChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const hasValue = target.value.length > 0;
    
    if (hasValue) {
      target.classList.add("is-dirty");
    } else {
      target.classList.remove("is-dirty");
    }
  }, []);

  // Обработчик фокуса телефона
  const handlePhoneFocus = useCallback(() => {
    setFocusPhone(true);
  }, []);

  const handlePhoneBlur = useCallback(() => {
    setFocusPhone(false);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validate: validateForm,
    onSubmit: handleSubmit,
  });

  // Мемоизированные классы
  const nameInputClasses = useMemo(() => {
    const baseClasses = "peer h-full w-full absolute bg-[transparent] focus-within:outline-none text-white border-b-2 border-solid border-gray-additional";
    return `${baseClasses} ${formik.touched.name && formik.errors.name ? "border-red" : ""}`;
  }, [formik.touched.name, formik.errors.name]);

  const phoneInputClasses = useMemo(() => {
    const baseClasses = "peer h-full w-full absolute bg-[transparent] focus-within:outline-none text-white border-b-2 border-solid border-gray-additional";
    return `${baseClasses} ${formik.touched.phone && formik.errors.phone ? "border-red" : ""}`;
  }, [formik.touched.phone, formik.errors.phone]);

  const nameLabelClasses = useMemo(() => {
    const baseClasses = "w-full block text-xl cursor-pointer h-10 transition-all peer-focus:text-sm peer-focus:-translate-y-4 peer-focus:text-orange peer-[.is-dirty]:text-orange peer-[.is-dirty]:text-sm peer-[.is-dirty]:-translate-y-4 pointer-events-none";
    return `${baseClasses} ${formik.touched.name && formik.errors.name ? "text-red" : "text-white"}`;
  }, [formik.touched.name, formik.errors.name]);

  const phoneLabelClasses = useMemo(() => {
    const baseClasses = "w-full block text-xl cursor-pointer h-10 transition-all peer-focus:text-sm peer-focus:-translate-y-4 peer-focus:text-orange peer-[.is-dirty]:text-orange peer-[.is-dirty]:text-sm peer-[.is-dirty]:-translate-y-4 pointer-events-none";
    return `${baseClasses} ${formik.touched.phone && formik.errors.phone ? "text-red" : "text-white"}`;
  }, [formik.touched.phone, formik.errors.phone]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative z-10 mx-auto my-10 flex flex-col gap-10 w-5/6"
      noValidate
    >
      <div className="field relative">
        <input
          onBlur={(e) => {
            formik.handleBlur(e);
            handleFieldChange(e);
          }}
          onChange={formik.handleChange}
          type="text"
          name="name"
          id="name"
          className={nameInputClasses}
          autoComplete="name"
          value={formik.values.name}
          aria-describedby={formik.touched.name && formik.errors.name ? "name-error" : undefined}
        />
        <label
          htmlFor="name"
          className={nameLabelClasses}
        >
          Имя
        </label>
        {formik.touched.name && formik.errors.name && (
          <div id="name-error" className="text-red text-sm mt-1">
            Пожалуйста, введите ваше имя
          </div>
        )}
      </div>

      <div className="field relative">
        <IMaskInput
          mask={PHONE_MASK}
          onBlur={(e) => {
            handlePhoneBlur();
            formik.handleBlur(e);
            handleFieldChange(e);
          }}
          onFocus={handlePhoneFocus}
          onChange={formik.handleChange}
          type="tel"
          name="phone"
          id="phone"
          value={formik.values.phone}
          className={phoneInputClasses}
          placeholder={focusPhone ? PHONE_PLACEHOLDER : ""}
          autoComplete="tel"
          aria-describedby={formik.touched.phone && formik.errors.phone ? "phone-error" : undefined}
        />
        <label
          htmlFor="phone"
          className={phoneLabelClasses}
        >
          Телефон
        </label>
        {formik.touched.phone && formik.errors.phone && (
          <div id="phone-error" className="text-red text-sm mt-1">
            Пожалуйста, введите номер телефона
          </div>
        )}
      </div>

      <div className="form-submit-wrapper flex flex-col gap-6 items-center m-2">
        <StatusMessage status={status} />
        
        <div className="submit w-full text-center text-white bg-orange m-3 text-xl h-11">
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="flex justify-center items-center w-full h-full cursor-pointer disabled:backdrop-brightness-50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={formik.isSubmitting ? "Отправка формы..." : "Отправить заявку"}
          >
            {formik.isSubmitting && <LoadingSpinner />}
            {formik.isSubmitting ? "Отправка..." : btn}
          </button>
        </div>
        
        <div className="additional-btn text-gray-additional h-8 text-base flex border-b border-solid border-gray-additional">
          <Link href="/projects" className="hover:text-white transition-colors">
            Примеры работ
          </Link>
        </div>
      </div>
    </form>
  );
}
