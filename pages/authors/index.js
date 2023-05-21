
import Footer from '@/Commponent/Footer';
import Header from '@/Commponent/Header';
import fs from 'fs/promises'
import path from 'path';
import oneImg from './imgs/one.webp'
import twoImg from './imgs/two.webp'
import Image from 'next/image';
import { useState } from 'react';
const Authors = (props) => {
    const { authors } = props;
    const baseURL = '/imgs/'
    const [itemAuthors, setItemAuthors] = useState(authors);
    const data1 = itemAuthors.map((item) => {
        return (
            <>
                <div className='col-sm-4 d-flex justify-content-center flex-column'>
                    <div className='w-60'>
                        <Image className='w-100 h-100' alt='img' src={item.image.src} width={200} height={200} style={{ width: 'auto', borderRadius: '10px' }} />

                    </div>
                    <div className='d-flex justify-content-center mb-5 flex-column'>
                        <div className='col mt-3'>
                            <p style={{ fontWeight: 'bold' }}>{item.name}</p>
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
                        <button onClick={setData}>setData</button>
                    </div>

                </div>

            </div>
            <div>
            </div>
            <Footer />
        </>
    )

}
export default Authors;


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
export async function setData() {
    const filePath = path.join(process.cwd(), 'data', 'authors.json')
    var jsObj = {
        image: 'mosi',
        id: 'k',
        name: 'مصی',
        about: ' aaaasldmaksdkaskd'
    };
    const jsonData = await fs.writeFile(filePath, jsObj)
    // const data = JSON.parse(jsonData)
    var arry = [];
    arry.push(jsObj, jsObj2)
    var jsonTxt = JSON.stringify(arry);
    console.log(jsonData)



}