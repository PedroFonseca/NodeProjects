var React = require('react');
var ReactDOM = require('react-dom');

// This works because of browserify
var GroceryItemList = require('./components/groceryItemList.jsx');
var items = [
    {name: 'item1'},
    {name: 'item2', purchased: true},
    {name: 'item3'},
]
ReactDOM.render(<GroceryItemList items={items}/>, app);