import { useState } from 'react';
import { SearchBarContainer } from "./style";
import SearchIcon from './SearchIcon/SearchIcon';

export interface SearchBarProps {
    /**
     * Define se a barra de pesquisa deve possuir borda ou não.
     */
    $bordered?: boolean,
    /**
     * Define a variação de cores da barra de pesquisa.
     */
    theme?: "light" | "jade",
    /**
     * Define o "value" do elemento da barra de pesquisa.
     */
    value?: string,
    /**
     * Define o que a barra de pesuisa deve fazer quando o botão for clicado ou a tecla "Enter" ser pressionada.
     */
    handleSearch?: () => void,
    /**
     * Usada para que o componente pai consiga oberservar alterações no valor do input.
     */
    onChange?: (arg1: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar({ 
    handleSearch, 
    onChange, 
    value, 
    theme = 'light', 
    $bordered = false
}: SearchBarProps) {
    const [ searchValue, setSearchValue ] = useState(value ?? "");

    //recebe a função de pesquisa caso ela tenha sido passada.
    const handleButtonClick = () => {
        if(handleSearch) handleSearch();
    };

    //Controla as mudanças no valor do input.
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchValue = event.target.value;
        setSearchValue(newSearchValue);

        if(onChange) onChange(event);
    }

    //verifica e efetua a pesquisa caso a tecla "Enter" seja pressionada.
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === "Enter") {
            if(handleSearch) handleSearch();
        } 
    }

    return (
        <SearchBarContainer
            $bordered={$bordered}
            theme={theme}
        >
            <input
                type="text" 
                placeholder="Faça sua busca" 
                value={searchValue}
                onChange={handleSearchChange}
                onKeyUp={handleKeyUp}
            />
            <button onClick={handleButtonClick}>
                <SearchIcon 
                    size='1rem' 
                    fill={theme === 'jade' ? '#0DAB76' : '#3B494C'}
                />
            </button>
        </SearchBarContainer>
    );
;}