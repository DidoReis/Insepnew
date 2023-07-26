// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../../styles'

const Beneficios = () => {
  return (
    <section 
    className=
    {`flex 
    md:flex-row 
    border border-red-50
    
    md:w-[full]   
    
    ${styles.paddingY} 
    h-[1065px] md:h-[420px]`}>
         <div 
          className='flex 
          w-[286px] md:w-[446px]
           h-[64.06px] md:h-[27.933px]
          flex-col 
          justify-center
          shrink-0
          border border-yellow-400
          mt-[39.91px]
          ml-[14px] md:ml-[156px]
          '>
              <h2 
              className='text-white 
                          text-[24px]
                          not-italic
                          font-medium
                          leading-8
                          '
                          
              >O Insep te oferece benefícios únicos</h2>
          </div>
          <div 
              className='w-[1128px] 
                         h-[128px] 
                         shrink-0
                         flex 
                         flex-row
                         border border-red-200
                         mt-[32.16px]
                         ml-[156px]'></div>
    </section>
   
  )
}

export default Beneficios