import { Outlet } from "react-router-dom";
import TopNavigation from "./components/shared/header/TopNavigation";


function App() {
  return (
    <div>
      <TopNavigation />
      <Outlet />
    </div>
  );
}

export default App;
