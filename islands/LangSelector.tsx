import { useEffect, useState } from "preact/hooks";

export default function LangSelector() {
    function handleSelect(newLang: string) {
        localStorage.setItem("lang", newLang);
        const url = new URL(window.location.href);
        url.searchParams.set("lang", newLang);
        window.location.href = url.toString();
    }

    const [selectedLang, setSelectedLang] = useState('');

    useEffect(() => {
        const currentLang = localStorage.getItem("lang") || 'EN';
        setSelectedLang(currentLang);
        const url = new URL(window.location.href);
        const urlLang = url.searchParams.get("lang");
        if (!urlLang) {
            url.searchParams.set("lang", currentLang);
            window.location.href = url.toString();
        }
    }, []);

    return <details class="dropdown z-50">
        <summary class="bg-primary ml-6 px-2 py-1 rounded border text-secondary border-secondary focus:outline-none focus:ring-0 cursor-pointer">{selectedLang}</summary>
        <ul class="menu dropdown-content bg-primary ml-6 px-2 py-1 text-secondary rounded border border-secondary focus:outline-none focus:ring-0 cursor-pointer shadow">
            <li><a onClick={() => handleSelect('PT')}>PT</a></li>
            <li><a onClick={() => handleSelect('EN')}>EN</a></li>
        </ul>
    </details>
}