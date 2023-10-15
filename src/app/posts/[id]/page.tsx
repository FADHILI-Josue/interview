export interface post {
    userId: number,
    id: number,
    title: string,
    body: string,

}
export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

    return posts.map((post: post) => ({
        id: post.id.toString(),
    }))
}


const page = async ({ params: { id }, }: { params: { id: number } }) => {
    const posts:post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

    return <div className=" prose w-full p-10">
        <h1>{posts[id].title}</h1>
        <p>{posts[id].body}</p>
    </div>
}

export default page