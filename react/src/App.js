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
         this.dec = this.dec.bind(this);
         this.INput = this.INput.bind(this);
    }

    increment=()=>{
        let data = this.state.val+1 ;
        this.setState({
            val: data
        })
    }

    dec(){
        let data = this.state.val-1;
        this.setState({
            val:data
        })
    }

    INput(e){
        let data = Number(e.target.value)
        this.setState({
            val:data
        })
    }
    render(){
        return(
            <div>
        
                <button onClick={this.increment} >
                    Increment
                </button>
                <input type="text" onChange={this.INput.bind(this)}/>
                <h1>
                    {this.state.val}
                </h1>
                <button onClick={this.dec}>
                    Decrement
                </button>
            </div>
        )
    }
}

export default App;
