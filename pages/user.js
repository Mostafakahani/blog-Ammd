function UserPage(props) {
    return (
        <>
            <h1>{props.username}</h1>
        </>
    )
}

export default UserPage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    console.log(req)
    console.log(res)
    return {
        props: {
            username: 'admin'
        }
    }
}