import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// import Link from 'next/link'
import { Hero } from "../sections";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Link to="/about">
        About
      </Link> */}
      <Hero />
    </>
  );
}
