export const GettingStartedTab = () => {
  return (
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
  );
};