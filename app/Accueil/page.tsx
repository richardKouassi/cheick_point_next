import Link from 'next/link';
import * as React from 'react';



export default function Accueil () {

  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 font-sans dark:bg-black">
      <section className="flex flex-col items-center justify-center gap-4 h-120 w-250 bg-orange-100 rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold m-4">BIENVENUE SUR MON PORTFOLIO</h1>
        <p>
          Ici, vous trouverez des informations sur mes compétences, mes projets et mes expériences professionnelles. 
          Explorez les différentes sections pour en savoir plus sur mon parcours et mes réalisations.
          Ce portfolio est conçu pour vous donner un aperçu complet de mes compétences et de mon expertise dans le domaine du numérique.
          N&apos;hésitez pas à me contacter si vous avez des questions ou si vous souhaitez collaborer sur un projet. 
          Je suis toujours ouvert à de nouvelles opportunités et à des collaborations passionnantes. Merci de votre visite et bonne exploration de mon portfolio !
        </p>
        <Link href="/Propos" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          En savoir plus sur moi
        </Link>
      </section>
    </div>
  );
}


