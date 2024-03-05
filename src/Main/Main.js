import React from "react";
import './Main.css';
import card1Img from '../assets/playlist/1.jpeg';
import card2Img from '../assets/playlist/2.jpeg';
import card3Img from '../assets/playlist/3.jpeg';
import card4Img from '../assets/playlist/4.jpeg';
import card5Img from '../assets/playlist/5.jpeg';
import card6Img from '../assets/playlist/6.jpeg';
import card7Img from '../assets/playlist/7.jpeg';
import card8Img from '../assets/playlist/8.jpeg';
import card9Img from '../assets/playlist/9.jpeg';
import card10Img from '../assets/playlist/10.jpeg';
import card11Img from '../assets/playlist/11.jpeg';
import card12Img from '../assets/playlist/12.jpeg';
import card13Img from '../assets/playlist/13.jpeg';
import card14Img from '../assets/playlist/14.jpeg';
import card15Img from '../assets/playlist/15.jpeg';

const Main = () => {
    return (
        <main>
            <div className="main-container">
                {/* <!-- PLAYLIST --> */}
                <div className="playlist-container">
                    <div id="result-playlists">
                        <div className="playlist">
                            <h1 id="greeting"></h1>
                            <h2 className="session">Navegar por todas as seções</h2>
                        </div>

                        {/* <!-- LIST ITEM 1 --> */}
                        <div className="offer__scroll-container">
                            <div className="offer__list">
                                <section className="offer__list-item">
                                    {/* <!-- CARD 1 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card1">
                                            <img src={card1Img} alt="" />
                                            <span>Boas festas</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 2 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card2">
                                            <img src={card2Img} alt="" />
                                            <span>Feitos para você</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 3 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card3">
                                            <img src={card3Img} alt="" />
                                            <span>Lançamentos</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 4 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card4">
                                            <img src={card4Img} alt="" />
                                            <span>Creators</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 5 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card5">
                                            <img src={card5Img} alt="" />
                                            <span>Para treinar</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 6 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card6">
                                            <img src={card6Img} alt="" />
                                            <span>Podcasts</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 7 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card7">
                                            <img src={card7Img} alt="" />
                                            <span>Sertanejo</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 8 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card8">
                                            <img src={card8Img} alt="" />
                                            <span>Samba e pagode</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 9 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card9">
                                            <img src={card9Img} alt="" />
                                            <span>Funk</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 10 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card10">
                                            <img src={card10Img} alt="" />
                                            <span>MPB</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 11 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card11">
                                            <img src={card11Img} alt="" />
                                            <span>Rock</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 12 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card12">
                                            <img src={card12Img} alt="" />
                                            <span>Hip Hop</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 13 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card13">
                                            <img src={card13Img} alt="" />
                                            <span>Indie</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 14 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card14">
                                            <img src={card14Img} alt="" />
                                            <span>Relax</span>
                                        </div>
                                    </a>

                                    {/* <!-- CARD 15 --> */}
                                    <a href="" className="cards">
                                        <div className="cards card15">
                                            <img src={card15Img} alt="" />
                                            <span>Música Latina</span>
                                        </div>
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div id="result-artist" className="hidden">
                        <div className="grid-container">
                            <div className="artist-card" id="">
                                <div className="card-img">
                                    <img id="artist-img" className="artist-img" />
                                    <div className="play">
                                        <span className="fa fa-solid fa-play"></span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <a title="Foo Fighters" className="vst" href=""></a>
                                    <span className="artist-name" id="artist-name"></span>
                                    <span className="artist-categorie">Artista</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </main >
    )
}

export default Main;
