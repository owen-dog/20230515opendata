import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
import ukMap from '../../assets/ukcounties.json';
import { Card, Button ,Input} from 'antd';
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
            { name: 'West Yorkshire', value: 15 },
            { name: 'Durham', value: 3 },
            { name: 'Tees Valley', value: 3 },
            { name: 'the Humber', value: 1 },
            { name: 'Yorkshire', value: 1 },
            { name: 'Surrey', value: 1 },
            { name: 'East Sussex', value: 1 },
            { name: 'West Sussex', value: 1 },
            { name: 'South Yorkshire', value: 4 },
            { name: 'Outer London', value: 5 },
            { name: 'Merseyside', value: 2 },
            { name: 'North Yorkshire', value: 5 },
            { name: 'Lancashire', value: 11 },
            { name: 'Leicestershire', value: 5 },
            { name: 'Rutland', value: 5 },
            { name: 'Northamptonshire', value: 5 },
            { name: 'Kent', value: 1 },
            { name: 'Inner London', value: 18 },
            { name: 'Herefordshire', value: 1 },
            { name: 'Worcestershire', value: 1 },
            { name: 'Warwickshire', value: 1 },
            { name: 'Hampshire', value: 3 },
            { name: 'Isle of Wight', value: 3 },
            { name: 'Greater Manchester', value: 12 },
            { name: 'Gloucestershire', value: 7 },
            { name: 'Wiltshire', value: 7 },
            { name: 'Bath', value: 7 },
            { name: 'Bristol', value: 7 },
            { name: 'Northern Lincolnshire', value: 6 },
            { name: 'East Yorkshire', value: 6 },
            { name: 'East Midlands', value: 4 },
            { name: 'East Anglia', value: 1 },
            { name: 'Devon', value: 3 },
            { name: 'Cumbria', value: 3 },
            { name: 'Cornwall', value: 5 },
            { name: 'Isles of Scilly', value: 5 },
            { name: 'Cheshire', value: 2 },
            { name: 'Cambridgeshire', value: 1 },
            { name: 'Berkshire', value: 7 },
            { name: 'Buckinghamshire', value: 7 },
            { name: 'Oxfordshire', value: 7 }


        ];

        const mapOption = {
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2
            },
            visualMap: {
                left: 'right',
                min: 0,
                max: 10,
                inRange: {
                    // prettier-ignore
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'],
                calculable: true
            },
            series: [
                {
                    name: 'UK Earthquake times through a year',
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
