import { useState } from 'react'

interface NavBarProps {
    imageSrcPath: string;
    navItems: string[];
}

export function Navbar({ imageSrcPath, navItems }: NavBarProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    return (
        <>
            <nav className="navbar navbar-light navbar-expand-md navbar-light bg-white shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={imageSrcPath} className="d-inline-block align-top" alt="" width="100%" height="auto" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse align-items-end flex-column flex-md-row" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-md-1">
                            {navItems.map((items, index) =>
                            (
                                <li key={items} className="nav-item" onClick={() => setSelectedIndex(index)}>
                                    <a className={selectedIndex == index ? "nav-link active fw-bold" : "nav-link"} href="#">{items}</a>
                                </li>
                            ))}
                        </ul>
                        <form className="d-flex me-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}