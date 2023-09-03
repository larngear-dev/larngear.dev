import localFont from "next/font/local";

export const LookLen = localFont({
    src: [
        {
            path: "../../public/fonts/LookLen/LookLen.ttf",
            weight: "400",
        },
        {
            path: "../../public/fonts/LookLen/LookLen-Bold.ttf",
            weight: "700",
        },
    ],
});
