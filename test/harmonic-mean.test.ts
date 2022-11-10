import { harmonicMean } from '../src';

describe('harmonic mean', () => {
  test('should calculate correctly', () => {
    let values: number[];
    let expectedResponse: number;
    let response: number;

    values = [10, 15, 20];
    expectedResponse = 13.846153846153845;
    response = harmonicMean(...values);
    expect(response).toBe(expectedResponse);

    values = [100, 200, 300, 400];
    expectedResponse = 192;
    response = harmonicMean(...values);
    expect(response).toBe(expectedResponse);

    values = [1, 1];
    expectedResponse = 1;
    response = harmonicMean(...values);
    expect(response).toBe(expectedResponse);

    values = [2];
    expectedResponse = 2;
    response = harmonicMean(...values);
    expect(response).toBe(expectedResponse);
  });

  test('should return NaN when no values are passed', () => {
    const response = harmonicMean();
    expect(response).toBeNaN();
  });

  test('should return NaN when negative values are passed', () => {
    const response = harmonicMean(2, -2);
    expect(response).toBeNaN();
  });

  test('should return NaN when value 0 is passed', () => {
    const response = harmonicMean(2, 0);
    expect(response).toBeNaN();
  });

  test('should return NaN when not primitive number values are passed', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(harmonicMean('a')).toBeNaN();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(harmonicMean('a', 'b', 'c')).toBeNaN();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(harmonicMean(true, false)).toBeNaN();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(harmonicMean([1, 2, 3])).toBeNaN();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(harmonicMean([], {})).toBeNaN();
  });
});
