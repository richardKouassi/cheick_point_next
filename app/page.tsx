import Image from "next/image";
import Navbar from "./Components/Navbar";
import Accueil from "./Accueil/page";
import Propos from "./Propos/page";
import Projets from "./Projets/page";
import Contacts from "./Contacts/page";
import { Footer } from "./Footer/page";


export default function Home() {
  return (
    <div> 
          <Accueil />
          <Propos />
          <Projets />
          <Contacts />
    </div>
  );
}
