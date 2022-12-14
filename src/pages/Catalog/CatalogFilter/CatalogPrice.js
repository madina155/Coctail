import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {changePrices} from "../../../redux/reducers/products"
import {useDispatch} from "react-redux";


const CatalogPrice = () => {
    const dispatch = useDispatch();
    const [pricesState, setPricesState] = useState('')
    useEffect(() => {
        dispatch(changePrices(pricesState))
    }, [pricesState])
    return (
        <Box className="catalog__filter-box" sx={{minWidth: 100}}>
            <FormControl fullWidth>
                <InputLabel style={{color: '#121212'}} id="demo-simple-select-label">Размер</InputLabel>
                <Select style={{color: '#121212'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pricesState}
                        label="fasf"
                        onChange={(e) => setPricesState(e.target.value)}
                >
                    <MenuItem className="catalog__filter-item" value="">По умолчанию</MenuItem>
                    <MenuItem className="catalog__filter-item" value={38}>38</MenuItem>
                    <MenuItem className="catalog__filter-item" value={39}>39</MenuItem>
                    <MenuItem className="catalog__filter-item" value={41}>41</MenuItem>
                    <MenuItem className="catalog__filter-item" value={42}>42</MenuItem>
                    <MenuItem className="catalog__filter-item" value={43}>43</MenuItem>
                    <MenuItem className="catalog__filter-item" value={44}>44</MenuItem>
                    <MenuItem className="catalog__filter-item" value={45}>45</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default CatalogPrice;