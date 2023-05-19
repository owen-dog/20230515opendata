import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
import ukMap from '../../assets/ukcounties.json';
import { Card, Button, Input } from 'antd';

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
            { name: 'bath', value: 234 },
            { name: 'Bedfordshire and Hertfordshire', value: 107 },
            { name: 'Berkshire', value: 133 },
            { name: 'bristol', value: 241 },
            { name: 'Buckinghamshire', value: 221 },
            { name: 'Cheshire', value: 139 },
            { name: 'Cornwall', value: 263 },
            { name: 'Cumbria', value: 268 },
            { name: 'Devon', value: 261 },
            { name: 'Dorset', value: 231 },
            { name: 'East Anglia', value: 144 },
            { name: 'east Sussex', value: 231 },
            { name: 'Essex', value: 154 },
            { name: 'Greater Manchester', value: 96 },
            { name: 'Hampshire', value: 230 },
            { name: 'Herefordshire', value: 265 },
            { name: 'Inner London', value: 109 },
            { name: 'Isle of Wight', value: 232 },
            { name: 'Isles of Scilly', value: 209 },
            { name: 'Lancashire', value: 267 },
            { name: 'Leicestershire', value: 249 },
            { name: 'Lincolnshire', value: 230 },
            { name: 'Merseyside', value: 261 },
            { name: 'North Yorkshire', value: 131 },
            { name: 'Northumberland and Tyne and Wear', value: 275 },
            { name: 'Outer London', value: 222 },
            { name: 'Oxfordshire', value: 227 },
            { name: 'Shropshire and Staffordshire', value: 263 },
            { name: 'Somerset', value: 264 },
            { name: 'South Yorkshire', value: 131 },
            { name: 'Surrey', value: 218 },
            { name: 'Tees Valley and Durham', value: 280 },
            { name: 'Warwickshire', value: 245 },
            { name: 'West Midlands', value: 247 },
            { name: 'west Sussex', value: 225 },
            { name: 'West Yorkshire', value: 123 },
            { name: 'Worcestershire', value: 251 },

        ];

        const mapOption = {
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2
            },
            visualMap: {
                left: 'right',
                min: 90,
                max: 300,
                inRange: {
                    // prettier-ignore
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'],
                calculable: true
            },
            series: [
                {
                    name: 'UK RainFall time through a year',
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
        />

    )
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
