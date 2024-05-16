import React from "react";
import "./App.css";
import {
  bgpImg,
  bilalImg,
  cssImg,
  expressjsImg,
  fekonImg,
  htmlImg,
  jsImg,
  nextjsImg,
  reactjsImg,
  rentalgooImg,
  smkImg,
  tailwindImg,
  tsImg,
  untadImg,
  webPortofolio1Img,
} from "./asset";

const App = () => {
  return (
    <div className="wp">
      {/* <!------------------------------ HEADER------------------------------> */}
      <div className="header">
        <div className="nav" id="nav">
          <div className="logo">
            <p>Portofolio</p>
          </div>
          <div className="menu">
            <a href="#nav">Home</a>
            <a href="#about">About</a>
            <a href="#skill">Skill</a>
            <a href="#project">Project</a>
            <a href="#contacts">Contacts</a>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p className="im">I'm</p>
            <p className="name">Muhammad Bilal</p>
            <p className="line">- - - - - -</p>
            <p className="desc">
              Mahasiswa S1 Teknik Informatika Universitas Tadulako
            </p>
          </div>
          <div className="center">
            <i className="fa-solid fa-circle"></i>
            <img src={bgpImg} alt="" id="bg" />
            <img src={bilalImg} alt="" id="bilal" />
          </div>
          <div className="right">
            <p className="title">Layanan</p>
            <p className="desc">
              Saya suka membuat tampilan website, dengan itu saya ingin menjadi
              Frontend Developer
            </p>
            <p className="button">Lihat Selengkapnya</p>
            <div className="sosmed">
              <a href="https://www.facebook.com/bilalsygfeby">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/bilal_00s/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@muhammadbilal-qp2sx/featured">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="link">
          <div className="box">
            <i className="fa-brands fa-square-github"></i>
            <a href="https://github.com/muhammadbilal2468" target="_blank">
              GitHub
            </a>
          </div>
          <div className="box">
            <i className="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/muhammad-bilal-314888221/">
              Linkedin
            </a>
          </div>
          <div className="box">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:muhammadbilalll2468@gmail.com">Email</a>
          </div>
        </div>
      </div>
      {/* <!------------------------------ ABOUT ------------------------------> */}
      <div className="about" id="about">
        <div className="experience">
          <h3 className="title">Experience</h3>
          <div className="sub-title">
            <i className="fa-solid fa-calendar-check"></i>
            <p className="sub">Magang Yayasan Hasnur Centre</p>
          </div>
          <p className="desc">
            Saya mengikuti magang dari Kampus Merdeka batch 5 di PT MKA pada
            tahun 2023 selama 5 bulan sebagai web developer membuat aplikasi
            berbagai aplikasi dari client dan bekerja dibawah Mentor (Pegawai
            Kantor).
          </p>
          <div className="sub-title">
            <i className="fa-solid fa-calendar-check"></i>
            <p className="sub">Magang PT Media Kreasi Abadi</p>
          </div>
          <p className="desc">
            Saya mengikuti magang dari Kampus Merdeka batch 3 di PT MKA pada
            tahun 2022 selama 5 bulan sebagai frontend dev membuat aplikasi
            Rentalkuy yaitu aplikasi sewa barang.
          </p>
          <div className="sub-title">
            <i className="fa-solid fa-calendar-check"></i>
            <p className="sub">Magang PT Telkom Palu</p>
          </div>
          <p className="desc">
            Saya mengikuti magang di PT Telkom palu pada tahun 2018 selama 6
            bulan di bagian Bisnis dan Jaringan.
          </p>
          <div className="sub-title">
            <i className="fa-solid fa-calendar-check"></i>
            <p className="sub">HMTI UNTAD</p>
          </div>
          <p className="desc">
            Saya aktif dalam kepanitiaan acara Himpunan Mahasiswa Teknik
            Informatika Universitas Tadulako.
          </p>
        </div>
        <div className="education">
          <h3 className="title">Education</h3>
          <div className="card">
            <img src={smkImg} alt="" />
            <div className="text">
              <p className="title">SMK Negeri 1 Palu</p>
              <p className="desc">2017 - 2020</p>
            </div>
            <i className="fa-solid fa-right-long-to-line"></i>
          </div>
          <div className="card">
            <img src={untadImg} alt="" />
            <div className="text">
              <p className="title">Universitas Tadulako</p>
              <p className="desc">2020 - Now</p>
            </div>
            <i className="fa-solid fa-right-long-to-line"></i>
          </div>
        </div>
      </div>
      {/* <!------------------------------ Skill ------------------------------> */}
      <div className="skill" id="skill">
        <div className="softskill">
          <h3 className="title">Soft Skill</h3>
          <ul>
            <li>Disiplin</li>
            <li>Manajemen waktu</li>
            <li>Mampu Beradaptasi</li>
            <li>Bermotivasi Dalam Bekerja</li>
            <li>Mampu Berkomunikasi Dengan Baik</li>
            <li>Mampu Bekerja Sama Tim Dengan Baik</li>
            <li>Kecerdasan Emosional</li>
            <li>Antusias</li>
          </ul>
        </div>
        <div className="hardskill">
          <h3 className="title">Hard Skill</h3>
          <div className="language">
            <div className="box">
              <img src={htmlImg} alt="logo html" />
              <div className="text">
                <p className="title">HTML</p>
                <p className="desc">Intermediate</p>
              </div>
            </div>
            <div className="box">
              <img src={cssImg} alt="logo css" />
              <div className="text">
                <p className="title">CSS</p>
                <p className="desc">Advanced</p>
              </div>
            </div>
            <div className="box">
              <img src={tailwindImg} alt="logo css" />
              <div className="text">
                <p className="title">Tailwind CSS</p>
                <p className="desc">Advance</p>
              </div>
            </div>
            <div className="box">
              <img src={jsImg} alt="logo javascript" />
              <div className="text">
                <p className="title">JavaScript</p>
                <p className="desc">Intermediate</p>
              </div>
            </div>
            <div className="box">
              <img src={tsImg} alt="logo javascript" />
              <div className="text">
                <p className="title">TypeScript</p>
                <p className="desc">Beginner</p>
              </div>
            </div>
            <div className="box">
              <img src={reactjsImg} alt="logo reactjs" />
              <div className="text">
                <p className="title">React JS</p>
                <p className="desc">Intermediate</p>
              </div>
            </div>
            <div className="box">
              <img src={nextjsImg} alt="logo nextjs" />
              <div className="text">
                <p className="title">Next JS</p>
                <p className="desc">Beginner</p>
              </div>
            </div>
            <div className="box">
              <img src={expressjsImg} alt="logo expressjs" />
              <div className="text">
                <p className="title">Express JS</p>
                <p className="desc">Beginner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!------------------------------ Project ----------------------------> */}
      <div className="project" id="project">
        <h2>Project Portofolio</h2>
        <div className="list-card">
          <a href="https://portofolio2bilal.vercel.app/">
            <div className="card">
              <div className="bg">
                <img src={webPortofolio1Img} alt="" />
                <p className="static">statis</p>
              </div>
              <div className="content">
                <p className="title">Web Portofolio</p>
                <p className="desc">
                  Webiste portofolio yang menjelaskan data diri, skill,
                  portofoilo, dan contact diri saya sendiri. Website ini dibuat
                  menggunakan <span>React JS</span> dan <span>CSS Native</span>{" "}
                  tanpa framework CSS. Dibuat oleh Seorang diri tanpa tim.
                </p>
                <button>
                  Kunjungi{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fff"
                      d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                    />
                    <path
                      fill="#e33629"
                      d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                    />
                    <path
                      fill="#f8bd00"
                      d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                    />
                    <path
                      fill="#587dbd"
                      d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                    />
                    <path
                      fill="#319f43"
                      d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </a>
          <a href="https://fekon-untad.vercel.app/">
            <div className="card">
              <div className="bg">
                <img src={fekonImg} alt="" />
                <p className="static">statis</p>
              </div>
              <div className="content">
                <p className="title">S1 Akuntansi</p>
                <p className="desc">
                  Webiste profil dari S1 Akuntansi Sektor Publik Universitas
                  Tadulako dengan menggunakan <span>React JS</span>,
                  <span>Tailwind CSS</span>, <span>Flowbite</span>. Frontend
                  Dibuat oleh Seorang diri tanpa tim.
                </p>
                <button>
                  Kunjungi{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fff"
                      d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                    />
                    <path
                      fill="#e33629"
                      d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                    />
                    <path
                      fill="#f8bd00"
                      d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                    />
                    <path
                      fill="#587dbd"
                      d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                    />
                    <path
                      fill="#319f43"
                      d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </a>
          <a href="https://youtu.be/TU6w20CLnrQ?feature=shared">
            <div className="card">
              <div className="bg">
                <img src={rentalgooImg} alt="" />
                <p className="dinamyc">Dinamis</p>
              </div>
              <div className="content">
                <p className="title">Rental Goo</p>
                <p className="desc">
                  Webiste rental barang dengan sistem e-commerce, dimana semua
                  pengguna dapat menyewa maupun menyewakan. Teknologi digunakan{" "}
                  <span>
                    Node JS, Express JS, Sequalize, MYSQL, RESTFULL API, React
                    JS, Tailwind CSS, Flowbite, Map Leaflet, DLL
                  </span>
                  . Fullstack Dibuat oleh Seorang diri tanpa tim.
                </p>
                <button>
                  Nonton Demo{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.43em"
                    height="1em"
                    viewBox="0 0 256 180"
                  >
                    <path
                      fill="#f00"
                      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                    />
                    <path
                      fill="#fff"
                      d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* <!------------------------------ Contact ----------------------------> */}
      <div className="contacts" id="contacts">
        <h2>Contact</h2>
        <div className="contact">
          <div className="message">
            <form action="">
              <div className="input-box">
                <label for="">First Name</label>
                <input type="text" />
              </div>
              <div className="input-box">
                <label for="">Last Name</label>
                <input type="text" />
              </div>
              <div className="input-box">
                <label for="">Email</label>
                <input type="text" />
              </div>
              <div className="input-box">
                <label for="">Message</label>
                <textarea></textarea>
              </div>
              <a href="#">
                <button>Kirim</button>
              </a>
            </form>
          </div>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2302.2334773816306!2d119.85768454370279!3d-0.9333897045341931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf3e48cb07fcac56!2zMMKwNTYnMDAuNCJTIDExOcKwNTEnMjYuOCJF!5e0!3m2!1sen!2sid!4v1660745344999!5m2!1sen!2sid"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>Sulawesi Tengah, Sigi, Marawola - Btn Baliase blok Ac no.11</p>
          </div>
        </div>
      </div>

      {/* <!----------------------------- Footer ------------------------------> */}
      <div className="footer">
        <div className="service">
          <h3>Layanan</h3>
          <ul>
            <li>Web Desain</li>
            <li>Integrasi API</li>
            <li>Web Responsive</li>
            <li>Null</li>
          </ul>
        </div>
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">gallery</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
        <div className="hk">
          <h3>Hubungi Kami</h3>
          <ul>
            <li>
              <i className="fa-brands fa-whatsapp"></i>
              <a href="https://wa.me/6282337175785"> whatsapp</a>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com/bilal_00s/"> instagram</a>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
              <a href="https://www.facebook.com/bilalsygfeb"> facebook</a>
            </li>
            <li>
              <i className="fa-brands fa-telegram"></i>
              <a href="https://t.me/muhammadbilalll2468"> telegram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="cp">
        <p>Copyright 2023 All rights reversed | By Muhammad Bilal</p>
      </div>
    </div>
  );
};

export default App;
