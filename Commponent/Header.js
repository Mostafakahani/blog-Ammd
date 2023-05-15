import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className='container-fluid headerFull'>
                <div className='container'>
                    <div className='row  mt-4'>
                        <div className='col-2' ><Link href={''} className='headerItem'>خانه</Link></div>
                        <div className='col-2' ><Link href={''} className='headerItem'>مطالب </Link></div>
                        <div className='col-2' ><Link href={''} className='headerItem'>افزودن</Link></div>
                        <div className='col-6 justify-content-end d-flex' ><Link href={''} className='headerItem'>ورود</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;