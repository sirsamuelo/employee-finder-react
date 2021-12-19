import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <>
            <img src={spinner} style={spinnerStyle} alt='Spinner'/>
        </>
    )
}

const spinnerStyle={
    display: 'block',
    margin:  'auto',
    width: '200px'
}

export default Spinner
