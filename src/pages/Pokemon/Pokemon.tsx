import React from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchPokemon } from '../../network/fetchPokemon'
import { Spin } from "antd"
import { ItemStyle } from './pokemon.styles'

export const Pokemon = () => {
    const { pokemon } = useParams()
    const { data, isLoading } = useQuery(["pokemon", pokemon], () => fetchPokemon(pokemon))
    if (isLoading) {
        return <Spin size="large" />
    }
    return (
        <div>
            <ItemStyle>
                <span className="title">Name</span>
                <span>{data?.name}</span>
            </ItemStyle>
            <ItemStyle>
                <span className="title">Height</span>
                <span>{data?.height}</span>
            </ItemStyle>
            <ItemStyle>
                <span className="title">Weight</span>
                <span>{data?.weight}</span>
            </ItemStyle>

            <ItemStyle>
                <span className="title">Abilities</span>
                <span>{data?.abilities.map((ability) => ability.ability.name).join(", ")}</span>
            </ItemStyle>
        </div>
    )
}
