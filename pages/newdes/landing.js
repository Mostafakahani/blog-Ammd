import { useState } from "react"
import mdImg from './img/swiftDevelopers.webp'
export default function Landing() {
    const [showCode, setShowCode] = useState(false);

    const [name, setName] = useState('Mostafa Kahani');
    const [email, setEmail] = useState('kahanimostafa83@gmail.com');

    const handleClick = () => {
        setShowCode(!showCode);
    };
    const code = (
        <>
            <div>
                <img alt="profile-pic" src="https://lh3.googleusercontent.com/a/AAcHTtfBc4cOiW5XcOt2hl-0fXGF0LIqKUObQ_axfUfN4UQ09og=s96-c" className="sc-7516dd53-3 ijGYcj rounded-circle" />
                <div>
                    <div>Mostafa Kahani</div>
                    <div>kahanimostafa83@gmail.com</div>
                </div>
            </div>
            <div className="profile-open-item">View account</div>
            <div className="profile-open-item">Change</div>
            <div className="profile-open-item">Exit</div>
        </>
    );


    return (
        <>
            <div className="mainDiv">
                <div className="headerLanding">
                    <div>
                        <div className="Lhead">
                            <div>
                                <a href="/spaces" rel="noreferrer" target="_blank" aria-label="Home"><img alt="logo" src="https://neverinstall.com/niLogoWhite.svg" width="100px" height="32px" className="" /></a>
                            </div>
                            <div>
                                <div></div>
                                <a href="">Downloads</a>
                                <a href="">Price</a>
                                <a href="">Docs</a>
                            </div>
                        </div>
                        <div className="Rhead">
                            <div className="btn-up">
                                <button>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M7.65234 0.249607C7.76464 -0.0832028 8.23536 -0.0832023 8.34766 0.249608L10.0303 5.23643C10.0802 5.38416 10.2179 5.48426 10.3738 5.48601L15.6365 5.5453C15.9878 5.54925 16.1332 5.99693 15.8514 6.20658L11.6286 9.34788C11.5035 9.44094 11.4509 9.6029 11.4974 9.75172L13.0673 14.7752C13.1721 15.1104 12.7913 15.3871 12.5048 15.1839L8.21231 12.1385C8.08515 12.0483 7.91485 12.0483 7.78769 12.1385L3.49522 15.1839C3.20875 15.3871 2.82793 15.1104 2.9327 14.7752L4.50259 9.75172C4.5491 9.6029 4.49647 9.44094 4.37137 9.34788L0.148592 6.20658C-0.133228 5.99693 0.0122327 5.54925 0.363456 5.5453L5.62617 5.48601C5.78208 5.48426 5.91985 5.38416 5.9697 5.23643L7.65234 0.249607Z" fill="var(--pure-white)"></path></svg>
                                    <span>Update</span>
                                </button>
                            </div>
                            <div className="profile-up">
                                <a onClick={handleClick}>
                                    <img alt="profile-pic" src="https://lh3.googleusercontent.com/a/AAcHTtfBc4cOiW5XcOt2hl-0fXGF0LIqKUObQ_axfUfN4UQ09og=s96-c" className="sc-7516dd53-8 dbShXB" />
                                    <svg stroke="currentColor" fill="#fff" viewBox="0 0 24 24" color="var(--pure-white)" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </a>
                                {showCode && (
                                    <div className="openProfile">
                                        {code}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <main className="main-center">
                    <div className="main-bg container-fluid">
                        <div className="side-center row">
                            <div className="Lside col-md col-12">
                                <h1>Boost developer productivity with powerful personal cloud computers</h1>
                                <span>Optimize your development team’s workflow with scalable resources and pre-configured apps</span>
                                <button className="btn-item">Contact us</button>
                            </div>
                            <div className="Rside col-md col-12">
                                <div>
                                    <span>
                                        <span></span>
                                        <img src="https://neverinstall.com/_next/image?url=https%3A%2F%2Fni-assets.azureedge.net%2Fneverinstall-assets%2Fhomepage%2FdeveloperHeroImageFinal.png&w=640&q=100" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="side-center-2">
                            <span>Redefining the way developers use software</span>
                            <div>
                                <div className="item-option">
                                    <div className="item-option-in">
                                        <div className="item-option-in2">
                                            <span>
                                                <span></span>
                                                <img src={mdImg.src} />
                                            </span>
                                        </div>
                                        <span className="span-item" style={{
                                            background: 'linear-gradient(89.07deg, rgba(210, 252, 255, 0.96) -1.23%, rgba(26, 179, 227, 0.96) 100.85%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>Swift onboarding</span>
                                    </div>
                                    <span className="text-span">Integrate new developers into your organization and extend access to your apps and data without ITOps dependencies.</span>
                                </div>
                                <div className="item-option">
                                    <div className="item-option-in">
                                        <div className="item-option-in2">
                                            <span>
                                                <span></span>
                                                <img src={mdImg.src} />
                                            </span>
                                        </div>
                                        <span className="span-item" style={{
                                            background: 'linear-gradient(89.07deg, rgba(210, 252, 255, 0.96) -1.23%, rgba(26, 179, 227, 0.96) 100.85%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>Swift onboarding</span>
                                    </div>
                                    <span className="text-span">Integrate new developers into your organization and extend access to your apps and data without ITOps dependencies.</span>
                                </div>
                                <div className="item-option">
                                    <div className="item-option-in">
                                        <div className="item-option-in2">
                                            <span>
                                                <span></span>
                                                <img src={mdImg.src} />
                                            </span>
                                        </div>
                                        <span className="span-item" style={{
                                            background: 'linear-gradient(89.07deg, rgba(210, 252, 255, 0.96) -1.23%, rgba(26, 179, 227, 0.96) 100.85%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>Swift onboarding</span>
                                    </div>
                                    <span className="text-span">Integrate new developers into your organization and extend access to your apps and data without ITOps dependencies.</span>
                                </div>

                            </div>
                            <button className="btn-item">Contact us</button>
                        </div>
                    </div>
                </main >
                <div className="footer">
                    <div className="Lfooter">
                        <img alt="logo" src="https://neverinstall.com/niLogoWhite.svg" width="100px" height="32px" class="" />
                        <div>
                            <span>Neverinstall Inc. </span>
                        </div>
                        <div>
                            Neverinstall streams your favourite apps in an unequalled personal cloud computer with unlimited memory, powerful compute features and native like experience.
                        </div>
                        <div>
                            <div>
                                <a>
                                    <span>
                                        <svg viewBox="0 0 512 512" color="#fffff" height="1.3rem" width="1.3rem" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Rfooter">
                        <div>
                            <span>s</span>
                            <div>
                                <div className="list-item-in-Rfooter">
                                    <div>s</div>
                                    <div>
                                        <a><span>Check</span></a>

                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>

                            </div>

                        </div>
                    </div>

                </div>
            </div >

        </>
    )
}