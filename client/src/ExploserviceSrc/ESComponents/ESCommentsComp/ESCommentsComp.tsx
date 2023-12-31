import styles from './_ESCommentsComp.module.scss';
import imgPPP01 from '../../ESAssets/ESImages/ESServices/PerfParaProduccion/perfoProd01.png'
import imgPPP02 from '../../ESAssets/ESImages/ESServices/PerfParaProduccion/perfoProd02.jpg'
import imgPGC01 from '../../ESAssets/ESImages/ESServices/PerfParaGradeControl/perfoGradecontrol01.jpg'
import imgPGC02 from '../../ESAssets/ESImages/ESServices/PerfParaGradeControl/perfoGradecontrol02.jpg'
import imgPGC03 from '../../ESAssets/ESImages/ESServices/PerfParaGradeControl/perfoGradecontrol03.jpg'


const ESCommentsComp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>EXPLOSERVICE - ADL S.R.L.</h1>
      <p>
      En Exploservice ADL nos dedicamos a brindar soluciones en el campo de la perforación para voladuras, aplicadas para la exploración y explotación en minería y excavaciones para construcción.
      </p>
      <p>
      Contamos con una vasta experiencia de más de 25 años y un equipo especializado, altamente comprometido con el desarrollo de procesos de mejora continua, garantizando el cumplimiento de los objetivos con altos estándares de calidad, seguridad y cuidando el medio ambiente.
      </p>
      <h2>Nuestro servicios</h2>
      <div className={styles.serviceContainer}>
        <h2>PERFORACIÓN PARA PRODUCCION</h2>
        <p>Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.</p>
        <div className={styles.serviceImgs}>
          <img src={imgPPP01} alt="imgPPP01" />
          <img src={imgPPP02} alt="imgPPP02" />
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <h2>PERFORACIÓN PARA GRADE CONTROL</h2>
        <p>Perforación con toma de muestras del cutting o detritus, con o sin empleo de dispositivo cuarteador.</p>
        <div className={styles.serviceImgs}>
          <img src={imgPGC01} alt="imgPGC01" />
          <img src={imgPGC02} alt="imgPGC02" />
          <img src={imgPGC03} alt="imgPGC03" />
           </div>
      </div>
      <div className={styles.serviceContainer}>
        <h2>PERFORACIÓN PARA PRODUCCION</h2>
        <p>Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.</p>
        <div className={styles.serviceImgs}>
          <img src={imgPPP01} alt="imgPPP01" />
          <img src={imgPPP02} alt="imgPPP02" />
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <h2>PERFORACIÓN PARA PRODUCCION</h2>
        <p>Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.</p>
        <div className={styles.serviceImgs}>
          <img src={imgPPP01} alt="imgPPP01" />
          <img src={imgPPP02} alt="imgPPP02" />
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <h2>PERFORACIÓN PARA PRODUCCION</h2>
        <p>Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.</p>
        <div className={styles.serviceImgs}>
          <img src={imgPPP01} alt="imgPPP01" />
          <img src={imgPPP02} alt="imgPPP02" />
        </div>
      </div>
    </div>
  )
}

export default ESCommentsComp
