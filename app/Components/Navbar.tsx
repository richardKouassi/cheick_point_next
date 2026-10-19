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
          <li>
            <Link href="/Accueil">Accueil</Link>
          </li>
          <li>
            <Link href="/Propos">A Propos</Link>
          </li>
          <li>
            <Link href="/Projets">Nos Projets</Link>
          </li>
          <li>
            <Link href="/Contacts">Nous Contacter</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" href="/Contacts">
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
