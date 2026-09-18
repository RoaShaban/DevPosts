import React from "react";
import { Container } from "react-bootstrap";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <section className={`${styles.navbar} py-4`}>
      <Container>
        <div className="d-flex justify-content-between">
          <a href="#" className={`${styles.brand} d-flex justify-content-center align-items-center gap-1`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M480 157.2L381.8 336.3L389.2 345.8L480 345.8L480 473.5L319.1 473.5L305.6 482.7L261.9 566.7C261.6 566.7 253.3 575.3 252.7 575.9L160 575.9L160 482.7L253.2 303.3L245.8 294.1L160 294.1L160 166.5L316 166.5L329.5 157.3L373.2 73.3C373.5 73.3 381.8 64.7 382.4 64.1L480 64.1L480 157.2z" />
            </svg>
            <span>DevPosts</span>
          </a>
          <div className={`${styles.nav} d-flex justify-content-center align-items-center gap-4`}>
            <a href="#">Home</a>
            <a href="#">Posts</a>
            <span>|</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"/></svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
