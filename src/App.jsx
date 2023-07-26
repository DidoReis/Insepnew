// eslint-disable-next-line no-unused-vars
import React from 'react'

import styles from "./styles"
/* import Beneficios from './components/teste/beneficios' */

import {Navbar,
        Hero,
        Beneficios,
        Publico,
        Modulos,
        Empresas,
        Equipe,
        Testemunho,
        Faq,
        
       } from "./components"

     


const App = () => {
  return (
    
    <div className='bg-dark-primary w-full overflow-hidden'>

      

    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}  `}>
        <Navbar />
        
      </div>
    </div>
    {/* |^ Fim da Navbar */}

    {/* Hero Session */}
    <div className={`bg-dark-primary ${styles.flexStart}`}>  
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    {/* |^ fim da hero session */}

    <div className={`bg-dark-primary ${styles.flexStart}`}>  
      <div className={`${styles.boxWidth}`}>
      <Beneficios/>
      </div>
    </div>

    {/* Inicio demais components = arrumar  */}

    <div className={`bg-primary  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
        {/* <Beneficios /> */}
        <Publico />
        <Modulos />
        <Empresas />
        <Equipe />
        <Testemunho />
        {/* <anuncio /> */}
        <Faq />
        {/* <Footer /> */}
      </div>
    </div>



    {/* Fim da main */}
  </div>
 
  )
}

export default App