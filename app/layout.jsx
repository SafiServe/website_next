"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar/nav-bar";
import Footer from "./components/footer/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-J5PD744WV9');
              `,
            }}
          />

          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Safiserve: Connecting service providers for laundry, cleaning, nails, makeup, salon, fumigation, and more to customers through a convenient WhatsApp bot. Find reliable service professionals effortlessly."
          />
          <meta
            name="keywords"
            content="Safiserve, Ugandan, laundry, cleaning, nails, makeup, salon, fumigation, WhatsApp bot"
          />
          <link rel="icon" type="image/png" href="%PUBLIC_URL%/logo.png" />
        </Head>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        {/* <!-- tidio script --> */}
        <script
            src="//code.tidio.co/wvbamz3metmq0ilfymyqoz5zsrvx9lpv.js"
            async
          ></script>
      </body>
    </html>
  );
}
