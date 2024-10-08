'use client';
import { DndProvider } from "react-dnd";
import { LeftSidebar } from "./builder/LeftSidebar";
import { Main } from "./builder/Main";
import { RightSidebar } from "./builder/RightSidebar";
import { Header } from "./shared/Header";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useEffect } from "react";

export const Builder = () => {
  useEffect(() => {
  },[])
  
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      {/* <LeftSidebar /> */}
      <div className="flex-1 overflow-y-auto">
        <Header />
        <DndProvider backend={HTML5Backend}>
          <Main />
        </DndProvider>
      </div>
      <RightSidebar />
    </div>
  );
}