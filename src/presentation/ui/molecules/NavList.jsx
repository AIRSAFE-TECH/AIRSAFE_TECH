import NavItem from "../atoms/NavItem";

function NavList() {
    return (
        <ul className="flex space-x-6">
            <NavItem text="Home" href="/home" />
            <NavItem text="Usuarios" href="/usersList"/>
            <NavItem text="Datos en tiempo real" href="/realTimeData"/>
            <NavItem text="Agregar" href="/register"/>
            <NavItem text="Contacto" href="/emergency" />
        </ul>
    );
}

export default NavList;