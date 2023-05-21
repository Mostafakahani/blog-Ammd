
import fs from 'fs/promises'
import path from 'path';
const Authors = (props) => {
    const { authors } = props;
    const data1 = authors.map((item) => {
        return (
            <ul key={item.id}>
                <li>
                    {item.name}

                </li>
                    {item.about}

            </ul>
        )
    })
    return (
        <>
            <div>
                {data1}
            </div>
        </>
    )

}
export default Authors;


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'authors.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: {
            authors: data.authors,
        },
    }
}