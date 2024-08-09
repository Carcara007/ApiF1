import styles from './Card.module.css'

function Card({name, time, points, team, nationality, img}){
    return(
        <>
            <section className={styles.section}>
                <div className={styles.img}>
                    <img src={img}  />
                </div>
                <div className={styles.text}>
                    <h1 className={styles.titleName}>{name}</h1>
                    <h3>TEMPO: {time}</h3>
                    <h3>PONTOS: {points}</h3>
                    <h3>EQUIPE: {team}</h3>
                    <h3>NACIONALIDADE:</h3>
                    <img src={nationality} className='nacionalImg' height="50px" width="70px"/>
                </div>
            </section>
        </>
    )
}
export default Card