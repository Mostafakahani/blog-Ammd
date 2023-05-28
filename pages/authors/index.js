
import Footer from '@/Commponent/Footer';
import Header from '@/Commponent/Header';
import fs from 'fs/promises'
import path from 'path';
import Image from 'next/image';
import { use, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
const Authors = (props) => {
    const { authors } = props;

    const [itemAuthors, setItemAuthors] = useState(authors);

    const { image } = props

    const data1 = itemAuthors.map((item, index) => {
        return (
            <>
                <div key={index} className='col-sm-4 d-flex justify-content-center flex-column'>
                    <Link href={`/authors/authorsList/${item.id}`} className='w-60'>
                        <Image className='w-100 h-100' alt='img' src={item.image} width={400} height={400} style={{ width: 'auto', borderRadius: '10px' }} />

                    </Link>
                    <div className='d-flex justify-content-center mb-5 flex-column'>
                        <div className='col mt-3'>
                            <Link className='titel' href={''}>{item.name}</Link>
                        </div>
                        <div className='col'>
                            <p>{item.about}</p>
                        </div>

                    </div>
                </div>
            </>


        )
    })
    return (
        <>
            <Head>
                <title>نویسندگان</title>

            </Head>
            <Header />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='d-flex justify-content-center flex-column'>
                        <p className='text-dark' style={{ fontWeight: 'bold', fontSize: '30px' }}>
                            نویسندگان
                        </p>
                        <div className='row justify-content-center '>
                            {data1}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}
export default Authors;
// export function AllItems() {
//     const [imgsData, setImgsData] = useState([
//         { img1: oneImg },
//         { img1: twoImg }
//     ])


// }

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'authors.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: {
            authors: data.authors,
        },
    }
}

