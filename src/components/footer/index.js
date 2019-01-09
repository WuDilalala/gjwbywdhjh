import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import'./index.scss'
class Footer extends Component{
    render(){
        return <div className="footer_box">
            <ul>
                <li><NavLink to='/index' activeClassName="cc" replace><i className="iconfont">&#xe677;</i><span>首页</span>
                </NavLink></li>                
                <li><NavLink to='/class' activeClassName="cc" replace><i className="iconfont">&#xe630;</i><span>分类</span>
                </NavLink></li>                
                <li><NavLink to='/nice' activeClassName="cc" replace><i className="iconfont">&#xe626;</i><span>尊享福利</span>
                </NavLink></li>                
                <li><NavLink to='/cart' activeClassName="cc" replace><i className="iconfont">&#xe643;</i><span>购物车</span>
                </NavLink></li>                
                <li><NavLink to='/userinfo' activeClassName="cc" replace><i className="iconfont">&#xe612;</i><span>我的</span>
                </NavLink></li>
              
                {/* <li><NavLink to='/classify' activeClassName='App' replace><span>分类</span></NavLink></li>
                <li><NavLink to='/nice' activeClassName='App' replace><span>优选</span></NavLink></li>
                <li><NavLink to='/shopping' activeClassName='App' replace><span>购物车</span></NavLink></li>
                <li><NavLink to='/mine' activeClassName='App' replace><span>我的</span></NavLink></li> */}

            </ul>
        </div>
    }
}
export default Footer