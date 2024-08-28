import { useCallback } from 'react';

export enum currencyEnum {
  Amount = "{{amount}}",
  AmountNoDecimals = "{{amount_no_decimals}}",
  AmountWithCommaSeparator = "{{amount_with_comma_separator}}",
  AmountNoDecimalsWithCommaSeparator = "{{amount_no_decimals_with_comma_separator}}",
  AmountWithApostropheSeparator = "{{amount_with_apostrophe_separator}}",
  AmountNoDecimalsWithSpaceSeparator = "{{amount_no_decimals_with_space_separator}}",
  AmountWithSpaceSeparator = "{{amount_with_space_separator}}",
  AmountWithPeriodAndSpaceSeparator = "{{amount_with_period_and_space_separator}}",
}

const useCurrencyFormat = () => {
  const formatCurrency = useCallback((value: number | string, formatType: currencyEnum): string => {
    const amount = Number(value)
    const options: Intl.NumberFormatOptions = {
      useGrouping: true,
    };

    switch (formatType) {
      case currencyEnum.Amount:
        return amount.toLocaleString();

      case currencyEnum.AmountNoDecimals:
        options.maximumFractionDigits = 0;
        return amount.toLocaleString(undefined, options);

      case currencyEnum.AmountWithCommaSeparator:
        return amount.toLocaleString(undefined, options);

      case currencyEnum.AmountNoDecimalsWithCommaSeparator:
        options.maximumFractionDigits = 0;
        return amount.toLocaleString(undefined, options);

      case currencyEnum.AmountWithApostropheSeparator:
        return amount.toLocaleString("en-US", options).replace(/,/g, "'");

      case currencyEnum.AmountNoDecimalsWithSpaceSeparator:
        options.maximumFractionDigits = 0;
        return amount.toLocaleString("fr-FR", options);

      case currencyEnum.AmountWithSpaceSeparator:
        return amount.toLocaleString("fr-FR", options);

      case currencyEnum.AmountWithPeriodAndSpaceSeparator:
        return amount.toLocaleString("en-GB", options);

      default:
        return amount.toLocaleString();
    }
  }, []);

  return { formatCurrency };
};

export default useCurrencyFormat;
