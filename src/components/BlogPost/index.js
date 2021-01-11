import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import {NavLink}from 'react-router-dom';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  
const [post,setPost] = useState({
id:"",
blogCategory:"",
blogTitle:"",
postedOn:"",
author:"",
blogImage:"",
blogText:"",
});
const [postId, setPostId] = useState('');

  useEffect(() => {
  const postId = props.match.params.postId;
  const post = blogPost.data.find(post => post.id == postId);
  setPost(post);
  setPostId(postId)
},post, props.match.params.postId);

if (post.blogImage == "") return null;

  return(
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">posted on {post.postedOn}by Sydne Hanks</span>
        </div>

        <div className="postImageContainer">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLV_uJHiroEDBfzJkR9T-b3aFquNsrfKiqcg&usqp=CAU'}alt="Post Image"/>
        
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
        </div>
       



      
     
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle" >Beautiful & Special Moment</h1>
          <span className="postedBy">posted on {post.postedOn}by Sydne Hanks</span>
        </div>

        <div className="postImageContainer">
          <img src={"https://media.gettyimages.com/photos/who-doesnt-like-a-good-piggyback-ride-picture-id510571468?k=6&m=510571468&s=612x612&w=0&h=NlQd0MvWZZMNrDqkOkjeAgwI8y2UWXRATUv9Vd6p7oU="} alt="Post Image"/>
        </div>

        <div className="postContent">
          <h3>Beautiful & Special Moment</h3>
            <p>Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession we insensible an sentiments as is. Law but reasonably motionless principles she. Has six worse downs far blush rooms above stood.\n\nSportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore.\n\nMust you with him from him her were more. In eldest be it result should remark vanity square. Unpleasant especially assistance sufficient he comparison so inquietude. Branch one shy edward stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the excellence preference. Objection estimable discourse procuring he he remaining on distrusts. Simplicity affronting inquietude for now sympathize age. She meant new their sex could defer child. An lose at quit to life do dull.\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.\nDemesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet ﻿no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely mrs one yet outweigh. Of acceptance insipidity remarkably is invitation.</p>
        </div>





        
     
     <div className="blogHeader">
       <span className="blogCategory">{post.blogCategory}</span>
       <h1 className="postTitle" >Skills Aquired</h1>
       <span className="postedBy">posted on {post.postedOn}by Sydne Hanks</span>
     </div>

     <div className="postImageContainer">
       <img src={'https://media.gettyimages.com/photos/quality-customer-service-is-a-team-effort-picture-id646805636?k=6&m=646805636&s=612x612&w=0&h=I0MF9-G3yVx2cJ86SjQie5eZjbY7ZYk5xSpPXyWE1h0='} alt="Post Image"/>
     </div>

     <div className="postContent">
       <h3>Skills Required</h3>
         <p>Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession we insensible an sentiments as is. Law but reasonably motionless principles she. Has six worse downs far blush rooms above stood.\n\nSportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore.\n\nMust you with him from him her were more. In eldest be it result should remark vanity square. Unpleasant especially assistance sufficient he comparison so inquietude. Branch one shy edward stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the excellence preference. Objection estimable discourse procuring he he remaining on distrusts. Simplicity affronting inquietude for now sympathize age. She meant new their sex could defer child. An lose at quit to life do dull.\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.\nDemesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet ﻿no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely mrs one yet outweigh. Of acceptance insipidity remarkably is invitation.</p>
     </div>



        






      </Card>
    </div>
    
   )

 }

export default BlogPost