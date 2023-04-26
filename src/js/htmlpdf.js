
/**
 * 
 * @param {object} articlesInfo 
 * @return {string}
 */
export const getHtml=(articleInfo)=>{

   return `
        <section>
            <p>Nom: ${articleInfo.name}</p>
            <p>Prix: ${articleInfo.price}$</p>
            <p>Quantité: ${articleInfo.quantity}1</p>
            <p>Totale: ${(articleInfo.quantity)*(articleInfo.price)}$</p>
        </section>
   ` 
}

export const getGlobaleHtml=(articlesInfo,globalePrice)=>
{
    let articlesHtml=""

    articlesInfo.forEach((el)=>{

        articlesHtml+=getHtml(el)
    })

    const globaleHtml=`

    <div>
        <h1>Shop<h1>
        ${articlesHtml}
        <h1>Totale:${globalePrice} $<h1>
    </div>

    `

    return globaleHtml;
}