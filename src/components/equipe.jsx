// eslint-disable-next-line no-unused-vars
import React from 'react'

import Flavio from "../assets/img/flavio.png"
import Mauricio from "../assets/img/mauricio.png"
import Andressa from "../assets/img/andressa.png"

const Equipe = () => {

  const redirectToLinkedIn = (profile) => {
    const linkedinLinks = {
      Flavio: 'https://www.linkedin.com/in/flaviorscorreia/',
      Mauricio: 'https://www.linkedin.com/in/mauricio-pereiro/',
      Andressa : "https://www.linkedin.com/",
    };

    if (linkedinLinks[profile]) {
      window.open(linkedinLinks[profile], '_blank')
    }
  }

  return (
    <section className='
    equipeBox 
    w-[1128px] 
    h-[564px] 
    items-start 
    gap-8 
    
    mt-[147.58px] 
    ml-[156px]'>
      <div className="title w-[318.36px] h-[32px] ">
        <h2 className="
        text-white 
        font-poppins
        text-[24px]
        not-italic
        font-medium
        leading-[32px]">Equipe Insep</h2>
      </div>
        <div className="profilesBox w-[1128px] h-[500px] flex items-start gap-6  mt-[32px]">

          {/* Profile 1 */}
          <article className="profile1 
                          w-[360px] 
                          h-[500px] 
                          flex 
                          flex-col 
                          items-start 
                          bg-[#313033] 
                          rounded-[24px]
                          shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]
                          border-solid border-2 border-[#938F99]">
                          <div className="
                          headerBox 
                          bg-[#313033] 
                          w-[355px] 
                          h-[140px] 
                          flex 
                          p-4 
                          items-center 
                          self-stretch
                          rounded-[inherit]">
                              <div className="content 
                              flex 
                              items-center 
                              gap-[16px] w-[328px] h-[108px]">
                                <figure className="
                                     boxImg 
                                     w-[107px] 
                                     h-[107px] 
                                     rounded-[50%] 
                                     bg-[#FAFCFF]
                                     items-center
                                     justify-center
                                     flex
                                     "><img 
                                     src={Flavio} 
                                     alt="Foto do Flavio Correia" 
                                     className='rounded-[inherit]'/>
                                    </figure>

                                     <div className="titleBox
                                     flex flex-col 
                                     items-start 
                                     gap-1
                                     
                                     w-[205px] 
                                     h-[108px]">
                                        <div className="name">
                                          <h3 className='self-stretch
                                                        text-white
                                                        font-poppins
                                                        text-[16px]
                                                        font-black
                                                        leading-[24px]
                                                        tracking-[0.5px]'>Flavio Correia</h3>
                                          </div>
                                                <span className="cargo 
                                                          self-stretch
                                                          text-white
                                                          font-poppins
                                                          text-[14px]
                                                          not-italic
                                                          font-medium
                                                          leading-[20px]
                                                          mt-[4px]
                                                          tracking-[0.25px]">Diretor Executivo e Professor
                                                </span>
                                                <div className="buttonBox w-[205px] h-[56px]
                                                                flex
                                                                items-start
                                                                gap-[8px]
                                                                pt-3
                                                                pr-4
                                                                "><button className='
                                                                w-[189px] h-[40px]
                                                                flex
                                                                py-[10px] px-[24px]
                                                                flex-col
                                                                justify-center
                                                                gap-[10px]
                                                                self-stretch
                                                                rounded-[100px]
                                                                bg-[#FEAC39]'
                                                                onClick={() => redirectToLinkedIn('Flavio')}>
                                                                  <p className='
                                                                  text-[#000]
                                                                  text-center
                                                                  no-ligatures
                                                                  font-lexend
                                                                  text-[14px]
                                                                  not-italic
                                                                  font-medium
                                                                  leading-[normal]
                                                                  tracking-[0.1px]'>Seguir no Linkedin</p></button>
                                                                  </div>
                                     </div>
                              </div>
                          </div>
                          
                          {/* description */}
                          <div className="description 
                                          w-[360px] 
                                          h-[360px] 
                                          
                                          flex
                                          p-6
                                          items-start
                                          self-stretch">
                                            <p className='
                                                          self-stretch
                                                          no-ligatures
                                                          text-white
                                                          font-lexend
                                                          text-[16px]
                                                          not-italic
                                                          font-normal
                                                          leading-[24px]
                                                          tracking-[0.5px]'>
                                              Graduado em Musicoterapia, pós-graduado em Governança 
                                              de TI pela UNICAMP e graduando em Administração pela Universidade 
                                              Estácio de Sá. Mais de 10 anos de atuação como especialista em 
                                              Acessibilidade Digital,  trabalhando em grandes instituições financeiras 
                                              como Itaú Unibanco e Pic Pay.
                                              Hoje trabalha como Program Manager Acessibility Specialist, 
                                              além de ser professor universitário e consultor e paratleta.</p>
                                          </div>
          </article>

            {/* Profile 2 */}
            <article className="profile2 
                          w-[360px] 
                          h-[500px] 
                          flex 
                          flex-col 
                          items-start 
                          bg-[#313033] 
                          rounded-[24px]
                          shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]
                          border-solid border-2 border-[#938F99]">
                          <div className="
                          headerBox 
                          bg-[#313033] 
                          w-[355px] 
                          h-[140px] 
                          flex 
                          p-4 
                          items-center 
                          self-stretch
                          rounded-[inherit]">
                              <div className="content 
                              flex 
                              items-center 
                              gap-[16px] w-[328px] h-[108px]">
                                <div className="
                                     boxImg 
                                     w-[107px] 
                                     h-[107px] 
                                     rounded-[50%] 
                                     bg-[#FAFCFF]
                                     items-center
                                     justify-center
                                     flex
                                     "><img 
                                     src={Mauricio} 
                                     alt="Foto do Mauricio Pereiro" 
                                     className='rounded-[inherit]'/>
                                    </div>

                                     <div className="titleBox
                                     flex flex-col 
                                     items-start 
                                     gap-1
                                     
                                     w-[205px] 
                                     h-[108px]">
                                        <div className="name">
                                          <h3 className='self-stretch
                                                        text-white
                                                        font-poppins
                                                        text-[16px]
                                                        font-black
                                                        leading-[24px]
                                                        tracking-[0.5px]'>Maurício Pereiro</h3>
                                          </div>
                                                <span className="cargo 
                                                          self-stretch
                                                          text-white
                                                          font-poppins
                                                          text-[14px]
                                                          not-italic
                                                          font-medium
                                                          leading-[20px]
                                                          mt-[4px]
                                                          tracking-[0.25px]">Professor
                                                </span>
                                                <div className="buttonBox w-[205px] h-[56px]
                                                                flex
                                                                items-start
                                                                gap-[8px]
                                                                pt-3
                                                                pr-4
                                                                "><button className='
                                                                w-[189px] h-[40px]
                                                                flex
                                                                py-[10px] px-[24px]
                                                                flex-col
                                                                justify-center
                                                                gap-[10px]
                                                                self-stretch
                                                                rounded-[100px]
                                                                bg-[#FEAC39]'
                                                                onClick={() => redirectToLinkedIn('Mauricio')}>
                                                                  <p className='
                                                                  text-[#000]
                                                                  text-center
                                                                  no-ligatures
                                                                  font-lexend
                                                                  text-[14px]
                                                                  not-italic
                                                                  font-medium
                                                                  leading-[normal]
                                                                  tracking-[0.1px]'>Seguir no Linkedin</p></button>
                                                                  </div>
                                     </div>
                              </div>
                          </div>
                          
                          {/* description */}
                          <div className="description 
                                          w-[360px] 
                                          h-[360px] 
                                          
                                          flex
                                          p-6
                                          items-start
                                          self-stretch">
                                            <p className='
                                                          self-stretch
                                                          no-ligatures
                                                          text-white
                                                          h-[312px]
                                                          font-lexend
                                                          text-[16px]
                                                          not-italic
                                                          font-normal
                                                          leading-[24px]
                                                          tracking-[0.15px]'>
                                              Graduado em Ciências da Computação, com pós-graduação em 
                                              Gestão de Centrais de Atendimento e em Processos de Negócios.
                                               Mais de 30 anos de experiência profissional, sendo 24 anos no 
                                               segmento bancário e 09 anos em consultoria. Atua na elicitação 
                                               de requisitos técnicos, funcionais, negócios, acessibilidade e 
                                               identificação de processos críticos, pela modelagem e execução 
                                               de testes conforme regras de acessibilidade nacionais e 
                                               internacionais.</p>
                                          </div>
          </article>


        {/* Profile 3 */}
        <article className="profile2 
                          w-[360px] 
                          h-[500px] 
                          flex 
                          flex-col 
                          items-start 
                          bg-[#313033] 
                          rounded-[24px]
                          shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]
                          border-solid border-2 border-[#938F99]">
                          <div className="
                          headerBox 
                          bg-[#313033] 
                          w-[355px] 
                          h-[140px] 
                          flex 
                          p-4 
                          items-center 
                          self-stretch
                          rounded-[inherit]">
                              <div className="content 
                              flex 
                              items-center 
                              gap-[16px] w-[328px] h-[108px]">
                                <div className="
                                     boxImg 
                                     w-[107px] 
                                     h-[107px] 
                                     rounded-[50%] 
                                     bg-[#FAFCFF]
                                     items-center
                                     justify-center
                                     flex
                                     "><img 
                                     src={Andressa} 
                                     alt="Foto do Mauricio" 
                                     className='rounded-[inherit]'/>
                                    </div>

                                     <div className="titleBox
                                     flex flex-col 
                                     items-start 
                                     gap-1
                                    
                                     w-[205px] 
                                     h-[108px]">
                                        <div className="name">
                                          <h3 className='self-stretch
                                                        text-white
                                                        font-poppins
                                                        text-[16px]
                                                        font-black
                                                        leading-[24px]
                                                        tracking-[0.5px]'>Andressa</h3>
                                          </div>
                                                <span className="cargo 
                                                          self-stretch
                                                          text-white
                                                          font-poppins
                                                          text-[14px]
                                                          not-italic
                                                          font-medium
                                                          leading-[20px]
                                                          mt-[4px]
                                                          tracking-[0.25px]">Especialista em Inclusão
                                                </span>
                                                <div className="buttonBox w-[205px] h-[56px]
                                                                flex
                                                                items-start
                                                                gap-[8px]
                                                                pt-3
                                                                pr-4
                                                                "><button className='
                                                                w-[189px] h-[40px]
                                                                flex
                                                                py-[10px] px-[24px]
                                                                flex-col
                                                                justify-center
                                                                gap-[10px]
                                                                self-stretch
                                                                rounded-[100px]
                                                                bg-[#FEAC39]'
                                                                onClick={() => redirectToLinkedIn('Andressa')}>
                                                                  <p className='
                                                                  text-[#000]
                                                                  text-center
                                                                  no-ligatures
                                                                  font-lexend
                                                                  text-[14px]
                                                                  not-italic
                                                                  font-medium
                                                                  leading-[normal]
                                                                  tracking-[0.1px]'>Seguir no Linkedin</p></button>
                                                                  </div>
                                     </div>
                              </div>
                          </div>
                          
                          {/* description */}
                          <div className="description 
                                          w-[360px] 
                                          h-[360px] 
                                     
                                          flex
                                          p-6
                                          items-start
                                          self-stretch">
                                            <p className='
                                                          self-stretch
                                                          no-ligatures
                                                          text-white
                                                          w-[312px]
                                                          h-[312px]
                                                          font-lexend
                                                          text-[16px]
                                                          not-italic
                                                          font-normal
                                                          leading-[24px]
                                                          tracking-[0.15px]'>
                                              Graduada em Gestão de Recursos Humanos e pós-graduada em 
                                              Psicologia Organizacional. Atua no Itau como Analista 
                                              Comercial de fundos de investimentos. Lidera grupos de 
                                              afinidade de PCDs, favorecendo o protagonismo dos 
                                              colaboradores com deficiência. É coordenadora do Núcleo 
                                              de Desenvolvimento e Capacitação Profissional no INSEP, 
                                              apoiando os alunos em projetos de ingresso e/ou transição 
                                              de carreira para QA em Acessibilidade Digital.</p>
                                          </div>
          </article>

      </div>

      
      
    </section>
  )
}

export default Equipe