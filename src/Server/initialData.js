import axios from "axios";
import { api } from "../Constants/api";

export const getInitialData = (pageIndex) =>
  axios
    .get(`${api.mainApi}/items?_page=${pageIndex}&_limit=3`)
    .then((res) =>
      res.data.map((item) => {
        return {
          id: item.sys.id,
          textContent: item.fields.title,
          price: item.fields.price,
          image: item.fields.image.fields.file.url,
          alt: item.fields.title,
          inCart: 0,
        };
      })
    )
    .catch((e) => console.log(e));
