import { BlogPost } from "apps/blog/types.ts";

export interface props {
    title?: string;
    posts: BlogPost[] | null;
}

const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

export default function({title, posts}:props) {
    return(
        <div class="px-[110px] py-[126px] flex flex-col justify-center">
            <h1 class="text-5xl text-extrabold py-4">{title}</h1>
            {posts?.map((blog)=>(
                blog.categories.map((blog2, index)=>(
                    blog2.name === 'investor' && (
                        <div class={`${index % 2 === 0 ? 'bg-primary-content' : 'bg-secondary'} px-6 py-4 gap-x-20 flex gap-4`}>
                            <p class="text-xl text-primary">{formatDate(blog.date)}</p>
                            <a href={`/blog/${blog.slug}`} class="text-xl">{blog.title}</a>
                        </div>
                    )

                    ))))}
        </div>
    )
}