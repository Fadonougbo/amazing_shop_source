import {configureStore, createSlice} from "@reduxjs/toolkit"


const initialState={
    value:0,
    totale:[],
    articlesInfo:[]
}

const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        incrementCounter:(state)=>{
                state.value=state.articlesInfo.length

        },

        addArticle:(state,action)=>{

            const article=state.articlesInfo.find((el)=>el.name===action.payload.name)
            
            if(article)
            {
                article.quantity=action.payload.quantity
            }else 
            {
                state.articlesInfo.push(action.payload)
            }
            
        },

        remove:(state,action)=>{

            const removeArticles=state.articlesInfo.filter((el)=>el.name!==action.payload.name)
            const removeCount=state.totale.filter((el)=>el.name!==action.payload.name)

            
           state.articlesInfo=removeArticles
           state.totale=removeCount
        },

        getTotale:(state,action)=>{
           const article=state.totale.find((el)=>el.name===action.payload.name)

           if(article)
           {
                article["priceSum"]=action.payload.priceSum
           }else 
           {
            state.totale.push(action.payload)
           }
            
        }
    }
})

export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})

/* store.subscribe(()=>console.log(store.getState()) ) */

export const {incrementCounter,addArticle,getTotale,remove}=counterSlice.actions