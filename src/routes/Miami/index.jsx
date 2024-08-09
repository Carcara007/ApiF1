import Header from "../../components/Header";
import Card from "../../components/Card/card";
import { useEffect, useState } from "react";

function Miami(){

    const [repo, setRepo] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('./api.json')
            const data = await response.json()
            setRepo(data.gpData.Miami)
        }
        buscarRepositorios()
    }, [])


    return(
        <>
            <Header />
            <h1>GP Miami</h1>
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
export default Miami