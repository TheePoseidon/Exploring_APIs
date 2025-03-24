const currencyList = [
    { code: 'KES', name: 'Kenyan Shilling' },
    { code: 'NGN', name: 'Nigerian Naira' },
    { code: 'ZAR', name: 'South African Rand' },
    { code: 'GHS', name: 'Ghanaian Cedi' },
    { code: 'UGX', name: 'Ugandan Shilling' },
    { code: 'TZS', name: 'Tanzanian Shilling' },
    { code: 'ETB', name: 'Ethiopian Birr' },
    { code: 'RWF', name: 'Rwandan Franc' },
    { code: 'MWK', name: 'Malawian Kwacha' },
    { code: 'CDF', name: 'Congolese Franc' },
    // Add any other African currencies as needed
];

const exchangeRateUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // Example API for exchange rates
const bitcoinApiUrl = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'; // Example API for Bitcoin price

document.getElementById('convert-btn').addEventListener('click', async () => {
    const currencyCode = document.getElementById('currency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    try {
        const exchangeResponse = await fetch(exchangeRateUrl);
        const exchangeData = await exchangeResponse.json();
        const bitcoinResponse = await fetch(bitcoinApiUrl);
        const bitcoinData = await bitcoinResponse.json();

        const exchangeRate = exchangeData.rates[currencyCode];
        const bitcoinPrice = bitcoinData.bpi.USD.rate_float;

        if (!exchangeRate) {
            alert('Currency not found.');
            return;
        }

        const currencyInBitcoin = (amount / exchangeRate) / bitcoinPrice;
        const transactionFee = currencyInBitcoin * 0.01; // Example 1% fee
        const finalAmountInBitcoin = currencyInBitcoin - transactionFee;

        document.getElementById('result').textContent = `Amount in Bitcoin (after fee): ${finalAmountInBitcoin.toFixed(8)} BTC`;
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data.');
    }
});
