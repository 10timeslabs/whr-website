import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scroll from "@/components/scrollAnimation/Scroll";

export default function Home() {
  return (
    <div className={styles.page}>
      <Scroll/>
    </div>
  );
}
