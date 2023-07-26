// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../styles'


import Smile from "../assets/img/smile.png"
import Cover from "../assets/img/covernew.png"
import Whats from "../assets/img/whatsapp.svg"
import Vlibras from "../assets/img/vlibras.svg"

const Hero = () => {
  
  return (
    <section 
    className=
    {`flex 
    md:flex-row 
    
    
    flex-col 
    ${styles.paddingY} 
    h-[573px]`}>
      <div 
      className={`textLeft 
      w-[435px] 
      
      md:ml-[146px]
      flex
      flex-col
      xl:px-0
      sm:px-16
      ${styles.flexStart}
      h-[200px] // Altura para telas menores (até 768px)
      md:h-[386px] // Altura para telas maiores (a partir de 769px)
      `}>
       
        <div className=" ml-[345px] w-[943px] absolute mt-[60px]">
          <img src={Cover} alt="Uma imagem com pessoas e icones relacionados a tecnologia" />
          
        </div>
        <div className="ml-[1220px] w-[48px] h-[48px] mt-[400px]  absolute">
        <img src={Whats} alt="Logotio Whatsapp" className='' />
        </div>
        <div className="ml-[1220px] w-[48px] h-[48px] mt-[-244px]  absolute">
        <img src={Vlibras} alt="Logotio Whatsapp" className='' />
        </div>
        <div className="w-[198px] h-[20px] flex  mr-[220px] ">
          <img src={Smile} alt="Icone de Sorriso" className='w-5 h-5' />
          
          <p 
          className='flex 
          w-[168px] 
          h-[17px] 
          flex-col 
          content-center 
          text-white
          font-poppins
          text-[14px]
          not-italic
          font-semibold
          ml-[10px]
          '>Que bom ter você aqui</p>
        </div>
        <div 
        className="w-[400px] 
        h-[94px] 
        mt-[25.5px]
        ">
          <h2 
          className='
          text-white 
          font-poppins 
          text-[40px]
          not-italic
          font-bold
          leading-[46px]
          '>Aprenda sobre acessibilidade digital</h2>
        </div>
        <div className="w-[425px] h-[120px]  mt-[24px] ">
          <p className='
          text-white 
          font-poppins 
          text-[16px] 
          not-italic 
          font-normal
          leading-[24px]
          '>Estude conosco e descubra como promover ambientes virtuais 
            mais inclusivos. O Núcleo de Formação Profissional do 
            INSEP irá te ajudar a tornar-se um especialista em 
            garantia da conformidade e qualidade dos ambientes digitais 
            para Pessoa com Deficiência.</p>
        </div>
        <div className="
        inline-flex 
        p-[10px] 
        items-start 
        gap-[10px] 
        
        w-[138px]
        h-[64px]
        mt-[40px]
        ">
          <button className="
          w-[118px]
          h-[44px]
          flex
          flex-col
          text-center
          content-center
          items-center
          rounded-[100px]
          bg-[#FEAC39]
          "><p className='
          w-[80px] 
          h-[20px] 
          text-[#46382F]
          py-[14px]
          text-center 
          font-poppins
          text-[13px]
          font-medium
          leading-[20px]
          tracking-[0.1px]
          '>Saiba mais</p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero