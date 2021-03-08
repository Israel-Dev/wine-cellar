import TitleStyle from './Title.styled'

interface IProps {
    label: string
}

const Title = (props: IProps) => {
    const { label } = props

    return (
        <TitleStyle className="title-wrapper">
            <h1>{label}</h1>
        </TitleStyle>
    )
}

export default Title