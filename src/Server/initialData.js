const axios = require("axios").default;

export const getInitialData = (pageIndex) =>
  axios
    .get(`http://localhost:4000/items?_page=${pageIndex}&_limit=3`)
    .then((res) =>
      res.data.map((item) => {
        return {
          id: item.sys.id,
          title: item.fields.title,
          price: item.fields.price,
          image: item.fields.image.fields.file.url,
          alt: item.fields.title,
          inCart: 0,
        };
      })
    );
