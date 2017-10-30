import React from 'react';
import classnames from 'classnames';
import ReactEcharts from 'echarts-for-react';
import { Row, Col, Card, Icon, Table, Switch, Radio, Form} from 'antd';
import * as mapConfig from './mapConfig';
import { connect } from 'dva';
import styles from './mapcard.less';

require('echarts/map/js/world.js');

const FormItem = Form.Item;

const blockColumns = [{
  title: '区块号',
  dataIndex: 'id',
  key: 'id',
  width: 80,
}, {
  title: '上一区块哈希值',
  dataIndex: 'prehash',
  key: 'prehash',
  width: 300,
}, {
  title: '数据hash值',
  dataIndex: 'datahash',
  key: 'datahash',
  width: 300,
}, {
  title: '交易数量',
  key: 'txcount',
  dataIndex: 'txcount',
  width: 80,
}];

const columns = [{
  title: '交易号',
  dataIndex: 'id',
  key: 'id',
  width: 150,
}, {
  title: '所属区块号',
  dataIndex: 'blockid',
  key: 'blockid',
  width: 150,
}, {
  title: '交易hash',
  dataIndex: 'txhash',
  key: 'txhash',
}, {
  title: '生成时间',
  key: 'createdt',
  dataIndex: 'createdt',
  width: 300,
}];

class ImageCard extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          transactions: [],
          blocks: [],
      }
  }

  componentDidMount(){
      const transactions = [], blocks = [];
        fetch("http://localhost:8080/api/get/transaction", {
            method: "POST",
            mode: "cors",
            headers: {
                
            }
            //credentials: "include",
        })
        .then((res) => {
            console.log(res);
            if(res.status !== 200){
                alert("error");
            }
            res.json().then((data) => {
                for(let i = 0; i < data.length; i++){
                    transactions.push({
                        key: i,
                        id: data[i].id,
                        txhash: data[i].txhash,
                        blockid: data[i].blockid,
                        createdt: data[i].createdt,
                    });
                }
                  console.log("abdgasdgasdg");
                console.log(transactions);
                this.setState({
                    transactions: transactions
                });
            })
        })
        .catch((error) => {alert("error")});

        fetch("http://localhost:8080/api/get/block", {
            method: "POST",
            mode: "cors",
            headers: {
                
            }
            //credentials: "include",
        })
        .then((res) => {
            console.log(res);
            if(res.status !== 200){
                alert("error");
            }
            res.json().then((data) => {
              for(let i = 0; i < data.length; i++){
                transactions.push({
                    key: i,
                    id: data[i].blocknum,
                    datahash: data[i].datahash,
                    prehash: data[i].prehash,
                    txcount: data[i].txcount,
                });
            }
            console.log("abdgasdgasdg");
            console.log(transactions);
                this.setState({
                    blocks: data,
                })
            })
        })
        .catch((error) => {alert("error")});
  }

  render() {
    const state = this.state;
    return (
      <div>
        <Row className={styles.showcase} style={{marginTop: 30}}>
          <Col span={24}>
            <Card title={<div style={{marginTop: 10}}>
              <span style={{fontSize: 30, color: '#333333'}}>区块信息</span>
              {/* <div style={{float: 'right'}}>
                <span style={{fontSize: 24, color: '#333333', marginRight: 10}}>更多</span>
                <img src={require('../../../../images/ic_more.png')} style={{verticalAlign: 'middle'}}/>
              </div> */}
            </div>} bordered={false} noHovering>
              
              <div className={styles['showcase-container']}>
                <Table {...this.state} columns={blockColumns} dataSource={this.state.blocks} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row className={styles.showcase} style={{marginTop: 30}}>
          <Col span={24}>
            <Card title={<div style={{marginTop: 10}}>
              <span style={{fontSize: 30, color: '#333333'}}>交易信息</span>
              {/* <div style={{float: 'right'}}>
                <span style={{fontSize: 24, color: '#333333', marginRight: 10}}>更多</span>
                <img src={require('../../../../images/ic_more.png')} style={{verticalAlign: 'middle'}}/>
              </div> */}
            </div>} bordered={false} noHovering>
              
              <div className={styles['showcase-container']}>
                <Table {...this.state} columns={columns} dataSource={this.state.transactions} />
              </div>
            </Card>
          </Col>
        </Row>
        {/* <Row className={styles.showcase} style={{marginTop: 30}}>
          <Col span={24}>
            <Card title={<div style={{marginTop: 10}}>
              <span style={{fontSize: 30, color: '#333333'}}>区块信息</span>
              <div style={{float: 'right'}}>
                <span style={{fontSize: 24, color: '#333333', marginRight: 10}}>更多</span>
                <img src={require('../../../../images/ic_more.png')} style={{verticalAlign: 'middle'}}/>
              </div>
            </div>} bordered={false} noHovering>
              
              <div className={styles['showcase-container']}>
                <Table {...this.state} columns={columns} dataSource={this.state.transactions} />
              </div>
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}

ImageCard.propTypes = {};

export default ImageCard;
