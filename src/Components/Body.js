import React from "react";

const students=['Pepito','Jose','German','Luis']
const profesor = "Pepito"
const name = "Mobile"

const Section = (props) => {
  return (
    < div   className="card-body">
      <h5 className="card-title">{profesor}</h5>
      <p className="card-text">{name}</p>
    </div>
  )
}

export default class Body extends React.Component{
  constructor() {
    super();
    this.state={ show: false };
  }
  toggle() {
    this.setState({show:!this.state.show});
  }
  render() {
    return(
    <div  class="card w-75" className="container">
      <div  class="card w-75" className="row">
        <div  class="card w-75" className="col ">
          <h1>*ngIf</h1>
          <button className="btn btn-primary" onClick={this.toggle.bind(this)}>
            BUTTON
          </button>
          {this.state.show ? <Section /> : null}
        </div>
        <div className="col">
                <h1> *ngFor </h1>
                <ul className="list-group ">
                    {students.map(student=>{
                      return <li >{student}</li>
                      })
                      }
                </ul>
            </div>
      </div> 
    </div>);
  }
} 
