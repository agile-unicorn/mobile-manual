import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ManualSidebar } from "@/components/ManualSidebar";
import { SearchBar } from "@/components/SearchBar";
import { ManualCard } from "@/components/ManualCard";
import { DiceRoller } from "@/components/DiceRoller";
import { BookOpen, Smartphone, Settings, HelpCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-accent">
        <ManualSidebar />
        <main className="flex-1 px-4 py-8 lg:px-8">
          <SidebarTrigger className="mb-6" />
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Product Manual</h1>
              <p className="text-lg text-gray-600 mb-8">Everything you need to know about your device</p>
              <SearchBar />
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
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
                  <DiceRoller />
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
              </TabsContent>

              <TabsContent value="getting-started">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h2 className="text-2xl font-semibold mb-4">Getting Started Guide</h2>
                  <p className="text-gray-600 mb-4">
                    Follow these steps to get started with your device:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Unbox your device and check all components</li>
                    <li>Charge the device fully before first use</li>
                    <li>Power on and follow the initial setup wizard</li>
                    <li>Connect to your Wi-Fi network</li>
                    <li>Set up your user account</li>
                  </ol>
                </div>
              </TabsContent>

              <TabsContent value="features">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h2 className="text-2xl font-semibold mb-4">Features Overview</h2>
                  <p className="text-gray-600 mb-4">
                    Discover all the powerful features of your device:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>High-performance processor</li>
                    <li>Advanced camera system</li>
                    <li>Long-lasting battery life</li>
                    <li>Secure biometric authentication</li>
                    <li>Seamless connectivity options</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="troubleshooting">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h2 className="text-2xl font-semibold mb-4">Troubleshooting Guide</h2>
                  <p className="text-gray-600 mb-4">
                    Common issues and their solutions:
                  </p>
                  <dl className="space-y-4">
                    <dt className="font-semibold">Device won't turn on</dt>
                    <dd className="text-gray-600 ml-4">Try charging the device for at least 30 minutes, then hold the power button for 10 seconds.</dd>
                    
                    <dt className="font-semibold">Slow performance</dt>
                    <dd className="text-gray-600 ml-4">Clear cache and remove unused applications. Ensure your device has the latest updates installed.</dd>
                    
                    <dt className="font-semibold">Battery draining quickly</dt>
                    <dd className="text-gray-600 ml-4">Check for apps running in the background and adjust screen brightness. Enable battery saver mode when needed.</dd>
                  </dl>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;