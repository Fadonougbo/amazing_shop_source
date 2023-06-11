
/**
 * 
 * @param {object} articlesInfo 
 * @return {string}
 */
export const getHtml=(articleInfo)=>{

   return `
         <tr>
            <td><em>${articleInfo.name}</em></td>
            <td><em>${articleInfo.price}$</em></td>
            <td><em>${articleInfo.quantity}</em></td>
            <td><em>${(articleInfo.quantity)*(articleInfo.price)}$</em></td>
        </tr>
   ` 
}

export const getGlobaleHtml=(articlesInfo,globalePrice)=>
{
    let articlesHtml=""

    articlesInfo.forEach((el)=>{

        articlesHtml+=getHtml(el)
    })

    const globaleHtml=`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body>
                    <style>
                        *
                        {
                            
                            white-space:nowrap;
                        }
                        table
                        {
                            border-collapse: collapse;
                        }
                        h2,h4
                        {
                            width:200px;
                            text-align:center;
                            margin:6px 0;
                        }
                        td,th
                        {
                            border:solid 0.5px #000;
                            padding:6px;
                        }
                        .total 
                        {
                            background:yellow;
                            text-align:center;
                        }
                    </style>
                    <h2>Amazing Shop</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom de l'article</th>
                                <th>Prix</th>
                                <th rowspan="2">Quantité</th>
                                <th rowspan="4">Prix totale</th>
                            </tr>
                        </thead>
                        <tbody>
                             ${articlesHtml}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td class='total' colspan="5">T=<em>${globalePrice}$</em></td>
                            </tr>
                        </tfoot>
                    </table>
                    <h4><em>Made by Gautier Fadonougbo </em></h4>
                </body>
                </html>
           `

    return globaleHtml;
}