import './price.css';

function Price() {
  return `
        <div class="price wrapper">
            <div class="price__content-title">
                <h3>
                  Affordable Plans for Any Business
                </h3>
                <p>
                  Our pricing plans are designed to be affordable for businesses of all sizes. From our "Starter" plan to our "Enterprise" option, we have a plan that will fit your budget and meet your live chat needs.
                </p>
            </div>
            <div class="price__content-list d-flex">
                <div class="card__item-price">
                    <div class="card__item-price-header">
                      <p>STARTER</p>
                    </div>
                    <div class="card__item-price-body">
                      <h2>$9.99/month</h2>
                      <ul>
                        <li>Real-time chat</li>
                        <li>Customization options</li>
                        <li>File sharing</li>
                        <li>Visitor tracking</li>
                      </ul>
                      <a href="#" class="btn buttons--first">Choose</a>
                    </div>
                </div>

                <div class="card__item-price">
                    <div class="card__item-price-header second">
                      <p>PROFESSIONAL</p>
                    </div>
                    <div class="card__item-price-body">
                      <h2>$29.99/month</h2>
                      <ul>
                        <li>All features in the "Starter" plan</li>
                        <li>Mobile app</li>
                        <li>Integration with other tools</li>
                        <li>Multilingual support</li>
                      </ul>
                      <a href="#" class="btn buttons--first second">Choose</a>
                    </div>
                </div>
                <div class="card__item-price">
                    <div class="card__item-price-header third">
                      <p>ENTERPRISE</p>
                    </div>
                    <div class="card__item-price-body">
                      <h2>$99.99/month</h2>
                      <ul>
                        <li>All features in the "Professional" plan</li>
                        <li>Dedicated account manager</li>
                        <li>Premium support</li>
                        <li>Custom integration options</li>
                      </ul>
                      <a href="#" class="btn buttons--first third">Choose</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default Price;
