import React from 'react'
import NewBottleStyles from './New-Boottle.styled'
import Title from '../shared/Title'
import Error from './Error-Message'
import GoBack from '../shared/Go-Back'
import Button from '../shared/Button'
import uniqid from 'uniqid'
import { RouteComponentProps } from 'react-router'

interface IState {
    dataToSubmit: {
        [key: string]: string
    }
    hasError: boolean
}

class NewBottle extends React.Component<RouteComponentProps<any>, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            dataToSubmit: {},
            hasError: false
        }
    }

    fields = ["name", "brewery_type", "city", "state", "country"]

    handleChange(e: any) {
        const { dataToSubmit } = this.state
        const { name, value } = e.target

        dataToSubmit[name] = value

        this.setState({ dataToSubmit })
    }

    removeError() {
        this.setState({
            hasError: false
        })
    }

    noEmptyStrings(fieldsToSubmit: string[]) {
        const { dataToSubmit } = this.state

        for (let i = 0; i < fieldsToSubmit.length; i++) {
            const field = fieldsToSubmit[i]
            if (dataToSubmit[field].trim() === "") return false
        }
        return true
    }

    isValid() {
        const { dataToSubmit } = this.state
        const fieldsToSubmit = Object.keys(dataToSubmit)

        if (fieldsToSubmit.length !== this.fields.length || !this.noEmptyStrings(fieldsToSubmit)) {
            this.setState({
                hasError: true
            })

            return false
        }

        this.setState({
            hasError: false
        })
        return true
    }

    submitData() {
        const { dataToSubmit } = this.state

        if (this.isValid()) {
            dataToSubmit.id = uniqid()
            const savedBottles = document.cookie.split(";").find((elem) => elem.includes("savedBottles"))

            if (!savedBottles) {
                window.document.cookie = `savedBottles=[${JSON.stringify(dataToSubmit)}]`
            } else {
                const savedBottlesArr = JSON.parse(savedBottles.split("=")[1])
                savedBottlesArr.push(dataToSubmit)
                window.document.cookie = `savedBottles=${JSON.stringify(savedBottlesArr)}`
            }

            this.props.history.push("/")
        }
    }

    render() {
        const { hasError } = this.state
        const fieldsElem = this.fields.map((field, i) => {
            return (
                <article className="field" key={`${field}-${i}`}>
                    <label className="field-label">{field}</label>
                    <input
                        className="field-input"
                        name={field}
                        onFocus={() => this.removeError()}
                        onChange={(e) => this.handleChange(e)}
                    />
                </article>
            )
        })

        return (
            <NewBottleStyles className="new-bottle-wrapper">
                <Title label="Add a new bootle" />
                <section className="data-section">
                    {fieldsElem}
                    {
                        hasError ?
                            <Error text="Todos os campos são obrigatórios" />
                            : null
                    }
                </section>
                <footer className="new-bootle-footer">
                    <GoBack url="/" />
                    <Button callback={this.submitData.bind(this)} label="Submit new bottle" />
                </footer>
            </NewBottleStyles>
        )
    }
}

export default NewBottle