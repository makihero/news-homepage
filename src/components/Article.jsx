

export const Article = ({img, number, tittle, text}) => {
    return (
        <article className="flex gap-4 mb-4 ">
            <img className="w- h-24" src={img} alt="pc" />
            <div>
                <h2 className="text-grayish-blue text-xl font-bold">{number}</h2>
                <h3 className="text-very-dark-blue font-bold hover:text-soft-orange cursor-pointer">{tittle}</h3>
                <p className='text-dark-grayish-blue text-sm'>{text}</p>
            </div>
        </article>
    )
}