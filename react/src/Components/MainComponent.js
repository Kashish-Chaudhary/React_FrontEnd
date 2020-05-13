import React , {Component} from 'react';
 // import ReactDom from 'react-dom'
 import  DishDetailComponent  from './DishDetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
 import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import { Switch ,Route, Redirect } from 'react-router-dom';
class Main extends Component{

    constructor(props){
      super(props);
      this.state={
        dishes:DISHES,
        selectedDish:null
      };
    }

    onDishSelect(dishId){
console.log("main");
      this.setState({
        selectedDish:dishId
      });
    }

  render(){
    const HomePage= () => {
      return (
        <Home/>
      );
    }
        return(
            <div>

            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />
                <Redirect to = "/home"/>
            </Switch>
            <Footer/>
            </div>
        )
    }
}

export default Main;


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
