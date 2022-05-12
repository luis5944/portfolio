import React, { useState } from "react";
import style from "./Projects.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ProjectsData } from "../assets/ProjectsData";

const styleBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #",
  boxShadow: 24,
  color: "black",
  textAlign: "center",
  borderRadius: "1rem",
  p: 4,
};

const Projects = () => {
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState(ProjectsData);
  const [selected, setSelected] = useState("All");
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setProject(e.target.value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <section className={`${style.work} section`} id="trabajo">
      <span className="section__subtitle">Mi Portfolio</span>
      <h2 className="section__title">Trabajo Reciente</h2>

      <div className={style.work__filters}>
        <span
          className={`${style.work__item} ${
            selected === "All" ? style["active-work"] : ""
          } `}
          onClick={() => {
            setSelected("All");
            setProjects(ProjectsData.filter((p) => p));
          }}
        >
          Todos
        </span>
        <span
          className={`${style.work__item} ${
            selected === "Web" ? style["active-work"] : ""
          } `}
          onClick={() => {
            setSelected("Web");
            setProjects(ProjectsData.filter((p) => p.type === "Web"));
          }}
        >
          Web
        </span>
        <span
          className={`${style.work__item} ${
            selected === "Desktop" ? style["active-work"] : ""
          } `}
          onClick={() => {
            setSelected("Desktop");
            setProjects(ProjectsData.filter((p) => p.type === "Desktop"));
          }}
        >
          Escritorio
        </span>
      </div>
      <div className={`${style.work__container} container grid`}>
        {projects
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((p) => {
            return (
              <div className={style.work__card}>
                <img src={p.img} alt={p.name} className={style.work__img} />
                <h3 className={style.work__title}>{p.name}</h3>

                <div className={style.button__container}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={p.urlDemo}
                    className={style.work__button}
                  >
                    Demo
                  </a>
                  {p.urlCode && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={p.urlCode}
                      className={style.work__button}
                    >
                      Código
                    </a>
                  )}
                  <button
                    onClick={handleOpen}
                    className={style.work__tech}
                    value={p.name}
                  >
                    Tecnologías
                  </button>
                </div>
                {p.name === project && (
                  <Modal open={open} onClose={handleClose}>
                    <Box sx={styleBox}>
                      <ul>
                        {p.technologies.map((t) => (
                          <li>{t}</li>
                        ))}
                      </ul>
                    </Box>
                  </Modal>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
