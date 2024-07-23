export interface props {
    mainTitle: string;
    mainParagraph: string;
    secondaryTitles: string[];
    secondaryParagraphs: string[];
}


export default function(props:props) {
    return(
        <div>
            <div>
                <h1>{props.mainParagraph}</h1>
                <p>{props.mainParagraph}</p>
            </div>
            <div>
                {props.secondaryTitles?.map((secondaryTitle, index) =>{
                    <div key={index}>
                        <li>{secondaryTitle}</li>
                        <li>{props.secondaryParagraphs[index]}</li>
                        <p>Test</p>
                    </div>
                })}
            </div>
        </div>
    )
}