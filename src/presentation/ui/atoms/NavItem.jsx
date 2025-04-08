function NavItem({ text, href, icon }) {
    return (
        <li>
            <a 
                href={href} 
                className="flex items-center text-custom-white hover:text-[#1e4d82] transition-colors duration-300"
            >
                <img src={icon} alt={text} className="w-6 h-6 mr-2" />
                {text}
            </a>
        </li>
    );
}

export default NavItem;