import CheckboxStyles from './Checkbox-Group.styled'

interface IProps {
    title: string
    options: { name: string, value: string }[]
    callback: Function
}

const Checkboxes = (props: IProps) => {
    const { options, callback, title } = props

    const checkboxesElem = options.map((option, i) => {
        return (
            <article key={`${option}-${i}`}>
                <label>{option.name}</label>
                <input type="checkbox" name={option.name} value={option.value} onChange={(e) => callback(e)} />
            </article>
        )
    })

    return (
        <CheckboxStyles className="checkboxes-wrapper">
            <header>
                <h4>{title}</h4>
            </header>
            <section className="options-section">
                {checkboxesElem}
            </section>
        </CheckboxStyles>
    )
}

export default Checkboxes