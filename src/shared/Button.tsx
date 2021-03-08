interface IProps { label: string, callback: Function }

const Button = (props: IProps) => {
    const { label, callback } = props

    return(
        <button onClick={() => callback()}>
            {label}
        </button>
    )
} 

export default Button