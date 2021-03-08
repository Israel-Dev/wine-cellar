import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom'
import Title from '../shared/Title'
import Button from '../shared/Button'
import Checkboxes from './Checkbox-Group'
import ListStyle from './List.styled'

const ListComp = () => {
    const history = useHistory()
    const [isReverse, setIsReverse] = useState(false)
    const [items, setItems] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [fields, setFields] = useState(["name", "city"])

    const getLocalWines = () => {
        const savedBottles = document.cookie.split(";").find((elem) => elem.includes("savedBottles"))
        const savedBottlesArr = savedBottles ? JSON.parse(savedBottles.split("=")[1]) : []
        return savedBottlesArr
    }

    const fetchWines = async () => {
        let response
        try {
            response = await axios.get('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries', {
                headers: {
                    'x-rapidapi-key': '80f0c49970msh46e586c7fdaa10ep1a87e8jsned9cd82df1e1',
                    'x-rapidapi-host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
                }
            })
        } catch (e) {
            console.error(e)

        }

        const localWines = getLocalWines()

        response?.status === 200 ?
            setItems([...response.data, ...localWines]) :
            setItems(localWines)

        setIsLoading(false)
    }

    const sort = (field: string) => {
        setIsReverse(!isReverse)
        const sortedItems = [...items]

        sortedItems.sort((a, b) => {
            if (a[field] > b[field]) {
                return isReverse === true ? -1 : 1
            }

            if (a[field] < b[field]) {
                return isReverse === true ? 1 : -1
            }
            return 0
        })

        setItems(sortedItems)
    }

    const handleCheckboxChange = (e: any) => {
        const { value } = e.target

        const newFields = [...fields]

        !newFields.includes(value) ?
            newFields.push(value)
            : newFields.splice(newFields.indexOf(value), 1)

        setFields(newFields)
    }

    if (!items.length) fetchWines()

    const headersElem = fields.map((field: string) => {
        const formatedString: { [key: string]: string } = {
            name: "Name",
            city: "Yard's City",
            state: "State",
            brewery_type: "Brewery Type",
            country: "Country"
        }
        return <th className="header-field" onClick={() => sort(field)}>{formatedString[field]}</th>
    })

    const dataElem = (item: any) => fields.map((field, i) => {
        return (
            <td>{item[field]}</td>
        )
    })

    const listElems = items.map((item, i) => {
        return (
            <tr
                className={`row ${i % 2 === 0 ? "gray" : ""}`} key={`row-${i}`}
                onClick={() => history.push(`/details?id=${item.id}`)}
            >
                {dataElem(item)}
            </tr>
        )
    })

    return (
        <ListStyle className={`list-wrapper ${isLoading ? "loading" : ""}`}>
            {
                !isLoading ?
                    <>
                        <header className="list-header">
                            <Title label="List of brews and wines" />
                            <Button
                                label="Add new bottle"
                                callback={() => history.push("/new-bootle")}
                            />
                        </header>
                        <section className="table-container">
                            <Checkboxes
                                title="View options"
                                options={[
                                    { value: "brewery_type", name: "Brewery Type" },
                                    { value: "state", name: "State" },
                                    { value: "country", name: "Country" }
                                ]}
                                callback={handleCheckboxChange}
                            />
                            <table>
                                <thead>
                                    <tr className="table-header">
                                        {headersElem}
                                    </tr>
                                </thead>
                                <tbody>
                                    {listElems}
                                </tbody>
                            </table>
                        </section>

                    </>
                    : null
            }
        </ListStyle>
    )
}

export default ListComp