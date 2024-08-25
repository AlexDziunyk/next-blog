"use client";
import LoginModal from "@/components/LoginModal/LoginModal";
import styles from "./page.module.css";
import { AuthProvider } from "@/context/AuthContext";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  return (
    <AuthProvider>
      <main className={styles.main}>
        {/* <LoginModal /> */}
      </main>
    </AuthProvider>
  );
}
