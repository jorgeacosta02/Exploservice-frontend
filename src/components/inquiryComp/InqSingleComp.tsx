import styles from './_InqSinglComp.module.scss'

const InqSingleComp = (props: any) => {

    console.log('props in single: ', props)
    return (
        <div
            className={styles.container}
        >
            <p>
                {props.article} -{props.feature1} - {props.feature2} - {props.brand} - {props.location} - {props.quantity}
            </p>

        </div>
    )
}

export default InqSingleComp
