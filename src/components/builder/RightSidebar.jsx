'use client';
import { Dimension } from "../config/dimension";

export const RightSidebar = ({
  styleConfig,
  setStyleConfig,
}) => {

  if(!styleConfig) return null;
  
  return (
    <div className="w-64 mt-20 bg-gray-800 text-white flex flex-col shadow-lg p-4">
      <Dimension dimension={styleConfig.dimension}  />
    </div>
  );
};
