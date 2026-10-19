import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between bg-base-10">
        <div className="navbar-start">
            <Link className="btn btn-ghost normal-case text-xl" href="/Accueil">
                Mon Portfolio
            </Link>
        </div>
        <div>

            <ul className="menu menu-horizontal px-1 flex gap-10">
                <Link href='/Accueil'>Accueil</Link>
                <Link href='/Propos'>A Propos</Link>
                <Link href='/Projets'>Nos Projets</Link>
                <Link href='/Contacts'>Nous Contacter</Link>
            </ul>
        </div>
        <div className="navbar-end">
            <Link className="btn" href="/GetStarted">
                Get started
            </Link>
        </div>
    </nav>
  );
}

export default Navbar;