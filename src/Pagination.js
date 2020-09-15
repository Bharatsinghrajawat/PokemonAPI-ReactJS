import React from 'react'

export default function Pagination({toNextPage,toPreviousPage}) {
    return (
        <div>
            {toPreviousPage && <button onClick={toPreviousPage}>Previous</button>}
            {toNextPage && <button onClick={toNextPage}>Next</button>}
        </div>
    )
}
