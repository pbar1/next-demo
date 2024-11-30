import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start">
        <Image
          className="mx-auto rounded-md"
          src="/profpic.jpg"
          alt="Profile picture"
          width={200}
          height={200}
          priority
        />
        <div className="mx-auto flex flex-col items-center justify-items-center gap-2">
          <p className="bold text-4xl">Pierce Bartine</p>
          <p className="text-lg text-gray-600">Software Engineer</p>
        </div>
        <div className="mx-auto flex flex-col items-center justify-items-center gap-2">
          <p className="max-w-prose text-center text-gray-700">
            I&apos;m a software engineer with a passion for building intuitive
            user experiences and scalable web applications. I enjoy solving
            complex problems and learning new technologies.
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        © {new Date().getFullYear()} Pierce Bartine
      </footer>
    </div>
  );
}
