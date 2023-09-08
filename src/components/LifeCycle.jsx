import React from 'react'

class LifeCycle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
        console.log("Constuctor is calling. Initialization of component and initial States")
    }

    async componentDidMount(){
        console.log("componentsDidMount is calling. Component has added to DOM");
        let response = await fetch('https://todo-redev.herokuapp.com/api/users',{
            method:"GET",
            headers:{
'Content-Type':'application/json()'
            },

        })
        const result = await response.json()
        console.log(result)
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextState.count %2 ===0;
    }
    componentDidUpdate(prevProps, prevState){
console.log("componentDidUpdate is calling. The Component updated");
console.log("previous state:", prevState);
console.log("current state:",this.state)
    }
    componentWillUnmount(){
        console.log("componentWillUnmmount is calling. Calling before deleted(component)")

    }
     increment = ()=>{
this.setState((prevState)=>({
    count:prevState.count+1
}))
    }
    render(){
        console.log('render is calling. Every time when componenr should be shown')
        return(
            <div>
<p>
    Count: {this.state.count}
</p>
<button onClick = {this.increment}>Press</button>
            </div>
        )
    }
    }
  


export default LifeCycle
