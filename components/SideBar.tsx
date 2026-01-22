import { BarChart3, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";


const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings }
]

export default function SideBar({ currentPath }: { currentPath: string; }) {
    return (
        <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10">
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-10 h-10" />
                    <span className="text-lg font-semibold">Inventory App</span>
                </div>
            </div>

            <nav className="space-y-1">
                <ul>
                    {
                        navigation.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = currentPath == item.href
                            return (
                                <div key={index}>
                                    <Link href={item.href}>
                                        <li className={`flex items-center  mb-5 hover:bg-gray-600 transition-colors p-2 rounded-lg ${isActive && "bg-gray-600"}`}>
                                            <Icon className="h-4 w-4" /> <span className="ml-4 text-sm"> {item.name} </span>
                                        </li>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}