import DashBoardClient from "@/components/DashBoardClient";
import SideBar from "@/components/SideBar";

export default function Dashboard() {
    return (
        <div className="min-h-screen">
            <main className="bg-gray-200">
                <SideBar currentPath="/dashboard" />
                <DashBoardClient />
            </main>
        </div>
    )
}