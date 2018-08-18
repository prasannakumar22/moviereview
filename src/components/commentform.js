import React ,{Component} from 'react';

class CommentForm extends Component{

	constructor(props){
		super(props);
		this.state={"user":"","comment":""};
	}
/*componentDidMount(props){
	this.setState({user:this.props.user,comment:this.props.comment});
}*/

	handleComment=(e)=>{
		e.preventDefault();
		//this.props.handleComment({"user":e.target.value,"comment":e.target.value})
		this.setState({"comment":e.target.value});

	}

	handleUser=(e)=>{
		e.preventDefault();
		//this.props.handleUser({"user":e.target.value,"comment":e.target.value});
		this.setState({"user":e.target.value});

	}

	handleSubmit=(e)=>{
		e.preventDefault();
		var name=this.state.user;
		var comment=this.state.comment;
		this.props.submit({"name":name,"comment":comment});
		
	}

	render(){
		return(
			<div>
				<label>Comment  </label>	
				<input type="text" name="Comment"  defaultValue={this.props.comment}   onChange={this.handleComment}/><br/>
				<label>Username </label>
				<input type="text" name="user"   defaultValue={this.props.user}  onChange={this.handleUser}/><br/>
				<button type="submit" onClick={this.handleSubmit}>submit</button>
			</div>

			);
	}
}

export default CommentForm;