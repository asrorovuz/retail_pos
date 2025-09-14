import { HiOutlineCog, HiOutlineCube, HiOutlineDotsHorizontal, HiOutlineRefresh, HiOutlineTrendingUp } from "react-icons/hi";
import type { MenuItem } from "../../model/menu";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router";

export const items: MenuItem[] = [
    {
        label: <Link to="/sales">Продажи</Link>,
        key: "sales",
        icon: <GiShoppingCart size={18} />
    },
    {
        label: <Link to="/returns">Возвраты</Link>,
        key: "returns",
        icon: <HiOutlineRefresh size={18} />,
    },
    {
        label: <Link to="/income">Приход</Link>,
        key: "income",
        icon: <HiOutlineTrendingUp size={18} />,
    },
    {
        key: "products",
        label: <Link to="/products">Товары</Link>,
        icon: <HiOutlineCube size={18} />,
    },
    {
        label: <Link to="/settings">Настройки</Link>,
        key: "settings",
        icon: <HiOutlineCog size={18} />,
    },
    {
        label: "",
        key: "more",
        icon: <HiOutlineDotsHorizontal size={18} />,
        children: [
            {
                key: "logs",
                label: "Логи",
            },
            {
                key: "about",
                label: "О нас",
            },
        ],
    },
];
