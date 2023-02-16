export const formatMilisseconds = (miliseconds: number) => {
  let seconds = ((miliseconds / 1000) % 60).toString();

  let minutes = Math.floor(miliseconds / 1000 / 60).toString();

  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};
