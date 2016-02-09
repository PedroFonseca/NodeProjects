var React = require('react');
var ReactDOM = require('react-dom');

// This works because of browserify
var GroceryItemList = require('./components/groceryItemList.jsx');

ReactDOM.render(<GroceryItemList />, app);