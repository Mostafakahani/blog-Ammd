import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import styles from '@/styles/page.module.css'
import HeaderStyle from '@/styles/header.module.css'
import 'bootstrap/dist/css/bootstrap.css';
// import imgLogo from '@/pages/imgs/logo1.png'
// const inter = Inter({ subsets: ['latin'] })
import upImg from '@/pages/imgs/01.webp'
import midImg from '@/pages/imgs/mark-dinn.webp'
// import midImg2 from '@/pages/imgs/02.webp'
// import midImg3 from '@/pages/imgs/03.webp'

import fs from 'fs/promises'
import path from 'path';
import ImgLogo from '@/pages/imgs/photo.jpeg'
import { lazy, useState } from 'react';
import Header from '@/Commponent/Header';
export default function Posts(props) {


    const { posts } = props

    // const dataPost = props.map((x) => {
    //     return (
    //         <>
    //             <div className='col-sm-6 section-post' key={x.id}>
    //                 <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
    //                     <Image src={upImg} className='imgUp' alt='img' height='100%' />
    //                 </div>
    //                 <ul className="row mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
    //                     <li className='col-5'>
    //                         <a className=" items-center hover:text-primary profiles ">
    //                             <Image style={{ borderRadius: '100%', marginLeft: '10px' }} alt="Mark Dinn" width={32} height={32} src={midImg} />
    //                             <span className='profile-text text-muted'> {x.wirter}</span>
    //                         </a>
    //                     </li>
    //                     <li className='col-7 profile-text text-muted'>{x.date} </li>
    //                     <li>
    //                         <ul>
    //                             <li className="inline-block">
    //                                 <a className="mr-3 hover:text-primary" href="/categories/art"></a>
    //                             </li>
    //                         </ul>
    //                     </li>
    //                 </ul>
    //                 <h4 className='titel'> {x.titel}</h4>
    //                 <p className='dis'> {x.description} </p>

    //             </div>

    //         </>
    //     )

    // })

    // const data1 = posts.map((item) => {
    //     return (
    //         <li key={item.id}>{item.titel}</li>
    //     )
    // })

    console.log(posts)
    const [suggItemList, setSuggItemList] = useState([
        { namePost: 'آموزش ساختن فلان بهمان', dis: 'ssss' },
        { namePost: 'چخبر سوتونم خوبی؟', dis: 'ssss' },
        { namePost: 'آیا خرید از کالا دیجی منتقیق است', dis: 'نسدینتشستنیشسنابسیتشسمنباشتسابتسشتبتسشیتبلسیتبتسیبباتیسابتسیتب' },
    ]);
    const suggItem = suggItemList.map((x, index) => {
        return (
            <>
                <div key={index} className='col-sm-4 d-flex justify-content-center flex-column '>
                    <Image className='imgUp' src={upImg} />
                    <h4 className='mt-3'>{x.namePost}</h4>
                    <div style={{ width: "auto" }}>
                        <p > {x.dis}</p>
                    </div>
                </div>

            </>
        )
    })
    const { loadedPost } = props;
    if (!loadedPost) {
        return <h1>Loading...</h1>
    }





    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    {dataPost}
                    <div className='d-flex justify-content-center mt-5 flex-column'>
                        <h2 style={{ fontWeight: 'bold' }}>{props.titel}</h2>
                        <div className='row w-50'>
                            <li className='col-5 '>
                                <a className=" items-center hover:text-primary profiles justify-content-center ">
                                    <Image style={{ borderRadius: '100%', marginLeft: '10px' }} alt="Mark Dinn" width={32} height={32} src={midImg} />
                                    <span className='profile-text text-muted'> مصطفی کاهانی</span>
                                </a>
                            </li>
                            <li className='col-7 d-flex profile-text text-muted justify-content-center'>12 اردیبهشت </li>
                        </div>
                        <div className=''>
                            <Image src={upImg} className='imgUp' alt='img' height='100%' />


                        </div>
                        <div className='container' >
                            <div className='row'>

                                <p className='w-100 col-sm-6' style={{ fontSize: '15px' }}>
                                    {props.description}

                                </p>
                                <p className='w-100 col-sm-6' style={{ fontSize: '15px' }}>
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className='container'>
                        <div className='row'>
                            {suggItem}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'posts.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const postId = params.pid;
    const filePath = path.join(process.cwd(), 'data', 'posts.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    // const postId = params.pid
    // const filePath = path.join(process.cwd(), 'data', 'posts.json')
    // const jsonData = await fs.readFile(filePath)
    // const data = async getData()
    const post = data.posts.find((item) => item.id === postId)
    return {
        props: {
            loadedPost: post,
        },
    }
}

export async function getStaticPaths() {
    // const data = await getData();
    // const ids = data.posts.map((item) => item.id)
    // const params = ids.map((item) => ({ params: { pid: item } }))
    return {
        paths: [
            { params: { pid: 'p1'}},
            { params: { pid: 'p2'}},
            { params: { pid: 'p3'}},
    
    
    ],
        fallback: true,
    }
}