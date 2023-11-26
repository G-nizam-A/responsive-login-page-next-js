"use client";
import DashboardNavbar from "./dashboard-navbar";
import Sidenav from "./sidenav";
import routes from "./routes";
import Home from "./home";
export function Dashboard() {

  return (
    <div className="h-[944px] bg-[#F5F5F5]">
      <Sidenav routes={routes} />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Home routes={routes}/>
      </div>
    </div>
  );
}

export default Dashboard;
