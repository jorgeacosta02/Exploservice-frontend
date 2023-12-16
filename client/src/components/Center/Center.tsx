import { ReactNode } from "react"
import './_Center.modules.scss';



type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({children, title = "My subheding"}: SectionProps) => {
    return (
        <section className='container'>
            <h2>{title}</h2>
            <p>{children}</p>
            
        </section>
  )
}

export default Section



  
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
              
              
              