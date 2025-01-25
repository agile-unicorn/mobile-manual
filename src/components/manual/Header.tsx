import { TopBar } from "./TopBar";

export const ManualHeader = () => {
  return (
    <>
      <TopBar />
      <div className="text-center mb-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-primary">Agile Unicorn</h1>
        </div>
      </div>
    </>
  );
};