// setImmediate is not available in most browsers, and process.nextTick is
// preferred in Node.
export default function nextTick(
  callback: (...args: any[]) => void,
  ...args: any[]
): void {
  if (typeof process !== 'undefined' && process.nextTick) {
    process.nextTick(callback, ...args);
  } else if (typeof setImmediate !== 'undefined') {
    setImmediate(callback, ...args);
  } else {
    setTimeout(callback, 0, ...args);
  }
}
