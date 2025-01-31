import {useState} from 'react';
import styled from "styled-components";

type ButtonPropsType = {
	onClick: () => void;
	name: string
	disabled?: boolean
}

export const Button = ({onClick, name, disabled}: ButtonPropsType) => {

	return (
		<StyledWrapper>
			<StyledBtn onClick={onClick} disabled={disabled}>{name}</StyledBtn>
		</StyledWrapper>
	)
}
const StyledBtn = styled.button`
	padding: 10px 20px;
	font-size: 1.2em;
	font-weight: 900;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	background-color: ${props => props.disabled ? '#22635a' : '#229c8a'} ;
	color: #2e2d2d;
`
const StyledWrapper = styled.div`
	display: inline-block;
	margin: 5px;
	padding: 10px;
`