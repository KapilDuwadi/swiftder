import Link from "next/link";

interface MenuInterface {
    name: string;
    url: string;
}

const MENUS: MenuInterface[] = [
    {
        name: "Looking for Investing",
        url: "investing"
    },
    {
        name: "Sign up for Beta",
        url: "beta"
    },
    {
        name: "Connect with Us",
        url: "connect"
    },
    {
        name: "The team",
        url: "team"
    }
]

export const NavigationHeader: React.FC = () => {

    const menuStyle = `hover:cursor-pointer hover:font-bold`;

    return (
        <div className="px-20 py-5 border-b flex justify-between items-center">
            <div className="w-1/4"> <img src="logo.svg" /></div>
            <div className='hidden lg:block w-full'>
                <div className="flex gap-x-5 text-2xl w-full justify-between">
                    {MENUS.map((menu: MenuInterface) => {
                        return <Link key={menu.name} className={menuStyle} href={menu.url}> {menu.name} </Link>
                    })}
                </div>
            </div>
        </div>
    )
}