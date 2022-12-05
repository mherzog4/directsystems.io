import Link from "next/link";
export default function Navbar () {
    return (
    <nav class= "text-3xl font-bold underline">
        <ul>
            <li>
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