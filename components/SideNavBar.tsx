import SideNavItem from "./ui/sidenav/SideNavItem";
import SideNavSec from "./ui/sidenav/SideNavSec";
import SideNavTitle from "./ui/sidenav/SideNavTitle";

export default function SideNavBar() {
  return (
    <div className="fixed min-h-screen w-72 border-r bg-white z-10 mt-16">
      <SideNavSec>
        <SideNavItem href="/">Dashboard</SideNavItem>
      </SideNavSec>
      <SideNavSec>
        <hr className="border-2" />
        <SideNavTitle>tradings</SideNavTitle>
        <SideNavItem href="/trade">取引一覧</SideNavItem>
        <SideNavItem href="/stock">銘柄一覧</SideNavItem>
      </SideNavSec>
    </div>
  );
}
