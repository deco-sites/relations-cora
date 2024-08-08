import { invoke } from "../runtime.ts";
import { useState } from 'preact/hooks';

export interface props {
    eng?: boolean;
    portugueseButtonText?: string;
    englishButtonText?: string;
}



export default function EmailForm({ eng, englishButtonText, portugueseButtonText  } : props) {
    const [email, setEmail] = useState('');
    function handleChange(event: any) {
        setEmail(event.target.value);
    }
    function handleSubmit(event: any) {
        try {
            event.preventDefault();
            invoke({ key: "site/actions/subscribeEmail.ts", props: { email: email } })
            alert(eng ? 'sent' : 'enviado');
        } catch (error) {
            alert('error: ' + error.menssage);
        }

    } 
    return (
        <form class="flex flex-column flex-wrap justify-center gap-3 align-center pb-[56px] lg:flex-row" onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" class="lg:px-12 px-4 py-2 text-primary text-[24px] rounded-xl" onChange={handleChange} />
        <button type="submit" class="bg-primary py-2 px-4 text-[24px] text-secondary lg:px-[55px] lg:py-[10px] rounded-xl">{eng ? englishButtonText : portugueseButtonText}</button>
    </form>
    )
}