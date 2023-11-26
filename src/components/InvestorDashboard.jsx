import { Button, Layout, theme } from "antd";
import logo from "../assets/logo.png";
import MenuList from "./MenuList";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;
const InvestorDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="flex">
      {/* SIDEBAR COMPONENT */}
      <div>
        <Layout>
          <Sider
            collapsed={collapsed}
            collapsible
            trigger={null}
            className="text-white"
          >
            <img className="w-56 bg-[#ededed]" src={logo} alt="Logo Image" />
            <MenuList />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <Button
                type="text"
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
            </Header>
          </Layout>
        </Layout>
      </div>
      {/* DASHBOARD COMPONENT */}
      <div>
        {/* Digits Area */}
        <div className="">
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
        {/* Graph Area */}
        <div></div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
