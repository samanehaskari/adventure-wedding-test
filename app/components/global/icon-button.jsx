import { Icon } from "@iconify/react";

export default function IconButton({
  icon = "svg-spinners:180-ring-with-bg",
  iconSize = 24,
}) {
  return (
    <button className=" bg-primary-500 h-12 w-12 hover:bg-primary-600 transition-all duration-300 flex items-center justify-center rounded-full cursor-pointer">
      <Icon className=" text-white" icon={icon} width={iconSize} />
    </button>
  );
}
