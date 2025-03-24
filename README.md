Here’s your updated README file with your GitHub username:

---

# Currency-to-Bitcoin Conversion Application

## Description

This application allows users to convert their local currency to Bitcoin (BTC) and display the result in both BTC and sats. It uses the CoinGecko API to fetch live cryptocurrency prices and supports multiple currencies. The app provides a useful tool for people looking to track or manage their cryptocurrency holdings in real-time.

## Features

- **Currency Conversion**: Converts inputted local currency into Bitcoin.
- **Multiple Currencies**: Allows users to select from various currencies.
- **Transaction Fee Integration**: Includes a transaction fee calculation in the conversion.
- **Sats Display**: Converts small Bitcoin amounts to Satoshis (sats) for better accuracy.

## API Used

- **CoinGecko API**: Provides live cryptocurrency price data for Bitcoin and other coins.  
   - [API Documentation](https://www.coingecko.com/en/api)

## Technologies Used

- HTML
- CSS
- JavaScript
- CoinGecko API
- Browser (for frontend)

## Running Locally

To run the application on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/TheePoseidon/Exploring_APIs.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Exploring_APIs
   ```

3. Open the `index.html` file in your browser to start the app.

4. Input your local currency and see the conversion to Bitcoin.

## Deployment

The application is deployed on two web servers (Web01 and Web02), with a load balancer (Lb01) handling traffic distribution.

1. **Copy Files to Web Servers**:
   - Copy the `index.html`, `app.js`, and `style.css` files to both `Web01` and `Web02` under the `/var/www/html/` directory.

2. **Configure Load Balancer**:
   - Set up the load balancer to direct incoming traffic to either `Web01` or `Web02`. This helps balance the load and ensures the application is scalable and accessible.

3. **Testing**:
   - Test the application by accessing the load balancer's public IP address to ensure that traffic is correctly balanced and the application is functioning as intended.

Video Link to how it works: https://youtu.be/Qdj6s2sgPTQ
## Troubleshooting

If you encounter an "API error" or "failed to fetch data," check your internet connection and ensure that the CoinGecko API is accessible. You may also want to verify your API key, if applicable.

## What I aim to add in the future

- Add user authentication to personalize the experience.
- Implement caching to reduce load times for API requests.
- Add advanced security measures, including validation and protection against common attacks.

## Credits

- CoinGecko API for providing the real-time price data.
  
## License

MIT License

---
