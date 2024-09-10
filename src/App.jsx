import "./App.css";
import Posts from "./Components/Posts_Components/Posts";
import ThemeToggler from "./Components/Common_Components/ThemeToggler";

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-center dark:text-slate-50 dark:bg-slate-800">
      <ThemeToggler />
      <div className="p-3 font-sans">
        <h1 className="text-xl tablet:text-2xl desktop:text-3xl font-bold ">
          Social Media Pages
        </h1>
        <p>
          This page shows a list of dummy posts which are fetched from a rest
          api. This page is responsive to all devices like mobile, tablet,
          desktop.
        </p>
      </div>
      <Posts />
    </div>
  );
}

export default App;
