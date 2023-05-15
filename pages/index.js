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
import fs from 'fs/promises'
import path from 'path';
import ImgLogo from '@/pages/imgs/photo.jpeg'
import { lazy, useState } from 'react';
import Header from '@/Commponent/Header';
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

    const dis = 'هیچ‌کس حتی نمی‌خواهد از کوزه مراقبت مسموم آرایش کند. آخر هفته بود. من یک فوتبالیست کامل هستم. برای نوشیدن، دریاچه بزرگترین ایوان را می گیرد. اهداف زندگی هرکسی بیهوده نیست...'
    const tit = 'چگونه از کاغذ اولار قدیمی اسباب بازی بسازیم؟'

    const [post, setPost] = useState([
        { image: midImg, titel: tit, description: dis, wirter: 'مصطفی کاهانی', date: '12 اردیبهشت' },
        { image: midImg, titel: tit, description: dis, wirter: 'مصطفی کاهانی', date: '12 اردیبهشت' },
        { image: midImg, titel: tit, description: dis, wirter: 'مصطفی کاهانی', date: '12 اردیبهشت' },
        { image: midImg, titel: tit, description: dis, wirter: 'مصطفی کاهانی', date: '12 اردیبهشت' },


    ]);
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
                    {dataPost}
                </div>
                {data1}

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