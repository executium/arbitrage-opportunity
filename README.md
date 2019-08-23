# Arbitrage Opportunity Websocket Client (nodejs and javascript) from executium
A web-socket which allows users to connect to executium.com arbitrage opportunity list, this provides the end user with cryptocurrency arbitrage opportunities across exchanges such as Binance, Bitmex, Bittrex, Huobi, Bitfinex, OKEX and Bitstamp.

![alt text](https://executium.com/media/images/bitfinex-ethusd-to-binance-ethbtc-crypto-graph_247.png "Arbitrage Candles")

# What is arbitrage?

Arbitrage is buying/selling from one exchange, then selling/buying from the other while pocketing the difference. In simple terms it sounds extremely straight forward but there is a lot of lifting involved with regards to transfering funds, exchange fees, and other such things that you should factor in. Executium provide data about arbitrage opportunities in the cryptocurrency space and is growing the offering of tools to make it even easier for traders to take advantage of what arbitrage opportunities are available.

# What is provided?

We provide a nodeJS and Javascript version of the script so you can take the package and adjust as you see fit. Both scripts rely on the presence of socket.io and some other dependencies which we will talk through

## Is there a demo?

Yes, you can go to the following link to see the web-based version of the script [https://executium.com/arbitrage-websocket-demo/](https://executium.com/arbitrage-websocket-demo/)

## Installing the nodejs package

1. Download the script `arbitrage-nodejs.js` and save it to your folder
2. In the folder execute `npm init` and fill in the information
3. Then `npm install`
4. Followed by `npm install socket.io-client --save`

And there you have it, you can now type `nodejs arbitrage-nodejs.js` and it will connect and run

## Understanding the Javascript package

There really isn't much in way of steps here, you simply take the `arbitrage-opportunities.html` file and upload it, there is no need for any database or complicated installation, its the definition of plug and play.

You can modify the file as you see fit within the terms and conditions of the fair usage of service.

Some key variables you will be looking towards are as follows:

```javascript
var code            = v[0]; // Executium code
var spread          = v[1]; // Spread between the prices
var difference      = v[2]; // Difference in BTC
var btc_opt1        = v[3]; // BTC Converted Value
var btc_opt2        = v[4]; // BTC Converted Value
var current_opt1    = v[5]; // Current Market Value
var current_opt2    = v[6]; // Current Market Value
```

These give you the information you require with regards to the arbitrage opportunities and we additionally supply the arbitrage profit return percentage.

```javascript
var ret=returnPercentage(btc_opt1,btc_opt2);
```

We provide additional measures in both scripts so that you can discount anything erroneous, such as suspeciously wide spreads, or values that seems to good to be true.

```javascript
if(ret>10 || ret<-20) { ret=-1;}
```

We pull market data real-time and compile in an on-going cycle 24-7, then provide these neat little lists for users to take advantage of, but outages and malformed data feeds do happen, and come sometimes impact the outputs you get from these lists. While we are satisfied the feeds are valid and correct 99.999% of time, you can never be 100% certain though with so many third parties involved, so building in multiple provisos to catch potential errors and mistakes is always a good path to travel.

##  HTTPS is required

You need to be running the .html script via https:// for it to work, otherwise it will fail, if you do not want to buy a ssl certificate look at Cloudflare or Certbot for free solutions.

### What is the web-socket address and port?

The current websocket address is `https://arb.executium.com` on port number `2096`, we currently are positioned behind Cloudflare so please remember to go easy otherwise it could result in automatic blocks.


### Who needs this arbitrage opportunities script?

This can be used by a range of people to be implemented into their systems.

### What exchanges do you support currently?

We currently support Bitstamp, Bitmex, Bitfinex, Binance, Huobi Pro, Huobi DM, OKEX, Bittrex and Bitstamp.

### How is the arbitrage opportunity list ordered?

The ordering of the list means that the top opportunities are at the top of list

### How often is the arbitrage opportunity feed updated?

We update the feed every 1 second currently, but that number is subject to change.

### Fair usage

We do not charge a fee for this service and we have rate limiting set, so any abuses will result in IP level blocking so please use fairly as you would any service to avoid disruption.

### Who would want this arbitrage opportunity script?

Users search for arbitrage opportunities or arbitrage scripts would be in search of this nodejs and javascript package. If you are searching for a pushed opportunity then our arbitrage opportunity list could be useful for you.

#### DISCLAIMER

We try our best to provide the correct spreads at the correct prices, but sometimes data can be corrupted or misinterpreted, we advise discretion with how you use the data in any setup. We do not accept any responsibility for losses incurred or profits made because of the usage and implementation of this script, use it merely as a visual guide or a trigger for any projects but do not act off of this information alone.
# License

MIT License

Copyright (c) 2019 executium

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
