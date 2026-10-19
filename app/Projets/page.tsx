import * as React from 'react';
import Image from "next/image";


export default function Projets () {
  return (
    <div>
      <div className="flex flex-row items-center justify-center bg-blue-100 font-sans gap-8 dark:bg-black">

        <section className="flex flex-col items-center justify-center gap-4 h-120 w-200 bg-gray-50 rounded-lg shadow-md p-4 m-2">
          <h1 className="text-xl font-bold m-4">Développement Web Full Stack</h1>
          <p>
            Le développement en cours de réalisation d&apos;un site web pour une entreprise de Sécurité Electronique.
            Le développement de ce site web permettra de présenter les produits et services de l&apos;entreprise de matière de sécurité.
            Ainsi, les clients pourront découvrir les différentes solutions de sécurité proposées par l&apos;entreprise et obtenir des informations détaillées sur chaque produit.
          </p>
          <Image src="/Images/dev_web.jpeg" alt="Développement Web Full Stack" width={300} height={200} />
        </section>

        <section className="flex flex-col items-center justify-center gap-4 h-120 w-200 bg-white rounded-lg shadow-md p-4 m-2">
          <h1 className="text-xl font-bold m-4">Réseaux Informatiques</h1>
          <p>
            Câblage réseau, configuration de routeurs en cours de réalisation chez un particulier.
            Ainsi, le particulier pourra bénéficier d&apos;une connectivité réseau fiable et performante,
            ce qui lui permettra de profiter pleinement de ses appareils connectés et d&apos;accéder à Internet de manière fluide.
          </p>
          <Image src="/Images/cable_réseau.jpg" alt="Réseaux Informatiques" width={300} height={200} />
        </section>

        <section className="flex flex-col items-center justify-center gap-4 h-120 w-200 bg-pink-100 rounded-lg shadow-md p-4 m-2">
          <h1 className="text-xl font-bold m-4">Sécurité Electronique</h1>
          <p>
            La sécurité électronique (ou sûreté électronique) regroupe l&apos;ensemble des solutions technologiques destinées à protéger les biens,
            les locaux et les personnes contre les intrusions, les vols,
            les actes de malveillance ou les incendies
          </p>
          <Image src="/Images/cable_securtro.jpg" alt="Système de vidéosurveillance" width={300} height={200} />
        </section>
      </div>
    </div>
  );
}
