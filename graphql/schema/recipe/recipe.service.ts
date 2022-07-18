export const cutText = (text: string, n: number) => {
  if (n > text.length) return text

  while (text[n] !== " " && n > 0) {
    n--
  }

  return text.substring(0, n) + "..."
}
