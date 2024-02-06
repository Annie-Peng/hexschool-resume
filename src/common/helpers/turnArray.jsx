export const turnArray = (dataSet) => {

  const result = Object.entries(dataSet).reduce((accumulator, [name, values]) => {
    if (typeof values === "object") {
      let formattedArray = Object.entries(values).map(([itemKey, itemValue]) => {
        if(typeof itemValue && typeof itemValue.items === "object") return deepTurnArray({ [itemKey]: itemValue });
        return { [itemKey]: itemValue };
      });
      accumulator[name] = formattedArray;
    } else {
      accumulator[name] = values;
    }
    return accumulator;
  }, {});

  return result;
};

function deepTurnArray(dataSet) {
  return Object.entries(dataSet).reduce((accumulator, [name, values]) => {
    // 复制原始对象，以保留其他属性（如 name）
    let newObj = { ...values };

    // 如果存在 items 属性且为对象，则转换为数组
    if (values.items && typeof values.items === "object") {
      newObj.items = Object.entries(values.items).map(([itemKey, itemValue]) => {
        return { [itemKey]: itemValue };
      });
    }

    // 将转换后的对象添加到累加器
    accumulator[name] = newObj;
    return accumulator;
  }, {});
}