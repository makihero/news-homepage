import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
    return (
        <aside className="bg-very-dark-blue p-6 text-off-white">
            <h1 className="font-bold text-3xl text-soft-orange">New</h1>
            <NewArticle
            tittle="Hydrogen VS Electric Cars"
            text="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <NewArticle 
            tittle="The Downsides of AI Artistry"
            text="What are the possible adverse effects of on-demand AI image generation?"
            />
            <NewArticle 
            tittle="Is VC Funding Drying Up?"
            text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
        </aside>
    )
}