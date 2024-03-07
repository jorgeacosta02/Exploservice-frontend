import styles from './_InqSinglComp.module.scss'

const InqSingleComp = (props: any) => {

    console.log('props in single: ', props)
    return (
        <div
            className={styles.container}
        >
            <p>
                {props.article}
            </p>
            <p>
                {props.feature1}
            </p>
            <p>
                {props.feature2}
            </p>
            <p>
                {props.brand}
            </p>
            <p>
                {props.location}
            </p>
            <p>
                {props.quantity}
            </p>

        </div>
    )
}

export default InqSingleComp
