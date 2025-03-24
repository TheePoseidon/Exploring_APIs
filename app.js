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
    const feePercentage = parseFloat(document.getElementById('fee').value) || 1; // Default to 1% if not specified

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (isNaN(feePercentage) || feePercentage < 0 || feePercentage > 100) {
        alert('Please enter a valid fee percentage (0-100).');
        return;
    }

    try {
        const exchangeResponse = await fetch(exchangeRateUrl);
        if (!exchangeResponse.ok) {
            throw new Error(`Exchange rate API error: ${exchangeResponse.status}`);
        }
        const exchangeData = await exchangeResponse.json();
        
        const bitcoinResponse = await fetch(bitcoinApiUrl);
        if (!bitcoinResponse.ok) {
            throw new Error(`Bitcoin API error: ${bitcoinResponse.status}`);
        }
        const bitcoinData = await bitcoinResponse.json();

        const exchangeRate = exchangeData.rates[currencyCode];
        const bitcoinPrice = bitcoinData.bpi.USD.rate_float;

        if (!exchangeRate) {
            alert('Currency not found.');
            return;
        }

        const currencyInBitcoin = (amount / exchangeRate) / bitcoinPrice;
        const transactionFee = currencyInBitcoin * (feePercentage / 100);
        const finalAmountInBitcoin = currencyInBitcoin - transactionFee;

        document.getElementById('fee-info').textContent = `Transaction Fee: ${transactionFee.toFixed(8)} BTC (${feePercentage}%)`;
        document.getElementById('result').textContent = `Amount in Bitcoin (after fee): ${finalAmountInBitcoin.toFixed(8)} BTC`;
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(`An error occurred: ${error.message}`);
    }
});
