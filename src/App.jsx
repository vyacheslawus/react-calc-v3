import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

import { products } from './data'

export default function App() {



  return (
    <>


      <Header />


      <main>

    

        <section className="products-list" style={{
          marginTop: "15px"
        }}>
          <Card />

        </section>
      </main>

    </>
  )
}

