import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchAllPokemon } from '../../network/fetchPokemon'
import { Spin, Button, Dropdown, Pagination } from "antd"
import { ButtonsContainerStyle, ContainerStyle } from "./home.styles"
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'


export const Home = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, isError, refetch } = useQuery(["all-pokemon", page], () => fetchAllPokemon(page - 1))
  
    let items = data?.results.map((pokemon, i) => ({
        key: `${i}`,
        label: (<Link to={`/${pokemon.name}`}>{pokemon.name}</Link>)
    })
    )
   
    if (isError) {
        return <ErrorMessage msg="Something went wrong" refetch={refetch} />
    }
    if (isLoading) {
        return <Spin size="large" />
    }

    return (
        <ContainerStyle>
            <Dropdown menu={{ items }} placement="bottom">
                <h2>Hover here to view Pokemons</h2>
            </Dropdown>
            <ButtonsContainerStyle>
                <Pagination showSizeChanger={false} defaultCurrent={page} total={Math.ceil(data.count / 20)} onChange={(page) => setPage(page)} />
            </ButtonsContainerStyle>
        </ContainerStyle>
    )
}

