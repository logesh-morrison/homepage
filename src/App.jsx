import React, { useEffect } from "react";
import "./App.css";
import { ScrollReveal } from "./js/scrollreveal.min.js";
import navimg from "./assets/Nammazhvar.png";
import logo from "./assets/Logo.png";
import Particles from "react-tsparticles";
import ParticleJson from "./particles.json";

function App() {

  const particleOptions={
    "particles": {
      "number": {
        "value": 12,
        "density": {
          "enable": true,
          "value_area": 640
        }
      },
      "color": {
        "value": "#df048c"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.25,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 20,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }


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
      delay: 200,
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
    console.log("toggle called")
    const body = document.body;
    const themeIcon = document.querySelector(".theme-switch");
    const currentTheme = body.classList.contains("dark-theme")
      ? "dark"
      : "light";

      console.log(body, themeIcon,currentTheme)
      if (currentTheme === 'dark') {
        body.classList.remove('dark-theme');
        body.style.setProperty('--color-background', 'var(--color-background-light)');
        body.style.setProperty('--color-text', 'var(--color-text-light)');
        themeIcon.classList.remove('ri-sun-fill')
        themeIcon.classList.add('ri-moon-fill')
        localStorage.setItem('theme', 'light')
    } else {
        body.classList.add('dark-theme');
        body.style.setProperty('--color-background', 'var(--color-background-dark)');
        body.style.setProperty('--color-text', 'var(--color-text-dark)');
        themeIcon.classList.remove('ri-moon-fill')
        themeIcon.classList.add('ri-sun-fill')
        localStorage.setItem('theme', 'dark')
    }
  };

  return (
    <div className="App dark-theme">
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
                <p className="nav__logo__quote">"Dream of</p>
                <p className="nav__logo__quote">
                  <span className="highlight">toxic-free</span> food"
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

      <Particles
      
        id="particles-js"
        options={particleOptions}
      />

      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <img src={logo} alt="Alimenture_logo" className="home__img" />

            <div className="home__data">
              <h1 className="home__title">SYDNEY SIXERS</h1>

              <h3 className="home__subtitle">Private Limited</h3>

              <h2 className="home__description">
                "Nourishment and Cherishment"
              </h2>

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
          <h1 className="about__title">3 'S' of Alimenture</h1>
          <div className="about__container container grid">
            <ul className="about__list">
              <li className="about__item">
                <i className="ri-checkbox-fill"></i>
                <p className="about__item__p">Sustenance</p>
              </li>
              <li className="about__item">
                <i className="ri-checkbox-fill"></i>
                <p className="about__item__p">Sustainability</p>
              </li>
              <li className="about__item">
                <i className="ri-checkbox-fill"></i>
                <p className="about__item__p">Self-reliant</p>
              </li>
            </ul>
          </div>

          <div className="about__data">
            <h4 className="about__intro">Dear All!</h4>
            <p className="about__description">
              <span className="about__highlight">
                Alimenture Industries Private Limited
              </span>{" "}
              was incorporated on 29th December, 2023 in Chennai, Tamil Nadu
              with a vision and a mission of Self-reliant Economy by achieving
              sustainability in Food Industry through Natural Farming, why if,
              without ploughing there will be no food, without food there will
              be no lives hence, lets plough and save the lives.
            </p>
            <p className="about__description">
              Alimenture Industries Private Limited is founded by{" "}
              <span className="highlight-founder">Pavin Saminathan</span> and{" "}
              <span className="highlight-founder">Magesh Mohan</span> passionate
              and driven young entrepreneurs eager to make a positive impact in
              Food industry and deeply committed to aiming Self-reliant economy
              by achieving sustainability in Alimentation.
            </p>

            <h1 className="about__title">Operation</h1>
            <p className="about__description">
              Alimenture Industry is in the operation of manufacturing RTE
              (Ready to Eat) food stuffs such as Bread, Biscuits, Barfi, cakes
              and traditional confectionaries etc. those are all preparing
              organically and free of Maida, White Sugar and synthetic additives
              etc., (which are devastating our health significantly) and
              Cooking/edible Oil from Sesame, Groundnut and Coconut which are
              yield from Natural Farming and extracted by the traditional mode
              of wooden pressing and producing Country sugar, Palm jaggery and
              candies in natural way.
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
                Eventually, we for the reason, to pursue the moto of the great
                NAMMAZHVAR, green crusader and agricultural scientist i.e.
                “Dream of Toxic-free food”
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
                  <a
                    href="https://api.whatsapp.com/send?phone=918122762410&text=Hi."
                    target="_blank"
                  >
                    <i className="ri-whatsapp-fill"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="ri-messenger-fill"></i>
                  </a>
                  <a
                    href="mailto:alimentureindustries@gmail.com"
                    target="_blank"
                  >
                    <i className="ri-mail-fill"></i>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="contact__title">Call us</h3>
                <address className="contact__info">+91 81227 62410</address>
              </div>

              <div>
                <h3 className="contact__title">Find us here</h3>
                <address className="contact__info">
                  Regd. Office: 35, Mariamman Koil Street MGR Nagar, <br />
                  Tharamani, Chennai - 600113
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
          <a href="https://github.com/ajhacker03" target="_blank">
            @ajhacker
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
