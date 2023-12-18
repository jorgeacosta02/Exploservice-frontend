import styles from './_HomeImg.module.scss';
import img04 from '../../assets/images/campo-04.jpg'


const HomeImg = () => {
    return (
        <div 
        className={styles.container}
        >
            <img
                className="img"
                src={img04} alt="Field" />
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
              
              
              