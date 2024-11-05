import styled from 'styled-components';

const SButton = styled.button`
    margin-top: 25px;
    padding: 7px;
    background-color: #faebd7;
    border-radius: 10px;
    border: 1px solid;
    cursor: pointer;
`;

interface IButtonProps {
    text: string;
    onClick: () => void;
    // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, onClick }: IButtonProps) {
    return <SButton onClick={onClick}>{text}</SButton>;
}
