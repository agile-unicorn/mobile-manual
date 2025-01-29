import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ManualHeader } from "@/components/manual/Header";
import { OverviewTab } from "@/components/manual/OverviewTab";
import { GettingStartedTab } from "@/components/manual/GettingStartedTab";
import { FeaturesTab } from "@/components/manual/FeaturesTab";
import { TroubleshootingTab } from "@/components/manual/TroubleshootingTab";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-accent pb-16">
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ManualHeader />

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start mb-6 p-1">
              <TabsTrigger value="overview" className="px-4 py-2">Start</TabsTrigger>
              <TabsTrigger value="getting-started" className="px-4 py-2">Spielaufbau</TabsTrigger>
              <TabsTrigger value="sprint" className="px-4 py-2">Der Sprint</TabsTrigger>
              <TabsTrigger value="troubleshooting" className="px-4 py-2">Die Pitches</TabsTrigger>
            </TabsList>

            <div className="p-4">
              <TabsContent value="overview">
                <OverviewTab />
              </TabsContent>

              <TabsContent value="getting-started">
                <GettingStartedTab />
              </TabsContent>

              <TabsContent value="sprint">
                <FeaturesTab />
              </TabsContent>

              <TabsContent value="troubleshooting">
                <TroubleshootingTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;