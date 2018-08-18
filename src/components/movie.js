import React,{Component} from 'react';
import poster from '../images/poster.jpg';

import Commentslist from './commentslist';
import CommentForm from './commentform';

class Movie extends Component{

	constructor(props){
		super(props);
		
		this.state={commentslist:[{"name":"prasanna","comment":"Worthwatching"},
	{"name":"ram","comment":"extraordinary movie with good story and screenplay"}]} ;

		

	}

	submit=(review)=>{
		this.state.commentslist.push(review);
		this.setState({commentslist:this.state.commentslist});
	}

	delete=(index)=>{
		this.state.commentslist.splice(index,1);
		this.setState({commentslist:this.state.commentslist});
	}

	edit=(review)=>{
console.log(this.state.comment);
		this.setState({commentslist:this.state.commentslist,user:review.name,comment:review.comment});

	}

	render(){
		
		
		return(
			<div className='container'>
				<img src={poster}/>
				<CommentForm comment={this.state.comment} user={this.state.user} submit={this.submit}/>
				<Commentslist editComment={this.edit} deleteCommentState={this.delete} list={ this.state.commentslist}/>
				
			</div>
			);
	
	}
}

export default Movie;