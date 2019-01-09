import {
	HashRouter as Router ,
	Switch,
	Route,
	Redirect
} from "react-router-dom"
import React from "react"

import App from "../App"
import Cart from "../views/Cart"
import Class from "../views/Class"
import Nice from "../views/Nice"
import Index from "../views/Index"
import Userinfo from "../views/Userinfo"

const router = (
    <Router>
        <App>
            <Switch>
                <Route path="/index" component={Index} />
                <Route path="/class" component={Class} />
                <Route path="/nice" component={Nice}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/userinfo" component={Userinfo} />
                <Redirect from="*" to="/index"/>
            </Switch>
        </App>
    </Router >
)
export default router;