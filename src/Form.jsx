import React,{useState} from 'react';
import { TextField} from '@mui/material'

const useInputValue = (initValue) =>{
    const [value,setValue] = useState(initValue);
    return{
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue('')
    };
};

export default ({onSubmit}) => {
    const {restValue, ...text} = useInputValue('');
    
    return(
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            restValue();
        }}>   
            <TextField InputLabelProps={{style:{color: '#3f50b5'}}} autoComplete='off' label="Zadej úkol" variant="standard" sx={{ width: 250}}{...text}/>
        </form>
    );
}