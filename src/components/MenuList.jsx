import { Menu } from "antd";
import { HomeOutlined, DollarOutlined, FundOutlined } from "@ant-design/icons";

const MenuList = () => {
  return (
    <Menu
      className="menu-bar bg-[#ededed] flex flex-col text-base relative h-[88vh] gap gap-4"
      mode="inline"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="investment" icon={<DollarOutlined />}>
        Investment
      </Menu.Item>
      <Menu.Item key="Assert" icon={<FundOutlined />}>
        Assert
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
