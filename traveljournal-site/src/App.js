// MOVE TO SRC FOLDER BEFORE USING

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

export default App
