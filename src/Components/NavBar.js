import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>Productos</li>
                <li>Galería</li>
                <li>Quiénes somos</li>
                <li>Contacto</li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar