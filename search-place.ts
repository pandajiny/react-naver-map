export async function searchPlace(args: SearchPlaceArgs) {
  const { secret, request } = args;
  const url = new URL(`https://openapi.naver.com/v1/search/local.json`);
  url.searchParams.set("query", request.query);

  if (request.display) {
    url.searchParams.set("display", `${request.display}`);
  }
  if (request.sort) {
    url.searchParams.set("sort", `${request.sort}`);
  }
  if (request.start) {
    url.searchParams.set("start", `${request.start}`);
  }

  const headers = {
    "X-Naver-Client-Id": secret.clientId,
    "X-Naver-Client-Secret": secret.clientSecret,
  };

  const response = await fetch(url.href, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`Cannot fetch url ${url}`);
  }

  const result = (await response.json()) as unknown;
  return result as SearchPlaceResult;
}
