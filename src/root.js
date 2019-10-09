import React, { useEffect } from 'react'
import { Switch } from "react-router-dom"

import useRouter from "use-react-router"
import routes from './routes'
import LayoutRoute from './layouts/index.layout'

const Root = () => {
    const {
        location: { pathname }
    } = useRouter()

    useEffect(() => {
        console.log("called")
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Switch>
            {routes.map((route, index) => (
                <LayoutRoute key={index} layout={route.layout} exact={route.exact} component={route.component} path={route.path} />
            ))}
        </Switch>
    )
}

export default Root