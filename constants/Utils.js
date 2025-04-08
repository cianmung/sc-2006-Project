export const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

export const getTemp = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getUVLvl = (index) => {
  if (index >= 0 && index <= 2) {
    return "Low";
  } else if (index >= 3 && index <= 5) {
    return "Moderate";
  } else if (index >= 6 && index <= 7) {
    return "High";
  } else if (index >= 8 && index <= 10) {
    return "Very High";
  } else if (index >= 11) {
    return "Extreme";
  }
};

export const getCurrentHourValue = (index) => {
  const now = new Date();

  // Get current hour in 24-hour format
  const currentHour = now.getHours(); // This returns a number (0-23)

  // Format the current time as '2025-04-05T15:00:00+08:00' (matching the format in your data)
  const formattedCurrentHour = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${now
    .getDate()
    .toString()
    .padStart(2, "0")}T${currentHour.toString().padStart(2, "0")}:00:00+08:00`;

  // Find the matching hour in the index array
  const entry = index.find((item) => item.hour === formattedCurrentHour);

  return entry ? entry.value : index[index.length - 1].value;
};

export const windDirectionFullForm = (shortForm) => {
  const windDirections = {
    N: "North",
    NNE: "North-North-East",
    NE: "North-East",
    ENE: "East-North-East",
    E: "East",
    ESE: "East-South-East",
    SE: "South-East",
    SSE: "South-South-East",
    S: "South",
    SSW: "South-South-West",
    SW: "South-West",
    WSW: "West-South-West",
    W: "West",
    WNW: "West-North-West",
    NW: "North-West",
    NNW: "North-North-West",
  };

  return windDirections[shortForm.toUpperCase()] || "N.A";
};

export const trimTimezone = (isoString) => {
  return isoString.split("+")[0];
};

export function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getDayShortForm(isoDateString) {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

export const get12HourFormat = (isoString) => {
  const date = new Date(isoString);

  let hours = date.getHours();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours} ${ampm}`;
};

export const get12HourMinutesFormat = (dateStr) => {
  const date = new Date(dateStr);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${formattedMinutes} ${ampm}`;
};
