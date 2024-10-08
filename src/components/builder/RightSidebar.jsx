'use client';

import { Width } from "../config/dimension/width";

export const RightSidebar = () => {
  return (
    <div className="w-64 mt-20 bg-gray-300 text-white flex flex-col">
      <div className="p-4">
        <Width value={'100'} />
      </div>
    </div>
  );
};