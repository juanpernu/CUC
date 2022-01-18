export function getDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const h = String(today.getHours());
  let m = today.getMinutes() - 7;
  m = m < 10 ? `0${m}` : m;

  return `${dd}/${mm}/${yyyy} ${h}:${m} hs`;
}
