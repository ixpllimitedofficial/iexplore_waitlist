import { Inter, Manrope, Anton } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});
