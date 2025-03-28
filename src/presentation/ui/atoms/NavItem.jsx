function NavItem({ text, href }) {
    return (
        <li>
            <a
                href={href}
                className="text-[#266bb4] hover:text-[#1e4d82] transition-colors duration-300"
            >
                {text}
            </a>
        </li>
    );
}

export default NavItem;