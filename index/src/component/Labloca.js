// About.js
import React from 'react';

const Lablocal = () => {
    return (
    <div class="container px-5 my-5">
        <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">本研究室への案内</span></h1>
        </div>
        <div class="d-flex flex-coloum text-left mb-5">
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6639.0417027018875!2d130.439456!3d33.695469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354188e7d7dcd653%3A0xee3436e91c2715c6!2z56aP5bKh5bel5qWt5aSn5a2m!5e0!3m2!1sja!2sus!4v1697178825384!5m2!1sja!2sus"
      width="600"
      height="450"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class='m-3'>
    <p class="lead fw-light mb-4">本研究室は福岡工業大学のD棟5階にあります.</p><br/>
    <b>所在地:</b><br/>
    〒811-0295 福岡県福岡市東区和白東3-30-1
D棟5階 <br/>
<li>5090号室</li><br/>
<li>5100号室</li> <br/>
<li>5110号室</li><br/>
    </div>
        </div>

    </div>
    );
}

export default Lablocal;
