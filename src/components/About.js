import React from 'react'
import User from './User'
import UserClass from './UserClass'
import react from 'react'

class About extends react.Component{
  constructor(props){
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount(){
    // console.log("parent component did mount");
  }
  render(){
    // console.log("parent render ");
    return (
      <>
          <h1>About</h1>
          <h2>This is the about page of the app</h2>
          {/* <User name = {"Yash Panchal (function)"}/> */}

          <UserClass name = {"Yash Panchal (class)"} location={"Delhi"}/>
      </>
    )
  }
}

// const About = () => {
//   return (
//     <>
//         <h1>About</h1>
//         <h2>This is the about page of the app</h2>
//         {/* <User name = {"Yash Panchal (function)"}/> */}

//         <UserClass name = {"Yash Panchal (class)"} location={"Delhi"}/>
//     </>

//   )
// }

export default About