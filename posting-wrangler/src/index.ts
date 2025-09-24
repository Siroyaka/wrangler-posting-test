import http from "http";
import https from "https";
import url from "url";

export const postTest = async () => {
  const { promise, resolve, reject } = Promise.withResolvers();
  const bodyData = {
    email: "posting-wrangler@email.mail",
    from: "wrangler"
  };

  const bufferdData = Buffer.from(JSON.stringify(bodyData), "utf-8");
  const contentLength = bufferdData.length.toString();

    const urlStr = "http://localhost:9210/";
    const parsedUrl = url.parse(urlStr);

  try {
    const option = {
      protocol: parsedUrl.protocol,
      hostname: parsedUrl.hostname,
      path: parsedUrl.path,
      port: parsedUrl.port,
      method: "post",
      headers: {
        "content-type": "application/json;charset=utf-8",
        "Content-Length": contentLength,
      },
    };

    const httpsRequest = http.request(option, (response) => {
      resolve(response);
    });

    httpsRequest.on("error", reject);

    httpsRequest.end(bufferdData);
    
  } catch (error) {
    console.error(error);
    reject(error);
  }

  await promise;
};

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		await postTest();

		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
