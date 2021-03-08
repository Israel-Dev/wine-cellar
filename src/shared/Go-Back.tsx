import { Link } from 'react-router-dom'

interface IProps {
    url: string
}

const GoBack = (props: IProps) => {
    const { url } = props
    return (
        <Link to={url}>
            <button>Go back</button>
        </Link>
    )
}

export default GoBack