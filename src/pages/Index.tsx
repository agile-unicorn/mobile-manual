import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ManualSidebar } from "@/components/ManualSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ManualHeader } from "@/components/manual/Header";
import { OverviewTab } from "@/components/manual/OverviewTab";
import { GettingStartedTab } from "@/components/manual/GettingStartedTab";
import { FeaturesTab } from "@/components/manual/FeaturesTab";
import { TroubleshootingTab } from "@/components/manual/TroubleshootingTab";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-accent">
        <ManualSidebar />
        <main className="flex-1 px-4 py-8 lg:px-8">
          <SidebarTrigger className="mb-6" />
          
          <div className="max-w-6xl mx-auto space-y-8">
            <ManualHeader />

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <OverviewTab />
              </TabsContent>

              <TabsContent value="getting-started">
                <GettingStartedTab />
              </TabsContent>

              <TabsContent value="features">
                <FeaturesTab />
              </TabsContent>

              <TabsContent value="troubleshooting">
                <TroubleshootingTab />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;