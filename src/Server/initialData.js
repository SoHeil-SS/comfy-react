export const getInitialData = () =>
  fetch("https://run.mocky.io/v3/72e6966f-b14c-47e6-a963-cac8e122d89b")
    .then((response) => response.json())
    .then((response) =>
      response.items.map((item) => {
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
