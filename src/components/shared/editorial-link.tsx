import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface EditorialLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function EditorialLink({
  to,
  children,
  className,
  external = false,
}: EditorialLinkProps) {
  const classes = cn(
    "group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-plum/40 px-6 py-3 text-sm font-medium text-plum transition-colors duration-300 hover:border-plum hover:bg-plum hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum",
    className
  );

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
