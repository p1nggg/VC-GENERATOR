import Landing from "../pages/Landing"
import Main from "../pages/Main"
import Info from "../pages/Info"

export const privateRoutes = [
    {path: '/vcgen', component: <Main/>, exact: true},
    {path: '/land', component: <Landing/>, exact: true},
    {path: '/info', component: <Info/>}
]