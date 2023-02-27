import PropTypes from 'prop-types'

export function User(props) {
    let renderTemplate = () => {
        const {name, error, isFetching, handleLogin} = props

        if (error) {
            return <p>Во время запроса произошла ошибка, обновите страницу</p>
        }

        if (isFetching) {
            return <p>Загружаю...</p>
        }

        if (name) {
            return <p>Привет, {name}!</p>
        } else {
            return (
                <button className="btn enter" onClick={handleLogin} style={{margin:'5px'}}>
                    Войти
                </button>
            )
        }
    }

    return (
        <div>
            <div className="ib user">{renderTemplate()}</div>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,

}

