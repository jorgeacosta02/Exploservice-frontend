import styles from './_ESServicesComp.module.scss'
import img01 from '../../ESAssets/ESImages/ESServices/PerfParaProduccion/perfoProd01.png'
import img02 from '../../ESAssets/ESImages/ESServices/PerfParaProduccion/perfoProd02.jpg'

const ESServicesComp = () => {
  return (
    <div>
        <h1>Nuestros servicios</h1>
        <div className={styles.service}>
            <h2>PERFORACION PARA PRODUCCION</h2>
            <p>Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.</p>
            <div>
                <img src={img01} alt={img01} />
                <img src={img02} alt={img02} />
             </div>
        </div>
    </div>
  )
}

export default ESServicesComp
