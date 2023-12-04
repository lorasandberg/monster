import { Check, Clear, QuestionMark } from "@mui/icons-material";
import { Button, InputAdornment, Paper, TextField } from "@mui/material";
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from "react-scroll";


function Entry(props) {

    const { text, solution, active, onSolved, index, last } = props;

    const [isSolved, setIsSolved] = useState(false);
    const [touched, setTouched] = useState(false);

    const scrollToNext = () => {
        scroll.scrollToBottom({
            delay: 1500,
        });
    }

    return (
        <section style={{height: "100vh", display: "flex"}} name={"section-" + index}>
            <Paper sx={{
                maxWidth: "85vw", 
                width: "1000px", 
                marginY: "10vh", 
                padding: "1em 2em", 
                boxSizing: "border-box", 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-between"
                }}>
                <div style={{flexGrow: 1, display: "grid", alignItems: "center"}}>        
                    <div>{text()}</div>
                </div>
                {!last && 
                    <TextField 
                    disabled={isSolved}
                    sx={{ margin: "3em 0"}}
                    variant="outlined" 
                    error={touched && !isSolved}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {!touched && <QuestionMark />}
                                {touched && !isSolved && <Clear />}
                                {touched && isSolved && <Check />}
                            </InputAdornment>
                        )
                    }}
                    onChange={(e) => {
                        setTouched(true);

                        if(isSolved)
                            return;

                        if(e.target.value.toLowerCase() == solution.toLowerCase()) {
                            onSolved();
                            setIsSolved(true);
                            scrollToNext();
                            e.target.blur();
                        }
                    }} />
                }
            </Paper>
        </section>

    )
}

export default Entry;