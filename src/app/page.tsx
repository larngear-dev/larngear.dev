import { LookLen } from "@/utils/fonts";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-center items-center bg-[#262626] gap-16 text-white md:p-24">
            <div className="">
                <Image
                    src="/assets/images/gear.png"
                    width={200}
                    height={300}
                    alt="LarngearDev"
                />
            </div>

            <div
                className={`flex flex-col items-center text-center text-6xl md:text-9xl gap-6 font-bold tracking-wide ${LookLen.className}`}
            >
                <h1 className="">ลานเกียเดฟ</h1>
                <p className="text-3xl md:text-4xl">
                    ลานเกียร์ก็สะดุด <br className="md:hidden" />
                    ชอบเขียนโค้ดสุด ๆ ก็เราไง
                </p>
            </div>
        </main>
    );
}
