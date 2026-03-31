import { ReactNode } from 'react';

interface IconButtonBadgeProps {
  icon: ReactNode;
  label?: string;
  count?: number;
}

export default function IconButtonBadge({
  icon,
  label,
  count,
}: IconButtonBadgeProps) {
  return (
    <div className="flex items-center space-x-2 font-sans cursor-pointer group hover:opacity-80 transition-opacity">
      <div className="relative flex items-center justify-center">
        {icon}
        {count !== undefined && count > 0 && (
          <span className="absolute -top-4 left-2 text-badge-yellow text-[20px] font-medium leading-none">
            {count}
          </span>
        )}
      </div>
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}
