import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidbar';
import Layout from '../../components/Layout';
import About from '../About';
import ContactUs from '../Contact';

const SideImage = props =>{
  return (
    <div style = {{height: `{$sideImageHeight}px`}}>
      <img src ={"https://media.gettyimages.com/photos/who-doesnt-like-a-good-piggyback-ride-picture-id510571468?k=6&m=510571468&s=612x612&w=0&h=NlQd0MvWZZMNrDqkOkjeAgwI8y2UWXRATUv9Vd6p7oU="}>
      <h3>Beautiful And Special Moment</h3>
    </img>
    </div>
  );
}


const Home = props =>{

  const galleryHeight = 450;
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
         <section style = {{width:'70%'}}>
           <div>
              <img src = {'https://media.gettyimages.com/photos/who-doesnt-like-a-good-piggyback-ride-picture-id510571468?k=6&m=510571468&s=612x612&w=0&h=NlQd0MvWZZMNrDqkOkjeAgwI8y2UWXRATUv9Vd6p7oU='}/>
           
           

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







           
           </div>
         </section>

         <section className ={"sideImageWrapper"} style={{width:'30%'}}>
         <div style ={{height:`${sideImageHeight}px`}}>
              <img src = {'https://media.gettyimages.com/photos/romantic-winter-vacation-picture-id623288542?k=6&m=623288542&s=612x612&w=0&h=tsE-nCco54BvoeQf5lJTDQFTvo3CyvRZX7m-LwN9RIw='} alt=""/>
           </div>
           <div style ={{height:`${sideImageHeight}px`}}>
              <img src = {'https://media.gettyimages.com/photos/showing-off-his-skills-picture-id509915515?k=6&m=509915515&s=612x612&w=0&h=uR6QiIEvQ3VbYxuRyDkA3q5z425_v3eSAXgP2N20dCE='} alt=""/>
           </div>
           <div style ={{height:`${sideImageHeight}px`}}>
              <img src = {'https://media.gettyimages.com/photos/finishing-her-job-picture-id695485366?k=6&m=695485366&s=612x612&w=0&h=_RK4ln1GUF6XL8mp5z-JbHxjGuWtm8WW1OjbeKBv57k='} alt=""/>
           </div>
         </section>
        </div>
       
      </Card>

    <section className="HomeContainer">
      <div style={{width: '70%'}}>
    <Card style={{marginBottom: '20px'}}>
        <div className="postImageWrapper">
          <img src= {'https://media.gettyimages.com/photos/go-be-alone-with-your-thoughts-picture-id691829054?k=6&m=691829054&s=612x612&w=0&h=x2P9Ku8rfNgAiPg4givt3DMKNIrZZ0bzskPLWvkEd50='} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>Mantras To Live A Balanced Life</h2>
          <span>posted on July 21, 2020 by Sydne Hanks</span>
          <p>Take a gentle, deep breath in for a count of 4.

Now slowly breathe out for a count of 6, a little longer than your inhalation.

Repeat 3 times.

With SKY practice as part of your daily meditation routine, you will find:
A calmer, clearer mind to handle tough, stressful situations
More energy to get stuff done
Stronger immunity and well-being 
Using the science of breath, you can raise your energy, manage your difficult emotions, and find lasting ease...so you’re ready to face your day confidently. Every day!
What is stress? 



</p>
          <button>Read More</button>
        </div>

     </Card>

      <Card style={{marginBottom: '20px'}}>
      <div className="postImageWrapper">
          <img src= {'https://media.gettyimages.com/photos/autumn-harvest-picture-id1097842636?k=6&m=1097842636&s=612x612&w=0&h=u_LYqwz3XFqQoQGFJh1LaR527SuMf5PuRODFLF2wE3U='} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>Beauty Lies Within</h2>
          <span>posted on August 18, 2020 by Sydne Hanks</span>
          <p>Whether you don’t have skin care concerns, or you see a dermatologist regularly, it is important to understand how diet affects your skin . A healthy diet may provide you with clearer skin, but it may even prevent skin cancers like melanoma or carcinoma. Continue reading to learn more about diet and your skin’s health... </p>
          <button>Read More</button>
        </div>
        </Card>


        <Card style={{marginBottom: '20px'}}>
        <div className="postImageWrapper">
          <img src= {'https://media.gettyimages.com/photos/quality-customer-service-is-a-team-effort-picture-id646805636?k=6&m=646805636&s=612x612&w=0&h=I0MF9-G3yVx2cJ86SjQie5eZjbY7ZYk5xSpPXyWE1h0='} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>Skills Aquired</h2>
          <span>posted on December 27, 2020 by Sydne Hanks</span>
          <p>Skill I have learned: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Database Theory, SQL, Command Line, Git, and why you need to know them.... </p>
          <button>Read More</button>
        </div>
      

</Card>

        <Card style={{marginBottom: '20px'}}>
        <div className="postImageWrapper">
          <img src= {'https://media.gettyimages.com/photos/scandinavian-style-modern-home-office-interior-picture-id1177844431?k=6&m=1177844431&s=612x612&w=0&h=f9sbDwNaQi4MhZYX2mr-7oG4XewQVFFPemfv7N_UAmA='} alt=""/>
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>What's In Your Portfolio</h2>
          <span>posted on January 7, 2021 by Sydne Hanks</span>
          <p>Purus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor montes placerat tortor natoque ante volutpat Class class platea hymenaeos. Nibh. Nec  ... </p>
          <button>Read More</button>
        </div>

</Card>
        
      </div>

      <Sidebar />
    </section>
      
      
    </div>
  );
}

export default Home;