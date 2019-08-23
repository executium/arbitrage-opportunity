
/*
*
	##
	## Arbitrage Opportunity Websocket Client
	##
	// Copyright (c) 2019 Executium LTD (support@executium.com)
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and/or associated documentation files (the
	// "Materials"), to deal in the Materials without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Materials, and to
	// permit persons to whom the Materials are furnished to do so, subject to
	// the following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Materials.
	//
	// THE MATERIALS ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	// MATERIALS OR THE USE OR OTHER DEALINGS IN THE MATERIALS.
*
*/
    //
    console.log('Starting Up');
    //
    var socket = require('socket.io-client')('https://arb.executium.com:2096');
    //
    socket.on('connect', function()
    {
        console.log('Connected');
    });

    //
    socket.on('data', function(r)
    {
        //
        var data = JSON.parse(r.d); var pos=0;
        //
        console.log('Current Binance BTCUSDT BID: ',data.p);
        //
        for(let i in data.s)
        {
            // Variable
            var v=data.s[i]; pos++;
            // Naming
            var code            = v[0]; // Executium code
            var spread          = v[1]; // Spread between the prices
            var difference      = v[2]; // Difference in BTC
            var btc_opt1        = v[3]; // BTC Converted Value
            var btc_opt2        = v[4]; // BTC Converted Value
            var current_opt1    = v[5]; // Current Market Value
            var current_opt2    = v[6]; // Current Market Value

            // Returns
            var ret=returnPercentage(btc_opt1,btc_opt2);
            // We discount anything that is suspiciously too wide a spread
            if(ret>10 || ret<-20) { ret=-1;}

            // Display only positive returns
            if(ret>0)
            {
                // Output
                console.log(pos,code,ret+'%',spread,difference,btc_opt1,btc_opt2,current_opt1,current_opt2);
            }
        }
    });


    socket.on('disconnect', function()
    {

        console.log('Disconnected');
        process.exit();

    });


    //
    function returnPercentage(e1,e2)
    {
        var t = e1-e2;
        return parseFloat(t/e2*100).toFixed(2);
    }
