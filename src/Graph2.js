import React from 'react';
import { createChart, CrosshairMode } from "lightweight-charts";
import './app.css'



const  Graph = () => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");

    const chartRef = React.useRef(null);

    
    // TradingView Static Chart Properties
    const chartProperties ={
        width: 0,
        height: 0,
        baseLineStyle:2,
        timeScale: {
            timeVisible: true,
            secondsVisible: false,
            borderColor: '#262626',
        },
        crosshair: {
            mode: CrosshairMode.Normal
        },
        layout: {
            backgroundColor: '#262626',
            textColor: ' #9ACCFF',
        },
        grid: {
            vertLines: {
              color: '#262626',
            },
            horzLines: {
              color: '#262626',
            },
          },
        openVisible: false


    }

    React.useEffect(()=> {
        if(chartRef.current) {
            const chart = createChart(chartRef.current, chartProperties);
            prepareChart(chart, ws);
        }
    }, [])


    function prepareChart(chart, ws) {
        const barSeries = chart.addBarSeries({
            upColor: '#74C2E3',
            downColor: '#FF0000',
            wickDownColor: '595959',
            wickUpColor: '#595959',
            thinBars:false,
            
        });

        // Fetch binance static chart REST API
        fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const cdata = data.map(d => {
                    return {
                        time: d[0]/1000,
                        open: parseFloat(d[1]),
                        high: parseFloat(d[2]),
                        low: parseFloat(d[3]),
                        close: parseFloat(d[4])
                    }
                });
                barSeries.setData(cdata);
                console.log("Binance Static Kline REST API called with fetch()");
            })
            .catch(err => console.log(err))
        // If fetch api gives CORS issue, use a node proxy

        // Fetch live data from Binance WS API
        ws.onmessage = evt => {
            const data = JSON.parse(evt.data);
            console.log(data);
            const chartData = {
                time: data.k.t,
                open: data.k.o,
                high: data.k.h,
                low: data.k.l,
                close: data.k.c
            }
            barSeries.update(chartData);
        }
    }

    return <div className='wrapper' ref={chartRef} />;
}

export default Graph;