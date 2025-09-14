import { Menu, type MenuProps } from "antd";
import { useState } from "react";
import { items } from "./item";

const MenuFooter = () => {
    const [current, setCurrent] = useState("sales");

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            className="!w-max !flex !justify-center !flex-1"
            style={{ fontSize: "18px", border: "none", fontWeight: 500, background: "transparent" }}
            selectedKeys={[current]}
            mode="horizontal"
            overflowedIndicator={false}
            items={items}
        />
    );
};

export default MenuFooter;
