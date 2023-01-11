import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchAllPokemon } from '../../network/fetchPokemon'
import { Spin, Button, Dropdown } from "antd"
import { ButtonsContainerStyle, ContainerStyle } from "./home.styles"
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'


export const Home = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, isError } = useQuery(["all-pokemon", page], () => fetchAllPokemon(page - 1))
    console.log(data)
    let items = data?.results.map((pokemon, i) => ({
        key: `${i}`,
        label: (<Link to={`/${pokemon.name}`}>{pokemon.name}</Link>)
    })
    )
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = parseInt(e.target.value)
        if (val > 0 && data && val < Math.ceil(data.count / 20)) {
            setPage(val)
        }
    }
    if (isError) {
        return <ErrorMessage msg="Something went wrong" />
    }
    if (isLoading) {
        return <Spin size="large" />
    }

    return (
        <ContainerStyle>
            <Dropdown menu={{ items }}>
                <h2>Hover here to view Pokemons</h2>
            </Dropdown>
            <ButtonsContainerStyle>
                <Button disabled={!(!!data?.previous)} onClick={() => page > 0 ? setPage(page - 1) : null}>{"< Previous page"}</Button>
                <input type="number" value={page} onChange={handleInputChange} />
                <Button disabled={!(!!data?.next)} onClick={() => setPage(page + 1)}>{"Next page >"}</Button>
            </ButtonsContainerStyle>
        </ContainerStyle>
    )
}

