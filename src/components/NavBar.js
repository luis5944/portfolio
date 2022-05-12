import React, { useEffect } from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { GiHamburgerMenu } from "react-icons/gi";
import cv from "../assets/pdf/Luis_Enrique Fraga Nistal_CV.pdf";

const pages = ["inicio", "sobre", "trabajo", "contacto"];

const NavBar = ({ scroll }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    window.addEventListener("resize", handleCloseNavMenu);
    return () => window.removeEventListener("resize", handleCloseNavMenu);
  }, []);

  return (
    <header className={` ${classes[scroll]}`} id="header">
      <AppBar color="default" className={classes.bar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <GiHamburgerMenu
                onClick={handleOpenNavMenu}
                style={{
                  cursor: "pointer",
                  color: "black",
                }}
              />

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    style={{ textTransform: "capitalize" }}
                  >
                    <Link to={page} smooth={true} offset={50} duration={500}>
                      <span>{page}</span>
                    </Link>
                  </MenuItem>
                ))}

                <MenuItem>
                  <a
                    href={cv}
                    download="Luis_Enrique Fraga Nistal_CV.pdf"
                    className="button"
                  >
                    Descarga de CV
                  </a>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            ></Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  gap: "2.5rem",
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  <Link to={page} smooth={true} offset={50} duration={500}>
                    <span className={classes.text}>{page}</span>
                  </Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <a
                href={cv}
                download="Luis_Enrique Fraga Nistal_CV.pdf"
                className="button"
              >
                Descarga de CV
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default NavBar;
