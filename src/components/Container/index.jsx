import styles from './Container.module.css'
import Card from '../Card/card'

function Container(){
    return(
        <>
            <section className={styles.corpo}>
                <Card/>
                <Card/>
            </section>
        </>
    )
}
export default Container