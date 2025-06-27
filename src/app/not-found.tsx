import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-8 transition-transform duration-700 hover:scale-110 mb-8">
            <Image
              src="/not-found.svg"
              alt="404"
              width={100}
              height={100}
              className="w-45 h-45"
            />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              404
            </h1>
          </div>
          <hr className="border-gray-200 w-1/2 mx-auto" />
          <p className="text-gray-500">
            Looks like you&apos;ve ventured into the unknown digital realm.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Return to website
        </Link>
      </div>
    </div>
  );
}
