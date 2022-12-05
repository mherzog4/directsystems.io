import Link from "next/link";
export default function Navbar () {
    return (
    <nav class= "bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul class="container flex flex-wrap items-center justify-between mx-auto">
            <li class="flex items-center">
                <Link href="/">
                    Home
                </Link>
                <Link href="/features">
                    Features
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul> 
        
    </nav>
    )
}