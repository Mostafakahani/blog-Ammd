import { Input } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import leftArrow from './imgs/arrow-left.svg';
import styles from '@/styles/pageLogin.module.css'
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";


function Login() {
    // let username = 'admin'
    // let pass = 'admin'
    const router = useRouter();

    const [userList, setUserList] = useState({
        username: 'admin',
        password: 'admin',

    });
    const [inputUserName, setInputUserName] = useState('');
    const [inputPassword, setinputPassword] = useState('');

    const handleUsername = (e) => {
        e.preventDefault()
        setInputUserName(e.target.value)
    }
    const handlePassword = (e) => {
        e.preventDefault()
        setinputPassword(e.target.value)

    }
    const handelSubmit = (e) => {
        e.preventDefault()
        if (inputUserName === userList.username && inputPassword === userList.password) {
            var status = true;
        } else {
            var status = false;
        }


        if (status == true) {
            router.push('panel/user')
            console.log('ok');
             function htmlCreatePanel(){
                return (
                    <>
                        <h3 style={{ color: '#fff' }} >HTML</h3>
                    </>
                )
            }
        } else {
            alert('Wrong')
        }
    }
    

    return (
        <>

            <div className="container" style={{ marginTop: '50px' }}>

                <div className="row" >
                    <div className="container bg-me">
                        <div className=" d-flex bd-highlight">
                            <h3 className="p-2 flex-grow-1 bd-highlight" style={{ fontWeight: '950', zIndex: '1' }}>  </h3>
                            <div className="p-2 bd-highlight back-arrow">
                                <Link href={'#'}>
                                    <Image style={{ color: '#fff' }} src={leftArrow} alt='back icon' />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='circal'>
            </div>
            <div className='circal2'>
            </div>
            <main className={styles.main}>
                {/* <div>
        <div className={styles.thirteen}>
        VPN
        </div>
        </div> */}
                <div className={styles.grid}>
                    <form>
                        <div
                            // href="https://s28.picofile.com/file/8461576450/v2rayN_Core.rar.html"
                            className={styles.loginBorder}
                            target="_blank" passHref={false}
                            rel="noopener noreferrer">
                            <h4 className={styles.font}>
                                نام کاربری
                            </h4>
                            <input
                                onChange={handleUsername}
                                className={styles.inputlogin} type='text' />
                            <br />
                            <h4 className={styles.font}>
                                رمز عبور
                            </h4>
                            <input onChange={handlePassword}
                                className={styles.inputlogin} type='password' />
                            <button onClick={handelSubmit} className={styles.buttonLogin}>
                                <p className={styles.p}>
                                    ورود
                                </p>
                            </button>
                        </div>
                    </form>






                </div>
            </main >
        </>
    )
}
export default Login;