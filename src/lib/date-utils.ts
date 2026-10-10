export function formatDate(dateString: string | undefined): string {
  if (!dateString) return "";
  try {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

export function formatDateRange(
  startDate?: string,
  endDate?: string
): string {
  if (!startDate && !endDate) return "";
  if (startDate && endDate)
    return `${formatDate(startDate)} – ${formatDate(endDate)}`;
  if (startDate) return `From ${formatDate(startDate)}`;
  return `Until ${formatDate(endDate)}`;
}
