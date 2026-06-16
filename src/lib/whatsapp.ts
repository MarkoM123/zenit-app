export function createWhatsAppMessage(
  items: {
    name: string;
    quantity: number;
  }[]
) {
  const text = `
ZENIT PORUDŽBINA

${items
  .map(
    (item) =>
      `• ${item.name} x ${item.quantity}`
  )
  .join("\n")}
`;

  return `https://wa.me/381644386369?text=${encodeURIComponent(
    text
  )}`;
}