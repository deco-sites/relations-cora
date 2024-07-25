


export interface information {
    post?: string;
  /**
   * @title Data que irá expirar
   * @format date
   */
    date?: string;
}

export interface props {
    title?: string;
    info?: information[];
}

export default function(props: props) {
    return(
        <div class="px-[110px] py-[126px] flex flex-col justify-center">
                <h1 class="text-5xl text-extrabold py-4">{props.title}</h1>
                {props.info?.map((information, index)=>(
                    <div class={`${index % 2 == 0 ? 'bg-primary-content' : 'bg-secondary'} px-6 py-4 gap-x-20 flex gap-4`}>
                        <p class="text-xl text-primary">{information.date}</p>
                        <p class="text-xl">{information.post}</p>
                    </div>
                ))}
        </div>
    )
}

/*

*/