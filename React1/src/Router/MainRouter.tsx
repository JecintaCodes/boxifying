import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Components/Block/Layout'
import Pricing from '../Components/Pages/Pricing'
import Features from "../Components/Pages/Features"
import About from '../Components/Pages/About'
import Learn from "../Components/Pages/Learn"
import Support from "../Components/Pages/Support"

export const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Features/>,
                path: 'features'
            },
            {
                index: true,
                element: <Learn/>,
                path: 'learn'

            },
            {
                index: true,
                element: <About/>,
                path: 'about'
            },
            {
                index: true,
                element: <Pricing/>,
                path: 'pricing'
            },
            {
                index: true,
                element: <Support/>,
                path: "support"
            },
        ]
        },

        ])