import Link from "next/link";

const Header = () => {
    const webSite = '/'
    return (
        <>
            <div className='container-fluid headerFull'>
                <div className='container'>
                    <div className='row  mt-4'>
                        <div className='col-2 col-sm-1 d-flex justify-content-center' > <Link href={webSite} className='headerItem'>خانه</Link></div>
                        <div className='col-2 col-sm-1 d-flex justify-content-center' ><Link href={''} className='headerItem'>افزودن</Link></div>
                        <div className='col-2 col-sm-1 justify-content-center d-flex' ><Link href={''} className='headerItem'>ورود</Link></div>
                        <div className='col-6 col-sm-9 d-flex justify-content-end' ><Link href={'/authors'} className='headerItem'>نویسندگان</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;