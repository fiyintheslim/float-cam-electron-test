import React from 'react'
import { MessageStyle } from './errorMessage.styles'
import { ExclamationCircleOutlined } from "@ant-design/icons"
import { Props } from './errorMessage.types'

export const ErrorMessage: React.FC<Props> = ({ msg }) => {
    return (
        <MessageStyle>
            <ExclamationCircleOutlined />
            <p>{msg ?? "Couldn't get this information"}</p>
        </MessageStyle>
    )
}
