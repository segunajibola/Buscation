import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// import Link from 'next/link'
// import { Home, Footer, Navbar } from "../components copy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Link to="/about">
        About
      </Link>
      <h1 className="text-red-500">Hello World</h1>
      {/* <Home /> */}
      {/* <Footer /> */}
    </main>
  );
}
