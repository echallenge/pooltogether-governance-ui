import { stringWithPrecision } from 'lib/utils/stringWithPrecision'

export function numberWithCommas(str, options = {}) {
  if (!str) {
    return typeof str === 'number' ? str : ''
  }

  let precision = 2
  if (options.precision !== undefined) {
    precision = options.precision
  }

  let localeString = 'en-GB'
  if (options.currentLang && options.currentLang === 'es') {
    localeString = 'es-ES'
  }

  // auto-round to the nearest whole number
  if (precision === 0) {
    str = Math.floor(Number(str))
  }

  // handle exponents
  if (str.toString().match('e')) {
    str = Number.parseFloat(str).toFixed(0)
  }

  let parts = str.toString().split('.')
  parts[0] = parts[0].replace(',', '')

  let numberStr = ''

  if (parts.length > 1 && precision > 0) {
    numberStr = stringWithPrecision(parts.join('.'), { precision })
  } else {
    numberStr = parts[0]
  }

  return Number(numberStr).toLocaleString(localeString, { minimumFractionDigits: precision })
}

export const getPrecision = (num) => {
  if (num > 10000) {
    return 0
  } else if (num > 0.01) {
    return 2
  } else if (num > 0.0001) {
    return 4
  } else if (num > 0.000001) {
    return 6
  } else {
    return 0
  }
}
