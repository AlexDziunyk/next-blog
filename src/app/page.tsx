import Blogs from "@/components/Blogs/Blogs";
import { AuthProvider } from "@/context/AuthContext";

export default function Home() {
  return (
    <AuthProvider>
      <main>
        <Blogs />
      </main>
    </AuthProvider>
  );
}
