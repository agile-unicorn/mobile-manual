
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ManualHeader } from "@/components/manual/Header";
import { Anleitung } from "@/components/manual/Anleitung.tsx";
import { Manual } from "@/components/manual/Manual.tsx";
import { SpielaufbauTab } from "@/components/manual/SpielaufbauTab.tsx";
import { GettingStartedTab } from "@/components/manual/GettingStartedTab.tsx";
import { SprintsTab } from "@/components/manual/SprintsTab";
import { Sprints } from "@/components/manual/Sprints";
import { Pitchen } from "@/components/manual/Pitchen.tsx";
import { Pitches } from "@/components/manual/Pitches.tsx";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [language, setLanguage] = useState("");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-accent">
      <main className="flex-1">
        <div className="max-w-6xl mx-auto">
          <ManualHeader language={language} setLanguage={setLanguage}/>

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="overview">{language === 'en' ? 'Intro' : 'Start'}</TabsTrigger>
              <TabsTrigger value="getting-started">{language === 'en' ? 'Setup' : 'Spielaufbau'}</TabsTrigger>
              <TabsTrigger value="sprint">{language === 'en' ? 'Sprints' : 'Der Sprint'}</TabsTrigger>
              <TabsTrigger value="troubleshooting">{language === 'en' ? 'Pitching' : 'Die Pitches'}</TabsTrigger>
            </TabsList>

            <div className="p-4">
              <TabsContent value="overview">
                {language === 'en' ? <Manual /> : <Anleitung />}
              </TabsContent>

              <TabsContent value="getting-started">
                {language === 'en' ? <GettingStartedTab /> : <SpielaufbauTab />}
              </TabsContent>

              <TabsContent value="sprint">
                {language === 'en' ? <Sprints /> : <SprintsTab />}
              </TabsContent>

              <TabsContent value="troubleshooting">
                {language === 'en' ? <Pitches /> : <Pitchen />}
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="bg-primary max-w-6xl mx-auto mt-16 py-12 px-4" style={{
        backgroundImage: "url('/lovable-uploads/10d2eedc-6b34-4a11-a5d2-8960767b4d4e.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
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
      </div>
      </main>

      
    </div>
  );
};

export default Index;
