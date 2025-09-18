import { Menu, type MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router";
import { items } from "./item";
import { useState } from "react";

const MenuFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(location.pathname.replace("/", ""));

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate("/" + e.key); // avtomatik routerga o'tadi
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      className="!w-max !flex !justify-center !flex-1"
      style={{ fontSize: "18px", border: "none", fontWeight: 500, background: "transparent" }}
      mode="horizontal"
      overflowedIndicator={false}
      items={items}
    />
  );
};

export default MenuFooter;
