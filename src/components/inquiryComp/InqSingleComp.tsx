import styles from './_InqSinglComp.module.scss'

const InqSingleComp = (props: any) => {

    console.log('props in single: ', props)
    return (
        <div className={styles.container}>
            <p>Registro</p>
        </div>
    )
}

export default InqSingleComp
