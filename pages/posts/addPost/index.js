import styles from '@/styles/page.module.css'
const AddPost = () => {
    return (
        <>
            <div className="container mt-5">
                <div className=" d-flex justify-content-center">
                    <div className="addBoxPost" >

                        <div className="col-12 col-sm-6 mt-5 mb-4">
                            <h4>نام وبلاگ</h4>
                            <input className="w-100" type="text" />
                        </div>
                        <div className="col-12 col-sm-6 mt-3 mb-4">
                            <h4>توضیحات</h4>
                            <input className="w-100 h-50" type="text" style={{ paddingBottom: '90px' }} />

                        </div>

                    </div>
                </div>


            </div>
        </>
    )

}
export default AddPost;