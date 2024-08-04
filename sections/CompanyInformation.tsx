import { BlogPost } from "apps/blog/types.ts";
import { UrlData } from "../loaders/urlData.ts";

export interface props {
    portugueseTitle?: string;
    englishTitle?: string;
    posts: BlogPost[] | null;
    urlData: UrlData;
}


const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

export default function({portugueseTitle, englishTitle, posts, urlData}:props) {
    const eng = urlData.lang == 'EN' ? true : false;
    posts = posts?.filter((blog) => eng ? blog.categories[0].name == 'investor' : blog.categories[0].name == 'investidor') || [];
    return(
        <div class="px-4 md:px-[110px] py-[126px] flex flex-col justify-center">
            <h1 class="text-5xl text-extrabold py-4">{eng ? englishTitle : portugueseTitle}</h1>
            {posts?.map((blog)=> (
                <div class="odd:bg-secondary even:bg-primary-content px-6 py-4 gap-x-4 md:gap-x-20 flex gap-4">
                        <p class="text-xl text-primary">{formatDate(blog.date)}</p>
                        <a href={`/blog/${blog.slug}`}class="text-xl break-all">{blog.title}</a>
                </div>
            ))}
        </div>
    )
}

