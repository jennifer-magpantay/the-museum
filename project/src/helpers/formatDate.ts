import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const formatDate = (date: string) => {
  const ThirtyDaysInMs = 1000 * 60 * 60 * 24 * 30;
  const dateTo = new Date(date);
  const dateFrom = new Date(Number(dateTo) - ThirtyDaysInMs);

  const monthTo = dateTo.toLocaleDateString("it-IT", {
    month: "short",
  });
  const dayTo = dateTo.toLocaleDateString("it-IT", {
    day: "2-digit",
  });
  const year = dateTo.toLocaleDateString("it-IT", {
    year: "2-digit",
  });

  const monthFrom = dateFrom.toLocaleDateString("it-IT", {
    month: "short",
  });
  const dayFrom = dateFrom.toLocaleDateString("it-IT", {
    day: "2-digit",
  });

  return `${capitalizeFirstLetter(
    monthFrom
  )} ${dayFrom} - ${capitalizeFirstLetter(monthTo)} ${dayTo}, ${year}`;
};
