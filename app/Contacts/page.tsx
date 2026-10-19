import * as React from 'react';

export default function Contacts() {
  return (
    <div>
      <div className="flex flex-col items-center h-140 justify-center bg-blue-100 font-sans dark:bg-black">
        <div className="flex flex-col items-center justify-center gap-4 w-200 bg-orange-100 rounded-2xl shadow-md p-4">
          <h1 className="text-3xl font-bold m-4">Nous Contacter</h1>
          <p>
            Si vous souhaitez nous contacter pour toute demande d&apos;information, de collaboration ou de projet, veuillez remplir le formulaire ci-dessous. Nous nous engageons à répondre à vos messages dans les plus brefs délais.
          </p>
          <section className="flex flex-col items-center justify-center w-150 bg-white rounded-lg shadow-md p-4 gap-4">
            <form className="flex flex-col items-center justify-center gap-4" action="/Contacts" method="get">
              <input className="border border-blue-500 rounded-lg w-100 h-10" placeholder="Entrez votre Nom de famille SVP" type="text" name="nom" required />
              <input className="border border-blue-500 rounded-lg w-100 h-10" placeholder="Entrez votre adresse Email" type="email" name="email" required />
              <input className="border border-blue-500 rounded-lg w-100 h-10" placeholder="Entrez votre Numéro de téléphone" type="tel" name="telephone" />
              <textarea className="border border-blue-500 rounded-lg w-100 h-30" placeholder="Saisissez votre message" name="message" />
              <button className="bg-indigo-400 rounded-lg w-100 h-10 hover:bg-indigo-700" type="submit">
                Envoyer
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
