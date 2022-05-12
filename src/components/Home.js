import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll/modules";
import perfil from "../assets/img/pngegg.png";
import style from "./Home.module.css";
const Home = () => {
  return (
    <section className={`${style.home} section`} id="inicio">
      <div className={`${style.home__container} container grid`}>
        <Zoom>
          <div className={style.home__data}>
            <span className={style.home__greeting}>Hola, soy</span>
            <h1 className={style.home__name}>Luis Fraga</h1>
            <h3 className={style.home__education}>FullStack Developer</h3>
            <div className={style.home__buttons}>
              <Link to="sobre" smooth={true} offset={50} duration={500}>
                <span
                  className="button button--ghost"
                  style={{ cursor: "pointer" }}
                >
                  Sobre mí
                </span>
              </Link>
            </div>
          </div>

          <div className={style.home__handle}>
            <img src={perfil} className={style.home__img} alt="me" />
          </div>
        </Zoom>
        <div className={style.home__social}>
          <a
            href="https://github.com/luis5944"
            className={style["home__social-link"]}
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
