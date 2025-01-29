import './global.css';
import { useRoutes, HashRouter } from 'react-router-dom' 
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Layout from './layout'
import About from './pages/About';
import NavBar from './features/NavBar';


const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home/> },
        { path: '/about', element: <About/> },
        { path: '*', element: <NotFound/> }
    ])
    return routes;
}
function App () {
    return (
        <HashRouter>
            {/* <NavBar /> */}
            <Layout> 
                <AppRoutes />
            </Layout>
        </HashRouter>
    )
}

export default App
