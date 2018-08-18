import React,{Component} from 'react';

class Comment extends Component{
	render(){
		
			return(
			<div>
				<p>{this.props.comment}-->Comment by {this.props.name}</p>
				<button id="edit" onClick={this.props.edit}>edit</button>
				<button id="delete" onClick={this.props.delete}>delete</button>
 			</div>


			);	
		
	}
}

export default Comment;