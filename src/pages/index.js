import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainPage from "@/components/MainPage";
import Kanban from "@/components/sub2/kanban";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
     <Kanban />
    </>
  );
}
