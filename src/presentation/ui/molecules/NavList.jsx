import NavItem from "../atoms/NavItem";

function NavList() {
    return (
        <ul className="flex space-x-6">
            <NavItem text="Home" href="#" />
            <NavItem text="Dispositivos" href="#" />
            <NavItem text="Datos en tiempo real" href="#" />
            <NavItem text="Contacto" href="#" />
        </ul>
    );
}

export default NavList;