import { Link } from 'react-router-dom';
function Home(){
    return(
        <div className="container">
            <div className="menu "> 500 Terry Francine Street San Francisco, CA 94158  |  Daily 8AM-10PM  
       
        <div className="fb-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
        </div>
        
        <div className="twitter-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
        </div>
        <div className="instagram-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
        </div>
            </div>
        <div className="banner">
        <div className="nav">
        <ul className="test">
        <li><Link to={'/flavours'}>FLAVOURS</Link></li>
        <li><Link to={'/Book-an-event'}>BOOK AN EVENT</Link></li>
        <li><Link to={'/About'}>ABOUT</Link></li>
        <li><Link to={'/Reservation'}>RESERVATION</Link></li>
        </ul></div>
        <div className="shopname">gelato</div>
       
<Link to={'/orderonline'}><button className="button-28" >ORDER ONLINE</button></Link>

        <div className="login">
            <div className="loginlogo">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
            </div>
            Log in</div>
            <div className="pink">
                <div className="handcrafted">HAND CRAFTED</div>
                <div className="icecream">ICE CREAM</div>
                <button className="button-28-2" >ORDER ONLINE</button>

            </div>
            <div className="page1"></div>
        <div className="page2">
            <div className="our-flavors">OUR FLAVORS</div>
            <div className="fresh">fresh n' tasty</div>
            <div className="page2paragraph">
                I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me to add your own content and 
                make changes to the font. 
             </div>
             <button className="menubutton">MENU</button>
        </div>
        <div className="page3 ">
            <div className="page3img">
            <div className="enjoy">ENJOY</div>
            <div className="dairyfree">DAIRY FREE</div>
            <button className="menubutton2">MENU</button>
            </div>
        </div>
        
        <div className="page4">
        <div className="our-flavors2">OUR PLACE </div>
            <div className="fresh2">Ice cream by the sea</div>
            <div className="page4paragraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
            <button className="readmorebutton">READ MORE</button>
        </div>
        <div className="page5"></div>
        <div className="page6 ">
            <div className="getyours">GET YOURS</div>
            <div className="wedeliver">WE DELIVER</div>
            <button className="orderonlinebutton">ORDER ONLINE</button>
        </div>
        <div className="dessert-page"></div>
        <div className="dessert-page2">
            <div className="dessert">DESSERTS</div>
            <div className="icecreame-cookies">Ice cream goodies</div>
            <div className="dessertpageparagraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
            <button className="menubutton">MENU</button>
        </div>
        <div className='page9'>
        <div className="page9a"></div>
        </div>
        <div className="page9.1"></div>
        <div className="doubletap">#DOUBLE TAP</div>
        <div className="page10"></div>
        <div className="page11">
        <div className="address">ADDRESS<br></br><br></br> 

500 Terry Francine St.

San Francisco,<br></br>

CA 94158</div>
        <div className="contact">CONTACT<br></br><br></br>
        
info@mysite.com

Tel: 123-456-7890</div>
        <div className="hours">HOURS<br></br><br></br>OPEN DAILY

10AM-10PM

</div>
<div className="mailinglist">MAILING LIST</div>
    <div className='footer-email'  placeholder='enter your email here'></div>
    <button className='buttonfooter'>subscribe</button>
</div>
        </div>
        </div>
    )
}
export default Home;