import Link from "next/link";
import Head from 'next/head'

function HomePage(props) {
    const { products } = props;
    const testServer = () =>{
        alert("در دسترس نمی باشد")
    }
    return (
        <>

            <div className="circal">
            </div>
            <div className="container" style={{ marginTop: '15%' }}>
                <div className="row gid spn">
                    <Link className="col bg-card-me aa" href='/learnConnection'>
                        
                        آموزش اتصال
                        <span className="">-&gt;</span>
                        
                        </Link>
                    <Link className="col bg-card-me aa" href='/download'>دانلود نرم افزار</Link>
                </div>
                <div className="row gid1">
                    <Link className="col bg-card-me aa" href='#' onClick={testServer}>سرور تست</Link>
                </div>


                {/* <ul>
                {products.map((item) => (
                    <li key={item.id}>
                    {item.titel}
                    </li>
                ))}
            </ul> */}

            </div>
        </>
    )
}
export async function getStaticProps() {
    return {
        props: {
            products: [{ id: 'p1', titel: 'Product 1' }, { id: 'p2', titel: 'Product 2' }]
        }
    }
}

export default HomePage;