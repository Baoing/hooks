import {Meta} from "@storybook/react";
import React from 'react';
import {useCurrencyFormat, currencyEnum} from '@channelwill/hooks';
import {Page, LegacyCard, DataTable} from '@shopify/polaris';

export default {
  title: 'Hooks/useCurrencyFormat',
} as Meta;


const Template = () => {
  const { formatCurrency } = useCurrencyFormat();

  const rows = [
    ['124689.334', currencyEnum.Amount, formatCurrency("124689.334", currencyEnum.Amount)],
    ['324511.334', currencyEnum.Amount, formatCurrency("324511.334", currencyEnum.Amount)],
    ['1683424689.1', currencyEnum.AmountNoDecimals, formatCurrency("1683424689.1", currencyEnum.AmountNoDecimals)],
    ['1124384.22', currencyEnum.AmountWithApostropheSeparator, formatCurrency("1124384.22", currencyEnum.AmountWithApostropheSeparator)],
    ['1124384.22', currencyEnum.AmountWithCommaSeparator, formatCurrency("1124384.22",currencyEnum.AmountWithCommaSeparator)],
  ];

  return (
    <Page title="货币格式化示例">
      <LegacyCard>
        <DataTable
          showTotalsInFooter
          columnContentTypes={[
            'text',
            'text',
            'text',
          ]}
          headings={[
            '货币值',
            '格式',
            '结果',
          ]}
          rows={rows}
        />
      </LegacyCard>
    </Page>
  );
}

export const example = Template.bind({});