import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {changeSizes} from "../../../redux/reducers/products"
import {useDispatch} from "react-redux";


const CatalogSize = () => {
    const dispatch = useDispatch();
    const [sizesState, setSizesState] = useState('')
    useEffect(() => {
        dispatch(changeSizes(sizesState))
    }, [sizesState])
    return (
        <Box className="catalog__filter-box" sx={{minWidth: 100}}>
            <FormControl fullWidth>
                <InputLabel style={{color: '#121212'}} id="demo-simple-select-label">Размер</InputLabel>
                <Select style={{color: '#121212'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sizesState}
                        label="fasf"
                        onChange={(e) => setSizesState(e.target.value)}
                >
                    <MenuItem className="catalog__filter-item" value="">По умолчанию</MenuItem>
                    <MenuItem className="catalog__filter-item" value={38}>38</MenuItem>
                    <MenuItem className="catalog__filter-item" value={39}>39</MenuItem>
                    <MenuItem className="catalog__filter-item" value={41}>41</MenuItem>
                    <MenuItem className="catalog__filter-item" value={42}>42</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default CatalogSize;


// <div className="catalog__filter">
//     <div className="catalog__filter-sort">
//         <select>
//             <option value="0">Размер</option>
//             <option value="1">S</option>
//             <option value="2">M</option>
//             <option value="3">L</option>
//             <option value="4">XL</option>
//             <option value="5">2XL</option>
//             <option value="6">3XL</option>
//             <option value="7">36</option>
//             <option value="8">38</option>
//             <option value="9">40</option>
//             <option value="10">42</option>
//             <option value="11">44</option>
//             <option value="12">46</option>
//             <option value="13">48</option>                                    <option value="">48</option>
//             <option value="14">Универсальный</option>
//
//
//
//
//             {/*<option value=""><input type="checkbox">M</input></option>*/}
//             {/*<option value=""><input type="checkbox">L</input></option>*/}
//             {/*    <option value=""><input type="checkbox">XL</input></option>*/}
//             {/*    <option value=""><input type="checkbox">2XL</input></option>*/}
//             {/*    <option value=""><input type="checkbox">2XL</input></option>*/}
//             {/*    <option value=""><input type="checkbox">36</input></option>*/}
//             {/*    <option value=""><input type="checkbox">38</input></option>*/}
//             {/*    <option value=""><input type="checkbox">40</input></option>*/}
//             {/*    <option value=""><input type="checkbox">42</input></option>*/}
//             {/*    <option value=""><input type="checkbox">44</input></option>*/}
//             {/*    <option value=""><input type="checkbox">46</input></option>*/}
//             {/*    <option value=""><input type="checkbox">48</input></option>*/}
//             {/*    <option value=""><input type="checkbox">50</input></option>*/}
//             {/*    <option value=""><input type="checkbox">52</input></option>*/}
//             {/*    <option value=""><input type="checkbox">54</input></option>*/}
//             {/*    <option value=""><input type="checkbox">56</input></option>*/}
//             {/*    <option value=""><input type="checkbox">Универсальный</input></option>*/}
//
//         </select>
//         <select>
//             <option value="0">Цвета</option>
//             <option value="1">
//                 <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <g filter="url(#filter0_d_80_1673)">
//                         <circle cx="30" cy="26" r="10" fill="white"/>
//                         <circle cx="30" cy="26" r="9.95" stroke="#333333" stroke-width="0.1"/>
//                     </g>
//                     <defs>
//                         <filter id="filter0_d_80_1673" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                             <feFlood flood-opacity="0" result="BackgroundImageFix"/>
//                             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//                             <feOffset dy="4"/>
//                             <feGaussianBlur stdDeviation="10"/>
//                             <feComposite in2="hardAlpha" operator="out"/>
//                             <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.05 0"/>
//                             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_80_1673"/>
//                             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_80_1673" result="shape"/>
//                         </filter>
//                     </defs>
//                 </svg>
//             </option>
//             <option value="2">
//                                         <span>
//                                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                 <circle cx="10" cy="10" r="10" fill="black"/>
//                                             </svg>
//                                         </span>
//
//             </option>
//             <option value="3">L</option>
//             <option value="4">XL</option>
//             <option value="5">2XL</option>
//             <option value="6">3XL</option>
//             <option value="7">36</option>
//             <option value="8">38</option>
//             <option value="9">40</option>
//             <option value="10">42</option>
//             <option value="11">44</option>
//             <option value="12">46</option>
//             <option value="13">48</option>                                    <option value="">48</option>
//             {/*<option value="">50</option>                                    <option value="">48</option>*/}
//             {/*<option value="">52</option>                                      <option value="">52</option>                                    <option value="">48</option>*/}
//             {/*<option value="">54</option>                                    <option value="">48</option>*/}
//             {/*<option value="">56</option>*/}
//             <option value="14">Универсальный</option>
//
//         </select>
//     </div>
// </div>











