import {Meta} from "@storybook/react";
import React from 'react';
import {useCurrencyFormat, currencyEnum} from '@channelwill/hooks';
import {Page, LegacyCard, DataTable, Link} from '@shopify/polaris';

export default {
  title: 'Tool Hooks/useCurrencyFormat',
} as Meta;

const Template = () => {
  const { formatCurrency } = useCurrencyFormat();
  const count = 1134.65

  const currencyEnumArray: currencyEnum|string[] = Object.values(currencyEnum);
  currencyEnumArray.push("€{{amount_with_comma_separator}} EUR")
  currencyEnumArray.push("${{amount_with_comma_separator}} USD")

  const rows = currencyEnumArray.map(format=> [count, format, formatCurrency(count, format)])

  return (
    <Page title="货币格式化示例">
      <div className={"mb-2"}>
        <Link url={"https://help.shopify.com/en/manual/international/pricing/currency-formatting"} external={true}>Shopify Currency Formatting</Link>
      </div>
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