import React from 'react'
import { MessageStyle } from './errorMessage.styles'
import { ExclamationCircleOutlined, ReloadOutlined } from "@ant-design/icons"
import { Props } from './errorMessage.types'

export const ErrorMessage: React.FC<Props> = ({ msg, refetch }) => {
    return (
        <MessageStyle>
            <ExclamationCircleOutlined />
            <p>{msg ?? "Couldn't get this information"}</p>
            <button onClick={() => refetch()}><ReloadOutlined /></button>
        </MessageStyle>
    )
}
