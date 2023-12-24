import styles from './_HomeImg.module.scss';
import img07 from '../../assets/images/campo-06.jpg'


const HomeImg = () => {
    return (
        <div 
        className={styles.container}
        ><img
          className={styles.img}
          src={img07} alt="Field" />
        </div>
  )
}

export default HomeImg



  
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
              
              
              