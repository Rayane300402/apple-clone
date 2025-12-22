import { NAV_LINKS } from "../constants"

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple logo"/>
            <ul>
                {NAV_LINKS.map(({label, href}) => (
                    <li key={label}>
                        <a href={href}>{label}</a>
                    </li>
                ))}
            </ul>
            <div className="gap-3 flex-center">
                <button>
                    <img src="/search.svg" alt="Search"/>
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart"/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
