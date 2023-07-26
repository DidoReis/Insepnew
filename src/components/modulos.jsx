// eslint-disable-next-line no-unused-vars
import React from 'react'


import Check from "../assets/img/check.svg"

const Modulos = () => {
  return (
    <section 
    className='
    w-[1126px] 
    h-[748px] 
    
    flex
    flex-col
    items-start
    gap-[32px]
    ml-[156px]
    mt-[128px]'>
        <div className="title w-[538px] h-[32px]  justify-center items-center">
          <h2 className='
          text-white 
          font-poppins 
          text-[24px] 
          not-italic 
          font-medium
          leading-[32px]'>Conteúdo programático</h2>
        </div>
        <div className="boxModulos 
        w-[1126px] 
        h-[684px] 
        flex 
        items-start
        gap-[16px]">

          {/* Modulo 1 */}
            <div className="modulo-1 
            w-[364.667px]
            h-[684px]
            flex
            p-6
            flex-col
            items-start
            gap-[30px]
            rounded-[24px]
            bg-[#313033]
            border-solid border-2 border-[#938F99]
            ">
                <h3 className="title flex  items-center w-[177px] h-[30px] ">
                    <span className="text-white 
                    no-ligatures 
                    font-lexend 
                    text-[24px]
                    not-italic
                    font-normal
                    leading-[normal]
                    tracking-[0.18px]">Módulo Básico</span>
                </h3>
                <div className="description w-[317px] h-[60px] flex ">
                  <p className='text-white 
                  no-ligatures
                  font-lexend
                  text-[12px]
                  font-medium
                  leading-[normal]
                  tracking-[0.4px]'>
                    O módulo básico destina-se a todos os públicos. 
                    Aqui você assimilará as regras e os conceitos fundamentais 
                    para desenvolver uma ótima base sobre o tema.
                  </p>
                </div>
                <div className="intro 
                w-[317px]
                h-[88px]
                flex
                flex-col
                items-start
                gap-[8px]
                self-stretch">
                  <p className='text-white
                  no-ligatures
                  font-lexend
                  text-[16px]
                  font-normal
                  not-italic
                  leading-[normal]
                  tracking-[0.15px]'>Carga horária: 30 horas</p>
                  <p className='text-white
                  no-ligatures
                  font-lexend
                  text-[16px]
                  not-italic
                  font-normal
                  leading-[normal]
                  tracking-[0.15px]'>Pré-requisitos: Acesso a computador, Ensino Médio completo e 
                    conhecimento básico de Excel. </p>
                </div>
                <div className="button w-[317px] h-[40px] ">
                  <button className='
                  w-[317px] 
                  h-[40px] 
                  flex 
                  px-[24px] 
                  py-[10px] 
                  flex-col 
                  justify-center
                  items-center
                  self-stretch
                  rounded-[100px]
                  bg-[#FEAC39]'>
                    <span className='
                    text-[#1C1B1F]
                    text-center
                    text-[14px]
                    not-italic
                    font-medium
                    leading-[20px]
                    tracking-[0.1px]'>Tenho interesse</span>
                  </button>
                </div>
                <div className="content flex flex-col items-start gap-4 self-stretch w-[317px] h-[298px]">
                    <div className="w-[317px] h-[298px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Compreender a classificação das deficiências e suas implicações restritivas</p>
                    </div>
                    <div className="w-[317px] h-[54px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Perceber diferenças elementares entre acessibilidade e usabilidade em interfaces digitais</p>
                    </div>
                    <div className="w-[317px] h-[36px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Explorar o arcabouço de normas, leis e guias relacionados à acessibilidade</p>
                    </div>
                    <div className="w-[317px] h-[54px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Conhecer a estrutura da WCAG, níveis de conformidade, princípios e requisitos</p>
                    </div>
                    <div className="w-[317px] h-[36px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Ter noções sobre tecnologias assistivas mais relevantes para testes</p>
                    </div>
                </div>
            </div>

            {/* Modulo 2 */}
            <div className="modulo-2 
            w-[364.667px]
            h-[684px]
            flex
            p-6
            flex-col
            items-start
            gap-[30px]
            rounded-[24px]
            bg-[#313033]
            border-solid border-2 border-[#938F99]
            ">
                <h3 className="title flex  items-center w-[317px] h-[30px] ">
                    <span className="text-white 
                    no-ligatures 
                    font-lexend 
                    text-[24px]
                    not-italic
                    font-normal
                    leading-[normal]
                    tracking-[0.18px]">Módulo Intermediário</span>
                </h3>
                <div className="description w-[317px] h-[60px] flex ">
                  <p className='text-white 
                  no-ligatures
                  font-lexend
                  text-[12px]
                  font-medium
                  leading-[normal]
                  tracking-[0.4px]'>
                    Este módulo tem foco na metodologia de aplicação da WCAG. 
                    Iremos revisitar a norma de uma forma mais direcionada, 
                    abordando informações sobre frameworks de implementação. 
                  </p>
                </div>
                <div className="intro 
                w-[317px]
                h-[88px]
                flex
                flex-col
                items-start
                gap-[8px]
                self-stretch">
                  <p className='text-white
                  no-ligatures
                  font-lexend
                  text-[16px]
                  font-normal
                  not-italic
                  leading-[normal]
                  tracking-[0.15px]'>Carga horária: 30 horas</p>
                  <p className='text-white
                  no-ligatures
                  font-lexend
                  text-[16px]
                  not-italic
                  font-normal
                  leading-[normal]
                  tracking-[0.15px]'>Pré-requisitos: Ter concluído o básico ou através de prova de conhecimento específico. </p>
                </div>
                <div className="button w-[317px] h-[40px] ">
                  <button className='
                  w-[317px] 
                  h-[40px] 
                  flex 
                  px-[24px] 
                  py-[10px] 
                  flex-col 
                  justify-center
                  items-center
                  self-stretch
                  rounded-[100px]
                  bg-[#FEAC39]'>
                    <span className='
                    text-[#1C1B1F]
                    text-center
                    text-[14px]
                    not-italic
                    font-medium
                    leading-[20px]
                    tracking-[0.1px]'>Tenho interesse</span>
                  </button>
                </div>
                <div className="content flex flex-col items-start gap-4 self-stretch w-[317px] h-[298px]">
                    <div className="w-[317px] h-[298px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Entender a metodologia de avaliação de conformidade </p>
                    </div>
                    <div className="w-[317px] h-[54px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Conhecer ferramentas de testes de acessibilidade para atendimento de situações específicas</p>
                    </div>
                    <div className="w-[317px] h-[36px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Aprender práticas de mapeamento e reporte de defeitos</p>
                    </div>
                    <div className="w-[317px] h-[54px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Compreender as diferenças entre comportamentos dos componentes de interfaces digitais</p>
                    </div>
                    <div className="w-[317px] h-[36px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Aprender sobre configurações mínimas recomendadas para testes (web e mobile)</p>
                    </div>
                </div>
            </div>

            {/* Modulo 3 */}
            <div className="modulo-3 
            w-[364.667px]
            h-[684px]
            flex
            p-6
            flex-col
            items-start
            gap-[30px]
            rounded-[24px]
            bg-[#313033]
            border-solid border-2 border-[#938F99]
            ">
                <h3 className="title flex  items-center w-[317px] h-[30px] ">
                    <span className="text-white 
                    no-ligatures 
                    font-lexend 
                    text-[24px]
                    not-italic
                    font-normal
                    leading-[normal]
                    tracking-[0.18px]">Módulo Avançado </span>
                </h3>
                <div className="description w-[317px] h-[60px] flex ">
                  <p className='text-white 
                  no-ligatures
                  font-lexend
                  text-[12px]
                  font-medium
                  leading-[normal]
                  tracking-[0.4px]'>
                    Exclusivo para profissionais que já atuam na área tech, 
                    este módulo é dedicado às boas práticas para a construção de 
                    conteúdos que atendam aos requisitos de Acessibilidade.
                  </p>
                </div>
                <div className="intro 
                w-[317px]
                h-[88px]
                flex
                flex-col
                items-start
                gap-[8px]
                self-stretch">
                  <p className='text-white
                  no-ligatures
                  font-lexend
                  text-[16px]
                  font-normal
                  not-italic
                  leading-[normal]
                  tracking-[0.15px]'>Carga horária: 30 horas</p>
                  <p className='text-white
                  no-ligatures
                  font-lexend
                  text-[16px]
                  not-italic
                  font-normal
                  leading-[normal]
                  tracking-[0.15px]'>Pré-requisitos: Ter concluído o intermediário ou através de prova de conhecimento específico. </p>
                </div>
                <div className="button w-[317px] h-[40px] ">
                  <button className='
                  w-[317px] 
                  h-[40px] 
                  flex 
                  px-[24px] 
                  py-[10px] 
                  flex-col 
                  justify-center
                  items-center
                  self-stretch
                  rounded-[100px]
                  bg-[#FEAC39]'>
                    <span className='
                    text-[#1C1B1F]
                    text-center
                    text-[14px]
                    not-italic
                    font-medium
                    leading-[20px]
                    tracking-[0.1px]'>Tenho interesse</span>
                  </button>
                </div>
                <div className="content flex flex-col items-start gap-4 self-stretch w-[317px] h-[298px]">
                    <div className="w-[317px] h-[298px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Aprender sobre ferramentas de verificação da qualidade do código durante o desenvolvimento -  plataformas Web (Desktop) e Mobile (nativo/WebView) em Android e iOS</p>
                    </div>
                    <div className="w-[317px] h-[54px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Características do desenvolvimento de interfaces digitais</p>
                    </div>
                    <div className="w-[317px] h-[36px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Semântica, estado e função dos elementos</p>
                    </div>
                    <div className="w-[317px] h-[54px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Aprender sobre componentes nativos e elementos customizados</p>
                    </div>
                    <div className="w-[317px] h-[36px] flex items-start gap-[16px] self-stretch">
                      <img src={Check} alt="Imagem de checado" className='w-[24px] h-[24px]' />
                      <p className='
                      text-white
                      font-lexend
                      text-[14px]
                      not-italic
                      font-normal
                      leading-[normal]
                      tracking-[0.25px]'
                      >Aprofundar em propriedades Wai-Aria e Roles</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Modulos