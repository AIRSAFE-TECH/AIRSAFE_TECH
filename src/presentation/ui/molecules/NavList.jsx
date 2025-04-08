import NavItem from "../atoms/NavItem";

function NavList() {
    return (
        <ul className="flex space-x-6">
            <NavItem text="Home" href="/home" icon="/media/icons/home.png" />
            <NavItem text="Usuarios" href="/usersList" icon="/media/icons/user.png" />
            <NavItem text="Datos en tiempo real" href="/realTimeData" icon="/media/icons/real-time.png" />
            <NavItem text="Agregar" href="/register" icon="/media/icons/add-user.png" />
            <NavItem text="Contacto" href="/emergency" icon="/media/icons/contacto.png" />
        </ul>
    );
}

export default NavList;
