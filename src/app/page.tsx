import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-[#262626] gap-16 text-white p-24">
      <div className="">
        <Image
          src="/assets/images/gear.png"
          width={200}
          height={300}
          alt="LarngearDev"
        />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="">LarngearDev</h1>
        <p className="text-sm">coming soon...</p>
      </div>
    </main>
  );
}
