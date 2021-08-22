
import Card from '../components/Card.js';

function Home() {
  

  return (
     <div className='content'>
   
      <Card 
       header= "Let's Bank for a Better Planet!"
       title=""
      text=""
      status="Automatically plant a tree with every transaction to help fight against deforestation!!"
      body={(<img src="coins-grass.jpg" className="img-fluid" alt="Responsive image"/>  

        )}
      />
      <div classname="btn-container">
      <button type='submit' className='btn-btn-secondary btn-lg'><a href='/#/create-account'>Join The Planet</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <button type='submit' className='btn-btn-secondary btn-group-sm'><a href='/#/login'>Login</a></button>
    </div>
    </div>
   );
}

export default Home;