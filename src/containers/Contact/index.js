import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidbar';
import Layout from '../../components/Layout';
import About from '../About';


const Contact = props =>{

  const galleryHeight = 550;
  const galleryWidth = 1300;
  const galleryStyle = {
    height: galleryHeight+'px',
    width: galleryWidth+'px',
    overflow:'hidden'
}

  const sideImageHeight = galleryHeight /3;
  return (
    <div>
      <Card>
        <div className="galleryPost" style={galleryStyle}>
         <section style = {{width:'100%'}}>
           <div>
              <img src = {'https://media.gettyimages.com/photos/directly-above-view-of-a-man-working-on-laptop-in-coffee-shop-view-picture-id1141681396?k=6&m=1141681396&s=612x612&w=0&h=UF7XOj-D5nuM15fVK6mZWdcC87xn6dW-Ta0lDVYSArg='}/>
           
           

              <Card style={{marginTop: '20px'}}>
        <div className="postImageWrapper">
          <img src= {''} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span></span>
          <h2></h2>
          <span></span>
          <p>you should focus on showing the value you’ll bring to a new organization and why employers should want you on their team. Who you are and what you’re doing.  Emphasize hard skills first and foremost
While it’s okay to put a few soft skills on your 
How you got there
Where you’re looking to go next
Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience. how passion for your work
After you’ve demonstrated hard skills, past results, data, accomplishments, etc., it’s time to show some passion for your work.

Find a way to show that you’re excited about what you do and you’ll attract more employers.</p>
          
        </div>

     </Card>







           
           </div>
         </section>

         <section className ={"sideImageWrapper"} style={{width:'0%'}}>
         <div style ={{height:`${sideImageHeight}px`}}>
              <img src = {'https://media.gettyimages.com/photos/abstract-white-and-light-gray-geometric-rhombus-shape-background-picture-id1086951114?k=6&m=1086951114&s=612x612&w=0&h=_vhf4MQMRMmzBGy7a_dSUjf_GzBQttwDVfg8zfr5OGI='} alt=""/>
           </div>
           <div style ={{height:`${sideImageHeight}px`}}>
              <img src = {'https://media.gettyimages.com/photos/abstract-white-and-light-gray-geometric-rhombus-shape-background-picture-id1086951114?k=6&m=1086951114&s=612x612&w=0&h=_vhf4MQMRMmzBGy7a_dSUjf_GzBQttwDVfg8zfr5OGI='} alt=""/>
           </div>
           <div style ={{height:`${sideImageHeight}px`}}>
              <img src = {'https://media.gettyimages.com/photos/abstract-white-and-light-gray-geometric-rhombus-shape-background-picture-id1086951114?k=6&m=1086951114&s=612x612&w=0&h=_vhf4MQMRMmzBGy7a_dSUjf_GzBQttwDVfg8zfr5OGI='} alt=""/>
           </div>
         </section>
        </div>
       
      </Card>

    <section className="HomeContainer">
      <div class="container">
          <img src= {''} alt=""/>
        

        <div style={{textAlign:'center'}}>
          
          <span></span>
          <p> Sydne Hanks <br/> Phone: 801.664.3346 <br/> email: sydnehanks@gmail.com <br/>  <br/> </p>
      </div>    
        </div>

    


     
    </section>
      
      
    </div>


  );
}

export default Contact;