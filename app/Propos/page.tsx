import * as React from 'react';
import Image from 'next/image';


export default function Propos () {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <section className="flex flex-row items-center justify-center gap-4 h-140 w-full bg-blue-100 rounded-lg shadow-md p-4">

        <section className="flex flex-col items-center justify-center gap-4 h-120 w-250 bg-blue-300 rounded-lg shadow-md p-4">
          <h1 className="text-3xl font-bold m-2">À propos de moi</h1>
          <p>
            Je suis un ingénieur ivoirien en Télécommunication exerçant dans le domaine du numérique. Notre expertise couvre un champ d'action assez large tel que le Développement Web Full Stack,
            la mise en place complète de Réseaux Informatiques  (LAN et MAN) et la Sécurité Electronique avec des systèmes tels que
            la vidéosurveillance, le contrôle d'accès, la sécurité incendie et le système d'anti-intrusion. 
          </p>
        </section>

        <section className="flex flex-col items-center justify-center gap-4 h-120 w-250 bg-orange-100 rounded-lg shadow-md p-4">
                  <h1 className="text-1xl font-bold m-2">Expérience en Développemnt Web</h1>
                  <p>
                    Création et mise en ligne d'un site web pour une entreprise de vente de produits cosmétiques. 
                    Le développement de ce site web a permis de présenter les produits de l'entreprise de manière attractive et interactive.
                    Ce qui a contribué à augmenter la visibilité de la startup et à attirer de nouveaux clients.
                  </p>
                  <Image src="/Images/dev_web.jpeg" alt="Développement Web Full Stack" width={300} height={200} />
        </section>
        
        <section className="flex flex-col items-center justify-center gap-4 h-120 w-250 bg-white rounded-lg shadow-md p-4">
                  <h1 className="text-1xl font-bold m-2">Expérience en Réseaux Informatiques</h1>
                  <p>
                    En réseau informatique, j'ai réalisé plusieurs projets de conception et de mise en œuvre de réseaux locaux et étendus.
                    Ces projets ont permis de renforcer la connectivité et la communication au sein des entrpises.  
                    Ces expériences m'ont permis de développer des compétences solides en matière de conception, 
                    de configuration et de gestion de réseaux informatiques.
                  </p>
                  <Image src="/Images/réseau_info.jpg" alt="Réseaux Informatiques" width={300} height={200} />
        </section>
        
        <section className="flex flex-col items-center justify-center gap-4 h-120 w-250 bg-green-100 rounded-lg shadow-md p-4">
                  <h1 className="text-1xl font-bold m-2">Expérience en Sécurité Electronique</h1>
                  <p>
                    En matière de sécurité électronique, j'ai participé à la conception et à l'installation de systèmes de vidéosurveillance, 
                    de contrôle d'accès et de sécurité incendie  pour des entreprises et des particuliers. En mettant en place ces systèmes, 
                    j'ai contribué à renforcer la sécurité des locaux et à protéger les biens et les personnes.
                  </p>
                  <Image src="/Images/secur_electro.jfif" alt="Système de vidéosurveillance" width={300} height={200} />
        </section>
      </section>
    </div>
  );
}
