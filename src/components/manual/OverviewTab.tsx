import { ManualCard } from "@/components/ManualCard";
import { BookOpen, Smartphone, Settings, HelpCircle } from "lucide-react";

export const OverviewTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ManualCard
          title="Quick Start"
          description="Get up and running with basic setup instructions"
          icon={BookOpen}
        />
        <ManualCard
          title="Features"
          description="Explore all the amazing features of your device"
          icon={Smartphone}
        />
        <ManualCard
          title="Settings"
          description="Customize your device to match your preferences"
          icon={Settings}
        />
        <ManualCard
          title="Support"
          description="Troubleshooting guides and helpful tips"
          icon={HelpCircle}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Product showcase"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-600">
            Welcome to your new device! This manual will guide you through everything you need to know
            to make the most of your purchase. Start with our Quick Start guide above, or use the
            sidebar navigation to jump to specific topics.
          </p>
        </div>
      </div>
    </>
  );
};