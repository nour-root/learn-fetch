const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    let data = res.json();
    return data;
  });
};
export default getData;
