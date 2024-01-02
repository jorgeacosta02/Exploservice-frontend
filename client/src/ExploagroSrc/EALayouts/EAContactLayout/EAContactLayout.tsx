import styles from './_EAContactLayout.module.scss'
import EAContactFormComp from '../../EAComponents/EAContactComp/EAContactFormComp'
import EAContactDataComp from '../../EAComponents/EAContactComp/EAContactDataComp'

const EAContactLayout = () => {
  return (
    <div className={styles.container}>
      <EAContactDataComp />
      <EAContactFormComp />
    </div>
  )
}

export default EAContactLayout
