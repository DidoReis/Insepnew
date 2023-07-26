// eslint-disable-next-line no-unused-vars
import React from 'react'

import Santander from "../assets/img/santander.png";
import NTT from "../assets/img/nttdata.png";
import Itau from "../assets/img/itau.png";
import Porto from "../assets/img/portoseguro.png";
import Bradesco from "../assets/img/bradesco.png";
import Ifood from "../assets/img/ifood.png";
import PWC from "../assets/img/pwc.png";
import Serasa from "../assets/img/serasa.png";
import Drogasil from "../assets/img/drogasil.png";
import IBM from "../assets/img/ibm.png";
import Picpay from "../assets/img/picpay.png";
import Carrefour from "../assets/img/carrefour.png";

const Empresas = () => {
  return (
    <section className='empresas 
             w-[1128px] 
             h-[459.265px] 
             mt-[128px]
             flex
             flex-col
             ml-[156px]
             gap-[30px]
             '>
                <div className="title w-[538px] h-[32px] ">
                  <h2 className='text-white font-poppins text-[24px] not-italic font-medium leading-[32px]'>
                    Onde nossos alunos trabalham
                  </h2>
                </div>
                <div className="empresasBox w-[1128px] h-[397.265px] ">
                  {/* Line 1 */}
                  <div className="
                  line1 
                  w-[1088] 
                  h-[121px] 
                  
                  flex
                  items-center
                  justify-center">
                    <img src={Santander} alt="Logotipo do Banco Santander" className='w-[238px] h-[41.465px]' />
                    <img src={NTT} alt="Logotipo da NTT DATA" className='w-[200px] h-[32.502px] ml-[100px]' />
                    <img src={Itau} alt="Logotipo do Banco Itaú" className='w-[100px] h-[101.163px] ml-[145px]' />
                    <img src={Porto} alt="Logotipo da Porto Seguro" className='w-[120px] h-[121px] ml-[185px]' /> 
                  </div>
                  {/* Line 2 */}
                  <div className="
                  line2 
                  w-[1088] 
                  mt-[5px]
                  h-[121px] 
                 
                  flex
                  items-center
                  justify-center">
                    <img src={Bradesco} alt="Logotipo do Banco Bradesco" className='w-[238px] h-[44.689px]' />
                    <img src={Ifood} alt="Logotipo do Ifood" className='w-[140px] h-[73.985px] ml-[130px]' />
                    <img src={PWC} alt="Logotipo do PWC" className='w-[150px] h-[113px] ml-[150px]' />
                    <img src={Serasa} alt="Logotipo do Serasa" className='w-[200px] h-[86px] ml-[120px]' /> 
                  </div>
                  {/* Line 3 */}
                  <div className="
                  line3 
                  w-[1088] 
                  mt-[30px]
                  h-[121px] 
                  
                  flex
                  items-center
                  justify-center">
                    <img src={Drogasil} alt="Logotipo da farmácia Drogasil" className='w-[238px] h-[45.773px]' />
                    <img src={IBM} alt="Logotipo da IBM" className='w-[130px] h-[52.051px] ml-[135px]' />
                    <img src={Picpay} alt="Logotipo do PicPay" className='w-[190px] h-[46.686px] ml-[135px]' />
                    <img src={Carrefour} alt="Logotipo do Supermercado Carrefour" className='w-[150px] h-[96.265px] ml-[120px]' /> 
                  </div>
                </div>
                
    </section>
  )
}

export default Empresas