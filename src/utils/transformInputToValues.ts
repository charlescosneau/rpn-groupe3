export function transformInputToValues(inputFields: string): (number | string)[] {
  const toCalculate: (number | string)[] = [];
  const values = inputFields.split(" ");
    values.forEach((value:string, index: number) => {
      if (String(value).includes('N')) {
        const negate: number = Number(value.replace('N', ''));
        toCalculate.push(-negate);
      } else {
        toCalculate.push(value);
      }
    })
    return toCalculate;
}