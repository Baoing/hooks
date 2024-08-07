import { useCallback } from 'react';

// Helper function: Commas for thousands separator
const commafy = (num: string) => {
  num = num + "";
  const re = /(-?\d+)(\d{3})/;
  while (re.test(num))
    num = num.replace(re, "$1,$2");
  return num;
};

// Helper function: Remove decimals
const noDecimalsformatMoney = (amount: string) => {
  const num = parseFloat(String(amount).replace(/,/g, ""));
  return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
};

// Helper function: Decimal separator and thousands separator
const separatorFormatMoney = (amount: string | number) => {
  const parts = amount.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
};

// Helper function: No decimals with separator
const noDecimalsWithSeparatorFormatMoney = (amount: string) => {
  const num = parseFloat(String(amount).replace(/,/g, ""));
  return separatorFormatMoney(Math.round(num));
};

// Helper function: Apostrophe separator
const apostropheSeparatorFormatMoney = (money: string) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
};

export enum currencyEnum {
  Amount = "{{amount}}",
  AmountNoDecimals = "{{amount_no_decimals}}",
  AmountWithCommaSeparator = "{{amount_with_comma_separator}}",
  AmountNoDecimalsWithCommaSeparator = "{{amount_no_decimals_with_comma_separator}}",
  AmountWithApostropheSeparator = "{{amount_with_apostrophe_separator}}",
}

const useCurrencyFormat = () => {
  const formatCurrency = useCallback(
    (value: string, format: string, defaultValue?: string) => {
      if (defaultValue && (!value || ["0", "0.00", "0.0", 0].includes(value))) {
        return defaultValue;
      }
      if (!format) return value;

      if (format.includes(currencyEnum.Amount)) {
        return format.replace(currencyEnum.Amount, commafy(value));
      }

      if (format.includes(currencyEnum.AmountNoDecimals)) {
        return format.replace(currencyEnum.AmountNoDecimals, noDecimalsformatMoney(value));
      }

      if (format.includes(currencyEnum.AmountWithCommaSeparator)) {
        return format.replace(currencyEnum.AmountWithCommaSeparator, separatorFormatMoney(value));
      }

      if (format.includes(currencyEnum.AmountNoDecimalsWithCommaSeparator)) {
        return format.replace(currencyEnum.AmountNoDecimalsWithCommaSeparator, noDecimalsWithSeparatorFormatMoney(value));
      }

      if (format.includes(currencyEnum.AmountWithApostropheSeparator)) {
        return format.replace(currencyEnum.AmountWithApostropheSeparator, apostropheSeparatorFormatMoney(value));
      }

      return value;
    },
    []
  );

  return { formatCurrency };
};

export default useCurrencyFormat;
