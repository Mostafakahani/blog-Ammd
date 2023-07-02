import Image from 'next/image'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
// import fs from 'fs/promises'
// import path from 'path';
import Header from '@/Commponent/Header';
import Footer from '@/Commponent/Footer';
import Head from 'next/head';
import { useEffect, useState } from 'react';
export default function Home(props) {
    // const { posts } = props
    // const { loadedPost } = props;

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
  


    useEffect(() => {
        fetchPosts();
    }, []);
    

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const addPost = async () => {
        try {
            await axios.post('http://localhost:3001/api/posts', { title, content, author, imageUrl });
            fetchPosts();
            setTitle('');
            setContent('');
            setAuthor('');
            setImageUrl('');
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };
    const dataPost = posts.map((x) => {
        return (
            <>
                <div className='col-sm-6 section-post' key={x.id}>
                    <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={x.image} width={1000} height={1000} style={{ width: '100%', height: '100%' }} className='imgUp' alt='img' />
                    </div>
                    <ul className="row mt-4 mb-4 flex flex-wrap items-center text-text">
                        <li className='col-7'>
                            <Link href={`/authors/authorsList/${x.authorsId}`} className=" items-center hover:text-primary profiles ">
                                <Image style={{ borderRadius: '100%', marginLeft: '10px' }} alt={x.wirter} width={32} height={32} src={x.wirterProfile} />
                                <span className='profile-text text-muted'> {x.wirter}</span>
                            </Link>
                        </li>
                        <span className='d-flex justify-content-end col-5 profile-text text-muted'>{x.date} </span>
                    </ul>
                    <Link href={`/posts/${x.id}`} className='titel'> {x.titel}</Link>
                    <p className='dis'> {x.smallDes} </p>
                </div>
            </>
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
// export async function getStaticProps() {
//     const filePath = path.join(process.cwd(), 'data', 'posts.json')
//     const jsonData = await fs.readFile(filePath)
//     const data = JSON.parse(jsonData)
//     return {
//         props: {
//             posts: data.posts,
//         },
//     }
// }
// export async function getStaticProps(context) {
//     const { params } = context;
//     const postId = params.pid;
//     const filePath = path.join(process.cwd(), 'data', 'posts.json')
//     const jsonData = await fs.readFile(filePath)
//     const data = JSON.parse(jsonData)
//     const post = data.posts.find((item) => item.id === postId)
//     return {
//         props: {
//             loadedPost: post,
//         },
//     }
// }