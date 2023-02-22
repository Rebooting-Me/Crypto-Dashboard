import bg from './bg.png';

export default function Body() {

    return(
        <div className="main">
            <img className="background" src={bg} alt="Background" />
            <img className="background1" src={bg} alt="Background" />
            <p>Journey Safe into the most trusted Blockchain Service on the Web!</p>
            <form action="/login">
                <input type="text" id="email" name="email" placeholder="Enter your email here"></input>
                <button type="submit">Sign up</button>
            </form>
        </div>
        
    )
}