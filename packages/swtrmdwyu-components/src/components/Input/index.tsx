import { useState } from "react";
import { InputContainer, StyledInput } from "./style";
import EyeOpenIcon from "./EyeOpenIcon";
import EyeClosedIcon from "./EyeClosedIcon";

export interface InputProps {
    /**
     * Define se o input deve ou não possuir uma borda.
     */
    $bordered?: boolean,
    /**
     * Define o nome do input. Propriedade utilizada principalemntepor formulários.
     */
    name?: string
    /**
     * Define a variação do tema de cores do input. 
     */
    theme?: "jade" | "light",
    /**
     * Define se o tipo do input é de texto ou senha.
     */
    type?: "text" | "password" | "email",
    /**
     * Define o conteúdo do placeholder.
     */
    placeholder?: string,
    /**
     * Define o valor do input.
     */
    value?: string,
    /**
     * Função responsável por obeservar as alterações no valor do input.
     */
    onChange?: (arg1: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
    type = "text",
    placeholder = "", 
    value = "", 
    theme = "light",
    onChange, 
    $bordered = true,
    name
}: InputProps) {
    const [ inputValue, setInputValue ] = useState(value ?? "");
    const [ canViewPassword, setCanViewPassword ] = useState(false);
    const [ inputType, setInputType ] = useState(type ?? "text");

    //controla as mudanças feitas no valor do input.
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        
        if(onChange) onChange(event);
    }

    const togglePasswordVisibility = () => {
        setInputType((previous) => previous === "password" ? "text" : "password");
        setCanViewPassword((previous) => !previous);
    }

    return (
        <InputContainer>
            <StyledInput
                $bordered={$bordered}
                type={inputType}
                placeholder={placeholder}
                value={inputValue}
                theme={theme}
                onChange={handleOnChange}
                name={name}
            />
            { type === "password" && canViewPassword  &&
                <button onClick={togglePasswordVisibility}>
                    <EyeOpenIcon 
                        size="1.1rem"
                        fill={theme === "jade" ? "#0DAB76" : "#3B494C"}
                    /> 
                </button>
            }
            { type === "password" && !canViewPassword &&    
                <button onClick={togglePasswordVisibility}>
                    <EyeClosedIcon 
                        size="1.1rem"
                        fill={theme === "jade" ? "#0DAB76" : "#3B494C"}
                    /> 
                </button>
            }
        </InputContainer>
        
    );
}

export default Input;