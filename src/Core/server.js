const DATA = () =>
  fetch(
    "https://run.mocky.io/v3/72e6966f-b14c-47e6-a963-cac8e122d89b"
  ).then((response) => response.json());

export default DATA;
