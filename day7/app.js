//console.log("Hello from day7");
//----------------------------------------

// const item1 = React.createElement("Li", {}, "item1");
// const item2 = React.createElement("Li", {}, "item2");
// const list = React.createElement("Li", {}, { item1, item2 });

const list = (
  <ul>
    <li>Item1</li>
    <li>Item2</li>
  </ul>
);

const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);
reactRoot.render(list);
