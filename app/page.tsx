import Link from "next/link";

export default function Home() {
  const content = [
    {
      title: "GitHub Repository",
      description: "このプロジェクトのソースコード",
      href: "https://github.com/nekodayo2222/nextjs-map-sample",
    },
    {
      title: "GitHub Profile",
      description: "GitHubのプロフィールにアクセス",
      href: "https://github.com/nekodayo2222",
    },
    {
      title: "Next.js Docs",
      description: "Next.js のドキュメントを読む",
      href: "https://nextjs.org/docs",
    },
    {
      title: "Tailwind CSS Docs",
      description: "Tailwind CSS のドキュメントを読む",
      href: "https://tailwindcss.com/docs",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left">
        {content.map((data) => (
          <>
            <Link
              href={data.href}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {data.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {data.description}
              </p>
            </Link>
          </>
        ))}
      </div>
    </main>
  );
}
