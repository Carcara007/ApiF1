import styles from "./CardTop.css"

function CardTop({name}){
    return(
        <>
            <section className={styles.section}>
                <div className={styles.img}>

                </div>
                <div className={styles.text}>
                    <h2>"Nome Api"</h2>
                    <h1>{name}</h1>
                </div>
            </section>
        </>
    )
}
export default CardTop 