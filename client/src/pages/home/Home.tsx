import './style.scss';
import { useHistory } from 'react-router';
import { ROUTES } from '../../components/routes/constants';
import img from '../../assets/img1.png';

const Home = (): JSX.Element => {
    const history = useHistory();

    return (
        <div className="home__container">
            <div className="text__container">
                <p className="about__text">The Easiest way to get and sell your products</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sit dicta alias doloribus, architecto
                    commodi? Eius libero corrupti porro eligendi, at optio fuga hic odit ut enim, exercitationem quo
                    tenetur.
                </p>
                <div className="button__div">
                    <button className="login__redirect" onClick={() => history.push(ROUTES.LOGIN)}>
                        Sign In
                    </button>
                    <button className="signup__redirect" onClick={() => history.push(ROUTES.REGISTER)}>
                        Sign up
                    </button>
                </div>
            </div>
            <div className="image__container">
                <img src={img} alt="" className="cart__image" />
            </div>
        </div>
    );
};

export default Home;
