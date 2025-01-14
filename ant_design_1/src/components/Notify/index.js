import { Dropdown,Button } from "antd";
import {BellOutlined} from "@ant-design/icons";
import "./Notify.css"
function Notify(){
    const items = [
        {
          label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
              1st menu item
            </a>
          ),
          key: '0',
        },
        {
          label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
              2nd menu item
            </a>
          ),
          key: '2',
        },
        {
          label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
              2nd menu item
            </a>
          ),
          key: '3',
        },
        {
          label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
              2nd menu item
            </a>
          ),
          key: '4',
        },
        {
          label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
              2nd menu item
            </a>
          ),
          key: '5',
        },{
          label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
              2nd menu item
            </a>
          ),
          key: '6',
        },{
          label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
              2nd menu item
            </a>
          ),
          key: '7',
        },{
          label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
              2nd menu item
            </a>
          ),
          key: '8',
        },  
        
      ];

    return(
        <>
        <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
    dropdownRender={(menu)=>(
      <div className="notify__dropdown">
        <div className="notify__header">
        <div className="notify__header-title">
        <BellOutlined /> Notification
        </div>
        <Button type="link"> View All</Button>
        </div>
        <div className="notify__body">
          {menu}
        </div>
      </div>
    )}

    >

    <Button type="text" icon={<BellOutlined />}> </Button>

    </Dropdown>

        </>
    )
}
export default Notify;