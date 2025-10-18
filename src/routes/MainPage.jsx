import { Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

const secondLabels = [
  { key: "/recommend", label: "推荐" },
  { key: "/recommend/topList", label: "排行榜" },
  { key: "/recommend/playList", label: "歌单" },
  { key: "/recommend/djRadio", label: "主播电台" },
  { key: "/recommend/singer", label: "歌手" },
  { key: "/recommend/album", label: "专辑" },
];


export default function MainPage() {

  const location = useLocation();

  // 处理选中状态（因为 "/" 比较特殊）
  const currentPath =
    location.pathname === "/" ? "/" : `/${location.pathname.split("/")[1]}`;
  
  
  return (
    <div style={{ paddingTop: 16 }}>
      {/* 二级导航菜单 */}
      <Menu
        mode="horizontal"
        selectedKeys={[currentPath]}
        items={secondLabels.map((item) => ({
          key: item.key,
          label: <Link to={item.key}>{item.label}</Link>,
        }))}
      />

      {/* 内容区域（由二级路由渲染） */}
      <div style={{ padding: "16px 0" }}>
        <Outlet />
      </div>
    </div>
  );
}