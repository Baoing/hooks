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
  const formatCurrency = useCallback((value: number | string, formatType: currencyEnum | string): string => {
    const amount = Number(value);
    const options: Intl.NumberFormatOptions = {
      useGrouping: true,
    };
    let formattedAmount: string;

    switch (formatType) {
      case currencyEnum.Amount:
        formattedAmount = amount.toLocaleString();
        break;

      case currencyEnum.AmountNoDecimals:
        options.maximumFractionDigits = 0;
        formattedAmount = amount.toLocaleString(undefined, options);
        break;

      case currencyEnum.AmountWithCommaSeparator:
        formattedAmount = amount.toLocaleString(undefined, options);
        break;

      case currencyEnum.AmountNoDecimalsWithCommaSeparator:
        options.maximumFractionDigits = 0;
        formattedAmount = amount.toLocaleString(undefined, options);
        break;

      case currencyEnum.AmountWithApostropheSeparator:
        formattedAmount = amount.toLocaleString("en-US", options).replace(/,/g, "'");
        break;

      case currencyEnum.AmountNoDecimalsWithSpaceSeparator:
        options.maximumFractionDigits = 0;
        formattedAmount = amount.toLocaleString("fr-FR", options);
        break;

      case currencyEnum.AmountWithSpaceSeparator:
        formattedAmount = amount.toLocaleString("fr-FR", options);
        break;

      case currencyEnum.AmountWithPeriodAndSpaceSeparator:
        formattedAmount = amount.toLocaleString("en-GB", options);
        break;

      default:
        formattedAmount = amount.toLocaleString();
    }

    // 使用传入的格式类型替换金额占位符
    return formatType.replace(/{{amount}}/g, formattedAmount)
      .replace(/{{amount_no_decimals}}/g, formattedAmount.replace(/\.\d+$/, ''))
      .replace(/{{amount_with_comma_separator}}/g, formattedAmount)
      .replace(/{{amount_no_decimals_with_comma_separator}}/g, formattedAmount.replace(/\.\d+$/, ''))
      .replace(/{{amount_with_apostrophe_separator}}/g, formattedAmount.replace(/,/g, "'"))
      .replace(/{{amount_no_decimals_with_space_separator}}/g, formattedAmount.replace(/\.\d+$/, '').replace(/,/g, ' '))
      .replace(/{{amount_with_space_separator}}/g, formattedAmount.replace(/,/g, ' '))
      .replace(/{{amount_with_period_and_space_separator}}/g, formattedAmount.replace(/,/g, ' ').replace(/\./g, ' .'));
  }, []);

  return { formatCurrency };
};

export default useCurrencyFormat;
