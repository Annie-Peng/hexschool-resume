export const turnGroupObject = (dataSet) => {
  return dataSet.reduce((obj, current) => {
    const key = Object.keys(current)[0]; // 获取当前元素的键（例如 'id1', 'id2'）
    const currentObj = current[key];

    // 转换 items 数组为对象
    const itemsObj = currentObj.items.reduce((items, currentItem) => {
      const itemKey = Object.keys(currentItem)[0];
      items[itemKey] = currentItem[itemKey];
      return items;
    }, {});

    // 构建最终对象
    obj[key] = { ...currentObj, items: itemsObj };
    return obj;
  }, {});
};