import { Input } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import leftArrow from './imgs/arrow-left.svg';
import styles from '@/styles/pageLogin.module.css'
import { use, useEffect, useState } from "react";
import { Router, useRouter } from "next/router";


function User() {
    // let username = 'admin'
    // let pass = 'admin'
    const router = useRouter();

    const [serverList, setServerList] = useState([
        {
            id: 1,
            nameServer: 'nameserver',
            server: 'linkVmess',
        },
        {
            id: 2,
            nameServer: 'nameserver2',
            server: 'linkVmess2',
        }


    ]);
    const [newServer, setNewServer] = useState([])
    const [inputServer, setInputServer] = useState();
    const [inputNameServer, setInputNameServer] = useState();

    const handleAddServer = (e) => {
        e.preventDefault()
        setInputServer(e.target.value)

    }
    const handlePassword = (e) => {
        e.preventDefault()
        setInputNameServer(e.target.value)
    }

    // setNewServer(
    //     [...newServer, [{ server: handleAddServer.textName }]],
    //     [...newServer, [{ nameServer: handlePassword.textLink }]]
    // )
    const handelSubmit = (e) => {
        e.preventDefault()
        // function mapping() {
        //     serverList.map((x) => {
        //     })
        // }
        const data = [...serverList];
        // serverList[{id: ++id}];
        data.push({
            id: 5, nameServer: inputNameServer, server: inputServer
        })
        setServerList(data)
        console.log(serverList);

    }
    // const calcProductsSum = () => {
    //     let data = 0;
    //     serverList.forEach(p => {
    //         data += p.id;
    //     })
    //     return data;

    // }
    // console.log(calcProductsSum());


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
                                نام سرور
                            </h4>
                            <input
                                onChange={handleAddServer}
                                className={styles.inputlogin} type='text' />
                            <br />
                            <h4 className={styles.font}>
                                لینک سرور
                            </h4>
                            <input onChange={handlePassword}
                                className={styles.inputlogin} type='text' />
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
export default User;