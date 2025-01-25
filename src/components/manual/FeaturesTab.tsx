import { Settings, Smartphone } from "lucide-react";

export const FeaturesTab = () => {
  return (
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
  );
};