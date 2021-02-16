import React, { useState, useContext } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";

export const CollapseInfo = () => {
    const [open, setOpen] = useState(false);
    const { store, actions } = useContext(Context);

    return (
        <>
            <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                click
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <h5>{store.cityInfo}</h5>
                    <a href={store.goWiki} target="_blank" rel="noopener noreferrer">
                        Take me to wiki
                    </a>
                </div>
            </Collapse>
        </>
    );
    }
