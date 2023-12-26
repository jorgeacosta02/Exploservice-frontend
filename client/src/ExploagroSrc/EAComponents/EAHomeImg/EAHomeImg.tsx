import styles from './_EAHomeImg.module.scss';
import img07 from '../../EAAssets/EAImages/campo-07.jpg'


const EAHomeImg = () => {
    return (
        <div 
        className={styles.container}
        ><img
          className={styles.img}
          src={img07} alt="Field" />
        </div>
  )
}

export default EAHomeImg



  
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
              
              
              