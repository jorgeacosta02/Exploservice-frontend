import styles from './_ESWorks.module.scss'
import imgCasposo from '../../ESAssets/ESImages/ESWorks/casposo01.jpg'
import imgKarouni from '../../ESAssets/ESImages/ESWorks/minaKaroniGuyana.jpg'
import imgPacsuaLama01 from '../../ESAssets/ESImages/ESWorks/pascuaLama01.jpg'
import imgPacsuaLama02 from '../../ESAssets/ESImages/ESWorks/pascuaLama02.jpg'


const ESWorks = () => {
  return (
    <div className={styles.container}>
      <h1>Nuestros Trabajos</h1>
      <div className={styles.worksContainer}>
        <div className={styles.work}>
            <h2>
                Mina Casposo - Argentina
            </h2>
            <div className={styles.workData}>
                <div className={styles.workText}>
                    <p>
                    Mina Casposo ubicada en el departamento de Calingasta - Provincia de San Juan - Argentina.
                    </p>
                    <p>
                    Perforación, carga y voladura en roca andesita con grade control de cutting en mineral. Volumen total: 7.050.000 Ton. Contrato: desde 2011 al 2014.
                    </p>
                </div>
                <img src={imgCasposo} alt='Imagen Casposo' />
            </div>
        </div>
        <div className={styles.work}>
            <h2>
               Mina Karouni - Guyana
            </h2>
            <div className={styles.workData}>
                <div className={styles.workText}>
                    <p>
                    Mina Karouni locaclizada en la región de Esequibo de la república de Guyana.
                    </p>
                    <p>
                    Exploservice provee servicios de perforación carga y voladura en saprolita y roca, con grade control de cutting en mineral.
                    Cantidad total: 900.000 metros lineales de perforación. Contrato: desde 2015 a la actualidad.
                    </p>
                </div>
                <img src={imgKarouni} alt='Imagen Karoni' />
            </div>
        </div>
        <div className={styles.work}>
            <h2>
                Proyecto binacional Pascua Lama - Argentina Chile
            </h2>
            <div className={styles.workData}>
                <div className={styles.workText}>
                    <p>
                    Proyecto binacional Pascua Lama ubicado en el departamento de Iglesia - Provincia de San Juan - Argentina.
                    </p>
                    <p>
                    Carga y voladura con explosivos para excavación subterránea en tunel conveyor, lado argentino.
                    Período 2012 y 2013.
                    </p>
                </div>
                <img src={imgPacsuaLama01} alt='Imagen Pascua Lama 01' />
            </div>
        </div>
        <div className={styles.work}>
            <h2>
                Proyecto binacional Pascua Lama - Argentina Chile
            </h2>
            <div className={styles.workData}>
                <div className={styles.workText}>
                    <p>
                        Proyecto binacional Pascua Lama ubicado en el departamento de Iglesia - Provincia de San Juan - Argentina.
                    </p>
                    <p>
                        Transporte, carga y voladura con explosivos para excavación dique de colas.
                        Período 2012 y 2013.
                    </p>
                </div>
                <img src="" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ESWorks
