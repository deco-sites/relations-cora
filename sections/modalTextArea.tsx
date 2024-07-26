export interface props {
     /**
   * @title Questionamento do modal
   * @format rich-text */
  questionModalMessage: string;
}

export default function(props: props) {
    return(
      <div class="max-w-[1060px] w-[80%] py-4 mx-auto flex"><div dangerouslySetInnerHTML={{ __html: props.questionModalMessage }}/></div>
    )
}

/* <div class="flex max-w-[1060px] w-[60%] mx-auto justify-center py-12"><p class="text-[22px]"></div>*/