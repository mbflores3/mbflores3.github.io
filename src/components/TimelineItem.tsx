import { Link } from "react-router-dom";

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  projectUrl?: string;
}

export const TimelineItem = ({
  year,
  title,
  organization,
  description,
  projectUrl,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary"></div>

      <div className="mb-1">
        <span className="text-sm text-primary font-semibold">
          {year}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1">
        {title}
      </h3>

      <p className="text-muted-foreground mb-2">
        {organization}
      </p>

      <p className="text-sm text-muted-foreground">
        {description}
      </p>

      {projectUrl && (
        <Link
          to={projectUrl}
          className="inline-flex items-center mt-4 text-primary font-medium hover:underline"
        >
          View project →
        </Link>
      )}
    </div>
  );
};
