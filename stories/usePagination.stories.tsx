import React from 'react';
import {Meta} from '@storybook/react';
import {usePagination} from '@channelwill/hooks';
import {TextField, Button} from "@shopify/polaris";

export default {
  title: 'Tool Hooks/usePagination',
} as Meta;

const Template: () => JSX.Element = () => {
  const {currentPage, totalPages, nextPage, prevPage, setPage} = usePagination({
    totalItems: 100,
    itemsPerPage: 10,
    initialPage: 1,
  });

  return <div className={"flex gap-2 flex-col"}>
    <h3>当前页: {currentPage}</h3>
    <h3>总页数: {totalPages}</h3>
    <div className={"flex gap-2"}>
      <Button onClick={prevPage} disabled={currentPage === 1}>上一页</Button>
      <Button onClick={nextPage} disabled={currentPage === totalPages}>下一页</Button>
      <TextField
        type="number"
        value={String(currentPage)}
        onChange={(value) => setPage(Number(value))}
        min={1}
        max={totalPages}
        autoComplete={""}
        label={""}
      />
    </div>
  </div>;
};

export const example = Template.bind({});
