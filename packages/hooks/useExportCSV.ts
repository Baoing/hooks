import { useCallback } from 'react';

// 检查data是否是一个对象数组
const isJsons = (array: any) => Array.isArray(array) && array.every(
  row => (typeof row === "object" && !(row instanceof Array)),
);

// 检查data是否是一个数组的数组
const isArrays = (array: any) => Array.isArray(array) && array.every(
  row => Array.isArray(row),
);

// 空或未定义元素处理
const elementOrEmpty = (element: any) =>
  (typeof element === "undefined" || element === null) ? "" : element;

// 使用指定的分隔符和封闭字符将数组元素连接到CSV字符串中
const joiner = (data: any, separator = ",", enclosingCharacter = "\"") => {
  return data
    .filter((e: any) => e)
    .map(
      (row: any) => row
        .map((element: any) => elementOrEmpty(element))
        .map((column: any) => `${enclosingCharacter}${column}${enclosingCharacter}`)
        .join(separator),
    )
    .join("\n");
};

// 将JSON数组数据转换为CSV字符串
const jsons2csv = (data: any, headers: any, separator = ",", enclosingCharacter = "\"") => {
  const headerLabels = headers || Array.from(
    data.map((json: any) => Object.keys(json))
      .reduce((a: any, b: any) => new Set([...a, ...b]), [])
  );

  const headerKeys = isJsons(headers) ? headers.map((header: any) => header.key) : headerLabels;

  const dataArray = data.map((object: any) => headerKeys.map((header: any) => getHeaderValue(header, object)));

  return joiner([headerLabels, ...dataArray], separator, enclosingCharacter);
};

// 将数组数据的数组转换为CSV字符串
const arrays2csv = (data: any, headers: any, separator = ",", enclosingCharacter = "\"") => {
  return joiner(headers ? [headers, ...data] : data, separator, enclosingCharacter);
};

// 将字符串数据转换为CSV字符串
const string2csv = (data: any, headers: any, separator = ",") => {
  return (headers) ? `${headers.join(separator)}\n${data}` : data.replace(/"/g, "\"\"");
};

// 根据数据类型和格式CSV（策略模式）
const toCSV = (data: any, headers: any, separator = ",", enclosingCharacter = "\"") => {
  if (isJsons(data)) return jsons2csv(data, headers, separator, enclosingCharacter);
  if (isArrays(data)) return arrays2csv(data, headers, separator, enclosingCharacter);
  if (typeof data === "string") return string2csv(data, headers, separator);
  throw new TypeError("Data should be a \"String\", \"Array of arrays\" OR \"Array of objects\" ");
};

// 从对象中的嵌套属性获取header值
const getHeaderValue = (property: any, obj: any) => {
  const foundValue = property
    .replace(/\[([^\]]+)]/g, ".$1")
    .split(".")
    .reduce((o: any, p: any) => (o ? o[p] : undefined), obj);
  return (foundValue === undefined) ? ((property in obj) ? obj[property] : "") : foundValue;
};

// 将CSV数据导出为可下载的URI
const useExportCSV = () => {
  const buildURI = useCallback(({ data, uFEFF, headers, separator, enclosingCharacter }) => {
    const csv = toCSV(data, headers, separator, enclosingCharacter);
    const type = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? "application/csv" : "text/csv";
    const blob = new Blob([uFEFF ? "\uFEFF" : "", csv], { type });
    const dataURI = `data:${type};charset=utf-8,${uFEFF ? "\uFEFF" : ""}${csv}`;

    const URL = window.URL || window.webkitURL;

    return (typeof URL.createObjectURL === "undefined")
      ? dataURI
      : URL.createObjectURL(blob);
  }, []);

  return { buildURI };
};

export default useExportCSV;
