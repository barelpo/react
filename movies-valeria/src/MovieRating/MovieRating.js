const MovieRating = ({rating}) => {

    // if (rating === 9.6) {
    //     return null
    // }

    const textColor = rating <= 5 ? "red" : "black"
    console.log('Rendering MovieRating', rating, textColor)

    // let elem = null
    // if (rating === 10) {
    //     elem = <p>WOW</p>
    // } else if (rating <= 5) {
    //     elem = <button>BOO</button>
    // }

    return(
        <>
            <p className="m-0" style={{color: textColor}}>Rating: {rating}</p>
            {/* {elem} */}
            {rating === 10 &&
                <p className="m-0">WOW</p>
            }
            {/* { rating === 10
                ?
                <p>WOW</p>
                :
                rating <= 5
                    ?
                    <button>BOO</button>
                    :
                    null
            } */}
        </>
    )
}

export default MovieRating;