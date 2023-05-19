import React, { Component } from 'react'

import { Card, List, Tooltip, Button, Badge, Descriptions } from 'antd'
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';

import { Switch, Route } from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service:
      {
        key: '1',
        service: 'John Brown',
        category: 'user@gmail.com',
        area: 'london',
        description: 'good cleaning services in london, love from UK',
        availability: 'AVAILABLE',
        price: 'safty'
      },
      //经典假数据
      comment: [
      ]


    }
  }

  getService = async () => {
    // // console.log('拿到啦'+memoryUtils.service.service);
    // console.log(this.props.match.params.id)
    // //获取当前url结尾（service专属id）
    // const id = this.props.match.params.id;
    // const res = await reqServicebyId(id);
    // console.log(res);
    // if (res.status === 100) {
    //   this.setState({ service: res.obj })
    // }
  }

  // getCommand = async () => {
  //   console.log(this.props.match.params.id)
  //   //获取当前url结尾（service专属id）
  //   const id = this.props.match.params.id;
  //   const res = await reqCommentbyId(id);
  //   console.log(res);
  //   if (res.status === 100) {
  //     this.setState({ comment: res.review })
  //   }

  // }
  componentDidMount() {

  }


  // getTooltip = (time) => {

  //   let currentTime = moment();
  //   let previousTime = moment(time);
  //   console.log('当前时间' + currentTime)
  //   console.log(typeof (currentTime))
  //   console.log('之前时间' + previousTime)
  //   console.log(typeof (previousTime))
  //   let time_diff = currentTime.diff(previousTime, 'days')
  //   console.log('时间差' + time_diff)
  //   return time_diff
  // }
  render() {

    const extra = (
      <Button type='primary' onClick={() => {

        this.props.history.push('/menu/subscribe/' + this.props.match.params.id);
      }}
      >

        Subscription Services
      </Button>
    )
    const title = (
      <span>
        USER DETAILS
      </span>
    )
    const { service, comment } = this.state;
    return (
      <Card
        title={title}

      >
        <Descriptions
          title="User Information"
          layout="vertical"
          bordered
        >
          <Descriptions.Item label="User Name" >{service.service}</Descriptions.Item>
          <Descriptions.Item label="User email" span={2}>{service.category}</Descriptions.Item>
          <Descriptions.Item label="Area" >{service.area}</Descriptions.Item>
          <Descriptions.Item label="Preference" span={2}>{service.price}</Descriptions.Item>
          <Descriptions.Item label="User Description" span={3}>
            {service.description}
          </Descriptions.Item>
          {/* <Descriptions.Item label="Service Comment" span={3}>
            <List
              bordered
              className="comment-list"
              header={`${comment.length} comments`}
              size='large'
              dataSource={comment}
              renderItem={(item) => (
                <li>
                  <Comment
                    actions={item.actions}
                    author={item.username}
                    avatar={"https://robohash.org/" + item.username}
                    content={
                      <p>{item.content}</p>
                    }

                    datetime={
                      <Tooltip title={this.getTooltip(item.ctime) + "days ago"}>
                        <span>{item.ctime}</span>
                      </Tooltip>}
                  />
                </li>
              )}
            />
          </Descriptions.Item> */}
        </Descriptions>
        <br />
      </Card>

    )

  }
}
