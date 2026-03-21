const allowedPhoneKeys = new Set([
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Tab",
  "Home",
  "End",
]);

export function onPhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (
    allowedPhoneKeys.has(e.key) ||
    e.ctrlKey ||
    e.metaKey ||
    /^[\d+\-() ]$/.test(e.key)
  )
    return;
  e.preventDefault();
}
