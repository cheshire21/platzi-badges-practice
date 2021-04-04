import React from 'react';
class BadgeForm extends React.Component {
    state = { };
    handleChange = e => {
        // console.log({
        //     name:e.target.name,
        //     value: e.target.value,
        // });
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    // handleClick = e=>{
    //     console.log('Se dio Click');
    // };
    // handleSubmit = e=>{
    //     e.preventDefault();
    // };

    render() { 
        return (
           <div>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label htmlFor="">First Name</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}></input>
                   </div>
                   <div className="form-group">
                       <label htmlFor="">Last Name</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}></input>
                   </div>
                   <div className="form-group">
                       <label htmlFor="">Email</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="email" value={this.props.formValues.email}></input>
                   </div>
                   <div className="form-group">
                       <label htmlFor="">Job Title</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}></input>
                   </div>
                   <div className="form-group">
                       <label htmlFor="">Twitter</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}></input>
                   </div>
                   <button onClick={this.props.onSubmit} className="btn btn-success">Save</button> 
                    {this.props.error && <p className="text-danger">{this.props.error.message }</p>}
               </form>
           </div>
        );
    }// para evitar la actualizacion de pagina con el boton se puede colocar a button type="button" por defecto esta en submit o en form colocar un evento onSubmit
}
 
export default BadgeForm;
