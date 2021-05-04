import React, { useState } from 'react'
import parse from "html-react-parser"
import {
    TexttohtmlMainPage,
    Span,
    Heading,
    ButtonWrap,
    ButtonSpan,
    Button,
    EditorAndOutput,
    HtmlcontentWrap,
    HtmlInput,
    Output,
    Out
} from "./htmltotextelements"

const HtmltoText = () => {
    const [text, setText] = useState('');
    return (
        <>
            <TexttohtmlMainPage>
                <Span>
                    <Heading>HTML to Text</Heading>
                </Span>
                <ButtonWrap>
                    <ButtonSpan>
                        <Button to="/texttohtml">Text to HTML</Button>
                    </ButtonSpan>
                </ButtonWrap>
                <EditorAndOutput>
                    <HtmlcontentWrap>
                        <HtmlInput
                            placeholder="Write Html content here"
                            onChange={(e) => setText(e.target.value)}
                        />
                    </HtmlcontentWrap>
                    <Output>
                        <h1>Converted Text</h1>
                        <Out>
                            {parse(text)}
                        </Out>
                    </Output>

                        
                </EditorAndOutput>
                
            </TexttohtmlMainPage>
            
        </>
    );
}
export default HtmltoText