import styles from './_ESContactLayout.module.scss'
import ESContactFormComp from '../../ESComponents/ESContactComp/ESContactFormComp'
import ESContactDataComp from '../../ESComponents/ESContactComp/ESContactDataComp'

const ESContactLayout = () => {
  return (
    <div className={styles.container}>
      <ESContactDataComp />
      <ESContactFormComp />
    </div>
  )
}

export default ESContactLayout
