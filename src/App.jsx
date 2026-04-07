import { AppProvider } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import Dashboard from "./modules/Dashboard";
import Expenses from "./modules/Expenses";
import Income from "./modules/Income";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Dashboard");

  const renderPage = () => {
    switch (page) {
      case "Expenses": return <Expenses />;
      case "Income": return <Income />;
      default: return <Dashboard />;
    }
  };

  return (
    <AppProvider>
      <div className="flex h-screen">
        <Sidebar setPage={setPage} />
        <div className="flex-1 p-6">{renderPage()}</div>
      </div>
    </AppProvider>
  );
}
