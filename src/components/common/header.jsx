"use strict";

var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                      <img src="images/PluralSight_BlackLogo.svg" width="80" height="20" />
                    </a>
                    <ul className="nav navbar-nav">
                      <li><a href="/">Home</a></li>
                      <li><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});