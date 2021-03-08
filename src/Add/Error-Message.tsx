import ErrorStyles from './Error-Message.styled'

interface IProps { text: string }

const Error = (props: IProps) => {
    const { text } = props

    return (
        <ErrorStyles className="error-wrapper">
            <span>{text}</span>
        </ErrorStyles>
    )
}

export default Error