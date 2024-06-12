import {
  Oswald as FontSans,
  Rowdies as FontBigMono,
  Anton as FontMono,
} from "next/font/google";
// import { Oswald as FontSans, Bebas_Neue as FontMono } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

export const fontBigMono = FontBigMono({
  subsets: ["latin"],
  variable: "--font-big-mono",
  weight: "400",
});
