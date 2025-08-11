"use client";

import { useState, useMemo } from "react";
import { useFormik } from "formik";
import { IMaskInput } from "react-imask";

interface ApiResponse {
  status: "ok" | "error";
}

export default function DeliveryCalcForm() {
  const [status, setStatus] = useState<"ok" | "error" | null>(null);
  const [agree, setAgree] = useState(false);

  const formik = useFormik({
    initialValues: { phone: "" },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.phone.trim()) errors.phone = "required";
      if (!agree) errors.agree = "required";
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const cleanPhone = values.phone.replace(/[\s\(\)\-]/g, "");
        const response = await fetch("/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: "Калькулятор доставки", phone: cleanPhone }),
        });
        const result: ApiResponse = await response.json();
        setStatus(result.status);
      } catch {
        setStatus("error");
      } finally {
        resetForm();
        setAgree(false);
      }
    },
  });

  const inputClasses = useMemo(() => {
    const base = "w-full h-10 px-3 rounded border border-gray-additional focus:outline-none";
    return `${base} ${formik.touched.phone && formik.errors.phone ? "border-red" : ""}`;
  }, [formik.touched.phone, formik.errors.phone]);

  return (
    <form onSubmit={formik.handleSubmit} className="bg-[#F0DFC9] p-6 rounded shadow max-w-md w-full">
      <div className="text-lg font-semibold mb-3">Узнайте стоимость доставки</div>
      <div className="text-sm text-gray-700 mb-4">
        Оставьте номер телефона и наш менеджер грамотно рассчитает стоимость доставки в ваш регион
      </div>

      <label className="block text-sm mb-2" htmlFor="phone">Номер телефона *</label>
      <IMaskInput
        id="phone"
        name="phone"
        mask="+7 (000) 000-00-00"
        value={formik.values.phone}
        onChange={formik.handleChange}
        className={inputClasses}
        placeholder="+7 (___) ___-__-__"
        autoComplete="tel"
      />

      <label className="mt-4 flex items-center gap-2 text-xs text-gray-700">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="accent-orange"
        />
        Я согласен с <a href="#" className="underline">политикой конфиденциальности</a>
      </label>

      {status === "ok" && (
        <div className="text-green text-sm mt-3">Спасибо! Мы скоро свяжемся с вами</div>
      )}
      {status === "error" && (
        <div className="text-red text-sm mt-3">Ошибка при отправке. Попробуйте позже</div>
      )}

      <button
        type="submit"
        disabled={formik.isSubmitting || !agree}
        className="mt-4 bg-orange text-white px-5 py-2 rounded disabled:opacity-50"
      >
        Рассчитать стоимость
      </button>
    </form>
  );
}


