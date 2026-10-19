export async function Footer() {
  'use cache';
  return (
    <footer className="flex flex-col items-center justify-center h-10 mt-auto bg-zinc-100 font-sans dark:bg-black">
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
      </p>
    </footer>
  );
}
