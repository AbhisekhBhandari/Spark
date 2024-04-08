const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function addOrdinalSuffix(number: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = number % 100;
  return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

export function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${addOrdinalSuffix(day)} ${months[monthIndex]} ${year}`;
}



export  function calculateTimeDifference(isoDateString:string) {
    const givenDate = new Date(isoDateString);
    const currentDate = new Date();

    const timeDifferenceMs = currentDate - givenDate;
  
    const seconds = Math.floor(timeDifferenceMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days}d`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${minutes}m`;
    }
  }