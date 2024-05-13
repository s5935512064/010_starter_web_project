import type { Metadata } from "next";
import { Viewport } from "next";
import { jost } from "@utils/font";
import Transition from "@/components/Transition";

import "../globals.css";
import "../cookieconsent.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_API_URL)),
  title: "The Residences at Sindhorn Kempinski Hotel",
  description: "",
  keywords: ["Sindhorn Kempinski Residences"],
  authors: [{ name: "Siam Sindhorn Co.,Ltd." }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "The Residences at Sindhorn Kempinski Hotel",
    description:
      "The Residences at Sindhorn Kempinski Hotel redefines luxury living with unparalleled elegance and sophistication.",
    url: "https://theresidencesatsindhornkempinski.com",
    // images: "/DSCF9186.png",
    siteName: "The Residences at Sindhorn Kempinski Hotel",
    locale: "th_TH",
    type: "website",
  },
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale} className={`${jost.variable}`}>
      <Transition>{children}</Transition>
    </html>
  );
}
