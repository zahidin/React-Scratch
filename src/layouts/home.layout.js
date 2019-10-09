import React from 'react'

const HomeLayout = ({ children }) => {
    return (
        <div className="is-flex justify-content-center align-items-center height-100">
            {children}
        </div>
    )
}

export default HomeLayout