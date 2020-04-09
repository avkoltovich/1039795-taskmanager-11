const castTimeFormat = (value) => {
  return String(value).padStart(2, `0`);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

export {formatTime};
