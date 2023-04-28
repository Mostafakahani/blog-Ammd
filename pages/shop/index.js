import ImgLogo from '@/pages/imgs/photo.jpeg'
import { useState } from 'react';
import styles from '@/styles/page.module.css'
import Image from 'next/image';
import imgP from '@/pages/shop/imgs/gun.png'
const Shop = () => {

    const [inputValueName, setInputValueName] = useState('');
    const [inputValueAmount, setInputValueAmount] = useState(0);
    const [inputValueLink, setInputValueLink] = useState('');
    const [inputValueFlout, setInputValueFlout] = useState(0);
    const [inputValueDate, setInputValueDate] = useState('');

    const [allData, setAllData] = useState([
        { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
        { imgProduct: imgP, title: 'M4A1 ', amount: 29000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
        { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
        { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
        { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
        { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
        { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },

    ]);
    const content = allData.map((post, index) =>
        <div className={styles.card} key={index}>
            <div className={styles.card2}>
                <Image src={post.imgProduct.src} width={330} height={192} className={styles.img} />
                <h5 className={styles.h5}>{post.title}</h5>
                <p className={styles.description} style={{ color: '#fff' }}><p> {post.amount} تومان</p> </p>
                <p className={styles.description} style={{ color: '#fff' }}> <button className={styles.btn}>
                    {post.link}
                </button>
                </p>
                <p className={styles.description} style={{ color: '#fff' }}> فلوت:{post.flout} </p>
                <p className={styles.description} style={{ color: '#fff' }}> ارسال: {post.date}</p>
                <p className={styles.description} style={{ color: '#fff' }}>{post.buyLink}</p>
                <button className={styles.btn}>خرید</button>

            </div>
        </div>
    );
    const handleChangeName = (e) => {
        e.preventDefault()
        setInputValueName(e.target.value)
    }
    const handleChangeAmount = (e) => {
        e.preventDefault()
        setInputValueAmount(e.target.value)
    }
    const handleChangeLink = (e) => {
        e.preventDefault()
        setInputValueLink(e.target.value)
    }
    const handleChangeFlout = (e) => {
        e.preventDefault()
        setInputValueFlout(e.target.value)
    }
    const handleChangeDate = (e) => {
        e.preventDefault()
        setInputValueDate(e.target.value)
    }

    const handleSubmit = () => {
        const data = [...allData]
        data.push({ imgProduct: imgP, title: inputValueName, amount: inputValueAmount, link: inputValueLink, flout: inputValueFlout, date: inputValueDate, buyLink: 'bu22yLink' });
        setAllData(data)
    }
    return (
        <div >
            <hr />
            <div className={styles.grid}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                    {content}
                </div>
            </div>
            <div className={styles.grid}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                    <label style={{ color: '#fff' }}>Name</label>
                    <input onChange={handleChangeName} type='text' />
                    <br />
                    <br />
                    <label style={{ color: '#fff' }}>Contect</label>
                    <input onChange={handleChangeAmount} type='text' />
                    <br />
                    <input onChange={handleChangeLink} type='text' />
                    <br />
                    <input onChange={handleChangeFlout} type='text' />
                    <br />
                    <input onChange={handleChangeDate} type='text' />
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}





export default Shop;