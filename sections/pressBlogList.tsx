import { BlogPost, Category } from "apps/blog/types.ts";
 
export interface props {
    title?: string;
    posts: BlogPost[] | null;
    categoria: Category[];
}

const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };


export default function({title, posts}:props) {
    return(
        <div class="px-[110px] py-[126px] flex flex-col justify-center">
            <h1 class="text-5xl text-extrabold py-4">{title}</h1>
            {posts?.map((test)=>(
                test.categories.map((test2, index)=>(
                    test2.name === 'press' && (
                        <div class={`${index % 2 === 0 ? 'bg-primary-content' : 'bg-secondary'} px-6 py-4 gap-x-20 flex gap-4`}>
                            <p class="text-xl text-primary">{formatDate(test.date)}</p>
                            <p class="text-xl">{test.title}</p>
                        </div>
                    )

                    ))))}
        </div>
    )
}
