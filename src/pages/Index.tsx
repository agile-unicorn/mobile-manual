import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ManualHeader} from "@/components/manual/Header";
import {StartDe} from "@/components/manual/StartDe.tsx";
import {StartEn} from "@/components/manual/StartEn.tsx";
import {GettingStartedDe} from "@/components/manual/GettingStartedDe.tsx";
import {GettingStartedEn} from "@/components/manual/GettingStartedEn.tsx";
import {SprintsDe} from "@/components/manual/SprintsDe.tsx";
import {SprintsEn} from "@/components/manual/SprintsEn.tsx";
import {PitchDe} from "@/components/manual/PitchDe.tsx";
import {PitchEn} from "@/components/manual/PitchEn.tsx";
import {EnterpriseDe} from "@/components/manual/EnterpriseDe.tsx";
import {EnterpriseEn} from "@/components/manual/EnterpriseEn.tsx";
import {Credits} from "@/components/manual/Credits.tsx";
import {useEffect, useState} from "react";

const Index = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [language, setLanguage] = useState("");

    useEffect(() => {
        if (window.location.href.includes("manual.agile-unicorn.com")) {
            setLanguage("en");
        }
    }, []);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className="min-h-screen w-full bg-accent">
            <main className="flex-1">
                <div className="max-w-6xl mx-auto">
                    <ManualHeader language={language} setLanguage={setLanguage}/>

                    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="w-full flex flex-wrap justify-start mb-6">
                            <TabsTrigger value="overview">🦄 {language === 'en' ? 'Intro' : 'Start'}</TabsTrigger>
                            <TabsTrigger
                                value="getting-started">{language === 'en' ? 'Setup' : 'Spielaufbau'}</TabsTrigger>
                            <TabsTrigger value="sprint">{language === 'en' ? 'Sprints' : 'Sprints'}</TabsTrigger>
                            <TabsTrigger
                                value="troubleshooting">{language === 'en' ? 'Pitching' : 'Pitches'}</TabsTrigger>
                            <TabsTrigger
                                value="ee">{language === 'en' ? 'Enterprise Extasy' : 'Enterprise Ekstase'}</TabsTrigger>
                            <TabsTrigger
                                value="credits">{language === 'en' ? 'Credits' : 'Credits'}</TabsTrigger>
                        </TabsList>

                        <div className="p-4">
                            <TabsContent value="overview">
                                {language === 'en' ? <StartEn/> : <StartDe/>}
                            </TabsContent>

                            <TabsContent value="getting-started">
                                {language === 'en' ? <GettingStartedEn/> : <GettingStartedDe/>}
                            </TabsContent>

                            <TabsContent value="sprint">
                                {language === 'en' ? <SprintsEn/> : <SprintsDe/>}
                            </TabsContent>

                            <TabsContent value="troubleshooting">
                                {language === 'en' ? <PitchEn/> : <PitchDe/>}
                            </TabsContent>

                            <TabsContent value="ee">
                                {language === 'en' ? <EnterpriseEn/> : <EnterpriseDe/>}
                            </TabsContent>

                            <TabsContent value="credits">
                                <Credits/>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>

                <div className="bg-primary max-w-6xl mx-auto mt-16 py-12 px-4" style={{
                    backgroundImage: "url('/lovable-uploads/10d2eedc-6b34-4a11-a5d2-8960767b4d4e.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                    <div className="max-w-6xl mx-auto ">
                        <nav className="flex justify-center space-x-8 w-full flex flex-wrap justify-start mb-6">
                            <button
                                onClick={() => handleTabChange("overview")}
                                className="text-white hover:text-accent transition-colors"
                            >
                                🦄 Start
                            </button>
                            <button
                                onClick={() => handleTabChange("getting-started")}
                                className="text-white hover:text-accent transition-colors"
                            >
                                {language === 'en' ? 'Setup' : 'Spielaufbau'}
                            </button>
                            <button
                                onClick={() => handleTabChange("sprint")}
                                className="text-white hover:text-accent transition-colors"
                            >
                                {language === 'en' ? 'Sprint' : 'Sprint'}
                            </button>
                            <button
                                onClick={() => handleTabChange("troubleshooting")}
                                className="text-white hover:text-accent transition-colors"
                            >
                                {language === 'en' ? 'Pitching' : 'Pitches'}
                            </button>
                            <button
                                onClick={() => handleTabChange("ee")}
                                className="text-white hover:text-accent transition-colors"
                            >
                                {language === 'en' ? 'Extension' : 'Erweiterung'}
                            </button>
                            <button
                                onClick={() => handleTabChange("credits")}
                                className="text-white hover:text-accent transition-colors"
                            >
                                {language === 'en' ? 'Credits' : 'Credits'}
                            </button>
                        </nav>

                        <div className=" text-center mt-4">
                            Made with ❤ in Bonn and Hamburg. Copyright Agile Unicorn Spieleverlag 2025
                            <div className="mt-2">
                                <a href="https://agile-unicorn.com/imprint/" className="text-primary hover:underline"
                                   target="_blank" rel="noopener noreferrer">
                                    Impressum
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default Index;
