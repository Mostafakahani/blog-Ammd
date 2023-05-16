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
    const handleservtest = () => {
        alert('در دسترس نمی باشد.');
    }
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    const { posts } = props

    const dataPost = posts.map((x, index) => {
        return (
            <>
                <div className='col-sm-6 section-post' key={index}>
                    <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={upImg} className='imgUp' alt='img' height='100%' />
                    </div>
                    <ul className="row mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
                        <li className='col-5'>
                            <a className=" items-center hover:text-primary profiles ">
                                <Image style={{ borderRadius: '100%', marginLeft: '10px' }} alt="Mark Dinn" width={32} height={32} src={midImg} />
                                <span className='profile-text text-muted'> {x.wirter}</span>
                            </a>
                        </li>
                        <li className='col-7 profile-text text-muted'>{x.date} </li>
                        <li>
                            <ul>
                                <li className="inline-block">
                                    <a className="mr-3 hover:text-primary" href="/categories/art"></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h4 className='titel'> {x.titel}</h4>
                    <p className='dis'> {x.description} </p>
                </div>

            </>
        )

    })

    const data1 = posts.map((item) => {
        return (
            <li key={item.id}>{item.titel}</li>
        )
    })





    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    {/* {dataPost} */}
                    <div className='d-flex justify-content-center mt-5 flex-column'>
                        <h2 style={{ fontWeight: 'bold' }}>چگونه از کاغذ اولار قدیمی اسباب بازی بسازیم؟</h2>
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
                        <div className='container' style={{ width: '1000px' }}>
                            <p className='w-100' style={{ fontSize: '15px' }}>
                                هیچ‌کس حتی نمی‌خواهد از کوزه مراقبت مسموم آرایش کند. آخر هفته بود. من یک فوتبالیست کامل هستم. برای نوشیدن، دریاچه بزرگترین ایوان را می گیرد. هر یک از اهداف زندگی، Euismod را چاپلوسی نمی کند.

                                خود این شرکت یک شرکت بسیار موفق است. هیچ کس حتی به خود زحمت باز کردن آن را نمی دهد. پس زایمان را برای انتخاب باز کنم؟ طرد شدن از سوی برخی افراد، انتخابی راحت در زمان حال برای دردی مانند اوست!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'posts.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: {
            posts: data.posts,
        },
    }
}