interface DesktopIconProps {
  label: string;
  icon: string;
  onClick: () => void;
}

export default function DesktopIcon({ label, icon, onClick }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-cyan-900/30 transition-all duration-200 transform hover:scale-110"
    >
      <div className="text-6xl md:text-7xl filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all">
        {icon}
      </div>
      <span className="font-mono text-sm md:text-base text-cyan-300 group-hover:text-cyan-100 transition-colors text-center">
        {label}
      </span>
    </button>
  );
}
