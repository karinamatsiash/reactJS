export const formatDuration = (minutes) => {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs > 0 ? `${hrs}h` : ''}${mins > 0 ? ` ${mins}min` : ''}`.trim();
};
