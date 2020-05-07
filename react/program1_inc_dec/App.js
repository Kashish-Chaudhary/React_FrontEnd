import React , {Component} from 'react';
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
        

export default App;*/
// import React from 'react';
class App extends Component{
    constructor(){
        super()
        this.state={
            val:1
        }
         this.increment = this.increment.bind(this);
         this.decrement = this.decrement.bind(this);
         this.Input = this.Input.bind(this);
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
    render(){
        return(
            <div>
        
               <button onClick={this.increment}>Increment</button>

               <h1>
                   {this.state.val}
               </h1>
               <button onClick={this.decrement}>Decrement</button>
               <br></br><br></br><input onChange={this.Input.bind(this)}>

               </input>

            </div>
        )
    }
}

export default App;
