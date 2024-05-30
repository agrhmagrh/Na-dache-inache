import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const message = {
  from: `Сайт "Беседка Лофт" <${process.env.EMAIL_ADDRESS}>`,
  to: process.env.TO_ADDRESS,
  subject: "Заявка с формы",
  text: "",
  html: ``,
  fillText(name: string, phone: string) {
    this.text = `Заполнена форма заявки.\n Имя: ${name}\n Телефон: ${phone}`;
    this.html = `<h3>Заполнена форма заявки.</h3><br> Имя: <b>${name}</b> <br>Телефон: <a href="tel:${phone}">${phone}</a>`;
  },
};

let transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    message.fillText(name, phone);
    const info = await transporter.sendMail(message);
    return NextResponse.json(
      { status: "ok" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
