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
import Footer from '../../Commponent/Footer';
export default function PostsPage(props) {


    const { posts } = props;

    const { loadedPost } = props;
    if (!loadedPost) {
        return <h1>Loading...</h1>
    }
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

    const [suggItemList, setSuggItemList] = useState(props);
    console.log(suggItemList)

    // const suggItem = suggItemList.map((x, index) => {
    //     return (
    //         <>
    //             <div key={index} className='col-sm-4 d-flex justify-content-center flex-column '>
    //                 <Image className='imgUp' src={upImg} alt='img' />
    //                 <h4 className='mt-3'>{x.titel}</h4>
    //                 <div style={{ width: "auto" }}>
    //                     <p > {x.description}</p>
    //                 </div>
    //             </div>
    //             <div key={x.id} className='row'>

    //             </div>

    //         </>
    //     )
    // })


    // const suggPosts = item.map((item, index) => {
    //     return (

    //         <li key={index}>
    //             {item}
    //         </li>
    //     )
    // })







    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    {/* {dataPost} */}
                    <div className='d-flex justify-content-center mt-5 flex-column'>
                        <h2 style={{ fontWeight: 'bold' }}>{loadedPost.titel}</h2>
                        <div className='row w-50'>
                            <li className='col-5 '>
                                <a className=" items-center hover:text-primary profiles justify-content-center ">
                                    <Image style={{ borderRadius: '100%', marginLeft: '10px' }} alt="Mark Dinn" width={32} height={32} src={midImg} />
                                    <span className='profile-text text-muted'> مصطفی کاهانی</span>
                                </a>
                            </li>
                            <li className='col-7 d-flex profile-text text-muted justify-content-center'>12 اردیبهشت </li>
                        </div>
                        <div className='container' style={{maxWidth: '1000px'}} >
                            <div className='d-flex justify-content-center '>
                                <Image src={upImg} className='imgUp w-100' alt='img' height='100%' />
                            </div>
                            <div className='row'>

                                <p className='w-100 col-sm-6' style={{ fontSize: '15px' }}>
                                    {loadedPost.description}


                                </p>
                                {/* <p className='w-100 col-sm-6' style={{ fontSize: '15px' }}>
                                    {props.description}
                                </p> */}
                            </div>

                            <div className="d-flex flex-row-reverse direction-row-reverse justify-content-between align-items-stretch ">
                                <li className=' '>
                                    <a className=" items-center hover:text-primary profiles justify-content-center ">
                                        <Image style={{ borderRadius: '100%', marginLeft: '10px' }} alt="Mark Dinn" width={32} height={32} src={midImg} />
                                        <span className='profile-text text-muted'> مصطفی کاهانی</span>
                                    </a>
                                </li>
                                <ul className="social-share d-flex mb-4">
                                    <li className="">
                                        <a aria-label="facebook button-so ml-1" style={{ marginLeft: '20px', color: '#838383' }} href="https://facebook.com/sharer/sharer.php?u=//post-3" target="_blank" rel="noreferrer noopener" button="true">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"></path></svg>
                                        </a></li>
                                    <li class="inline-block">
                                        <a aria-label="twitter button-so" style={{ marginLeft: '20px', color: '#838383' }} href="https://twitter.com/intent/tweet/?text=What you need to know about Photography&amp;amp;url=//post-3" target="_blank" rel="noreferrer noopener" button="true"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path></svg>
                                        </a>
                                    </li>
                                    <li class="inline-block">
                                        <a aria-label="linkedin button-so" style={{ marginLeft: '20px', color: '#838383' }} href="https://www.linkedin.com/shareArticle?mini=true&amp;url=//post-3&amp;title=What you need to know about Photography&amp;summary=meta description&amp;source=/" target="_blank" rel="noreferrer noopener"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>
                                        </a>
                                    </li>
                                    <li className="inline-block"><a aria-label="pinterest button-so" style={{ marginLeft: '20px', color: '#838383' }} href="https://pinterest.com/pin/create/button/?url=//post-3&amp;media=&amp;description=meta description" target="_blank" rel="noreferrer noopener" button="true"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0063.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z"></path></svg>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className='container mt-5'>
                        <div className='row  '>
                            <div className='d-flex justify-content-center'>
                                <p className='text-dark' style={{fontSize: '30px', fontWeight: 'bold'}}>مطالب پیشنهادی</p>

                            </div>
                            {/* {suggItem} */}
                            {/* {
                                posts.map((x, index) => {
                                    <div>
                                        <div key={index} className='col-sm-4 d-flex justify-content-center flex-column '>
                                            <Image className='imgUp' src={upImg} alt='img' />
                                            <h4 className='mt-3'>{x.titel}</h4>
                                            <div style={{ width: "auto" }}>
                                                <p > {x.description}</p>
                                            </div>
                                        </div>
                                        <div key={x.id} className='row'>

                                        </div>
                                    </div>
                                })
                            } */}
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
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
    const post = data.posts.find((item) => item.id === postId)
    return {
        props: {
            loadedPost: post,
        },
    }
}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.posts.map((item) => item.id)
    const params = ids.map((item) => ({ params: { pid: item } }))
    return {
        paths: params,
        fallback: true,
    }
}