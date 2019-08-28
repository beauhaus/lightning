export default function randInRange(min, max) {
  const res = Math.floor(Math.random() * (max - min) + min) + 1;
  return res;
}
