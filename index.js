const App = () => {
  let count = 0;
  let add = () => {
    count += 1;
    console.log("count is --------> ", count);
  };

  return add;
};
export default App;
