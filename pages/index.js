import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import styles from '../styles/page.module.css'
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
import Posts from './posts/[pid]';
import Footer from '@/Commponent/Footer';
import Head from 'next/head';

export default function Home(props) {
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

    // const dis = 'هیچ‌کس حتی نمی‌خواهد از کوزه مراقبت مسموم آرایش کند. آخر هفته بود. من یک فوتبالیست کامل هستم. برای نوشیدن، دریاچه بزرگترین ایوان را می گیرد. اهداف زندگی هرکسی بیهوده نیست...'
    // const tit = 'چگونه از کاغذ اولار قدیمی اسباب بازی بسازیم؟'

    // const [post, setPost] = useState([
    //     { image: midImg, titel: tit, description: dis, wirter: 'مصطفی کاهانی', date: '12 اردیبهشت' },
    //     { image: midImg, titel: tit, description: dis, wirter: 'مصطفی کاهانی', date: '12 اردیبهشت' },
    //     { image: midImg, titel: tit, description: dis, wirter: 'مصطفی کاهانی', date: '12 اردیبهشت' },
    //     { image: midImg, titel: tit, description: dis, wirter: 'مصطفی کاهانی', date: '12 اردیبهشت' },


    // ]);
    const { posts } = props
    function addI() {
        const [newItem, setNewItem] = useState(posts);
        const data = [...newItem];
        data.push({
            titel: "nameProduct",
            wirter: "priceProduct",
            valueP: "data"
        })
        setNewItem(data)
        console.log(newItem)

        // const copyPosts = [...posts];
        // console.log(newItem)
        // const newI = copyPosts.push({ titel: 'test' })
        // setNewItem(newI)
        // setNewItem({ titel: 'test' })
    }

    const dataPost = posts.map((x, index) => {
        return (
            <>
                <div className='col-sm-6 section-post' key={x.id}>
                    <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={upImg} className='imgUp' alt='img' height='100%' />
                    </div>
                    <ul className="row mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
                        <li className='col-5'>
                            <Link href={''} className=" items-center hover:text-primary profiles ">
                                <Image style={{ borderRadius: '100%', marginLeft: '10px' }} alt={x.altImg} width={32} height={32} src={midImg} />
                                <span className='profile-text text-muted'> {x.wirter}</span>
                            </Link>
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
                    <Link href={`/posts/${x.id}`} className='titel'> {x.titel}</Link>
                    <p className='dis' maxlength="200"> {x.smallDes} </p>
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

            <Head>
                <title>خانه</title>
            </Head>
            <Header />
            <div className='container'>
                <div className='row'>
                    {dataPost}
                </div>
                <button onClick={addI}>addI</button>
                {/* {
                    posts.map((item) => (
                        <li key={item.id}>
                            <Link href={`/posts/${item.id}`}>
                                {item.titel}
                            </Link>
                        </li>
                    ))
                } */}

            </div>
            {/* <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center mt-5 flex-column">
                        <Image src={upImg} className='imgUp' alt='ss' />
                        <h4 className='mt-3'>سلام</h4>
                        <div className='container'>
                            <p>دادادادادادستنیشسنتینشسانیاشسمنایمناشسایشسنمیامشسایاشسمیامنشسایمناشسمناینشاسیمنشسانیاشسامیشسنمیناشسیمشسنمایشسایامنتابنتسیاتباسینتباتسیاتباینستاب</p>
                        </div>

                    </div>

                </div>

            </div> */}
            <Footer />
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