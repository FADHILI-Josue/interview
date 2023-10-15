import { Translations } from "@/i18n/translations";
import Link from "next/link";
import { getLocale } from "nitlix-i18n"
import { post } from "./posts/[id]/page";

const pageTranslations: Translations = {
    en: {
        welcome: "Welcome!"
    }
}

export default async function () {
    const lang: any = getLocale();
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
    return <div className="w-screen">
        <div className="w-full mx-5 grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((e: post) => <Link href={`/posts/${e.id}`}>
                <div className="w-full prose border border-slate-700 p-3">
                    <h1>{e.title}</h1>
                    <p>{e.body}</p>
                </div>
            </Link>)}
        </div>
    </div>

}
