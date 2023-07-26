// eslint-disable-next-line no-unused-vars
import React from 'react'

import Character from "../assets/img/character.png"
import Arrow from "../assets/img/arrow.svg"

const Faq = () => {
  return (
    <section className='faqBox w-[1155px] h-[719px]
                        ml-[156px]
                        mt-[128px]
                        flex
                        '>
                     
               {/* Left Side */}      
              <div className="leftSide w-[435px] h-[718px]
                              flex
                              flex-col
                             ">
                              <div className="title w-[261px] h-[160px]
                            ml-[113px]
                            items-center
                            justify-center
                            ">
                              <p className='
                                            text-white
                                            no-ligatures
                                            font-lexend
                                            not-italic
                                            font-semibold
                                            text-[128px]
                                            leading-[normal]
                                            tracking-[0.18px]'>FAQ</p>
                            </div>
                            <div className="w-[435px] h-[497px] 
                            
                            mt-[61px]
                            flex
                            items-center
                            justify-center">
                              <img src={Character} 
                              alt="Imagem de pessoa com perguntas"
                              className='w-[435px] h-[497px]' />
                              
                            </div>
                </div>

                {/* Right Side */} 
                <div className="rightSide
                               w-[720px]
                               h-[699px]
                               flex
                               flex-col
                               
                               mt-[20px]">
                    <div className="perg1 
                                   w-[720px] h-[50px]
                                   flex
                                   
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Sou uma pessoa com deficiência. 
                            Que tipo de apoio terei durante o curso?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div>  
                  <div className="perg2 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Como funciona o processo de inscrição?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div>
                  <div className="perg3 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Qual será o formato das aulas?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div> 
                  <div className="perg4 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Como serão as atividades assíncronas?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div> 
                  <div className="perg5 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Quanto tempo dura o curso?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div>
                  <div className="perg6 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Eu receberei algum Certificado?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div>
                  <div className="perg7 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Os cursos são pagos?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div>  
                  <div className="perg8 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Nunca trabalhei com tecnologia. Esse curso é para mim?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div> 
                  <div className="perg9 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Quais pré-requisitos para os diferente módulos?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div>  
                  <div className="perg10 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Já tenho conhecimento em acessibilidade digital. Posso pular módulos?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div> 
                  <div className="perg11 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            Quero fazer uma mudança de carreira. Só o módulo Básico já serve?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div>
                  <div className="perg12 
                                   w-[720px] h-[50px]
                                   flex
                                   mt-[9px]
                                   items-start
                                   gap-[8px]
                                   self-stretch
                                   justify-center
                                   ">
                          <p className='
                                       text-white
                                       font-poppins
                                       w-[644px]
                                       h-[24px]
                                       text-[16px]
                                       not-italic
                                       font-bold
                                       leading-[24px]
                                       mt-[10px]
                                       tracking-[0.5px]'>
                            O INSEP me ajuda na recolocação profissional?
                          </p>
                          <div className='w-[40px] h-[40px]'>
                            <img className='' src={Arrow} alt="Seta para baixo" /></div>     
                      </div>
                  <div className="separator w-[720px] h-[2px] bg-white"></div>               
                </div> 
    </section>
  )
}

export default Faq