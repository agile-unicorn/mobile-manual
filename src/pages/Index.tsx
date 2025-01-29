import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ManualHeader } from "@/components/manual/Header";
import { OverviewTab } from "@/components/manual/OverviewTab";
import { GettingStartedTab } from "@/components/manual/GettingStartedTab";
import { SprintsTab } from "@/components/manual/SprintsTab";
import { TroubleshootingTab } from "@/components/manual/TroubleshootingTab";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-accent pb-16">
      <main className="flex-1">
        <div className="max-w-6xl mx-auto">
          <ManualHeader />

          <Tabs defaultValue="overview" className="w-full">
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

          <div className="mt-16 flex justify-center items-center pb-8">
            <img 
              src="/lovable-uploads/fa7ce36d-8358-40a7-aa78-2aae99017eb9.png" 
              alt="Hackathon Illustration" 
              className="h-96 w-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;