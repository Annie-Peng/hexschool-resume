export const turnObject = (dataSet) => {
  return Object.entries(dataSet).reduce((accumulator, [name, value]) => {

    if (Array.isArray(value)) {
      let obj = {};
      value.forEach((item)=>{
        const array = Object.entries(item);
        obj[array[0][0]]=array[0][1];
      })
      accumulator[name] = obj;
    } else {
      accumulator[name] = value;
    }

    return accumulator;
  }, {});
};