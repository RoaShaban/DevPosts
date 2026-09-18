import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'

<style>
@import url('https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
</style>


export default function App() {
  return (<>
    <Navbar />
    <Hero />
    </>
  )
}
