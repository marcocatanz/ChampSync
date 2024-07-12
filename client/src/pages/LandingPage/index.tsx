import './style.css'

const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            <video autoPlay loop muted className="landing-bg">
                <source src="/soccer_shots_bg_video.mp4" type="video/mp4" />
            </video>
            <div className="landing-bg-overlay"></div>
            <div className='landing-content'>
                <h1>Empower your team, elevate your game.</h1>
            </div>
        </div>
    );
}

export {LandingPage}