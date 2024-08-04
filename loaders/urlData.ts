export interface UrlData {
    lang: string;
    url: URL;
}

export default async function loader(
    _props: any,
    req: Request,
): Promise<UrlData> {
    const lang = new URL(req.url).searchParams.get("lang");
    return { lang: lang || "EN", url: new URL(req.url) };
}