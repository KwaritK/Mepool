import React from "react"
import Link from "next/link"

function Navbar() {
    return (
        <nav className="bg-blue-400 text-white p-5">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                   
                    <li><Link href="/addUser">Add Use</Link></li>
                    <li><Link href="/addItem">Add Equiment</Link></li>
                    <li><Link href="/addWard">Add Ward</Link></li>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
