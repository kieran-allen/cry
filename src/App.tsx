import { List } from "./components/List";
import clsx from "clsx";

function App() {
  return (
    <>
      <nav className={clsx('p-4', 'bg-gray-100', 'shadow')}>
        <h1 className={clsx('text-xl', 'font-bold')}>Cry</h1>
      </nav>
      <div className={clsx("2xl:w-1/3", "lg:w-1/2", "mx-auto", "my-10")}>
        <List />
      </div>
    </>
  );
}

export default App;
