import { Button } from "antd"
import { GoSignOut } from "react-icons/go";
import MenuFooter from "../../../shared/ui/menu/Menu";

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <Button size="large" danger icon={<GoSignOut />} />
      <div className="w-full flex justify-center">
        <MenuFooter />
      </div>
    </div>
  )
}

export default Footer