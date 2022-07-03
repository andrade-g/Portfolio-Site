import "./styles.css"
export default function Work() {
    return (
        <main className="">
            <div className="banner">
                <h1>Hi! I'm Guilherme, a designer and creative coder.</h1>
                <h4>Check out my work below</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                    className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                </svg>
            </div>
            <div className="works">
                <div className="margin"></div>
                <div className="work-image-grid">
                    <div className="margin"></div>
                    <div className="box" id="pos1"></div>
                    <div className="box" id="pos2"></div>
                    <div className="box" id="pos3"></div>
                    <div className="box" id="pos4"></div>
                    <a className="box" id="pos1"><h2> MINIKIN FONT </h2></a>
                    <a className="box" id="pos2"><h2> SEMANA DA EUROPA </h2></a>
                    <a className="box" id="pos3"><h2> AMIS APP </h2></a>
                    <a className="box" id="pos4"><h2> INTERACTIVE WORK </h2></a>
                </div>
            </div>
        </main>
    );
}