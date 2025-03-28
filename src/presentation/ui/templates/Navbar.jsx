import NavList from "../molecules/NavList";

function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-[#266bb4]">MiApp</h1>
                <NavList />
            </div>
        </nav>
    );
}

export default Navbar;