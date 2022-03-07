// ReactDOM.render(componentInstance, DOMElement)

//  Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app

// Here we are creating an instance of the `GroceryListItem` component
// todos={['Steel-cut oats', 'Spinach', 'Maybe sleep']}

var GroceryList = () => (
  <div id="todoList">
    <Bananas />
    <Avocados />
    <h2>My Grocery List</h2>
    <GroceryListItem items={['Pears', 'Kale', 'Cherries']}/>
  </div>
);

var Bananas = () => (
  <ul>Bananas</ul>
)

var Avocados = () => (
  <ul>Avocados</ul>
)

//  Create a reusable GroceryListItem component that dynamically renders a given grocery item

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// );

var GroceryListItem = (props) => {
  const items = props.items;
  // console.log(items);

  const listItems = items.map((item) =>
    <li>{item}</li>
  );

  return (
  <ul>{listItems}</ul>
  );
};


ReactDOM.render(<GroceryList />, document.getElementById("app"));
// ReactDOM.render(<Bananas />, document.getElementById("todoList"));

/*
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/


