import { Article } from "./Article";
import img1 from '../assets/images/image-retro-pcs.jpg';
import img2 from '../assets/images/image-top-laptops.jpg';
import img3 from '../assets/images/image-gaming-growth.jpg';

export const ArticleContainer = () => {
    return (
        <aside className="mt-8 sm:flex sm:justify-between sm:gap-8">
            <Article 
            img={img1}
            number="01"
            tittle="Reviving Retro PCs"
            text="What happens when old PCs are given modern upgrades?"
            />
            <Article 
            img={img2}
            number="02"
            tittle="Top 10 Laptops of 2022"
            text="Our best picks for various needs and budgets."
            />
            <Article 
            img={img3}
            number="03"
            tittle="The Growth of Gaming"
            text="How the pandemic has sparked fresh opportunities."
            />
        </aside>
    )
}
