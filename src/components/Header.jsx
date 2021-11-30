import React, { Component } from "react";

class Header extends Component{

    render(){
        return(
        <div>
            <i className="nabar"></i>
            <span>Habit Tracker</span>
            <span clssName="nabar-count">{this.props.totalCount}</span>
        </div>
        )}
}
export default Header;