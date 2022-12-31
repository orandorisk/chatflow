import './main.css';
import Navbar from '../../../components/navbar/navbar';

function Main() {
  return `
        <div class="main">
            ${Navbar()}
            <div class="main__content wrapper">
                <div class="main__content__left">
                    <h1>
                        Improve your customer experience with real-time assistance
                    </h1>
                    <p>
                        Our live chat software helps you connect with your customers instantly, boosting sales and improving customer satisfaction. Try it out today and see the difference it can make for your business.
                    </p>
                    <div class="main__content__left__buttons">
                        <a href="#" class="btn btn--primary active">Get Started</a>
                        <a href="#" class="btn btn--secondary">See in Action</a>
                    </div>
                </div>
                <div class="main__content__right">
                </div>
            </div>
        </div>
    `;
}

export default Main;
