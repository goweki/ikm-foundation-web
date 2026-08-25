export async function fetcher(
  ...args: Parameters<typeof fetch>
): Promise<Response> {
  return fetch(...args).then((res) => {
    if (res.ok) {
      return res;
    } else {
      return Promise.reject(res);
    }
  });
}
