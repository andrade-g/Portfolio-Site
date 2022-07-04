import "./styles.css"

export default function Contact() {
    return(
        <main>
            <h3>Let's work together!</h3>
            <section class="">
                <div class="">
                    <div class="">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="">

                                <div class="">
                                    <div class="">
                                        <input type="text" id="name" name="name" placeholder="Input your name here" class=""/>
                                        <label for="name" class="">Name</label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="">
                                        <input type="text" id="email" name="email" placeholder="Input your email here" class=""/>
                                        <label for="email" class="">Email</label>
                                    </div>
                                </div>

                            </div>
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <input type="text" id="subject" name="subject" class="form-control"/>
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div class="">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </main>
    );
}