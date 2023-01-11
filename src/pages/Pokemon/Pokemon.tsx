import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchPokemon } from '../../network/fetchPokemon'
import { Spin } from "antd"
import { ItemStyle, StatStyle, BackButtonStyle } from './pokemon.styles'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'
import { ArrowLeftOutlined } from '@ant-design/icons'

export const Pokemon = () => {
    const navigate = useNavigate();
    const { pokemon } = useParams();
    const { data, isLoading, isError } = useQuery(["pokemon", pokemon], () => fetchPokemon(pokemon))
    console.log(data?.stats[0].base_stat)
    if (isLoading) {
        return <Spin size="large" />
    }
    if (isError) {
        return <ErrorMessage msg={`Couldn't fetch more info on ${pokemon}`} />
    }
    return (
        <div>

            <ItemStyle>
                <span className="title">Name</span>
                <span>{data?.name}</span>
            </ItemStyle>
            <ItemStyle>
                <span className="title">Height</span>
                <span>{data && (data.height / 10)}m</span>
            </ItemStyle>
            <ItemStyle>
                <span className="title">Weight</span>
                <span>{data && (data.weight * 0.1)}kg</span>
            </ItemStyle>

            <ItemStyle>
                <span className="title">Abilities</span>
                <span>{data?.abilities.map((ability) => ability.ability.name).join(", ")}</span>
            </ItemStyle>
            <h3>Stats</h3>
            {data.stats.map((stat, i) => <StatStyle key={i} stat={stat.base_stat}>
                <span className="stat">{stat.stat.name}</span>
                <span className="rating"></span>
            </StatStyle>)}
            <BackButtonStyle onClick={() => navigate(-1)}>
                <ArrowLeftOutlined />
                <span>Back</span>
            </BackButtonStyle>
        </div>
    )
}
