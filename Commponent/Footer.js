import Link from "next/link";

export default function Footer() {

    return (
        <>
            <div className="container-fluid bg-theme-dark">
                <div className="row d-flex justify-content-center">
                    <div className="col-6 col-sm-1 d-flex justify-content-center mt-5">
                        <Link href={''} className="text-header-menu text-light ">خانه</Link>
                    </div>
                    <div className="col-6 col-sm-1 d-flex justify-content-center mt-5">
                        <Link href={''} className="text-header-menu text-light">مطالب</Link>
                    </div>
                    <div className="col-6 col-sm-1 d-flex justify-content-center mt-5">
                        <Link href={''} className="text-header-menu text-light">افزودن</Link>
                    </div>
                    <div className="col-6 col-sm-1 d-flex justify-content-center mt-5">
                        <Link href={''} className="text-header-menu text-light">ورود</Link>
                    </div>
                    <div className="d-flex justify-content-center">

                        <p className="text-light" style={{opacity: '50%', fontSize: '15px'}}>
                            
                        طراحی و توسعه توسط خودم


                        </p>
                    </div>
                </div>
            </div>



        </>
    )

}