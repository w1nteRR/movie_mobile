import styled from 'styled-components/native'

import { PRIMARY, MAIN, DANGER } from '../../utils/colors'

export interface IButtonStyledProps {
    p?: string
    h?: string
    w?: string
    m?: string
    bgColor?: string
    color?: string
    brRadius?: string
}

const buttonColors = (bgColor: string) => {
    switch (bgColor) {
        case 'primary':
            return PRIMARY
        case 'dark':
            return MAIN
        case 'danger':
            return DANGER
        default:
            return 'transparent'
    }
}

export const ButtonStyled = styled.View<IButtonStyledProps>`
    padding: ${props => props.p || '0'};
    margin: ${props => props.m || '0'};
    
    height: ${props => props.h || '20px'};
    width: ${props => props.w || '100%'};

    border-radius: ${props => props.brRadius || '0'};

    background-color: ${props => buttonColors(props.bgColor!)};
` 