import { formatUpdated } from "@/lib/pageDates";

export default function LastUpdated({ iso, className = "" }: { iso: string; className?: string }) {
  return (
    <p className={`text-xs text-neutral-500 ${className}`}>
      Last updated: <time dateTime={iso}>{formatUpdated(iso)}</time>
    </p>
  );
}
