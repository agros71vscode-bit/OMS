import { Outlet } from "react-router-dom";

import Header from "../components/navigation/Header";
import BottomNav from "../components/navigation/BottomNav";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Header />

      <main className="pb-24">
        <Outlet />
      </main>

      <BottomNav />

    </div>
  );
}