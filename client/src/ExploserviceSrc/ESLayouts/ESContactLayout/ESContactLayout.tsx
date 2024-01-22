import styles from './_ESContactLayout.module.scss'
import ESContactFormComp from '../../ESComponents/contactComp/contactFormComp'
import ESContactDataComp from '../../ESComponents/contactComp/contactDataComp'

const ESContactLayout = () => {
  return (
    <div className={styles.container}>
      <ESContactDataComp />
      <ESContactFormComp />
    </div>
  )
}

export default ESContactLayout
