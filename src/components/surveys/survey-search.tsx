import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SurveySearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SurveySearch({
  value,
  onChange,
  className,
}: SurveySearchProps) {
  return (
    <div className={cn("relative", className)}>
      <label htmlFor="survey-search" className="sr-only">
        Search surveys
      </label>
      <Search
        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-plum/40"
        aria-hidden="true"
      />
      <input
        id="survey-search"
        type="search"
        placeholder="Search surveys..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-plum/20 bg-cream/50 py-3 pl-11 pr-4 text-sm text-plum placeholder:text-plum/40 transition-colors duration-200 focus:border-plum/40 focus:outline-none focus:ring-2 focus:ring-plum/10"
      />
    </div>
  );
}
