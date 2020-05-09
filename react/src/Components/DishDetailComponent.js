import React,{ Component } from 'react'
// import {Media} from 'reactstrap'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

class DishDetail extends Component{
  constructor(props){
    super(props);

}

renderComments(comments)
{var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

 const com = comments.map((comment)=> {
  return (
    <div key={comment.id} >

      <p> {comment.comment}</p>
      <p> -- {comment.author} , {month[parseInt(comment.date.substr(5,2))-1]} {comment.date.substr(8,2)}, {comment.date.substr(0,4)} </p>
    </div>
  );
});
return (
  <div className="col-lg-5 col-md-5 col-sm-12 m-1">
   <h2>Comments</h2><br/>
     {com}
   </div>
)
}
  render(){
  //  console.log("props             "+this.props.dish);
  // {console.log(month[parseInt(comment.date.substr(5,2))-1])}

if(this.props.dish!=null){
    return (

<div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12 m-1">

      <Card>
          <CardImg width="100%"  src={this.props.dish.image} alt={this.props.dish.name}/>
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>

     </div>

     {this.renderComments(this.props.dish.comments)}
     </div>

    );
  }

  else return(
    <div></div>
  );
  }
}
export default DishDetail;
