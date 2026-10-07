import React from "react"

class UserClass extends React.Component {
    constructor (props){
        super(props);
        this.state={
            userInfo : {},
        }
        // console.log("child constructor");
        
    }
    async componentDidMount(){
        // console.log("child component did mount");

        // use for api call 
        const data = await fetch("https://api.github.com/users/yashpanchal0503");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
    }
    render(){
        const {name , location,avatar_url}= this.state.userInfo;
        // console.log("child render");
        
        
        return(
         <div>
            <img src = {avatar_url}></img>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h2>yash2007panchal@gmail.com</h2>
        </div>
        )
    }
}

export default UserClass;