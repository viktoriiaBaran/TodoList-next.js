'use client'
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Nav() {

    return (
        <header className="bg-gray-200">
            <nav className="flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 text-lg font-bold text-gray-600 p-6 lg:px-8">Home Page</a>
                </div>
                <Link className="text-lg font-bold text-gray-600 hover:active:bg-gray-300 p-6 lg:px-8" href="/posts">Posts</Link>
                <Link className="text-lg font-bold text-gray-600 hover:active:bg-gray-300 p-6 lg:px-8" href="/todo">Todo List</Link>
                <UserButton afterSignOutUrl="/"/>
            </nav>
        </header>
    )
}