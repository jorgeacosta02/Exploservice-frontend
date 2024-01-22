import styles from './_servicesComp.module.scss';
import imgPPP01 from '../../Assets/Images/services/PerfParaProduccion/perfoProd01.png'
import imgPPP02 from '../../Assets/Images/services/PerfParaProduccion/perfoProd02.jpg'
import imgPGC01 from '../../Assets/Images/services/PerfParaGradeControl/perfoGradecontrol01.jpg'
import imgPGC02 from '../../Assets/Images/services/PerfParaGradeControl/perfoGradecontrol02.jpg'
import imgPGC03 from '../../Assets/Images/services/PerfParaGradeControl/perfoGradecontrol03.jpg'
import imgPPC01 from '../../Assets/Images/services/PerfParaConstruccion/perfoBuilding01.jpg'
import imgPPC02 from '../../Assets/Images/services/PerfParaConstruccion/perfoBuilding02.jpg'
import imgBlasting01 from '../../Assets/Images/services/Voladura/blasting01.jpg'
import imgBlasting02 from '../../Assets/Images/services/Voladura/blasting02.jpg'
import imgBlasting03 from '../../Assets/Images/services/Voladura/blasting03.jpg'
import imgPD01 from '../../Assets/Images/services/PreDrilling/preDrilling01.jpg'
import imgPD02 from '../../Assets/Images/services/PreDrilling/preDrilling02.jpg'
import imgPD03 from '../../Assets/Images/services/PreDrilling/preDrilling03.jpg'

const ServicesComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
      </div>
      <div className={styles.mainText}>
      <h1 className={styles.title}>EXPLOSERVICE - ADL S.R.L.</h1>
        <p>
          En Exploservice ADL nos dedicamos a brindar soluciones en el campo de la perforación para voladuras, aplicadas para la exploración y explotación en minería y excavaciones para construcción.
        </p>
        <p>
          Contamos con una vasta experiencia de más de 25 años y un equipo especializado, altamente comprometido con el desarrollo de procesos de mejora continua, garantizando el cumplimiento de los objetivos con altos estándares de calidad, seguridad y cuidando el medio ambiente.
        </p>
      </div>
      <h2 className={styles.our}>Nuestros servicios</h2>
      <div className={styles.allServicesContainer}>
      <div className={styles.serviceContainer}>
        <h3>PERFORACIÓN PARA PRODUCCION</h3>
        <div className={styles.serviceContent}>
          <p>Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.</p>
          <div className={styles.serviceImgs}>
            <img src={imgPPP01} alt="imgPPP01" />
            <img src={imgPPP02} alt="imgPPP02" />
          </div>
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <h3>PERFORACIÓN PARA GRADE CONTROL</h3>
      <div className={styles.serviceContent}>
        <p>Perforación con toma de muestras del cutting o detritus, con o sin empleo de dispositivo cuarteador.</p>
        <div className={styles.serviceImgs}>
          <img src={imgPGC01} alt="imgPGC01" />
          <img src={imgPGC02} alt="imgPGC02" />
          <img src={imgPGC03} alt="imgPGC03" />
        </div>
      </div>
      </div>
      <div className={styles.serviceContainer}>
        <h3>PERFORACIÓN PARA CONSTRUCCION</h3>
        <div className={styles.serviceContent}>
        <p>Perforación para excavaciones con explosivos en construcción; cortes cajón y media ladera para rutas, rip-rap, zanjeos, fundaciones, demoliciones, voladuras especiales, etc.</p>
        <div className={styles.serviceImgs}>
          <img src={imgPPC01} alt="imgPPP01" />
          <img src={imgPPC02} alt="imgPPP02" />
        </div>
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <h3>VOLADURA</h3>
        <div className={styles.serviceContent}>
        <p>Carguío de pozos con explosivos y detonación para la obtención de roca fragmentada en diferentes granulometrías según su posterior utilización.</p>
        <div className={styles.serviceImgs}>
          <img src={imgBlasting01} alt="imgPPP01" />
          <img src={imgBlasting02} alt="imgPPP02" />
          <img src={imgBlasting03} alt="imgPPP03" />
        </div>
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <h3>PRE DRILLING</h3>
        <div className={styles.serviceContent}>
        <p>Perforación de taladros sin extracción de cutting para facilitar el hincado de perfiles estructurales para el emplazamiento de parques solares.</p>
        <div className={styles.serviceImgs}>
          <img src={imgPD01} alt="imgPPP01" />
          <img src={imgPD02} alt="imgPPP02" />
          <img src={imgPD03} alt="imgPPP03" />
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ServicesComp
