import { useQuery as RuseQuery, QueryKey, QueryFunction } from "@tanstack/react-query"
import request from "graphql-request"



export function useQuery(queryKey:QueryKey, query:string ){
    const {data,error,status, isError, isPending, isSuccess} = RuseQuery({
        queryKey,
        queryFn:async()=>{
            return await request("http://localhost:4000/graphql", query)
        }
    })
    
    return {data, error,status,isError,isPending,isSuccess}

}

