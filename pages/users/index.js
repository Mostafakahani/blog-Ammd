import Link from "next/link";

function UserPage() {
    const users = [
        { id: 1, username: 'Mosi' },
        { id: 2, username: 'Admin' }
    ]

    return (
        <div>
            <h3>UserPage Page</h3>
            <div>
                {users.map((item) => (
                    <li key={item.id}>
                        <Link href={{
                            pathname: `/users/[id]`,
                            query: { id: item.id }
                        }} >{item.username}</Link>
                    </li>
                ))}
            </div>
        </div>
    )
}
export default UserPage;