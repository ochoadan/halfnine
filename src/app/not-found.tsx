import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-14 md:py-28">
      <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="mt-4">
        <button
          type="button"
          className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Go to home page
        </button>
      </Link>
    </div>
  );
}
