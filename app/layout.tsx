import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { PreferencesProvider } from "@/components/preferences";
import { dictionaries } from "@/content/dictionary";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin", "vietnamese"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const meta = dictionaries.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL("https://hoakg2000.github.io"),
  title: meta.title,
  description: meta.description,
  authors: [{ name: "Pham Duong Hoa" }],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://hoakg2000.github.io",
    siteName: "Phạm Dương Hòa",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

// Runs before first paint: applies the stored theme and flags a pending language switch.
const bootScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}if(t==='dark')d.classList.add('dark');var l=localStorage.getItem('locale');if(!l){l=(navigator.language||'').toLowerCase().indexOf('vi')===0?'vi':'en'}if(l==='vi'){d.lang='vi';d.classList.add('locale-pending')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="font-sans">
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
