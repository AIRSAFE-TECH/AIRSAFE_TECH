import NavList from "../molecules/NavList";

function Navbar() {
    return (
        <nav className="bg-custom-blue shadow-md py-10 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-white">Airsafe Tech</h1>
                <NavList />
            </div>
        </nav>
    );
}

export default Navbar;