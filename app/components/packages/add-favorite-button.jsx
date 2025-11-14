"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function AddFavoriteButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div
      onClick={() => setIsLiked(!isLiked)}
      className="h-12 w-12 rounded-full overflow-hidden absolute -right-full group-hover:right-3 top-3 bg-white/80 z-10 backdrop-blur-lg transition-all duration-500 flex items-center justify-center cursor-pointer"
    >
      <Icon
        className={`${
          isLiked ? "text-red-400" : "text-zinc-700"
        } transition-all duration-200`}
        icon={isLiked ? "line-md:heart-filled" : "line-md:heart"}
        width={24}
      />
    </div>
  );
}
