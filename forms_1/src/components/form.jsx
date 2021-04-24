import React, { Component } from 'react'; 
 
class Forms extends Component {
    constructor(props){
        super(props)
        this.state={
         username:'' ,
         comment:'' , 
         topics: 'react'
        }
    } 

    handleUsernameChange = (event) => {
       this.setState({
              username:event.target.value
           }) 
    } 

    handleCommentChange = (event) => {
        this.setState({
            comment:event.target.value
        })
    } 
    handletopicsChange =(event)=> {
        this.setState({
            topics:event.target.value
        }) 
    } 

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topics}`)
        event.preventDefault()
    }
    render() {  
        const{ username,comment, topics} =this.state;
        return ( 
            // <div className="forms1">
            //  Form Compomnents
            // </div>  
            <form onSubmit= {this.handleSubmit} >
                <div>
                    <label>UserName</label> 
                    <input type="text" 
                    value={username} 
                    onChange={this.handleUsernameChange}  
                    /> 

                </div> 
                <div> 
                    <label>Comments</label> 
                    <textarea type="text"
                    value={comment} 
                    onChange={this.handleCommentChange}>
                    </textarea>
                </div> 
                <div>  
                    <label>Topics</label>
                   <select value={topics} onChange={this.handletopicsChange} > 
                     <option value ="framework"> framework</option>
                      <option value="react">React</option>
                      <option value="vuejs">Vuejs</option> 
                      <option value="Angular">Angular</option>
                  </select>
              </div> 
              <button type="submit">
                 Submit
              </button>
            </form>
         );
    }
}
 
export default Forms;