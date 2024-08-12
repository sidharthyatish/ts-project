const method = () => {
  console.log("Hello world");
};

(() => {
  method();
})();

console.log("Hello");
