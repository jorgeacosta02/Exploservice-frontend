
import styles from './_ESServicesComp.module.scss';
import imgPPP01 from '../../ESAssets/ESImages/ESServices/PerfParaProduccion/perfoProd01.png'
import imgPPP02 from '../../ESAssets/ESImages/ESServices/PerfParaProduccion/perfoProd02.jpg'
import imgPGC01 from '../../ESAssets/ESImages/ESServices/PerfParaGradeControl/perfoGradecontrol01.jpg'
import imgPGC02 from '../../ESAssets/ESImages/ESServices/PerfParaGradeControl/perfoGradecontrol02.jpg'
import imgPGC03 from '../../ESAssets/ESImages/ESServices/PerfParaGradeControl/perfoGradecontrol03.jpg'
import imgPPC01 from '../../ESAssets/ESImages/ESServices/PerfParaConstruccion/perfoBuilding01.jpg'
import imgPPC02 from '../../ESAssets/ESImages/ESServices/PerfParaConstruccion/perfoBuilding02.jpg'
import imgBlasting01 from '../../ESAssets/ESImages/ESServices/Voladura/blasting01.jpg'
import imgBlasting02 from '../../ESAssets/ESImages/ESServices/Voladura/blasting02.jpg'
import imgBlasting03 from '../../ESAssets/ESImages/ESServices/Voladura/blasting03.jpg'
import imgPD01 from '../../ESAssets/ESImages/ESServices/PreDrilling/preDrilling01.jpg'
import imgPD02 from '../../ESAssets/ESImages/ESServices/PreDrilling/preDrilling02.jpg'
import imgPD03 from '../../ESAssets/ESImages/ESServices/PreDrilling/preDrilling03.jpg'
import imgTroy from '../../ESAssets/ESImages/ESClients/troy.png'
import imgAustralGold from '../../ESAssets/ESImages/ESClients/australgold.png'
import imgBarrick from '../../ESAssets/ESImages/ESClients/barrick.png'
import imgYamana from '../../ESAssets/ESImages/ESClients/yamana.png'
import imgMapal from '../../ESAssets/ESImages/ESClients/mapal.jpg'
import imgCartellone from '../../ESAssets/ESImages/ESClients/cartellone.jpg'
import imgSW from '../../ESAssets/ESImages/ESClients/sterling&wilson.png'
import imgMSC from '../../ESAssets/ESImages/ESClients/mineraSantaCruz.jpg'
import imgZlato from '../../ESAssets/ESImages/ESClients/zlato.jpg'
import imgAlya from '../../ESAssets/ESImages/ESClients/alya.png'

const ESServicesComp = () => {
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
      <div className={styles.clientsContainer}>
        <h2 className={styles.our}>Nuestros clientes</h2>
        <div className={styles.clients}>
          <img src={imgTroy} alt="imgTroy" />
          <img src={imgAustralGold} alt="imgAustralGold" />
          <img src={imgBarrick} alt="imgBarrick" />
          <img src={imgYamana} alt="imgYamana" />
          <img src={imgMapal} alt="imgMapal" />
          <img src={imgCartellone} alt="imgCartellone" />
          <img src={imgSW} alt="imgSW" />
          <img src={imgMSC} alt="imgMSC" />
          <img src={imgZlato} alt="imgZlato" />
          <img src={imgAlya} alt="imgAlya" />
        </div>
        <p>Con una extensa experiencia trabajando asociados a nuestros clientes desde las etapas iniciales hasta el final de cada proyecto, ofrecemos un amplio rango de alternativas adaptándonos para cubir cada necesidad específica.</p>
      </div>
    </div>
  )
}

export default ESServicesComp
