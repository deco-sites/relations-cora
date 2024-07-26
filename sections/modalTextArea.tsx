export interface props {
     /**
   * @title Questionamento do modal
   * @format rich-text */
  questionModalMessage: string;
}

export default function(props: props) {
    return(
        <div>{props.questionModalMessage}</div>
    )
}