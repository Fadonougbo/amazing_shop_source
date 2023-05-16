import {configureStore, createSlice} from "@reduxjs/toolkit"


const initialState={
    value:0,
    panierArticlesInfo:[],
    articlesInfo:[]
}

const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{

        /**
         * Incremente la valeur du panier
         * @param {*} state 
         */
        incrementPanierCounter:(state)=>{
                state.value=state.articlesInfo.length

        },

        /**
         * Ajoute un element au panier
         * change la quantité si l'element est deja present dans le panier
         * @param {*} state 
         * @param {*} action 
         */
        addArticleOrChangeQuantity:(state,action)=>{

            const article=state.articlesInfo.find((article)=>article.name===action.payload.name)
            
            if(article)
            {
                article.quantity=action.payload.quantity
            }else 
            {
                state.articlesInfo.push(action.payload)
            }
            
        },

        removeArticle:(state,action)=>{

            const removeArticles=state.articlesInfo.filter((article)=>article.name!==action.payload.name)
            const removeCount=state.panierArticlesInfo.filter((article)=>article.name!==action.payload.name)

            
           state.articlesInfo=removeArticles
           state.panierArticlesInfo=removeCount
        },

        setArticlePrice:(state,action)=>{
           const article=state.panierArticlesInfo.find((article)=>article.name===action.payload.name)

           if(article)
           {
                article.totalPrice=action.payload.totalPrice
           }else 
           {
                state.panierArticlesInfo.push(action.payload)
           }
            
        }
    }
})

export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})

//store.subscribe(()=>console.log(store.getState()) )

export const {incrementPanierCounter,addArticleOrChangeQuantity,setArticlePrice,removeArticle}=counterSlice.actions