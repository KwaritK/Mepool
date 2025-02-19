import React from "react"
import Link from "next/link"

function Navbar() {
    return (
        <nav className="bg-blue-400 text-white p-5">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/"> NextAuth</Link>

                    </div>
                    <li><Link href="/addUser">Add Use</Link></li>
                    <li><Link href="/">Add Equiment</Link></li>
                    <li><Link href="/ward">Add Ward</Link></li>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
