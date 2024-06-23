export function formatDateTime(dateTimeString?: string): string | undefined {
  if (!dateTimeString) {
    return undefined; // Handle undefined input gracefully
  }

  const date = new Date(dateTimeString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[date.getMonth()]; // Get month name (0-indexed)
  const day = String(date.getDate()).padStart(2, "0"); // Get day, pad with zero
  const year = date.getFullYear();

  const formattedDate = day + " " + month + " " + year;

  return formattedDate;
}
