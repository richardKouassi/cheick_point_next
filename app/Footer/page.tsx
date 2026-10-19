import * as React from 'react';

export function Footer () {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-10 bg-zinc-100 font-sans dark:bg-black">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
