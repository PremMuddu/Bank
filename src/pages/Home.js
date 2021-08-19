
import Card from '../components/Card.js';

function Home() {
  

  return (
     <div className='content'>
   
      <Card 
       header="Universal Banking! Together for a better planet!"
       title=""
      text=""
      status="Automatically plant a tree with every account opened to help fight against deforestation!!"
      body={(<img src="coins-grass.jpg" className="img-fluid" alt="Responsive image"/>  

        )}
      />
      <div classname="btn-container">
      <button type='submit' className='btn-btn-secondary btn-lg'><a href='/#/create-account'>Join the planet</a></button>
      Already have an account?<button type='submit' className='btn btn'><a href='/#/login'>login</a></button>
    </div>
    </div>
   );
}






export default Home;