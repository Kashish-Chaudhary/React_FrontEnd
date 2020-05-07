import React from 'react'

class Daa extends React.Component{
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

export default Daa;