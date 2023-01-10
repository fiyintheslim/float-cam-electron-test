import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchAllPokemon } from '../network/fetchPokemon'
import { Spin, Button, Dropdown } from "antd"

export const Home = () => {
    const [page, setPage] = useState(0)
    const { data, isLoading } = useQuery(["all-pokemon", page], () => fetchAllPokemon(page))
    console.log(data)
    let items = data?.results.map((pokemon, i) => ({
        key: `${i}`,
        label: (<Link to={`/${pokemon.name}`}>{pokemon.name}</Link>)
    })
    )
    if (isLoading) {
        return <Spin size="large" />
    }
    return (
        <div>
            <Dropdown menu={{ items }}>
                <h2>Hover to view Pokemons</h2>
            </Dropdown>
            <Button disabled={!(!!data?.previous)} onClick={() => page ? setPage(page - 1) : null}>{"< Previous page"}</Button>
            <Button disabled={!(!!data?.next)} onClick={() => setPage(page + 1)}>{"Next page >"}</Button></div>
    )
}

