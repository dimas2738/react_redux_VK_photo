import PropTypes from 'prop-types'

export function Page(props) {
    let {page, getPhotos} = props
    let { photos, isFetching, error, year} = page

    function onBtnClick(e) {
        let year = e.target.outerText
        getPhotos(year)
    }

    let renderTemplate = () => {
        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка {error}</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else {

            return photos.map((entry, index) => ( // [1]
                <div key={index} className="photo" style={{ margin: "10px"}}>
                    <p style={{ justifyContent: "space-between"}}>
                        <img src={entry.sizes[0].url} alt="" />
                    </p>
                    <p>{entry.likes.count} ❤</p>
                </div>
            ))
        }
    }

    return (
        <div className="ib page">
            <p>
                <button className="btn" onClick={onBtnClick}>
                    2018
                </button>{' '}
                <button className="btn" onClick={onBtnClick}>
                    2017
                </button>{' '}
                <button className="btn" onClick={onBtnClick}>
                    2016
                </button>{' '}
                <button className="btn" onClick={onBtnClick}>
                    2015
                </button>{' '}
                <button className="btn" onClick={onBtnClick}>
                    2014
                </button>
            </p>
            <h3>
                {year} год [{photos.length}]
            </h3>
            <div style={{display: "flex"}}>
                {renderTemplate()}
            </div>

        </div>
    )
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    // setYear: PropTypes.func.isRequired,
    getPhotos: PropTypes.func.isRequired

}


