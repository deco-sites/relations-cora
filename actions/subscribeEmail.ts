import { Secret } from "apps/website/loaders/secret.ts";
import { AppContext } from "../apps/site.ts";
import { encode, decode } from "std/encoding/base64.ts"

export interface Props {
    email?: string;
}

export interface Result {
    status: "ok" | "failure";
}

export default async function subscribeEmail(
    { email }: Props,
    _req: Request,
    ctx: AppContext,
): Promise<Result> {
    const formId = "coratrackcustomer";
    const apiUrl = `https://track.customer.io/api/v1/forms/${formId}/submit`;

    const basicAuth = encode(ctx.trackCustomerToken.get() as string);

    const bodyData = {
        data: {
            email: email,
        },
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Authorization": `Basic ${basicAuth}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
    };

    const response = await fetch(apiUrl, requestOptions);

    if (response.ok) {
        return { status: "ok" };
    }

    return { status: "failure" };
}