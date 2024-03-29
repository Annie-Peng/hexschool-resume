const cities = [
  {
    state_name: null,
    name: "臺北市",
    full_name: "臺北市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E8%87%BA%E5%8C%97%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "基隆市",
    full_name: "基隆市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E5%9F%BA%E9%9A%86%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "新北市",
    full_name: "新北市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E6%96%B0%E5%8C%97%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "連江縣",
    full_name: "連江縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E9%80%A3%E6%B1%9F%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "宜蘭縣",
    full_name: "宜蘭縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E5%AE%9C%E8%98%AD%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "新竹市",
    full_name: "新竹市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E6%96%B0%E7%AB%B9%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "新竹縣",
    full_name: "新竹縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E6%96%B0%E7%AB%B9%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "桃園市",
    full_name: "桃園市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E6%A1%83%E5%9C%92%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "苗栗縣",
    full_name: "苗栗縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E8%8B%97%E6%A0%97%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "臺中市",
    full_name: "臺中市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E8%87%BA%E4%B8%AD%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "彰化縣",
    full_name: "彰化縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E5%BD%B0%E5%8C%96%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "南投縣",
    full_name: "南投縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E5%8D%97%E6%8A%95%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "嘉義市",
    full_name: "嘉義市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E5%98%89%E7%BE%A9%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "嘉義縣",
    full_name: "嘉義縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E5%98%89%E7%BE%A9%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "雲林縣",
    full_name: "雲林縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E9%9B%B2%E6%9E%97%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "臺南市",
    full_name: "臺南市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E8%87%BA%E5%8D%97%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "高雄市",
    full_name: "高雄市",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E9%AB%98%E9%9B%84%E5%B8%82.json",
  },
  {
    state_name: null,
    name: "南海島",
    full_name: "南海島",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E5%8D%97%E6%B5%B7%E5%B3%B6.json",
  },
  {
    state_name: null,
    name: "澎湖縣",
    full_name: "澎湖縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E6%BE%8E%E6%B9%96%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "金門縣",
    full_name: "金門縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E9%87%91%E9%96%80%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "屏東縣",
    full_name: "屏東縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E5%B1%8F%E6%9D%B1%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "臺東縣",
    full_name: "臺東縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E8%87%BA%E6%9D%B1%E7%B8%A3.json",
  },
  {
    state_name: null,
    name: "花蓮縣",
    full_name: "花蓮縣",
    zipcodes_endpoint:
      "https://demeter.5fpro.com/tw/zipcode/%E8%8A%B1%E8%93%AE%E7%B8%A3.json",
  },
];

// 來源：https://marsz.tw/blog/articles/411-台灣縣市鄉鎮選單-js

export const cityOptions = cities.map((data) => {
  return { option: data.name, value: data.name };
});