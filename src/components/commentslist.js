import React,{Component} from 'react';
import Comment from './comment';


class Commentslist extends Component{


	constructor(props){
		super(props);
		this.deleteComment=this.deleteComment.bind(this);
	}
	edit=(review)=>{
		this.props.editComment(review);
		};

	deleteComment=(review)=>{
		var index=this.props.list.indexOf(review);
		this.props.deleteCommentState(index);
	}

	render(){
		const comments=this.props.list.map(
			(review)=><Comment key={review.id} 
			name={review.name} 
			comment={review.comment} 
			status={review.status} 
			edit={()=>this.edit(review)}
			delete={()=>this.deleteComment(review)}
			/>
			
			);

		return(
			<div>
			{comments}
			</div>

			);
	}
}

export default Commentslist;