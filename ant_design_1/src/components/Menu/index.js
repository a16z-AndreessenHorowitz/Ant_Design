import { Menu } from "antd"
import { LoginOutlined,ArrowsAltOutlined } from "@ant-design/icons"


function MenuBar(){

    const items=[
        {
            label:"menu 1",
            icon:<LoginOutlined />,
            key:"menu-1",
            children:[
                {
                    label:"menu 1 1",
                    key:"menu-1-1",
                    icon:<ArrowsAltOutlined />
                },
                {
                    label:"menu 1 2",
                    key:"menu-1-2",
                  
                },
                {
                    label:"menu 1 3",
                    key:"menu-1-3",
                
                },
            ]
        },
        {
            label:"menu 2",
            key:"menu-2",
            icon:<LoginOutlined />
        },
        {
            label:"menu 3",
            key:"menu-3",
            icon:<LoginOutlined />
        },
    ]
    return <>
    <Menu
      
  
      mode="inline"
      items={items}
    />
    </>
}
export default MenuBar
