import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "./components/sidebar";
import AdminHeader from "./components/admin_header";
import { AnimatePresence, motion } from "framer-motion";

function AdminLayout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[linear-gradient(60deg,rgba(179,0,255,1)_0%,rgba(69,0,83,1)_86%)]">
      
      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Left Side (Vertical) */}
        <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        
        {/* Content Area - Right Side (Yahan content change hoga) */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Outlet hi woh jagah hai jahan Dashboard ya baqi admin pages render honge */}
          <AdminHeader />
         <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;