import React from "react";

interface TableProps {
  parameters: {
    param: string;
    description: string;
    type: string;
    defaultValue: any;
    exampleValue: any;
  }[];
}

const Table: React.FC<TableProps> = ({ parameters }) => {
  const hasExample = parameters.find(item=>item.exampleValue)
  return (
    <table className={"w-full"}>
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
        {hasExample && <th>示例值</th>}
      </tr>
      </thead>
      <tbody>
      {parameters.map((param, index) => (
        <tr key={index}>
          <td>{param.param}</td>
          <td>{param.description}</td>
          <td>{param.type}</td>
          <td>{param.defaultValue}</td>
          { param.exampleValue && <td>{param.exampleValue}</td> }
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table