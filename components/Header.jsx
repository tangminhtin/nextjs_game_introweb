import Link from "next/link";
import React from "react";
import { Nav, Button } from 'react-bootstrap';
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light custom-nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse custom-item" id="navbarText">

          <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#about">Giới thiệu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#lore">Cốt truyện</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#picture">Hình ảnh</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#picture">Donate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Liên hệ</a>
            </li>

          </ul>


          {/* <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#about">Giới thiệu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#lore">Cốt truyện</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#picture">Hình ảnh</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#picture">Donate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Liên hệ</a>
            </li>

          </ul> */}


        </div>
      </div>
    </nav>
    // <div className={styles.header}>
    //   <div className={styles.logo}>
    //     <Link href="/">LOGO</Link>
    //   </div>
    //   <ul className={styles.menu}>
    //     <li>
    //       <a href="#about">Giới thiệu</a>
    //     </li>
    //     <li>
    //       <a href="#lore">Cốt truyện</a>
    //     </li>
    //     <li>
    //       <a href="#picture">Hình ảnh</a>
    //     </li>
    //     <li>
    //       <a href="#donate">Donate</a>
    //     </li>
    //     <li>
    //       <a href="#contact">Liên hệ</a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Header;
