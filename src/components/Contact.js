import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { CgEnter } from "react-icons/cg";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <section className="contact section" id="contacto">
      <span className="section__subtitle">Ponte en contacto</span>
      <h2 className="section__title">Sitios de contacto</h2>
      <div className={`${style.contact__container} container grid`}>
        <div className={style.contact__content}>
          <h3 className={style.contact__title}>Hablame</h3>
          <div className={style.contact__info}>
            <div className={style.contact__card}>
              <AiOutlineMail className={style["contact__card-icon"]} />
              <h3 className={style["contact__card-title"]}>Email</h3>
              <span className={style["contact__card-data"]}>
                luis5944@gmail.com
              </span>
              <a
                href="mailto:luis5944@gmail.com"
                target="_blank"
                className={style.contact__button}
                rel="noreferrer"
              >
                Escribeme
                <CgEnter className={style["contact__button-icon"]} />
              </a>
            </div>
            <div className={style.contact__card}>
              <AiOutlineWhatsApp className={style["contact__card-icon"]} />
              <h3 className={style["contact__card-title"]}>WhatsApp</h3>
              <span className={style["contact__card-data"]}>618-04-12-13</span>
              <a
                href="https://api.whatsapp.com/send?phone=+34618041213&text=Hola"
                target="_blank"
                className={style.contact__button}
                rel="noreferrer"
              >
                Escribeme
                <CgEnter className={style["contact__button-icon"]} />
              </a>
            </div>
          </div>
        </div>
        <div className={style.contact__content}>
          <h3 className={style.contact__title}>Escribeme sobre tu proyecto</h3>
          <form
            action="https://formsubmit.co/95e8cd1397baf89c7615401e2fbdfe5c"
            className={style.contact__form}
            method="POST"
          >
            <div className={style["contact__form-div"]}>
              <label htmlFor="nombre" className={style["contact__form-tag"]}>
                Nombre
              </label>
              <input
                name="nombre"
                type="text"
                className={style["contact__form-input"]}
                placeholder="Escribe tu nombre"
                required
              />
            </div>
            <div className={style["contact__form-div"]}>
              <label htmlFor="email" className={style["contact__form-tag"]}>
                Email
              </label>
              <input
                name="email"
                type="email"
                className={style["contact__form-input"]}
                placeholder="Escribe tu email"
                required
              />
            </div>
            <div
              className={`${style["contact__form-area"]} ${style["contact__form-div"]}`}
            >
              <label htmlFor="proyecto" className={style["contact__form-tag"]}>
                Proyecto
              </label>
              <textarea
                name="proyecto"
                id="proyecto"
                cols="30"
                rows="10"
                required
                className={style["contact__form-input"]}
                placeholder="Escribe sobre tus proyectos"
              ></textarea>
            </div>
            <button className="button">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
