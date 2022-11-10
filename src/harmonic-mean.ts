/**
 * Harmonic Mean
 * @param values {number[]} - The numbers to calculate the harmonic mean
 * @return {number} - The harmonic mean of the numbers
 */
export function harmonicMean(...values: number[]): number {
  if (!isNumericArray(values)) {
    return NaN;
  }
  if (!hasOnlyPositiveValues(values)) {
    return NaN;
  }

  return values.length / values.reduce((sum, value) => sum + 1 / value, 0);
}

function isNumericArray(values: unknown): boolean {
  if (!Array.isArray(values)) {
    return false;
  }

  return values.every((value) => !Number.isNaN(value) && Number.isFinite(value));
}

function hasOnlyPositiveValues(values: number[]): boolean {
  return values.every((value) => value > 0);
}
