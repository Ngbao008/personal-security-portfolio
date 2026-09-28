export function getReadingTime(content: string): number {
  const cjkCharacters = (content.match(/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/g) ?? []).length;
  const latinWords = content.replace(/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(latinWords / 200 + cjkCharacters / 400));
}

