export const TroubleshootingTab = () => {
  return (
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
  );
};