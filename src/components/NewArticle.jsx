

export const NewArticle = ({tittle, text}) => {
    return (
        <article className="py-6 border-b border-dark-grayish-blue last:border-none last:pb-0">
            <h2 className="font-bold text-lg cursor-pointer hover:text-soft-orange">{tittle}</h2>
            <p className="text-sm text-grayish-blue mt-2 w-[90%]">{text}</p>
        </article>
    )
}