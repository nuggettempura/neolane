import { Navbar } from '../src/components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.min.js"
import imagePath from './assets/neolane_logo_250x31.jpg'


function App() {
    let items = ["Home", "Product", "Service"]
    return (
        <Navbar imageSrcPath={imagePath} navItems={items}></Navbar>
    )
}

export default App