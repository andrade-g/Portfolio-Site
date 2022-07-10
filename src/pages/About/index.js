import "./styles.css"
export default function () {

    return (
        <main>
            <h3>About me</h3>
            <div className="intro-container">
                <div className="video-interaction">
                    <script src="sketch.js"></script>
                    <script src="pattern.js"></script>
                    <script src="Partcls.js"></script>
                </div>
                {/* <iframe src="https://editor.p5js.org/andrade-g/full/gr--zwm0D" width={800} height={600}></iframe> */}
                <div className="intro-text-container">
                    <div>
                        <h2>I'm a designer based in Brasília, Brazil.</h2>
                        <h4>My main interests are typeface design and creative programming. Although I enjoy anything that
                            involves
                            developing complex visual systems</h4>
                    </div>
                </div>
            </div>
            <div className="about-text">
                <div id="justify">
                    <p>My academic journey began with studying Engineering at University of Brasília (UnB) in 2016, focusing
                        on
                        Software Development. Although I enjoyed programing and developing solutions, I realized that I
                        wanted
                        to develop solutions through the creative lenses. When I began studying Design at UnB, I was
                        mindblown
                        by the possibilities of the design world.</p>
                    <p>I graduated at the course in 2022 with a marvelous experience. I worked as designer and as a Customer
                        Service and Communication manager. I also had the oportunity to be an intern at Supremo Tribunal de
                        Justiça (STJ) and at Estúdio Revoada. My graduation project was designing a typeface, Minikin,
                        featured
                        in this website.</p>
                    <p>My mother language is Brazilian Portuguese, but I am very familiar with English. I also speak
                        Spannish
                        and a little bit of French.</p>
                    <p>I love to work with p5.js and Processing. I also know a bit of html and css</p>
                </div>
            </div>
        </main>
    );
}