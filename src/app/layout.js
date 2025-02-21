
import "./globals.css";
import Footer from "./components/Footer";

import {IBM_Plex_Sans_Thai } from 'next/font/google'

const font = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})




export const metadata = {
  title: "ME Pool ",
  description: "Medical Equipment Pool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={font.className + ` antialiased pb-[92px]`}
      >
      
        {children}
        <Footer></Footer>

       
      </body>
    </html>
  );
}
