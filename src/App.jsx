import React from "react";
import "./App.css";
import {
  bgpImg,
  bilalImg,
  cssImg,
  expressjsImg,
  htmlImg,
  jsImg,
  nextjsImg,
  pythonImg,
  reactjsImg,
  smkImg,
  tailwindImg,
  tsImg,
  untadImg,
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
            <p className="sub">Magang PT Telkom Palu</p>
          </div>
          <p className="desc">
            Saya mengikuti magang di PT Telkom palu pada tahun 2018 selama 6
            bulan di bagian Bisnis dan Jaringan.
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
                <p className="desc">Beginner</p>
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
            <div className="box">
              <img src={pythonImg} alt="logo expressjs" />
              <div className="text">
                <p className="title">Python</p>
                <p className="desc">Beginner</p>
              </div>
            </div>
          </div>
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
              <a href="">
                <button>Kirim</button>
              </a>
            </form>
          </div>
          <div className="map">
            <iframe
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
