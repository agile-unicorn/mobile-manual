import {DiceRoller} from "@/components/DiceRoller.tsx";
import React from "react";

interface ManualHeaderProps {
    language?: string
    setLanguage: object
}

export const ManualHeader = ({language, setLanguage}: ManualHeaderProps) => {
    return (
        <>
            <div
                className="w-full bg-primary text-primary-foreground relative"
                style={{
                    backgroundImage: "url('/lovable-uploads/10d2eedc-6b34-4a11-a5d2-8960767b4d4e.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-6">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://agile-unicorn.com/"
                            target="_blank"
                            rel="noopener"
                        >
                            <img
                                src="/lovable-uploads/8d2cc797-794a-470b-b202-0f321f2beaa5.png"
                                alt="Agile Unicorn Logo"
                                className="h-12 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-white">Würfelsimulator &rarr;</span>
                        <DiceRoller />
                        <div>
                            {language === 'en' ? <button onClick={() => setLanguage('')}>Deutsch</button> :
                                <button onClick={() => setLanguage('en')}>English</button>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-12">
                <div className="flex flex-col items-center gap-4">
                </div>
            </div>
        </>
    );
};