/**
 * Throttle function - executes callback at most once every `delay` milliseconds
 * @param callback - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastRun = Date.now();

  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastRun >= delay) {
      callback(...args);
      lastRun = now;
    }
  };
}

/**
 * Debounce function - delays callback until after `delay` milliseconds have elapsed
 * @param callback - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function and cleanup function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };
}
