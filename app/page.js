import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// import Link from 'next/link'
import { Home, Footer, Navbar } from "../section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Link to="/about">
        About
      </Link> */}
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}
