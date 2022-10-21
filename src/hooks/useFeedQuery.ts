import { useQuery } from "@tanstack/react-query";

type FeedQueryResponse = {
  data: {
    children: Array<{
      data: {
        title: string;
        domain: "self.CryptoCurrency" | string;
        ups: number;
        downs: number;
        url: string;
      };
    }>;
  };
};

export function useFeedQuery() {
  return useQuery(
    ["feed"],
    async () => {
      try {
        const res = await fetch(
          "https://www.reddit.com/r/CryptoCurrency/hot.json"
        );
        if (!res.ok) {
          throw res;
        }

        const data: FeedQueryResponse = await res.json();
        return data;
      } catch (e) {
        throw e;
      }
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      select: ({ data }) => {
        return {
          ...data,
          children: data.children.filter(
            (i) => i.data.domain !== "self.CryptoCurrency"
          ),
        };
      },
    }
  );
}
