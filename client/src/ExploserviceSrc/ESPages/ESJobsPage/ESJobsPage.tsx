import NavBarLayout from '../../ESLayouts/ESNavBarLayout/ESNavBarLayout'
import ESJobsComp from '../../ESComponents/ESJobsComp/ESJobsComp'
import ESFooterComp from '../../ESComponents/ESFooterComp/ESFooterComp'

const ESJobsPage = () => {
  return (
    <div>
      <NavBarLayout/>
      <ESJobsComp/>
      <ESFooterComp/>
    </div>
  )
}

export default ESJobsPage