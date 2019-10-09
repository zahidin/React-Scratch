import HomeLayout from '@/layouts/home.layout'
import Home from '@/modules/home'

const data = [
    {
        exact: true,
        component: Home,
        path: "/",
        layout: HomeLayout
    },
]

export default data