import * as React from 'react';
import Form from 'next/form';

export default function Contacts () {
  return (
    <div>
      <div className="flex flex-col items-center h-140 justify-center bg-blue-100 font-sans dark:bg-black">
        <div className="flex flex-col items-center h-140 justify-center gap-4 h-120 w-200 bg-orange-100 rounded-2xl shadow-md p-4">
          <h1 className="text-3xl font-bold m-4">Nous Contacter</h1>
          <p>
            Si vous souhaitez nous contacter pour toute demande d'information, de collaboration ou de projet, veuillez remplir le formulaire ci-dessous. Nous nous engageons à répondre à vos messages dans les plus brefs délais.
          </p>
          <section className="flex flex-col items-center justify-center h-110 w-150 bg-white rounded-lg shadow-md p-4 gap-4">
            <form action="/contacts" method="post">
              <input className="border border-blue-500 rounded-lg w-100 h-10" placeholder="Entrez votre Nom de famille SVP" type="text" />
            </form>
            <form action="/contacts" method="post">
              <input className="border border-blue-500 rounded-lg w-100 h-10" placeholder="Entrez votre adresse Email" type="email" />
            </form>
            <form action="/contacts" method="post">
              <input className="border border-blue-500 rounded-lg w-100 h-10" placeholder="Entrez votre Numéro de téléphone" type="text" />
            </form>
            <form action="/contacts" method="post">
              <textarea className="border border-blue-500 rounded-lg w-100 h-30" placeholder="Saisissez votre message" />
            </form>
          <button className='bg-indigo-400 rounded-lg w-100 h-10 hover:bg-indigo-700' type="submit" >Envoyer</button>
        </section>
      </div>
    </div>
    </div>
  );
}

