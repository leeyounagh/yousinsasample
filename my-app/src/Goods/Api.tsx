import React, { useEffect } from "react";
import axios from "axios";
const Api = () => {
  useEffect(() => {
    axios
      .get("/api/v1/search/shop.json", {
        params: {
          query: "모자",
          display: 20,
        },
        headers: {
          "X-Naver-Client-Id": "eLni7U4bHXMbke6NNVD1",
          "X-Naver-Client-Secret": "cP3kkbtLj5",
        },
      })
      .then((res) => console.log(res.data))
      .catch((e) => {});
  });
  return <div></div>;
};

export default Api;
