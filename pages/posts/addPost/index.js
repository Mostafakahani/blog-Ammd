import styles from '@/styles/page.module.css'
import fs from 'fs/promises'
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

export async function Add(req, res) {
    try {
        const file_data = await fsp.readFile('../../data/data.json')
        const json_data = JSON.parse(file_data)
        // Do stuff
        res.status(200).json(data.something)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error reading data' })
    }
} 