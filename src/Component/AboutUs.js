import React from 'react';

import pictureOne from "../images/h.jpg";
import pictureTwo from "../images/j.jpeg";
import pictureThree from "../images/m.jpg"

const AboutUs = () => {
  return (
    <div className='main-about-us'>

<div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
</div>

<div>
 <h1 className='why-us'>Why Us?</h1> 

<li><b>Better use of barren land.</b></li>
<li><b>Solution to unemployment.</b></li>
<li><b>Government policy.</b></li>

</div>

<h2>Agriculture</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src={pictureOne} at="Jane" />
      <div class="container">
      Nepal is richly endowed with agro-biodiversity. Rice, maize, millet, wheat, barley and buckwheat are the major staple food crops. Similarly, oilseeds, potato, tobacco, sugarcane, jute and cotton are the important cash crops whereas lentil, gram, pigeon pea, blackgram, horsegram and soyben are the important pulse crops.
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={pictureTwo} alt="Mike"  />
      <div class="container">
      Due to the uncertain political scenario of Nepal, the country had witnessed a constant decline in the economic growth for a long stretch of time. But in a past few years, the country has gradually worked out on its economic conditions towards a positive way.

With a vivid range of flora and fauna in the country, Nepal boasts about its agricultural assets before the world, and hence entices the players of agriculture biz to the country.

As per reports, agriculture employs more than 70% of the workforce in Nepal. This suggests that Nepal could be one of the most viable locations to start off with agriculture-based businesses. 

In this article, we shall present five agriculture business ideas that could really create a big bang in the economy of Nepal.
      </div>
    </div>
  </div>
  

</div>



<div>
  For these reason we provide:
  <p>Platform to buy and sell agriculture product </p>
<p>VIP lands</p>
<p>App Model</p>
<p>Land Exchange</p>
</div>



      


    </div>
  )
}

export default AboutUs;