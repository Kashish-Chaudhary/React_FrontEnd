import React , {Component} from 'react';
 // import ReactDom from 'react-dom'
 import { Navbar} from 'reactstrap';
 import { NavbarBrand} from 'reactstrap'
 import Menu from './Components/MenuComponent'
import { DISHES } from './shared/dishes'
class App extends Component{

    constructor(props){
      super(props);
      this.state={
        dishes:DISHES
      };
    }


  render(){
        return(
            <div>
            <Navbar dark color="primary">
            <div className="container">
            <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
            </div>
            </Navbar>
            <Menu dishes={this.state.dishes}/>
            </div>
        )
    }
}

export default App;


// import Person from './person'
// import Daa from './daa'
// let person=[
//     {
//         name:"A",
//         id:1
//     },
//     {
//         name:"B",
//         id:2
//     },
//     {
//         name:"C",
//         id:3
//     },
//     {
//         name:"D",
//         id:4
//     },
// ]
// class App extends Component{
//     render(){
//         // return <Person name={person[0].name} id={person[0].id} />
//         return <div>{person.map((p1,index)=> <Person name={p1.name} id={p1.id}/>)}</div>

//     }
// }

/*
class App extends Component{
    constructor()
    {
        super();
        this.state = {person:[
            {
                name: "k",
                id: 1
            },
            {
                name: "a",
                id: 2
            },
            {
                name: "s",
                id: 3
            }
        ]}
        this.nameChanger = this.nameChanger.bind(this);
    }
    nameChanger()
    {
        this.setState(
        {
            person: [
                {
                    name: "r",
                    id: 1
                },
                {
                    name: "a",
                    id: 2
                },
                {
                    name: "r",
                    id: 3
                }
            ]
        })
    }
    render()
    {
        // return this.state.person.map((p)=><Person name = {p.name} id = {p.id}/>)
        // return <div> <button onClick = {this.nameChanger}> Click Me </button> {this.state.person.map((p1,index)=> <Person name={p1.name} id={p1.id}/>)} </div>
        return(
            <Daa />
        )
    }
}
increment=()=>{
   this.setState({
       val:this.state.val+1
   })
}

decrement=()=>{
   this.setState({
       val:this.state.val-1
   })
}

Input=(e)=>{

    this.setState({
        val:Number(e.target.value)
    })
}

export default App;*/
// import React from 'react';
