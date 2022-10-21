import { useFeedQuery } from "../hooks/useFeedQuery";
import clsx from "clsx";

export function List() {
  const { data, isLoading } = useFeedQuery();

  if (isLoading) {
    return <p>...fetching</p>;
  }

  if (data) {
    return (
      <ul className={clsx("flex", "flex-col", "gap-4")}>
        {data.children.map((i, idx) => (
          <li
            className={clsx(
              "bg-gray-100",
              "px-4",
              "py-2",
              "rounded",
              "shadow",
              "flex",
              "flex-col",
              "gap-4"
            )}
            key={idx}
          >
            <header>
              <a
                href={i.data.url}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx("font-semibold")}
              >
                {i.data.title}
              </a>
            </header>
            <div className={clsx("flex", "gap-2")}>
              <div className={clsx("bg-green-400", "px-2", "py-1", "rounded")}>
                {i.data.ups}
              </div>
              <div className={clsx("bg-red-400", "px-2", "py-1", "rounded")}>
                {i.data.downs}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}
