import { useRouter } from "next/router";

function UserId() {
    const router = useRouter()
    console.log(router.pathname);
    console.log(router.query);

    const showIdhandler = () =>{
        router.push({
            pathname: '/users/[id]',
            query: { id: 'Mosi'}
        })
    }
    return(
        <div>
            <h3>UserID Page</h3>
            <button onClick={showIdhandler}>ShowID</button>
        </div>
    )

}
export default UserId;