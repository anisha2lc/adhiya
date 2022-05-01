import React from 'react';

const ContactUs = () => {
  return (
<div className='contact-div'>

    <div>
<section class="mb-4">


    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

    <b class="contact text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</b>

    <div class="row">


        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                <div class="row">


                    <div class="col-md-6">
                        <div class="md-form mb-0">
                           
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                           
                        </div>
                    </div>

                </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                     
                        </div>
                    </div>
                </div>

                <div class="row">


                    <div class="col-md-12">

                        <div class="md-form">
                        <label for="message" className='label'>Your message to us</label>
                            <textarea type="text" id="message" name="message" rows="2" class="text form-control md-textarea"></textarea>
                          
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                
            </div>
            <div class="status"></div>
        </div>

        <div class="mainDivContact col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Kathmandu Nepal , Postal code: 44600</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+977 9876543210</p>
                    <p>01-4355446</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@adhiya.com</p>
                </li>
            </ul>
        </div>


    </div>

</section>




    </div>




<footer class="text-center text-lg-start bg-light text-muted">

  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>



  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
          <h1>अधिया</h1>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">FaceBook</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Instagram</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Twiter</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i>Gongabu, Kathmandu</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
          Pabitranagar
          </p>
          <p><i class="fas fa-phone me-3"></i> +977 9876543210</p>
          <p><i class="fas fa-print me-3"></i> +977 9812345678</p>
        </div>

      </div>

    </div>
  </section>


</footer>

</div>

  )
}

export default ContactUs;