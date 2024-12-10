import React, { useEffect } from "react";
import "./App.css";
import { ScrollReveal } from "./js/scrollreveal.min.js";
import navimg from "./assets/sydney-sixers (logo).svg";
import logo from "./assets/sydney-sixers.svg";
import ParticlesComponent from "./ParticleComponent.jsx";


function App() {
  
  useEffect(() => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll(".nav__link");

    // Show Menu
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    // Hide Menu
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    // Remove Menu Mobile
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    });

    // Add Blur to Header on Scroll
    const blurHeader = () => {
      const header = document.getElementById("header");
      window.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
    };
    window.addEventListener("scroll", blurHeader);

    // Show Scroll Up
    const scrollUp = () => {
      const scrollUp = document.getElementById("scroll-up");
      window.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
    };
    window.addEventListener("scroll", scrollUp);

    // Scroll Sections Active Link
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionClass = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionClass.classList.add("active-link");
        } else {
          sectionClass.classList.remove("active-link");
        }
      });
    };
    window.addEventListener("scroll", scrollActive);

    // Scroll Reveal Animation
    window.sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      delay: 100,
    }); 

    sr.reveal(
      ".home__img, .section__title, .about__title, .about__list, .about__intro, .about__description, .about__quotes, .contact__content, .footer__content, .footer__copy"
    );
    sr.reveal(".home__data", { delay: 400 });

    // // Theme Change
    // const savedTheme = localStorage.getItem("theme");
    // if (savedTheme) {
    //   document.body.classList.add(savedTheme);
    // }
    // const toggleTheme = () => {
    //   console.log("toggle called in useeffect")
    //   const body = document.body;
    //   const themeIcon = document.querySelector(".theme-switch");
    //   const currentTheme = body.classList.contains("dark-theme")
    //     ? "dark"
    //     : "light";

    //     if (currentTheme === 'dark') {
    //       body.classList.remove('dark-theme');
    //       body.style.setProperty('--color-background', 'var(--color-background-light)');
    //       body.style.setProperty('--color-text', 'var(--color-text-light)');
    //       themeIcon.classList.remove('ri-sun-fill')
    //       themeIcon.classList.add('ri-moon-fill')
    //       localStorage.setItem('theme', 'light')
    //   } else {
    //       body.classList.add('dark-theme');
    //       body.style.setProperty('--color-background', 'var(--color-background-dark)');
    //       body.style.setProperty('--color-text', 'var(--color-text-dark)');
    //       themeIcon.classList.remove('ri-moon-fill')
    //       themeIcon.classList.add('ri-sun-fill')
    //       localStorage.setItem('theme', 'dark')
    //   }
    // };

    // document
    //   .querySelector(".theme-switch")
    //   .addEventListener("click", toggleTheme);

    // Load Particles

    // Particles.load('particles-js', "particles.json", function () {
    //   console.log('callback - particles.js config loaded');
    // });
  }, []);

  const toggleTheme = () => {
    console.log("toggle called");
    const body = document.body;
    const themeIcon = document.querySelector(".theme-switch");
    const currentTheme = body.classList.contains("dark-theme")
      ? "dark"
      : "light";

    console.log(body, themeIcon, currentTheme);
    if (currentTheme === "dark") {
      body.classList.remove("dark-theme");
      body.style.setProperty(
        "--color-background",
        "var(--color-background-light)"
      );
      body.style.setProperty("--color-text", "var(--color-text-light)");
      themeIcon.classList.remove("ri-sun-fill");
      themeIcon.classList.add("ri-moon-fill");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark-theme");
      body.style.setProperty(
        "--color-background",
        "var(--color-background-dark)"
      );
      body.style.setProperty("--color-text", "var(--color-text-dark)");
      themeIcon.classList.remove("ri-moon-fill");
      themeIcon.classList.add("ri-sun-fill");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="App dark-theme">

<ParticlesComponent/>

      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <div className="nav__logo__container">
              <img
                className="nav__logo__img"
                src={navimg}
                alt="Nammazhvar_logo"
              />
              <div>
                <p className="nav__logo__quote">"One</p>
                <p className="nav__logo__quote">
                  <span className="highlight">Six</span>at a Time"
                </p>
              </div>
            </div>
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About us
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            <i
              className="ri-sun-fill theme-switch"
              onClick={() => toggleTheme()}
            ></i>
            <div className="nav__toggle show_menu" id="nav-toggle">
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>
      {/* <div id="particles-js"></div> */}


      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <img src={logo} alt="Alimenture_logo" className="home__img" />

            <div className="home__data">
              <h1 className="home__title">SYDNEY SIXERS</h1>

              <h3 className="home__subtitle">Play Cricket</h3>

              <h2 className="home__description">"Unleash the Pink Storm!"</h2>

              <div className="home__button">
                <a href="#about" className="button">
                  Explore us
                  <span>
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section__title">About us</h2>
          <h1 className="about__title">SYDNEY 6ers</h1>
          <div className="about__container container grid">
            <ul className="about__list">
              <li className="about__item">
                <i className="ri-checkbox-fill"></i>
                <p className="about__item__p">Boundaries</p>
              </li>
              <li className="about__item">
                <i className="ri-checkbox-fill"></i>
                <p className="about__item__p">Victories</p>
              </li>
              <li className="about__item">
                <i className="ri-checkbox-fill"></i>
                <p className="about__item__p">Memories</p>
              </li>
            </ul>
          </div>

          <div className="about__data">
            <h4 className="about__intro">Dear All!</h4>
            <p className="about__description">
              <span className="about__highlight">
                Welcome to the official website of the Sydney Sixers
              </span>{" "}
              the home of energy, skill, and unrelenting passion for cricket. As
              one of the most dynamic and successful teams in T20 cricket, the
              Sixers embody the spirit of competition, teamwork, and excellence.
              From thrilling sixes to game-changing moments, we bring cricket
              fans closer to the action, creating unforgettable experiences both
              on and off the field. Whether you're a lifelong supporter or new
              to the game, join us in celebrating the sport we love and the
              community that makes it all possible. Together, we are the Pink
              Power of cricket!
            </p>

            <h1 className="about__title">Operation</h1>
            <p className="about__description">
              "Our cricket website operates with relentless energy, delivering
              the thrill of the game straight to your screen. From live matches
              to in-depth stats, we ignite the passion of cricket lovers
              everywhere. With every update, every score, and every highlight,
              we fuel the fire of competition and celebration, making every fan
              feel the pulse of the pitch like never before!"
            </p>

            <h1 className="about__title">Scope</h1>
            <p className="about__description">
              Alimenture Industry, having the objective of Natural Farming it
              has the scope of setup and layout Integrated Farming System which
              would encompass sustainability in food and provide abundance of
              Aliment / Nourishment.
            </p>

            <h1 className="about__title">How it would function?</h1>
            <p className="about__description">
              As a food manufacturing industry Alimenture Industry would be
              Cluster and muster of people in the field of Agriculture and
              Farming Industries and it would be the central and capital by
              connecting them. It would lay out large agricultural land for
              scaling up the cultivation and production and setup production
              units and broadening wider supply chain.
            </p>

            <div className="about__quotes__container">
              <p className="about__quotes">
                We’re the Sydney Sixers, bold and true, Smashing sixes is what
                we do. With skill, passion, and a team so grand, We rule the
                pitch and “thrill the stand!”
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <h2 className="section__title">Contact us</h2>
          <div className="contact__container container grid">
            <div className="contact__content">
              <div>
                <h3 className="contact__title">Write to us</h3>

                <div className="contact__social">
                  <a href="#" target="_blank">
                    <i className="ri-whatsapp-fill"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ri-messenger-fill"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ri-mail-fill"></i>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="contact__title">Call us</h3>
                <address className="contact__info">+91 8608651201</address>
              </div>

              <div>
                <h3 className="contact__title">Find us here</h3>
                <address className="contact__info">
                  Regd. Office: 62, Mac nagar Maran Garden, <br />
                  Kattupakkam, Chennai - 600056
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <div>
              <h3 className="footer__title">COMPANY</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Features
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">INFORMATION</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Blog & News
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">SOCIAL MEDIA</h3>
              <div className="footer__social">
                <a href="#" className="footer__social-link">
                  <i className="ri-facebook-circle-fill"></i>
                </a>

                <a href="#" className="footer__social-link">
                  <i className="ri-instagram-fill"></i>
                </a>

                <a href="#" className="footer__social-link">
                  <i className="ri-twitter-x-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <span className="footer__copy">&#169; All Rights Reserved 2024</span>
        <span className="footer__copy">
          Made with <i className="ri-heart-fill"></i> by{" "}
          <a href="https://github.com/Amirkhan1201" target="_blank">
            @amirkhan
          </a>
        </span>
      </footer>

      <a href="#" className="scroll-up" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
}

export default App;
