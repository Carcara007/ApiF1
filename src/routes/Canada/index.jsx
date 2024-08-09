import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card/card"
import json from "../../../public/api.json"
import styles from "./Canada.module.css"

function Canada() {

    const [repo, setRepo] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('./api.json')
            const data = await response.json()
            setRepo(data.gpData.Canada)
        }
        buscarRepositorios()
    }, [])

    return (
        <>
            <Header />
            <h1>GP Canada</h1>
            <section className="TodosCardsSection">
                {
                    repo.map((teste) => (
                        <Card
                            key={teste.id}
                            name={teste.name}
                            time={teste.time}
                            points={teste.points}
                            team={teste.team}
                            nationality={teste.nationality}
                            img={teste.img}
                        />
                    ))
                }

            </section>

        </>
    )
}
export default Canada