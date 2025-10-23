"use client";
import { usePathname } from "next/navigation";
import MainHeader from "./MainHeader";
import Header from "./Header";
export default function HeaderSwitcher() {
  const pathname = usePathname();
  // Home could be just "/en" or "/ar", adjust to your locale setup
  const isHome = pathname.endsWith("/home")
  return isHome ? <Header /> : <MainHeader />;
}