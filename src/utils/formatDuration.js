export const formatNumericDuration = (minutes) => {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs > 0 ? `${hrs}h` : ''}${mins > 0 ? ` ${mins}min` : ''}`.trim();
};

export const formatStringDuration = (time) => {
  const hoursMatch = time.match(/(\d+)\s*h/);
  const minutesMatch = time.match(/(\d+)\s*min/);

  const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

  return hours * 60 + minutes;
};
