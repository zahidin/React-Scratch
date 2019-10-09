import React from "react"
import { Route } from "react-router-dom"

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Layout>
            <Route {...rest} render={matchProps => <Component {...matchProps} />} />
        </Layout>
    )
}

export default LayoutRoute
