export const getInitialData = (pageIndex) =>
  fetch(`http://localhost:4000/items?_page=${pageIndex}&_limit=3`)
    .then((response) => response.json())
    .then((response) =>
      response.map((item) => {
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
