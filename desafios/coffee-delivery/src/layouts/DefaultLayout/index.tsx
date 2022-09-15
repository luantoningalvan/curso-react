import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
