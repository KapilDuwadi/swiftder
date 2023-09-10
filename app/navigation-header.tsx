"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuInterface {
    name: string;
    url: string;
}

const MENUS: MenuInterface[] = [
    {
        name: "Connect with Us",
        url: "/connect"
    }
]

export const NavigationHeader: React.FC = () => {

    const pathname = usePathname();

    const menuStyle = `hover:cursor-pointer hover:font-bold`;
    return (
        <div className="px-10 lg:px-20 py-5 border-b flex justify-between items-center">

            <div className="w-1/4"> <Link href={'/'}> <img src="logo.svg" /> </Link></div>

            <div className="flex gap-x-5 text-xl md:text-2xl justify-between">
                {MENUS.map((menu: MenuInterface) => {
                    return <Link
                        key={menu.name}
                        className={`${menuStyle} ${pathname == menu.url ? ` font-bold` : ''}`}
                        href={menu.url}
                    > {menu.name} </Link>
                })}
            </div>

        </div>
    )
}