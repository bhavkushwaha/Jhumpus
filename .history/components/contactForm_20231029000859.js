function contactForm() {
    const contactForm = document.getElementById("contactHero");
    const Container = document.createElement("div");
    const BG = document.createElement("div");
    BG.classList.add("hero-bg-c");
    Container.innerHTML = `

        <section>
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact-info-layer p-spacing-lg-right-50">
                        <h2>Get In Touch              </h2>
                        <p>If you have any questions to support your business, please contact us directly effective search and believes business.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="inner-contact-box">
                                    <i class="fas fa-map-pin"></i>
                                    <h4>Address</h4>
                                    <p>3rd Floor, BOB building,<br>
                                    Sir Williams Newton Road,<br>                                 
                                    Port Louis, Mauritius</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inner-contact-box">
                                    <i class="fas fa-phone-alt"></i>
                                    <h4>Office Phone</h4>
                                    <p><a href="tel:58-123-7890"> (+58) 123-456-7890</a></p>
                                    <p><a href="tel:58-123-7890"> +1 718-625-2030</a></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inner-contact-box">
                                    <i class="far fa-envelope-open"></i>
                                    <h4>Email Address</h4>
                                    <p><a href="mailto:info@Jhumpus.com">info@Jhumpus.com</a></p>
                                    <p><a href="mailto:support@Jhumpus.com">support@Jhumpus.com</a></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inner-contact-box">
                                    <i class="far fa-clock"></i>
                                    <h4>Working Hours</h4>
                                    <p><a href="tel:58-123-7890"> (+58) 123-456-7890</a></p>
                                    <p><a href="tel:58-123-7890"> +1 718-625-2030</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 spacing-md">
                    <div class="contact-right-layer">
                        <form id="contact-form" method="post" action="contact.php" novalidate="true">
                            <div class="messages"></div>
                            <div class="controls">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="form_name" type="text" name="name" class="form-control custom-form" placeholder="*Name" required="required" data-error="Firstname is required.">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div><br>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input id="form_email" type="email" name="email" class="form-control custom-form" placeholder="*Email address" required="required" data-error="Valid email is required.">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="row"><br></div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <input id="form_phone" type="tel" name="phone" class="form-control custom-form" placeholder="*Please enter your phone">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="row"><br></div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <textarea id="form_message" name="message" class="form-control message-form custom-form" placeholder="*Your message" rows="5" required="required" data-error="Please,leave us a message."></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-md-12 btn-send">
                                        <p><input type="submit" class="btn btn-default disabled" value="Send message"></p>
                                    </div>
                                    <div class="col-sm-12">
                                        <p class="required">
                                            * These fields are required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- MAP START -->
        <div class="bottom-map mt-5">
        <div class="mapouter">
        <div class="gmap_canvas">
        <iframe class="gmap_iframe" frameborder="0" scrolling="no"
         marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q= BOB building, Sir Williams Newton Road,  
         Port Louis&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://gachanymph.com/">
         Gacha Nymph APK</a></div><style>.mapouter
         {position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas 
         {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe 
         {width:100%!important;height:400px!important;}
         </style>
         </div>   
            </div>
        <!-- MAP END -->
    </section>        
        `;
        contactForm.appendChild(Container);
      }
      contactForm();
      
    //   <div class="pages-title">
    //                 <h1>Contact Us</h1>
    //                 <div class="page-nav">
    //                     <p>Home &nbsp; | &nbsp; Contact Us</p>
    //                 </div>
    //             </div>