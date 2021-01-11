import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';
/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    
    <div style={{width: '70%'}}>
    <Card style={{marginBottom: '20px'}}>
        <div className="postImageWrapper">
          <img src= {'https://media.gettyimages.com/photos/go-be-alone-with-your-thoughts-picture-id691829054?k=6&m=691829054&s=612x612&w=0&h=x2P9Ku8rfNgAiPg4givt3DMKNIrZZ0bzskPLWvkEd50='} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>Mantras To Live A Balanced Life</h2>
          <span>posted on July 21, 2020 by Sydne Hanks</span>
          <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving... </p>
          <button>Read More</button>
        </div>

     </Card>

      <Card style={{marginBottom: '20px'}}>
      <div className="postImageWrapper">
          <img src= {'https://media.gettyimages.com/photos/go-be-alone-with-your-thoughts-picture-id691829054?k=6&m=691829054&s=612x612&w=0&h=x2P9Ku8rfNgAiPg4givt3DMKNIrZZ0bzskPLWvkEd50='} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>Beauty Lies Within</h2>
          <span>posted on August 18, 2020 by Sydne Hanks</span>
          <p>Blessed you're lights. There. Behold may yielding... </p>
          <button>Read More</button>
        </div>
        </Card>



        <div className="postImageWrapper">
          <img src= {'https://media.gettyimages.com/photos/go-be-alone-with-your-thoughts-picture-id691829054?k=6&m=691829054&s=612x612&w=0&h=x2P9Ku8rfNgAiPg4givt3DMKNIrZZ0bzskPLWvkEd50='} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>Skills Aquired</h2>
          <span>posted on December 27, 2020 by Sydne Hanks</span>
          <p>Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper ... </p>
          <button>Read More</button>
        </div>
        




        <div className="postImageWrapper">
          <img src= {'https://media.gettyimages.com/photos/go-be-alone-with-your-thoughts-picture-id691829054?k=6&m=691829054&s=612x612&w=0&h=x2P9Ku8rfNgAiPg4givt3DMKNIrZZ0bzskPLWvkEd50='} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>My Portfolio</h2>
          <span>posted on January 7, 2021 by Sydne Hanks</span>
          <p>Purus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor montes placerat tortor natoque ante volutpat Class class platea hymenaeos. Nibh. Nec  ... </p>
          <button>Read More</button>
        </div>






    </div>
   )

 }

export default RecentPosts