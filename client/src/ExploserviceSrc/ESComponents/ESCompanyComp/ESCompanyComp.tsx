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

const ESCompanyComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
      </div>
      <div className={styles.mainText}>
        <h1 className={styles.title}>EXPLOSERVICE - ADL S.R.L.</h1>
        <h2 className={styles.our}>Nuestros inicios</h2>
        <div className={styles.introContainer}>
          <p>
            Al hacer una introducción de Exploserivce y ADL, no debemos olvidar la experiencia absorbida en Magma Ingeniería Minera, empresa de servicos formada por egresados de la Facultad de Ingeniería de la Universidad Nacional de Cuyo. Obras como Altas cumbres (Córdoba), Embalse Río Grande, Itaipú; entre otras como minería de Uranio y Malagueño.
          </p>
          <p>
            Pasada la "aventura" de Malvinas, nos concuentra nuevamente en torno a la Faculatad de Ingeniería de la Universidad Nacional de San Juan, desarrollando el proyecto de Repositorio Nuclear, en Gastre.
          </p>
          <p>
            La cercanía al Instituto de Investigaciones Mineras de la U.N.S.J. y la docencia, fueron el respaldo, para un ampli catálogo de valiosas ideas, refrendadas por el ejercicio profesional de nuestra especialidad minera.
          </p>
          <p>
            Esta etapa que continúa, ininterrumpidamente, comienza con la ejecución de labores de formación de bancos y camino a botadero para Mount Isa Minerales en Bajo La Alumbrera.
          </p>
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
          <img src={imgAlPat} alt="imgAlPat" />
        </div>
        <p>Con una extensa experiencia trabajando asociados a nuestros clientes desde las etapas iniciales hasta el final de cada proyecto, ofrecemos un amplio rango de alternativas adaptándonos para cubir cada necesidad específica.</p>
      </div>
    </div>
  )
}

export default ESCompanyComp
