import { Header } from "./components/Header";
import { OverviewContainer, OverviewTodayContainer } from "./components/OverviewContiner";

export default function Home() {
  return (
   <main className="dark:bg-very-dark-blue">
      <Header/>
      <OverviewContainer/>
      <OverviewTodayContainer/>
   </main>
  );
}
