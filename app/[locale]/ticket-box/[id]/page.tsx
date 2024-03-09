import React from 'react'
import { useRouter } from 'next/router'
export default function page() {
    const router = useRouter()
    return <p>Ticket-Box: {router.query.id}</p>
}
