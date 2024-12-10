export function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  let result = "";

  if (hours > 0) {
    result += `${hours}ч `;
  }
  if (minutes > 0) {
    result += `${minutes}м `;
  }
  if (secs > 0 || (hours === 0 && minutes === 0)) {
    result += `${secs}с`;
  }

  return result.trim();
}
