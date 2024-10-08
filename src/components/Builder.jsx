'use client';
import { DndProvider } from "react-dnd";
import { LeftSidebar } from "./builder/LeftSidebar";
import { Main } from "./builder/Main";
import { RightSidebar } from "./builder/RightSidebar";
import { Header } from "./shared/Header";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useEffect, useState } from "react";

export const Builder = () => {
  const [styleConfig, setStyleConfig] = useState(null);
  
  useEffect(() => {
  }, [styleConfig]);

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <Header />
        <DndProvider backend={HTML5Backend}>
          <Main setStyleConfig={setStyleConfig} />
        </DndProvider>
      </div>
      <RightSidebar 
        styleConfig={styleConfig}
        setStyleConfig={setStyleConfig}
      />
    </div>
  );
}