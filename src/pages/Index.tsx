
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ManualHeader } from "@/components/manual/Header";
import { OverviewTab } from "@/components/manual/OverviewTab";
import { GettingStartedTab } from "@/components/manual/GettingStartedTab";
import { SprintsTab } from "@/components/manual/SprintsTab";
import { TroubleshootingTab } from "@/components/manual/TroubleshootingTab";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen w-full bg-accent">
      <main className="flex-1">
        <div className="max-w-6xl mx-auto">
          <ManualHeader />

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="overview">Start</TabsTrigger>
              <TabsTrigger value="getting-started">Spielaufbau</TabsTrigger>
              <TabsTrigger value="sprint">Der Sprint</TabsTrigger>
              <TabsTrigger value="troubleshooting">Die Pitches</TabsTrigger>
            </TabsList>

            <div className="p-4">
              <TabsContent value="overview">
                <OverviewTab />
              </TabsContent>

              <TabsContent value="getting-started">
                <GettingStartedTab />
              </TabsContent>

              <TabsContent value="sprint">
                <SprintsTab />
              </TabsContent>

              <TabsContent value="troubleshooting">
                <TroubleshootingTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>

      <footer className="bg-primary mt-16 py-12">
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-center space-x-8">
            <button 
              onClick={() => handleTabChange("overview")} 
              className="text-white hover:text-accent transition-colors"
            >
              Start
            </button>
            <button 
              onClick={() => handleTabChange("getting-started")} 
              className="text-white hover:text-accent transition-colors"
            >
              Spielaufbau
            </button>
            <button 
              onClick={() => handleTabChange("sprint")} 
              className="text-white hover:text-accent transition-colors"
            >
              Der Sprint
            </button>
            <button 
              onClick={() => handleTabChange("troubleshooting")} 
              className="text-white hover:text-accent transition-colors"
            >
              Die Pitches
            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
