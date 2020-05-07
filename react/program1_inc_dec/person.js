import React , {Component} from 'react';
class Person extends Component{
    render(){
        return <p>Name:{this.props.name} and id is {this.props.id}</p>
    }
}

export default Person;