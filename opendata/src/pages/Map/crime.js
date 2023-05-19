import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
import ukMap from '../../assets/ukcounties.json';
import { Card, Button,Input } from 'antd';
const ROOT_PATH = 'https://echarts.apache.org/examples';
const { Search } = Input;
const EChartComponent = () => {
    const chartDom = useRef(null);
    const [isMap, setIsMap] = useState(true);




    useEffect(() => {

        const myChart = echarts.init(chartDom.current);
        myChart.showLoading();
        const ukJson = ukMap
        echarts.registerMap('uk', ukJson,);

        var data = [
            { name: 'Outer London', value: 87211 },
            { name: 'West Sussex', value: 18841 },
            { name: 'East Sussex', value: 18841 },
            { name: 'Surrey', value: 18841 },
            { name: 'Dorset', value: 17417 },
            { name: 'Somerset', value: 17417 },
            { name: 'Berkshire', value: 16893 },
            { name: 'Buckinghamshire', value: 16893 },
            { name: 'Oxfordshire', value: 16893 },
            { name: 'Hampshire', value: 14578 },
            { name: 'Isle of Wight', value: 14578 },
            { name: 'Kent', value: 14573 },
            { name: 'Gloucestershire', value: 9370 },
            { name: 'Wiltshire', value: 9370 },
            { name: 'Bath', value: 9370 },
            { name: 'Bristol', value: 9370 },
            { name: 'Inner London', value: 719 }
        ];

        const mapOption = {
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2
            },
            visualMap: {
                left: 'right',
                min: 5000,
                max: 20000,
                inRange: {
                    // prettier-ignore
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'],
                calculable: true
            },
            series: [
                {
                    name: 'County crime rate through a year',
                    id: 'population',
                    type: 'map',
                    roam: true,
                    map: 'uk',
                    animationDurationUpdate: 1000,
                    universalTransition: true,
                    data: data
                }
            ]
        };
        const barOption = {
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    rotate: 30
                },
                data: data.map(function (item) {
                    return item.name;
                })
            },
            animationDurationUpdate: 1000,
            series: {
                type: 'bar',
                id: 'population',
                data: data.map(function (item) {
                    return item.value;
                }),
                universalTransition: true
            }
        };
        data.sort(function (a, b) {
            return a.value - b.value;
        });


        // setInterval(() => {
        //     currentOption = currentOption === mapOption ? barOption : mapOption;
        //     myChart.setOption(currentOption, true);
        // }, 2000);
        myChart.setOption(isMap ? mapOption : barOption);
        myChart.hideLoading();
    }, [isMap]);
    const title = (
        <Search
            // onInput={
            //     // this.handleInput
            // }
            className='city_search'
            placeholder="search by city"
            allowClear
            enterButton="Search"
            size="medium"
            // onSearch={this.getSelectandInput}
            onSearch={() => {
                this.isSearch = true;
                this.getLocationOnMap()
            }}
        />)

    const extra = (
        <Button type='primary' onClick={() => setIsMap(!isMap)}>
            switch
        </Button>
    )
    return (
        <Card 
         title={title}
        extra={extra}>
            <div ref={chartDom} style={{ height: '600px', width: '1100px' }} />
        </Card>

    );
};

export default EChartComponent;
