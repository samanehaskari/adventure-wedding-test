export function formatMoneyDollar(value = 1200) {
  const num = Number(value);
  if (!isFinite(num)) return "";

  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);

  return `${formatted} $`;
}
