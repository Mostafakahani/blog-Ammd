import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '@/Commponent/Header';
import Footer from '@/Commponent/Footer';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home(props) {
    const [posts, setPosts] = useState([]);

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

    let renderPosts;
    if (posts.length === 0) {
        renderPosts = (
            <div className="col-sm-12">
                <h2 className='mt-5 mb-5 text-center' style={{fontWeight: 'bold'}}>_پستی برای مشاهده وجود ندارد_</h2>
            </div>
        );
    } else {
        renderPosts = posts.map((post) => (
            <div className="col-sm-6 section-post" key={post.id}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src={post.image_url} width={1000} height={1000} className="imgUp" alt="img" />
                </div>
                <ul className="row mt-4 mb-4 flex flex-wrap items-center text-text">
                    <li className="col-7">
                        <Link href={`/authors/authorsList/${post.author}`} className=" items-center hover:text-primary profiles ">
                            <Image style={{ borderRadius: '100%', marginLeft: '10px' }} alt={post.author} width={32} height={32} src={post.image_url} />
                            <span className="profile-text text-muted">{post.author}</span>
                        </Link>
                    </li>
                    <span className="d-flex justify-content-end col-5 profile-text text-muted">{post.publish_date}</span>
                </ul>
                <Link href={`/posts/${post.id}`} className="title">{post.title}</Link>
                <p className="dis">{post.content}</p>
            </div>
        ));
    }

    return (
        <>
            <Head>
                <title>خانه</title>
            </Head>
            <Header />
            <div className="container">
                <div className="row">
                    {renderPosts}
                </div>
            </div>
            <Footer />
        </>
    );
}
