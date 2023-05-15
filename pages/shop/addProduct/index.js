import ImgLogo from '@/pages/imgs/photo.jpeg'
import { useState } from 'react';
import styles from '@/styles/page.module.css'
import Image from 'next/image';
import imgP from '@/pages/shop/imgs/gun.png'
import Shop from '..';
const AddProduct = (props) => {

    const [inputValueName, setInputValueName] = useState('');
    const [inputValueAmount, setInputValueAmount] = useState(0);
    const [inputValueLink, setInputValueLink] = useState('');
    const [inputValueFlout, setInputValueFlout] = useState(0);
    const [inputValueDate, setInputValueDate] = useState('');


    // const [allData, setAllData] = useState([
    //     { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
    //     { imgProduct: imgP, title: 'M4A1 ', amount: 29000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
    //     { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
    //     { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
    //     { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
    //     { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },
    //     { imgProduct: imgP, title: ' AK-47', amount: 24000, link: 'مشاهده در بازی', flout: 2000, date: 'دوشنبه', buyLink: 'buyLink' },

    // ]);
    // const content = allData.map((post, index) =>

    //     <div className={styles.thirteen2} key={index}>
    //         <div className={styles.card2}>
    //             <Image src={post.imgProduct.src} width={330} height={192} className={styles.img} />
    //             <h5 className={styles.h5}>{post.title}</h5>
    //             <p className={styles.description} style={{ color: '#fff' }}> {post.amount} تومان </p>

    //             <button className={styles.btn}>خرید</button>

    //         </div>
    //     </div>
    // );
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

    const [allDataSend, setAllDataSend] = useState(props.sendData1);
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = [...allDataSend]
        data.push({ imgProduct: imgP, title: inputValueName, amount: inputValueAmount, link: inputValueLink, flout: inputValueFlout, date: inputValueDate, buyLink: 'bu22yLink' });
        setAllDataSend(data)
    }
    // <Shop dataSend={allDataSend} />
    console.log(props.sendData)

    const content = allDataSend?.map((post, index) =>
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

    return (
        <div >
            <hr />
            <div className={styles.grid}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                    {content}
                </div>
            </div>
            {/* <div className={styles.grid}>
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
            </div> */}
            <div className={styles.grid}>
                <div className={styles.thirteen2}>
                    <div className={styles.card2} style={{ minWidth: '100%' }}>
                        <button className={styles.btn}>خرید</button>
                        <br />
                        <input className={styles.input} onChange={handleChangeName} type='text' placeholder='اسم محصول' />
                        <br />
                        <input className={styles.input} onChange={handleChangeAmount} type='text' placeholder='قیمت' />
                        <br />
                        <input className={styles.input} onChange={handleChangeLink} type='text' placeholder='لینک مشاهده' />
                        <br />
                        <input className={styles.input} onChange={handleChangeFlout} type='text' placeholder='فلوت' />
                        <br />
                        <input className={styles.input} onChange={handleChangeDate} type='text' placeholder='تاریخ' />
                        <br />
                        <button className={styles.btn} type='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}





export default AddProduct;