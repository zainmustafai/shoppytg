import React from 'react'

const ShowConditional = ({ isVisble, children }) => {
    return (
        <>
            {isVisble ? <>{children} </> : null}
        </>
    )
}

export default ShowConditional
