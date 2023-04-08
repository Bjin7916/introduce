import { Link, useLocation } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import * as S from "../../styles/theme";

function SideBar() {
    const pathName = useLocation().pathname;

    console.log(pathName);
    const menus = [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Project", path: "/project" },
    ];

    return (
        <S.sidebar className="sidebar">
            <p>Jin's history</p>
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SideBarItem
                            menu={menu}
                            isActive={pathName === menu.path ? true : false}
                        />
                    </Link>
                );
            })}
        </S.sidebar>
    );
}
export default SideBar;
