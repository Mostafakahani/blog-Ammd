import ImgLogo from '@/pages/imgs/photo.jpeg'
import { useState } from 'react';
import styles from '@/styles/page.module.css'
import Image from 'next/image';
import imgP from '@/pages/shop/imgs/gun.png'
import AddProduct from './addProduct';

const Shop = (props) => {
    const [allData, setAllData] = useState([
        { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
        { imgProduct: imgP, title: 'M4A1 ', amount: 29000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },

    ]);
    const [data, setData] = useState(allData);

    console.log(props.allData);
    console.log(data);

    const content = data?.map((post, index) =>
        <div className={styles.thirteen2} key={index}>
            <div className={styles.card2}>
                <Image src={post.imgProduct.src} width={330} height={192} className={styles.img} />
                <h5 className={styles.h5}>{post.title}</h5>
                <p className={styles.description} style={{ color: '#fff' }}> {post.amount} تومان </p>
                <p className={styles.description} style={{ color: '#fff' }}> <button className={styles.btn}>{post.link}</button></p>
                <p className={styles.description} style={{ color: '#fff' }}> فلوت:{post.flout} </p>
                <p className={styles.description} style={{ color: '#fff' }}> ارسال: {post.date}</p>
                <p className={styles.description} style={{ color: '#fff' }}>{post.buyLink}</p>
                <button className={styles.btn}>خرید</button>
            </div>
        </div>
    );
    <AddProduct sendData1={allData}/>

    // const handleSubmit = (props) => {
    //     const data = [...props.allData]
    //     data.push({ imgProduct: imgP, title: inputValueName, amount: inputValueAmount, link: inputValueLink, flout: inputValueFlout, date: inputValueDate, buyLink: 'bu22yLink' });
    //     setAllData(data)
    // }
    return (
        <div >
            <hr />
            <div className={styles.grid}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                    {content}
                </div>
            </div>
        </div>
    );
}





export default Shop;