import './feature.css';

const data = [
  {
    title: 'Real-time chat',
    content: 'Our live chat feature allows users to communicate with website visitors in real-time through a chat window. This enables users to provide immediate support and assistance to their customers, improving their experience on the website.',
  },
  {
    title: 'Customization options',
    content: 'Our live chat product offers a range of customization options to allow users to tailor the appearance of the chat window to match their website"s branding. Users can choose from a variety of color schemes and chat bubble designs to create a cohesive look and feel.',
  },
  {
    title: 'Visitor tracking',
    content: 'Our live chat product includes visitor tracking capabilities, allowing users to see who is on their website and what pages they are viewing. This can help users understand the needs and interests of their visitors and provide more targeted support.',
  },
  {
    title: 'Automated chat responses',
    content: 'Our live chat product allows users to set up automated responses to common questions or queries. This can help users handle frequently asked questions more efficiently and free up time to focus on more complex or specific issues.',
  },
  {
    title: 'Mobile app',
    content: 'Our live chat product includes a mobile app, allowing users to access and manage their live chat service on the go. This makes it easy for users to stay connected with their customers and provide support no matter where they are.',
  },
  {
    title: 'Integration with other tools',
    content: 'Our live chat product can be integrated with other tools that users may be using, such as a customer relationship management (CRM) system. This allows users to manage their customer interactions and data from a single platform.',
  },
];

function Card({ title, content }) {
  return `
        <div class="card-item">
            <div class="card-item__icon">
            </div>
            <div class="card-item__content">
                <h4>${title}</h4>
                <p>${content}</p>
            </div>
        </div>
    `;
}

function Feature() {
  return `
        <div class="feature wrapper"> 
            <div class="feature__content-title">
                <h3>
                  Powerful Features to Enhance Your Live Chat Experience
                </h3>
                <p>
                  Our live chat product is packed with features to help you connect with your customers and provide them with the support they need.
                </p>
            </div>
            <div class="feature__content-list d-flex">
                ${data.map((item) => Card(item)).join('')}
            </div>
        </div>
    `;
}

export default Feature;
