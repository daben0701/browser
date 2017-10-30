import React from 'react';
import classnames from 'classnames';
import { Row, Col, Card, Icon } from 'antd';
import CountUp from 'react-countup';
import styles from './figurecard.less';

const serverIP = "221.221.94.193"

class FigureCard extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          basicInfo: {},
      }
  }

  componentDidMount(){
    fetch("http://localhost:8080/api/status/get", {
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
                    //console.log(data);
                    //alert(data);
                    this.setState({
                        basicInfo: data,
                    })
                })
            })
            .catch((error) => {alert("error")})
  }

  render() {
    const { figurecard } = this.props;

    console.log(this.state);

    return (
      <div>
        <Row gutter={16} className={styles.showcase}>
          <Col span={6} key={0} style={{padding: 0}}>
            <div>
                <img src={require('../../../../images/mokuai_1.png')} />
                <div className={styles['card-content']} style={{position: 'absolute', right: 40, top: 30,}}>
                    <p style={{fontSize: 24, }}>节点数</p>
                    <CountUp
                      start={0}
                      end={this.state.basicInfo.peerCount}
                      duration={2.75}
                      useEasing
                      useGrouping
                      separator=","
                      style={{fontSize: 42, color: "#333333"}}
                    />
                  </div>
            </div>
          </Col>
          <Col span={6} key={1} style={{padding: 0}}>
            <div>
                <img src={require('../../../../images/mokuai_2.png')} />
                <div className={styles['card-content']} style={{position: 'absolute', right: 40, top: 30,}}>
                    <p style={{fontSize: 24, }}>区块数</p>
                    <CountUp
                      start={0}
                      end={this.state.basicInfo.latestBlock}
                      duration={2.75}
                      useEasing
                      useGrouping
                      separator=","
                      style={{fontSize: 42, color: "#333333"}}
                    />
                  </div>
            </div>
          </Col>
          <Col span={6} key={2} style={{padding: 0}}>
            <div>
                <img src={require('../../../../images/mokuai_3.png')} />
                <div className={styles['card-content']} style={{position: 'absolute', right: 40, top: 30,}}>
                    <p style={{fontSize: 24, }}>交易数</p>
                    <CountUp
                      start={0}
                      end={this.state.basicInfo.txCount}
                      duration={2.75}
                      useEasing
                      useGrouping
                      separator=","
                      style={{fontSize: 42, color: "#333333"}}
                    />
                  </div>
            </div>
          </Col>
          <Col span={6} key={3} style={{padding: 0}}>
            <div>
                <img src={require('../../../../images/mokuai_4.png')} />
                <div className={styles['card-content']} style={{position: 'absolute', right: 40, top: 30,}}>
                    <p style={{fontSize: 24, }}>通道数</p>
                    <CountUp
                      start={0}
                      end={this.state.basicInfo.channelCount}
                      duration={2.75}
                      useEasing
                      useGrouping
                      separator=","
                      style={{fontSize: 42, color: "#333333"}}
                    />
                  </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

FigureCard.propTypes = {};

export default FigureCard;
