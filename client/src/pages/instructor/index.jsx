import { BarChart, Book } from "lucide-react";
import AdminCourses from "@/components/instructor-view/courses";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AdminDashboard from "@/components/instructor-view/dashboard";

function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <AdminDashboard />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <AdminCourses />,
    },
  ];

  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Admin View</h2>
          <nav>
            {menuItems.map((menuItem) => (
              <Button
                className={`w-full justify-start mb-2 ${
                  activeTab === menuItem.value
                }`}
                key={menuItem.value}
                onClick={() => setActiveTab(menuItem.value)} // Correct onClick handling
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 capitalize">
            {menuItems.find((item) => item.value === activeTab)?.label}
          </h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItem) => (
              <TabsContent value={menuItem.value} key={menuItem.value}>
                {menuItem.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboardPage;
