import React, { useState } from "react";
import style from "./About.module.css";
import { BsAward } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import CertSlideShow from "./CertSlideShow";
import images from "../utils/images";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <section className={`${style.about} section`} id="sobre">
      <span className="section__subtitle">Introducción</span>

      <h2 className="section__title">Sobre mí</h2>
      <div className={`${style.about__container} container`}>
        <p className={style.about__description}>
          Soy una persona que le gusta trabajar en equipo, y buscar nuevos
          retos.
          <span style={{ display: "block" }}>
            Estudié DAM (Desarrollo de Aplicaciones Mutliplataforma) y tengo los
            siguientes certificados:
          </span>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <button
            className="button"
            onClick={() => setShow((prev) => setShow(!prev))}
          >
            {show ? "Cerrar Certificados" : "Ver Certificados"}
          </button>
        </div>
        {show && <CertSlideShow images={images}  style={{ transition: "all 5s ease" }}/>}

        <div className={style.about__data}>
          <div className={style.about__info}>
            <div className={style.about__box}>
              <BsAward className={style.about__icon} />
              <h3 className={style.about__title}>Experiencia</h3>
              <span className={style.about_subtitle}>1 año trabajando</span>
            </div>
            <div className={style.about__box}>
              <AiOutlineProject className={style.about__icon} />
              <h3 className={style.about__title}>Completados</h3>
              <span className={style.about_subtitle}>7+ Proyectos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
