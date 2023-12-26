import styles from './_EAComments.module.scss';
import imgSS from '../../EAAssets/EAImages/calcareousSoil01.jpg'
import imgCS from '../../EAAssets/EAImages/calcareousSoil02.jpg'

const EAComments = () => {
  return (
    <div className={styles.container}>
      <h1>Condiciones de suelo</h1>
      <p>Existen diferentes condociones de suelo y medio ambiente que se pueden presentar a la hora de realizar un proceso de producción agrícola. En ciertos casos esas condiciones resultan inapropiadas para la obtención de los rendimientos óptimos en los cultivos. Nuestro producto ofrece una solución efectiva para mejorar las condiciones del suelo con especial énfasis en aquellos que se requiere aumentar el nivel de ácidos húmicos para logara un mejor equilibrio del suelo. </p>
      <section>
        <h2>Suelos Salitrosos</h2>
        <div className={styles.soil}>
          <p className={styles.soilText}>Una consecuencia de la salinización del suelo es la pérdida de fertilidad, lo que perjudica o imposibilita el cultivo agrícola. Es común frenar o revertir el proceso mediante costosos «lavados» de los suelos para lixiviar las sales, o pasar a cultivar plantas que toleren mejor la salinidad.2​ Por otro lado, en la planificación de los sistemas de riego modernos este es un parámetro que se considera desde el comienzo, pudiendo de esta forma prevenirse la salinización dimensionando adecuadamente las estructuras y estableciendo prácticas de riego adecuadas.</p>
          <img src={imgSS} alt="" />
        </div>
      </section>
      <section>
        <h2>Suelos Calcáreos</h2>
        <div className={styles.soil}>
          <p className={styles.soilText}>En la superficie normalmente existe un horizonte A, que es de color pálido y pobre en humus. Entre el horizonte A y el horizonte cálcico o petrocálcio puede haber un horizonte árgico o un horizonte cámbico. El árgico está impregnado de carbonatos secundarios si se encuentra encima de un horizonte cálcico. La sequía, la pedregosidad de algunas zonas, y la presencia de horizontes petrocálcicos someros, son las principales limitaciones a su utilización agrícola. Cuando se riegan y se fertilizan, es necesario que tengan buen drenaje para evitar la salinización, pueden tener una alta productividad para una gran diversidad de cultivos. Las zonas alomadas se usan preferentemente para pastizal con baja carga de ovejas y cabras. </p>
          <img src={imgCS} alt="" />
        </div>
      </section>
    </div>
  )
}

export default EAComments
