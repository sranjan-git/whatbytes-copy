import Link from "next/link";

export const ComingSoon = () => {
  return (
    <main className="flex justify-center h-full w-full pt-48 px-12">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Page under development.
        </h1>
        {/* <p className="text-lg text-muted-foreground">
          We&apos;re working hard to bring you something amazing.{" "}
          <Link href="/" className="text-slate-600 underline">
            Stay tuned!
          </Link>
        </p> */}
      </div>
    </main>
  );
};
