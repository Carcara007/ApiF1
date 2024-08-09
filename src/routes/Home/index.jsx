import Header from "../../components/Header";
import Formula from './images/formula.png'
import styles from './Home.module.css'

function Home(){
    return(
        <>
            <Header />
            <div className={styles.icone}>
                <img src={Formula} alt="Formula 1" />
            </div>

        </>
    )
}
export default Home