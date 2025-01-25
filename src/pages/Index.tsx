import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dice1 } from "lucide-react";
import { ManualCard } from "@/components/ManualCard";
import { SearchBar } from "@/components/SearchBar";
import { DiceRollerProvider, useRollDiceModal } from "@/components/DiceRoller";
import { BookOpen, Smartphone, Settings, HelpCircle } from "lucide-react";

const Index = () => {
  return (
    <DiceRollerProvider>
      <IndexContent />
    </DiceRollerProvider>
  );
};

// Separate component to use the context after it's provided
const IndexContent = () => {
  const { openModal } = useRollDiceModal();

  return (
    <div className="min-h-screen bg-accent">
      <div className="flex justify-end items-center p-4">
        <Button onClick={openModal} variant="outline" className="gap-2">
          <Dice1 className="h-4 w-4" />
          Roll Dice
        </Button>
      </div>
      
      <main className="px-4 py-8 lg:px-8">
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
                  <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Try Your Luck!</h2>
                    <p className="text-gray-600 mb-6 text-center">
                      Roll up to 5 dice at once and see what you get!
                    </p>
                    <DiceRoller />
                  </div>
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
                <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Getting Started Guide</h2>
                  
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold mb-3">1. Initial Setup</h3>
                      <p className="text-gray-600 mb-4">
                        Before you begin using your device, ensure you have completed these essential steps:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>Remove all packaging materials and protective films</li>
                        <li>Check that all components are present</li>
                        <li>Charge the device fully (approximately 2-3 hours)</li>
                        <li>Power on using the button located on the top right</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold mb-3">2. Network Connection</h3>
                      <p className="text-gray-600 mb-4">
                        To connect your device to the internet:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                        <li>Open Settings from the main menu</li>
                        <li>Select "Network & Internet"</li>
                        <li>Choose your Wi-Fi network from the list</li>
                        <li>Enter the network password when prompted</li>
                      </ol>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold mb-3">3. Account Setup</h3>
                      <p className="text-gray-600 mb-4">
                        Create your account to access all features:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>Launch the Account Setup wizard</li>
                        <li>Enter your email address</li>
                        <li>Choose a secure password</li>
                        <li>Complete your profile information</li>
                      </ul>
                    </section>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features">
                <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Features Overview</h2>
                  
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold mb-3">Core Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">Smart Processing</h4>
                          <p className="text-gray-600">Advanced AI-powered processing for optimal performance</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">Security</h4>
                          <p className="text-gray-600">Built-in encryption and biometric authentication</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">Connectivity</h4>
                          <p className="text-gray-600">Supports Wi-Fi 6 and Bluetooth 5.0</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">Battery Life</h4>
                          <p className="text-gray-600">Up to 12 hours of continuous use</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold mb-3">Advanced Features</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Smartphone className="w-5 h-5 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-semibold">Smart Assistant</h4>
                            <p className="text-gray-600">Voice-controlled assistant for hands-free operation</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Settings className="w-5 h-5 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-semibold">Customization</h4>
                            <p className="text-gray-600">Personalize settings and appearance to your preferences</p>
                          </div>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="troubleshooting">
                <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Troubleshooting Guide</h2>
                  
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
                      
                      <div className="space-y-6">
                        <div className="border-b pb-4">
                          <h4 className="font-semibold mb-2">Device Won't Turn On</h4>
                          <ol className="list-decimal list-inside space-y-2 text-gray-600">
                            <li>Ensure the battery is charged for at least 30 minutes</li>
                            <li>Press and hold the power button for 10 seconds</li>
                            <li>Check for any visible damage to the charging port</li>
                            <li>Try a different charging cable and power adapter</li>
                          </ol>
                        </div>

                        <div className="border-b pb-4">
                          <h4 className="font-semibold mb-2">Slow Performance</h4>
                          <ol className="list-decimal list-inside space-y-2 text-gray-600">
                            <li>Close unused applications running in the background</li>
                            <li>Clear cache and temporary files</li>
                            <li>Check available storage space</li>
                            <li>Ensure your device has the latest updates installed</li>
                          </ol>
                        </div>

                        <div className="border-b pb-4">
                          <h4 className="font-semibold mb-2">Connection Issues</h4>
                          <ol className="list-decimal list-inside space-y-2 text-gray-600">
                            <li>Toggle Wi-Fi off and on</li>
                            <li>Restart your router</li>
                            <li>Forget the network and reconnect</li>
                            <li>Check for network settings conflicts</li>
                          </ol>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
                      <p className="text-gray-600 mb-4">
                        If you're still experiencing issues after trying the troubleshooting steps above,
                        please contact our support team:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-600">
                          <li>Email: support@example.com</li>
                          <li>Phone: 1-800-SUPPORT</li>
                          <li>Hours: Monday - Friday, 9 AM - 5 PM EST</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
