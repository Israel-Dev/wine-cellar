import { useHistory, useLocation } from 'react-router'
import { useState } from 'react'
import axios from 'axios'

import InformationStyle from './Information.styled'
import Title from '../shared/Title'
import GoBack from '../shared/Go-Back'

const Information = () => {
    const [id, setID] = useState<string>()
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState(true)

    const location = useLocation()
    const history = useHistory()

    const fields = data ? Object.keys(data) : []

    const getURLid = () => {
        const urlParams = new URLSearchParams(location.search)
        const queryID = urlParams.get("id")
        if (!id && queryID) setID(queryID)
    }

    const searchLocalWines = (id: number | string) => {
        const savedBottles = document.cookie.split(";").find((elem) => elem.includes("savedBottles"))
        const savedBottlesArr = savedBottles ? JSON.parse(savedBottles.split("=")[1]) : []

        console.log(savedBottlesArr)
        return savedBottlesArr.find((bottle: any) => bottle.id === id)
    }

    const getDetails = async () => {
        getURLid()

        if (id) {
            let response
            try {
                response = await axios.get(`https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/${id}`, {
                    headers: {
                        'x-rapidapi-key': '80f0c49970msh46e586c7fdaa10ep1a87e8jsned9cd82df1e1',
                        'x-rapidapi-host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
                    }
                })
            } catch (e) {
                console.error(e)
            }

            if (response?.status === 200) {
                setData(response.data)
            } else if (!response) {
                const localWines = searchLocalWines(id)
                setData(localWines)
            } else {
                history.push("/")
            }

            setIsLoading(false)
        }
    }

    if (!data || !Object.keys(data).length) getDetails()

    const dataElem = []

    for (let i = 0; i < fields.length; i++) {
        const fieldName = fields[i]
        const fieldValue = data[fieldName]

        if (fieldValue) {
            dataElem.push(
                <article
                    className="detail-field"
                    key={`${fieldName}-${i + 1}`}
                >
                    <label>{fieldName}</label>
                    <span>{fieldValue}</span>
                </article>
            )
        }
    }

    return (
        <InformationStyle className={`informatio-wrapper ${isLoading ? "loading" : ""}`}>
            {
                !isLoading ?
                    <>
                        <Title label="Details Page" />
                        <section className="details-section">
                            {dataElem}
                        </section>
                        <GoBack url="/" />
                    </>
                    : null
            }
        </InformationStyle>
    )
}

export default Information