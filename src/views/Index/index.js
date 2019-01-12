import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { getFilm ,getTime} from "./model";
import './index.css'
class Child extends Component{
    render() {
        return <div>
            1111---{this.props.myname}
        </div>
    }
}
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            looplist: [],
            swipelist: [],//第一个轮播图
            goujiutoutiao: [],
            nineclass: [],
            binnersix: [],
            binnerseven: [],
            hour: 0,
            minut: 0,
            second: 0,
            swipefive: [],//第二个轮播图
            binnerseven_2: [],
            selection:[]//精选
        };
    }

    componentWillMount() {
        getFilm().then(res => {
            //-------------------首页轮播一深拷贝-------------------------------------------
            var listone = [];
            var listtwo = [];
            var listthree = [];
            var listsix = [];
            var listseven = [];
            var listseven_2 = [];
            var selection = [];
            function nune(x) {
                for (var i = 1; i < arguments.length; i++){
                     search(x,arguments[i])
                    console.log(arguments)
                }
            }
            function search(arr,id) {
                for (var i = 0; i < res.data.length; i++){
                    if (res.data[i].adv_BlockID === id) {
                        var a = res.data[i]
                        console.log(a); 
                        arr.push(a);
                    }  
                }
            }
            nune(listone, 1)
            nune(listtwo, 2)
            nune(listthree, 3)
            nune(listsix, 4,5)
            nune(listseven, 101, 102, 103)  
            nune(listseven_2, 104, 105)
            nune(selection,6)
            this.setState({ 
                looplist: res.data,
                swipelist: listone,
                goujiutoutiao: listtwo,
                nineclass: listthree,
                binnersix: listsix,
                binnerseven: listseven,
                binnerseven_2: listseven_2,
                selection
                
            })
            
        })
        getTime().then(res => {
            function update() {
                var now = new Date();
                var end = new Date(res.a.data[0].AppSeckill.EndTime)
                var offset = end - now;
                var hours = Math.floor(offset / (60 * 60 * 1000));
                var hours_left = offset % (60 * 60 * 1000);
                var minuts = Math.floor(hours_left / (60 * 1000));
                var minuts_left = hours_left % (60 * 1000);
                var seconds = Math.floor(minuts_left / 1000);
                hours = hours < 10 ? '0' + hours : hours;
                minuts = minuts < 10 ? '0' + minuts : minuts;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                return { hours, minuts, seconds };
            }
            setInterval(() => {//通过函数每秒钟调用一次普通函数this指向有问题，用匿名函数
                this.setState({
                    hour:update().hours,
                    minut:update().minuts,
                    second:update().seconds
                })
            }, 1000);
            var listfive = res.b;
            this.setState({
                swipefive: listfive                
            })           
        })
    }
    render() {
        return <div id="index">
            {/* ****************轮播 *****************************/}
            <ReactSwipe key={this.state.swipelist.length} className="carousel" swipeOptions={{ continuous: true, auto: 100}}>
                {
                    this.state.swipelist.map(
                        item => <img src={item.Pic} key={item.ID} />
                    )
                }
            </ReactSwipe>

            <div className="home_class">
                {/* ****************购酒头条 *****************************/}
                <div className="two">
                    <div className="imgbox">
                        <img src="hot.png" />
                    </div>
                    {
                        this.state.goujiutoutiao.map(
                            item => <p>{item.Name}</p> 
                        )}
                </div>
                {/* ****************酒类分类 *****************************/}
                <div className="three">
                    <ul>
                        {
                            this.state.nineclass.map(item => <li ><img src={item.Pic} key={item.ID} /></li>
                            )
                        }
                    </ul>
                </div>
                {/* ***********************掌上秒杀***********************/}
                <div className="four">                    
                    <p>掌上秒杀
                        <span className="end">距结束
                            <span>{this.state.hour}</span>:
                            <span>{this.state.minut}</span>:
                            <span>{this.state.second}</span>
                        </span>
                    </p>
                </div>             
                {/* *************************小轮播************************* */}
                <div className="five">
                     <ReactSwipe key={this.state.swipefive.length} className="carousel_small" swipeOptions={{ continuous: false}}>  
                        {
                            this.state.swipefive.map(
                                item =><dl className="father">
                                    <dt className="son_1"><img src={"http://img0.gjw.com/product/" + item.imgUrl} key={item.Id} />
                                    </dt>
                                    <dd className="son_2">
                                        <h5>{item.ProductName}</h5>
                                        <div>
                                            <p>￥{item.Price}</p>
                                            <span>马上抢</span>
                                        </div>
                                    </dd>
                            </dl>
                            )
                            
                        }
                    </ReactSwipe>
                </div>
                {/* *************************大曲狗年******************* */}
                <div className="binnersix">
                    {
                        this.state.binnersix.map(item => <div className="binnersixson"><img src={item.Pic} key={item.ID} /></div>)
                    }
                </div>
                {/* *************************广告*********************** */}
                <div className="binnerseven">
                    {
                        this.state.binnerseven.map(item => <div className="binnersevenson"><img src={item.Pic} key={item.ID} /></div>)
                    }
                </div>
                <div className="binnerseven_2">
                    <div className="binnerseven_2top">
                        <span>正品保证</span>
                        <span>开箱验货</span>
                        <span>赔付保障</span>
                    </div>

                    {
                        this.state.binnerseven_2.map(item => <div className="binnerseven_2son"><img src={item.Pic} key={item.ID} /></div>)
                    }

                </div>
                {/* *************************酒类详情************************/}
                <div className="details">
                    <div className="list">
                        <ul>
                            <li>精选</li>
                            <li>白酒</li>
                            <li>葡萄酒</li>
                            <li>清酒洋酒</li>
                            <li>黄酒啤酒</li>
                            <li>年份老酒</li>
                        </ul>
                    </div> 
                    <div className="bow">
                    </div>
                </div>
                <Child myname=""/>
                    <ul className="wudi">
                    {
                        this.state.selection.map(item => <li className="wudi_son"><img src={item.Pic} key={item.ID} /></li>)
                    }
                    </ul> 
            </div>
        </div>
    }
}    
export default Index;
