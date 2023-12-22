import styles from './_ProductComp.module.scss';
import process01 from '../../assets/images/process/process01.jpg';
import process02 from '../../assets/images/process/process02.jpg';
import process03 from '../../assets/images/process/process03.jpg';


const ProductComp = () => {
  return (
    <div className={styles.container}>
      <h1>Condiciones de suelo</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis quos praesentium, facilis suscipit non quae, natus laboriosam vero, numquam amet modi eos quis? Eveniet porro cumque similique culpa officia consequatur et at, officiis velit itaque veniam voluptatibus possimus a delectus quisquam assumenda excepturi iusto ipsum amet quod ipsa saepe! Temporibus maiores expedita natus laborum debitis culpa odit eos possimus, cumque eius reprehenderit! Facere adipisci eum nemo in vel! Ea modi possimus autem, deserunt at fugiat iste unde nam necessitatibus! Vero cumque nostrum nesciunt explicabo harum delectus cupiditate totam excepturi fugiat, reiciendis possimus omnis repellat sed. Doloribus sapiente sequi laborum tempore. Libero quos dolores alias dolorum quidem repellat quis rem magnam, nisi ullam obcaecati maiores, explicabo veniam aut vel. Maxime nesciunt fugiat autem repellat similique possimus in rerum veniam architecto dolor magnam ducimus, molestias itaque laudantium. Assumenda sapiente mollitia magnam deserunt, nostrum eligendi dolorum laborum animi debitis quae nisi magni! </p>
      <section>
        <h2>Separación</h2>
        <div className={styles.soil}>
          <p className={styles.soilText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsa atque natus eius praesentium modi tempora odit! Nisi, doloribus accusantium. Nemo asperiores, corporis consectetur ipsa amet animi cumque quas alias laboriosam molestias unde necessitatibus molestiae explicabo, minus quibusdam saepe maiores possimus eum quis quasi quae dolore beatae distinctio. Officia illum necessitatibus animi repellendus in eos commodi recusandae cumque facere deserunt perspiciatis totam magnam fuga iste optio blanditiis, debitis rem amet nesciunt eius ipsam quidem obcaecati eveniet ratione. Culpa minima quam, aut labore voluptatem rem! Debitis, nobis quis obcaecati aliquid adipisci libero dolor quae reiciendis facilis fugit officia! Officiis, expedita culpa?</p>
          <img src={process01} alt="" />
        </div>
      </section>
      <section>
        <h2>Mezcla</h2>
        <div className={styles.soil}>
          <p className={styles.soilText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti ipsam neque deserunt ea minima, exercitationem, modi iste accusamus ratione, eius soluta voluptatem illum. Impedit sed dignissimos dolorum earum eveniet natus voluptatem vel ea distinctio perferendis aliquid, et non voluptatum similique nemo maiores consequuntur eos dolore autem. Iure quae, velit veritatis aperiam recusandae necessitatibus laudantium. Dolor at repudiandae est fugit necessitatibus quibusdam illo quaerat quod cumque officiis magni, assumenda accusamus architecto, iste eveniet nisi incidunt? Facilis reprehenderit qui, laboriosam deserunt quo, soluta blanditiis amet dolor sed hic, animi repudiandae? Quae unde soluta consequatur deserunt nihil porro eos labore adipisci optio. </p>
          <img src={process02} alt="" />
        </div>
      </section>
      <section>
        <h2>Envasado</h2>
        <div className={styles.soil}>
          <p className={styles.soilText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti ipsam neque deserunt ea minima, exercitationem, modi iste accusamus ratione, eius soluta voluptatem illum. Impedit sed dignissimos dolorum earum eveniet natus voluptatem vel ea distinctio perferendis aliquid, et non voluptatum similique nemo maiores consequuntur eos dolore autem. Iure quae, velit veritatis aperiam recusandae necessitatibus laudantium. Dolor at repudiandae est fugit necessitatibus quibusdam illo quaerat quod cumque officiis magni, assumenda accusamus architecto, iste eveniet nisi incidunt? Facilis reprehenderit qui, laboriosam deserunt quo, soluta blanditiis amet dolor sed hic, animi repudiandae? Quae unde soluta consequatur deserunt nihil porro eos labore adipisci optio. </p>
          <img src={process03} alt="" />
        </div>
      </section>
    </div>
  )
}

export default ProductComp
