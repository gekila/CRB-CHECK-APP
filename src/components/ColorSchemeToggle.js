import React from 'react'
import { useEffect, useState } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';


export default function ColorSchemeToggle(props) {
    const { onClick, ...other } = props;
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div>
            <IconButton
                aria-label="toggle green/dark mode"
                size="sm"
                variant="outlined"
                disabled={!mounted}
                onClick={(event) => {
                    setMode(mode === 'dark' ? 'green' : 'dark');
                    onClick?.(event);
                }}
                {...other}
            >
                {mode === 'greent' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
            </IconButton>
        </div>
    )
}

