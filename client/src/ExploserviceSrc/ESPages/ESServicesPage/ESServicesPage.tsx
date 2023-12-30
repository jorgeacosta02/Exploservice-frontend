// import styles from './_ESServicesPage.module.scss'
import ESNavBarLayout from '../../ESLayouts/ESNavBarLayout/ESNavBarLayout'
import ESServicesComp from '../../ESComponents/ESServicesComp/ESServiceCard'
import ESFooterComp from '../../ESComponents/ESFooterComp/ESFooterComp'

const ESServicesPage = () => {
  return (
    <div>
      <ESNavBarLayout />
      <ESServicesComp />
      <ESFooterComp/>
    </div>
  )
}

export default ESServicesPage
