import React, { useEffect, useRef, useState,} from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
import ukMap from '../../assets/ukcounties.json';
import { Card, Button,Input  } from 'antd';
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
            { name: 'Durham', value: 5.407894737 },
            { name: 'Tees Valley', value: 5.407894737 },
            { name: 'Northumberland', value: 5.858479532 },
            { name: 'Tyne', value: 5.858479532 },
            { name: 'Wear', value: 5.858479532 },
            { name: 'Cheshire', value: 3.047368421 },
            { name: 'Cumbria', value: 4.915789474 },
            { name: 'Greater Manchester', value: 5.911111111 },
            { name: 'Lancashire', value: 4.647368421 },
            { name: 'Merseyside', value: 6.966666667 },
            { name: 'East Yorkshire', value: 4.406900585 },
            { name: 'Northern Lincolnshire', value: 4.406900585 },
            { name: 'North Yorkshire', value: 3.336842105 },
            { name: 'South Yorkshire', value: 5.533333333 },
            { name: 'West Yorkshire', value: 5.344444444 },
            { name: 'Derbyshire', value: 3.418421053 },
            { name: 'Nottinghamshire', value: 3.418421053 },
            { name: 'Leicestershire', value: 3.042105263 },
            { name: 'Rutland', value: 3.042105263 },
            { name: 'Northamptonshire', value: 3.042105263 },
            { name: 'Lincolnshire', value: 3.110526316 },
            { name: 'Herefordshire', value: 3.401031992 },
            { name: 'Worcestershire', value: 3.401031992 },
            { name: 'Warwickshire', value: 3.401031992 },
            { name: 'Shropshire', value: 2.831578947 },
            { name: 'Staffordshire', value: 2.831578947 },
            { name: 'West Midlands', value: 4.122222222 },
            { name: 'Hertfordshire', value: 2.647758285 },
            { name: 'Bedfordshire', value: 2.647758285 },
            { name: 'East Anglia', value: 3.651879699 },
            { name: 'Essex', value: 2.578947368 },
            { name: 'Inner London', value: 4.5 },
            { name: 'Outer London', value: 2.8 },
            { name: 'Hampshire', value: 4.526821465 },
            { name: 'Isle of Wight', value: 4.526821465 },
            { name: 'Surrey', value: 3.18245614 },
            { name: 'EastSussex', value: 3.18245614 },
            { name: 'West Sussex', value: 3.18245614 },
            { name: 'Kent', value: 3.331578947 },
            { name: 'Gloucestershire', value: 3.568317853 },
            { name: 'Wiltshire', value: 3.568317853 },
            { name: 'Bath', value: 3.568317853 },
            { name: 'Bristol', value: 3.568317853 },
            { name: 'Dorset', value: 4.414473684 },
            { name: 'Somerset', value: 4.414473684 },
            { name: 'Isles of Scilly', value: 4.226315789 },
            { name: 'Cornwall', value: 4.226315789 },
            { name: 'Devon', value: 5.104795322 }   

        ];

        const mapOption = {
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2
            },
            visualMap: {
                left: 'right',
                min: 1,
                max: 6,
                inRange: {
                    // prettier-ignore
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'],
                calculable: true
            },
            series: [
                {
                    name: 'age-standardised mortality rate for deaths related to drug misuse',
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
