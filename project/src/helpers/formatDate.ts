export const formatDate = (date: string) => {
  const dt = new Date(date);
  
  const month = dt.toLocaleDateString("it-IT", {
    month: "short",
  });
  const day = dt.toLocaleDateString("it-IT", {
    day: "2-digit",
  });

  const year = dt.toLocaleDateString("it-IT", {
    year: "2-digit",
  });
  return `${month} ${day}, ${year}`;
};
