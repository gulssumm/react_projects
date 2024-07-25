import React, {Component} from "react";

class ListComponent extends Component{
    render()
    {
        const {name,dept,gpa}=this.props;
        return(
            <div>
                <ol>
                    <li>Name: {this.props.name}</li>
                    <li>Department: {this.props.dept} </li>
                    <li>GPA: {this.props.gpa}</li>
                </ol>
            </div>
        )
    }
}
export default ListComponent;