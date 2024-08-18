export const useProgressValue = (value: number, radius = 90) => {
  const angle = (360 / 100) * value;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = (1 / 4) * circumference;
  const strokeLength = (angle / 360) * circumference;
  const strokeDasharray = [strokeLength, circumference - strokeLength].join(
    " "
  );
  return {
    strokeDasharray,
    strokeDashoffset,
  };
};
