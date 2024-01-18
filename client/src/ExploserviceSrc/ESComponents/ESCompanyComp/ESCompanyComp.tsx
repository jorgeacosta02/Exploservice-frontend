import styles from './_ESCompanyComp.module.scss';
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
import imgAlPat from '../../ESAssets/ESImages/ESClients/alcalis_IDENTIDAD-CURVAS-2-1.png'
import imgXtrata from '../../ESAssets/ESImages/ESClients/xstrata_copper_logo.jpg'
import imgMASA from '../../ESAssets/ESImages/ESClients/minas_argentinas_s_a_logo.jpg'
import imgBajoAlum from '../../ESAssets/ESImages/ESClients/alumbrera.jpg'
import imgCNEA from '../../ESAssets/ESImages/ESClients/CMEA.jpg'

const ESCompanyComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
      </div>
      {/* <div className={styles.mainText}>
        <h1 className={styles.title}>EXPLOSERVICE - ADL S.R.L.</h1>
        <h2 className={styles.our}>Nuestros inicios</h2>
        <div className={styles.introContainer}>
          <p>
            Al hacer una introducción de Exploserivce y ADL, no debemos olvidar la experiencia absorbida en Magma Ingeniería Minera (1977), empresa de servicos formada por egresados de la Facultad de Ingeniería de la Universidad Nacional de Cuyo. Obras como Altas cumbres (Córdoba), Embalse Río Grande (Córdoba), Itaipú (Misiones); entre otras como minería de Uranio y Malagueño Córdoba.
          </p>
          <p>
            Pasada la "aventura" de Malvinas, nos concuentra nuevamente en torno a la Faculatad de Ingeniería de la Universidad Nacional de San Juan, desarrollando el proyecto de Repositorio Nuclear, en Gastre.
          </p>
          <p>
            La cercanía al Instituto de Investigaciones Mineras de la U.N.S.J. y la docencia, fueron el respaldo, para un amplio catálogo de valiosas ideas, refrendadas por el ejercicio profesional de nuestra especialidad minera.
          </p>
          <p>
            Esta etapa que continúa, ininterrumpidamente, comienza con la ejecución de labores de formación de bancos y camino a botadero para Mount Isa Minerales en Bajo La Alumbrera.
          </p>
        </div>
      </div> */}
      <div className={styles.clientsContainer}>
        <h2 className={styles.our}>Nuestras instalaciones</h2>
        <p>La idea es colocar en este espacio un detalle con fotos de las instalaciones de exploserice, galón, oficinas, polvorín.</p>
      </div>
      <div className={styles.clientsContainer}>
        <h2 className={styles.our}>Nuestros clientes</h2>
        <p>
          A lo largo de nuestra trayectorio hemos prestado servicios a empresas de renombre en el ambiente minero a nivel nacional e internacional entre las que se encuentran las siguientes.
        </p>
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
          <img src={imgAlPat} alt="imgAlPat" />
          <img src={imgXtrata} alt="imgAlPat" />
          <img src={imgMASA} alt="imgAlPat" />
          <img src={imgBajoAlum} alt="imgAlPat" />
          <img src={imgCNEA} alt="imgAlPat" />
        </div>
        <p>Con una extensa experiencia trabajando asociados a nuestros clientes desde las etapas iniciales hasta el final de cada proyecto, ofrecemos un amplio rango de alternativas adaptándonos para cubir cada necesidad específica.</p>
      </div>
    </div>
    // Minera salta, xtrata copper, pachon sa minera, minas argentinas, bajo la alumnbrera minera alumbrera Ymad ute., comision nacional de energía atómica.
  )
}

export default ESCompanyComp
