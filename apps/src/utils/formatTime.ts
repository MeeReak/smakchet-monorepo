export function formatDateTime(dateTimeString: string | undefined) {
  const date = new Date(dateTimeString!); // Create a Date object

  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month, pad with zero
  const day = String(date.getDate()).padStart(2, '0'); // Get day, pad with zero
  const year = date.getFullYear();

  let formattedDate = month + ' ' + day + ' ' + year;

  return formattedDate;
}