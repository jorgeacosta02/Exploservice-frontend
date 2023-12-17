import './_Center.modules.scss';
import img04 from '../../assets/images/campo-04.jpg'





const Center = () => {
    return (
        <section className='container'>
            <img
                className="img"
                src={img04} alt="Field" />
            <h2 className="mainTitle">
                Productos para el agro...
            </h2>
            <p></p>
            
        </section>
  )
}

export default Center



  
  // Older way
  
  // import React, { ReactNode } from "react"
  
  
  // type SectionProps = {
      //     title?: string,
      //     children: ReactNode
      // }
      
      // const Section: React.FC<{ title: string}> = ({children, title}) => {
        //   return (
            //     <section>
            //         <h2>{title}</h2>
            //         <p>{children}</p>
            //     </section>
            //   )
            // }
              
              
              