import React from 'react';
import './navbar.css'
import './Head.css'
import './whatwedo.css'
import './bigimgs.css'
import './End.css'



const Aperture = () => {
  return (
    
    <div>

      <div className='navbar'>
        <div className='left'><div className='logo'></div></div>
        <div className='right'>
          <div>Business areas</div>
          <div>Featured images</div>
          <div>Gear cage</div>
          <div>Contact</div>
          <div>Get template</div>
        </div>
      </div>

{/* ----------------------------head------------------------ */}

    <div>
      <div className='backg-img'>
        <p>Photographer & Filmmaker</p>
        <h1>Aperture Studios</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        <div className='foto-info'>
          <div className='time'></div><div>1/2000s</div>
          <div className='camera'></div><div>f/11</div>
          <div className='iso'></div><div>100</div>
          <div className='location'></div><div>Iceland</div>
        </div>
      </div>
    </div>


    {/* ----------------------------------------What we do---------------------------         */}

      <div>

        <div className='head-text'>
          <div><h4>What we do.</h4></div>
          <div><p>The areas that we're specialized in.</p></div>
        </div>

        <div className='cards'>
          <div className='pc img'>
            <div className='big-text'>Product Photography</div>
            <div className='small-text'>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</div>
            <div className='btn'><div className='blackbox'></div> Read more</div>
          </div>
          <div className='line img'>
            <div className='big-text'>Architecture Photography</div>
            <div className='small-text'>Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.</div>
            <div className='btn'><div className='blackbox'></div> Read more</div>
          </div>
          <div className='tree img'>
            <div className='big-text'>Drone Photography</div>
            <div className='small-text'>Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</div>
            <div className='btn'><div className='blackbox'></div> Read more</div>
          </div>
          <div className='deer img'>
            <div className='big-text'>Wildlife Photography</div>
            <div className='small-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.</div>
            <div className='btn'><div className='blackbox'></div> Read more</div>
          </div>
        </div>

      </div>

      {/* ------------------------------backg imgs----------------------- */}

      <div>

        <div className='mountainimg'>
          <div className='textright'>
            <div className='bigtext'> <h4> Sunset at Mount Fuji </h4>
            <p> Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. </p></div>
          </div>
          <div className='foto-info marggin'>
            <div className='time'></div><div>1"</div>
            <div className='camera'></div><div>f/16</div>
            <div className='iso'></div><div>400</div>
            <div className='location'></div><div>Japan</div>
          </div>
        </div>

        <div className='cameraimg'>
          <div className='left-bckg'>
            <div className='center-left'>
              <div className='miduem-text'>The Gear cage</div>
              <div className='left-big-text'>The tools that we use.</div>
              <div className='small-text'>The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</div>
              <div className='btn'><div className='blackbox'></div>Check it out</div>
            </div>
          </div>
          <div className='right-bckg'>
          <div className='foto-info marggin'>
            <div className='time'></div><div>0,8"</div>
            <div className='camera'></div><div>f/5,6</div>
            <div className='iso'></div><div>100</div>
            <div className='location'></div><div>Sweden</div>
          </div>
          </div>
        </div>

        <div className='natureimg'>
          <div className='textright'>
            <div className='bigtext'> <h4> Monstera Leafs </h4>
            <p> Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. </p></div>
          </div>
          <div className='foto-info marggin'>
            <div className='time'></div><div>1/400s</div>
            <div className='camera'></div><div>f/3,5</div>
            <div className='iso'></div><div>100</div>
            <div className='location'></div><div>Costa Rica</div>
          </div>
        </div>

      </div>


      {/* ------------------------------------Past clients--------------------------------- */}

      <div>

        <div className='Past-clients'>Past clients</div>
        <div className='past-small-text'>Trusted by your favourite companies</div>

        <div className='items-center'>
          <div className='hill client'></div>
          <div className='riks client'></div>
          <div className='studio client'></div>
          <div className='chill client'></div>
          <div className='stock client'></div>
        </div>

      </div>



{/* -------------------------------Need help with photography or videography?---------------- */}

      <div>

      <div className='nightmountain'>
          <div className='textright'>
            <div className='bigtext'> <h4> Star fall in the Himalayas </h4>
            <p> Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. </p></div>
          </div>
          <div className='foto-info marggin'>
            <div className='time'></div><div>6"</div>
            <div className='camera'></div><div>f/11</div>
            <div className='iso'></div><div>800</div>
            <div className='location'></div><div>Nepal</div>
          </div>
        </div>

        <div className='text-center'>
          <div className='need-big-text'>Need help with photography or videography?</div>
          <div className='need-small-text'>We're here for you!</div>
          <div className='btn'><div className='blackbox'></div> Get in touch</div>
        </div>

      </div>


      {/* ----------------------------------END--------------------------------- */}


        <div className='end'>

          <div className='end-left'>
            <div className='end-logo'></div>
            <div className='end-small-text'>Photographers & videographers capturing the world around us.</div>
          </div>

          <div className='end-right'>
            <div className='end-right-left-text'>
              <div className='end-right-left-big-text'>Business areas</div>
              <div>Product Photography</div>
              <div>Architecture Photography</div>
              <div>Drone Photography</div>
              <div>Wildlife Photography</div>
            </div>

            <div className='end-right-right-text'>
              <div className='end-right-left-big-text'>Pages</div>
              <div>Gear cage</div>
              <div>Featured images</div>
              <div>Contact</div>
              <div>Style guide</div>
              <div>Instructions</div>
              <div>Changelog</div>
            </div>
          </div>

        </div>

        <div className='white-line'></div>

        <div className='end-line'>
          <div className='end-line-left'>
            <div className='end-line-big-text'>Subscribe to our newsletter</div>
            <div className='end-line-small-text'>Read about all the things we do.</div>
          </div>
          <div className='end-line-right'>
            <div className='end-btn'><div className='black-box-in-btn'></div></div>
          </div>
        </div>

        <div className='white-line'></div>

        <div className='line-end-text-and-logos'>
          <div className='line-end-left-text'>© Aperture Photography, Inc. All rights reserved. Licensing</div>
          <div className='ss-logos'>
            <div className='twiter'></div>
            <div className='insta'></div>
            <div className='feacebook'></div>
          </div>
        </div>

    </div>

)}

export default Aperture