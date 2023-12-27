
import './App.css'
import Button from 'react-bootstrap/Button';
import pic from './chocolate-and-seasalt.webp';
import pic1 from './vennila strawberry.webp';
import pic2 from './cherry cheesecake.webp'
import pic3 from './pitachio.webp';
import pic4 from './hazelnut-cookies.webp';
import pic5 from './salted caremel soy.webp';
import pic6 from './brambleberry-sorbet.webp';
import pic7 from './banana-honey.webp';
import pic8 from './raspberry-sorbet.webp';
import pic9 from './strawberry-cocunut.webp';
import pic10 from './lime sorbet.webp'
import { Card, Row, Col } from 'react-bootstrap';
function Flavours(){
return(
    <>
    <div className="flavourspage">
        <div className='ourflavours-header'>
            <div className='our'>OUR</div>
            <div className='flavors'>FLAVORS</div>
        </div>
       <div className='icecream-flavors'>
       
        <div className='flavors2'>FLAVORS</div>
        <div className='heading'>ICE CREAM FLAVORS</div>
        <div className='line'></div>

<div className='oreo-icecream'>
        <div className='cart1'></div>
        <div className='oreo1'><br></br><br></br>OREO</div>
          <div className='oreo2'><br></br><br></br>
          <div className='line2'></div><br></br><br></br>
          This is an item on your menu. Give your item a brief description.
          <br></br><br></br>$9</div>

        </div>
    <div className='chocolate-and-seasalt'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title><br></br>
            CHOCOLATE & SEA SALT</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 
    

    <div className='vennila-strawberry'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic1} />
      <Card.Body>
        <Card.Title><br></br>
        VANILLA STRABERRY
</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 
    

    <div className='cherry-cheesecake'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic2} />
      <Card.Body>
        <Card.Title><br></br>
        CHERRY CHEESECAKE
</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 
    

    <div className='pitachio'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic3} />
      <Card.Body>
        <Card.Title><br></br>
        PITACHIO
</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 


    <div className='hazelnut'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic4} />
      <Card.Body>
        <Card.Title><br></br>
        HAZELNUT & COOKIES
</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 
    
  
        <div className='dairy-free-flavours'>DAIRY FREE FLAVORS</div>
        <div className='line'></div>

        <div className='salted-caramel-soy'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic5} />
      <Card.Body>
        <Card.Title><br></br>
        SALTED CARAMEL SOY
</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 


    <div className='brambleberry-sorbet'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic6} />
      <Card.Body>
        <Card.Title><br></br>
        BRAMBLEBERRY SORBET

</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 


    <div className='banana-honey'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic7} />
      <Card.Body>
        <Card.Title><br></br>
        BANANA & HONEY
</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 

    <div className='raspberry-sorbet'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic8} />
      <Card.Body>
        <Card.Title><br></br>
        RASPBERRY SORBET
</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 

    <div className='strawberry-coconut'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic9} />
      <Card.Body>
        <Card.Title><br></br>
        STRAWBERRY & COCONUT

</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div>

     <div className='lime-sorbet'>   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic10} />
      <Card.Body>
        <Card.Title><br></br>
        LIME SORBET


</Card.Title>
            <div className='line2'></div>
        <Card.Text>
            <br></br>
        <b>This is an item on your menu. Give your item a brief description.</b>
        </Card.Text>
        <div variant="primary"><b>$9</b></div>
      </Card.Body>
    </Card>
    </div> 

        </div> 

    </div>
    </>
    
)
}
export default Flavours;
