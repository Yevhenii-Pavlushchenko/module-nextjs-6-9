
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }: { params: { id: string } }) {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res => res.json());
    if (!user) { 
        notFound()
    }
    return (
        <div>{ user.name }</div>
    )
}