import {Layout} from "antd"

import "./layoutDefault.css"
import logo from "../../../image/logo.png"
import { SearchOutlined,MenuUnfoldOutlined  } from "@ant-design/icons"
import { useState } from "react";
import Notify from "../../Notify/index.js";
import MenuBar from "../../Menu/index.js";
import {Outlet} from "react-router-dom"
const { Sider, Content } = Layout;

function LayoutDefault(){
    const [collapsed,setCollapse]=useState(false);

  
    return<>
        <Layout className="layout-default">    
            <header className="header">
                <div className={"header__logo "+ (collapsed && "header__logo--collapsed")}>
                    <img src={collapsed ? "" : logo} alt="Khong"/>
                </div>
                <div className="header__nav">
                    <div className="header__nav-left">
                        <div className="header__collapse" onClick={()=>setCollapse(!collapsed)}>
                         <MenuUnfoldOutlined />
                        </div>
                        <div className="header__search">
                         <SearchOutlined />
                        </div>
                    </div>
                    <div className="header__nav-right"><Notify/></div>
                </div>
            </header>

            <Layout>
                <Sider className="sider" collapsed={collapsed} theme="light"><MenuBar/></Sider>
                <Content className="content"><Outlet/></Content>
            </Layout>

        </Layout>
    </>
}
export default LayoutDefault;