import { IArticles } from "../../types/articles";


interface Props{
    articles: IArticles[];
}

const Landingpage = ({articles}: Props) => (
<div className="bg-green-400 h-screen  w-full">
    <section>
        <h1>Personal website</h1>
        <p>Lorum ipsum heyello</p>
    </section>
  <h1>{articles.map((article) => article.title)}</h1>
  
</div>
);
export default Landingpage;