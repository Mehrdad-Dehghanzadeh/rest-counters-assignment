/**
 * Seperate number by 3-digit format
 * ***********************************/
export const price = (val, currency) => {
  const value = val ? val.toString().replace(/(.)(?=(.{3})+$)/g, '$1,') : 0
  return `${value}${currency ? ` ${currency}` : ''}`
}
