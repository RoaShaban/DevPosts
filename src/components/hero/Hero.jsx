import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} py-5 text-center`}>
        <Container className='h-100'>
            <div className={`${styles.hero_content} h-100 d-flex flex-column justify-content-center align-items-center gap-4`}>
                <span>REACT + JSONPlaceholder DEMO</span>
                <h1>Explore Dynamic Community Posts With Clean API Fetching</h1>
                <p>A lightweight, production-ready frontend showcase demonstrating RESTful API integration, responsive grid cards, and clean typography.</p>
                <button>
                    <a href="#">View All Posts</a>
                </button>
            </div>
        </Container>
    </section>
  )
}
