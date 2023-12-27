import { Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import oreopic from './oreo2.webp';
import pic from './chocolate-and-seasalt2.webp';
import pic1 from './vennila strawberry2.webp';
import pic2 from './cherry cheesecake2.webp'
import pic3 from './pitachio2.webp';
import pic4 from './hazelnut&cookies2.webp';
import pic5 from './salted caremel soy2.webp';
import pic6 from './brambleberry-sorbet2.webp';
import pic7 from './banana-honey2.webp';
import pic8 from './raspberry-sorbet2.webp';
import pic9 from './strawberry-cocunut2.webp';
import pic10 from './lime sorbet2.webp'


import { Modal as MuiModal, Button, Card as MuiCard } from '@mui/material'; // Renamed the imports

// import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function OrderOnline() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const [selectedImage, setSelectedImage] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [cartImage,setCartImage] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <div>
      {/* Content of the drawer goes here */}
    </div>
  );

  


    const [flavorStates, setFlavorStates] = useState({
      OREO: { quantity: 0, price: 9 },
      'CHOCOLATE & SEA SALT': { quantity: 0, price: 9 },
      'VANILLA STRAWBERRY':{quantity: 0, price: 9},
      'CHERRY CHEESECAKE':{quantity: 0, price: 9},
      'PISTACHIO':{quantity: 0, price: 9},
      'HAZELNUT & COOKIES':{quantity: 0, price: 9},
      'SALTED CARAMEL SOY':{quantity: 0, price: 9},
      'BRAMBLEBERRY SORBET':{quantity: 0, price: 9},
      'BANANA & HONEY':{quantity: 0, price: 9},
      'RASPBERRY SORBET':{quantity: 0, price: 9},
      'STRAWBERRY & COCONUT':{quantity: 0, price: 9},
      'LIME SORBET':{quantity: 0, price: 9}
    });

  const handleShowModal = (item, image) => {
    setSelectedItem(item);
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setSelectedImage(null);
    setShowModal(false);
  };






const handleIncrement = (flavor) => {
  if (flavorStates[flavor]) {
    setFlavorStates((prevFlavorStates) => ({
      ...prevFlavorStates,
      [flavor]: {
        ...prevFlavorStates[flavor],
        quantity: prevFlavorStates[flavor].quantity + 1,
      },
    }));
  }

  // console.log(flavorStates[flavor].price);
};

const handleDecrement = (flavor) => {
  if (flavorStates[flavor] && flavorStates[flavor].quantity > 0) {
    setFlavorStates((prevFlavorStates) => ({
      ...prevFlavorStates,
      [flavor]: {
        ...prevFlavorStates[flavor],
        quantity: prevFlavorStates[flavor].quantity - 1,
      },
    }));
  }
};


const calculateTotalPrice = (flavor) => {

  

  return flavorStates[flavor].quantity * flavorStates[flavor].price;
};


const handleAddToCart = (item, image) => {
  console.log("amrutha",flavorStates["STRAWBERRY & COCONUT"]);  

  const updatedItem = { ...item }; // Create a copy of the item object
    updatedItem.price = flavorStates[item.itemname].quantity * 9;
  updatedItem.quantity = flavorStates[item.itemname].quantity;
console.log("important",updatedItem);
  // var items = [...item,{'price':item.quantity * 9,'quantity':flavorStates[item.itemname].quantity}];
  const updatedCartItems = [...cartItems, { ...updatedItem }];
  console.log("amrutha", updatedCartItems);  

  setCartItems(updatedCartItems);
  setCartImage([...cartImage, image]);
  setShowModal(false);

  setIsDrawerOpen(true);
};

const theme = useTheme();

  return (
    <div className='orderonline-page'>
    <div className='pickup-box'>Pickup, ASAP (in 15 minutes)
    Change
    </div>
    <div className='dialog-box'>
    <div className='icecream-flavors-catogery'>ICE CREAM FLAVORS</div>
    <div className='dairyfree-flavors-catogery'>DAIRY FREE FLAVORS</div>
    <div className='add-to-cart-icon'  >
    <Button onClick={() => setIsDrawerOpen(true)}> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Button>

<Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div className='add-to-cart-view' style={{ width: '400px' }}>
          <div className='add-to-cart-view-header' style={{ width: '100%', height: '100px', backgroundColor: 'rgb(249, 219, 121)', fontWeight: 'bolder', fontSize: '35px', display: 'flex', color: '#23222294',display: 'flex',justifyContent:'center', alignItems: 'center' }}>
            MY CART
            <IconButton style={{ position: 'absolute', top: '5px', right: '5px' }} onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className='cart-items' >
         


          {/* {cartItems.map((cartItem, index) => (
  <div key={index} className='cart-item'>
    <div className='cart-item-name' style={{ width: '50%', height: '20px' }}>
      <span>{cartItem.itemname}</span>
    </div>
    <div className='cart-item-image' style={{backgroundSize:'100% 100%' }}> 
      <img src={cartImage[index]} alt={cartItem.itemname} style={{ width: '130px', height: '130px'}}/>
    </div>
  </div>
))} */}


  {console.log("cartItem",cartItems)}
  {cartItems.map((cartItem, index) => (
  <Card key={index} >
    <Box sx={{ }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        
       
      </CardContent> 
      {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,float:'right' }}>
        
        <div className='cost-add-to' style={{}}>9$</div>
      </Box> */}
     </Box>
     <div style={{display:'flex'}}>
   <div className='cardmedia'> <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={cartImage[index]} // Ensure cartImage is an array of image URLs
      alt={cartItem.itemname}
      style={{ width: '130px', height: '130px',marginLeft:'50px' }}
    />
    </div>
     <div className='typography'><Typography component="div" variant="h5" style={{fontSize:'20px',marginLeft:'10px',marginTop:'10px'}}>
         {cartItem.itemname} 
         <br></br>
         ${cartItem.price}
         <br></br>
         <Button>+</Button> {cartItem.quantity}  <Button>-</Button>
        </Typography> 
        </div>
        </div>
  </Card>
))}
</div> 

              </div>

        {drawerContent}
      </Drawer>
      

</div>

     
      </div>
       
    <div className='flavors-orderonline'>FLAVORS</div>
    <div className='icecream-flavors-orderonline'>ICE CREAM FLAVORS</div>
    
   <div className='order-online-icecream-flavors-box'>
    <div className='order-online-container'>
      <div className='gridbox'  onClick={() => handleShowModal({ image:'',itemname:'OREO', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00',quantity:0 }, oreopic)}>

      <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black',zIndex:"2" }}>
    <Card.Img variant="top" src={oreopic} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>OREO </Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card>
      </div>

      <div className='gridbox' onClick={() => handleShowModal({ itemname:'CHOCOLATE & SEA SALT', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic)}>
        <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black',zIndex:"2" }}>
    <Card.Img variant="top" src={pic} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>CHOCOLATE & SEA SALT </Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>

    <div className='gridbox' onClick={() => handleShowModal({ itemname:'VANILLA STRAWBERRY', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' }, pic1)}>
  <Card id='order-card' style={{ width: '100%', height: '180px', border: '1px solid black', zIndex: "2" }}>
    <Card.Img variant="top" src={pic1} />
    <Card.Body>
      <div className='card-title1'><Card.Title>VANILLA STRAWBERRY</Card.Title></div>
      <Card.Text>
        This is an item on your menu. Give your item a brief description
      </Card.Text>
      <div className='order-online-button'>$9.00</div>
    </Card.Body>
  </Card>
</div>

      <div className='gridbox' onClick={() => handleShowModal({ itemname:'CHERRY CHEESECAKE', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic2)}>
        <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic2} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>CHERRY CHEESECAKE </Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>

      <div className='gridbox' onClick={() => handleShowModal({ itemname:'PISTACHIO', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic3)}>
        <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic3} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>PITACHIO </Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>

      <div className='gridbox' onClick={() => handleShowModal({ itemname:'HAZELNUT & COOKIES', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic4)}>
        <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic4} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>HAZELNUT & COOKIES </Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief descrip
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>

    </div>
    <div className='dairyfree-flavors-orderonline'>DAIRY FREE FLAVORS</div>
    <div className='order-online-icecream-flavors-box2'>
    <div className='order-online-container2'>
    <div className='gridbox2'>
    <div className='gridbox' onClick={() => handleShowModal({ itemname:'SALTED CARAMEL SOY', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic5)}>
      <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic5} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>SALTED CARAMEL SOY </Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>
    </div>

    <div className='gridbox2'>
    <div className='gridbox'onClick={() => handleShowModal({ itemname:'BRAMBLEBERRY SORBET', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic6)}>
      <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic6} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>BRAMBLEBERRY SORBET</Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>
    </div>

    <div className='gridbox2'>
    <div className='gridbox' onClick={() => handleShowModal({ itemname:'BANANA & HONEY', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic7)}>
      <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic7} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>BANANA & HONEY</Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>
    </div>

    <div className='gridbox2'>
    <div className='gridbox' onClick={() => handleShowModal({ itemname:'RASPBERRY SORBET', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic8)}>
      <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic8} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>RASPBERRY SORBET </Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>
    </div>

    <div className='gridbox2'>
    <div className='gridbox' onClick={() => handleShowModal({ itemname:'STRAWBERRY & COCONUT', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic9)}>
      <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic9} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>STRAWBERRY & COCONUT</Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>
    </div>

    <div className='gridbox2'>
    <div className='gridbox' onClick={() => handleShowModal({ itemname:'LIME SORBET', description: 'This is an item on your menu. Give your item a brief description', price: '$9.00' },pic10)}>
      <Card id='order-card' style={{ width: '100%',height:'180px',border:'1px solid black' }}>
    <Card.Img variant="top" src={pic10} />
      <Card.Body>
       <div className='card-title1'> <Card.Title>LIME SORBET </Card.Title></div> 
        <Card.Text>
        This is an item on your menu. Give your item a brief description
        </Card.Text>
       <div className='order-online-button'>  $9.00
</div> 
      </Card.Body>
    </Card></div>
    </div>
    </div>

    </div>

   </div>



<MuiModal open={showModal} onClose={handleCloseModal}>
  <div className='modal-body' style={{ width: '600px', height: '600px', backgroundColor: 'rgb(255, 255, 255)', overflowY: 'auto', position: 'relative', border: '1px white' }}>
   {selectedItem && (
      <>
        <div className='image-container'>
          <Button onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</Button>
          <img src={selectedImage} alt={selectedItem.itemname} style={{ width: '560px', height: '400px', objectFit: 'cover' }} />
        </div> 
        {/* Rest of your modal content */}
        <div className='popup-footer'>
          <div className='popup-footer-name'>{selectedItem.itemname}</div>
          <div className='popup-footer-description'>{selectedItem.description}</div>
          <div className='popup-footer-specialrequest'>Special Requests</div>
          <input type='' className='popup-footer-specialrequestbox' placeholder="'Add them here. We'll do our best to make it happen"></input>
          <hr style={{ marginTop: '30px' }} />
          <div className='popup-footer-name-add-to-my-order-box' style={{ display: 'flex', width: '99%', height: '100px', marginTop: '10px' }}>
            <div className='popup-footer-name-add-to-my-order-box-incrementanddecrement' style={{ width: '19%', height: '60px', marginTop: '20px', marginLeft: '20px', border: '1px solid black' }}>
              <button onClick={() => handleDecrement(selectedItem.itemname)} style={{ marginTop: '20px', marginLeft: '10px' }}>-</button>
              <span style={{ margin: '10px 10px' }}>{flavorStates[selectedItem.itemname].quantity}</span>
              <button onClick={() => handleIncrement(selectedItem.itemname)}>+</button>
            </div>
            <div className='popup-footer-name-add-to-my-order-box-price'>
            
            {/* Add to my order ${calculateTotalPrice(selectedItem.itemname)} */}
            <button onClick={() => handleAddToCart(selectedItem, selectedImage)} style={{ width: '240%', height: '60px', paddingTop: '10px', marginTop: '20px', marginLeft: '20px', border: '1px solid black', textAlign: 'center', backgroundColor: '#BBA45B', fontSize: '15px' }}>Add to my order ${calculateTotalPrice(selectedItem.itemname)}</button>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
</MuiModal> 


</div>
  )
}

export default OrderOnline
