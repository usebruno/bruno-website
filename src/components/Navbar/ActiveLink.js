import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export const ActiveLink = ({ href, label }) => {
    const { asPath } = useRouter();

    const isActive = asPath.startsWith(href);

    const className = isActive
        ? 'font-medium mr-3 text-yellow-600 hover:text-yellow-600 transition'
        : 'font-medium mr-3 hover:text-yellow-600 transition';

    return (
        <Link href={href} className={className}>
            {label}
        </Link>
    );
};