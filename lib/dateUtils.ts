import { parseISO, format } from "date-fns";

export function formatPostDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, "LLLL d, yyyy");
}
