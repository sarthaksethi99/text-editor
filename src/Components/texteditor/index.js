import React from 'react'
import {
    EditorMainPage,
    Span,
    Heading,
    ButtonWrap,
    ButtonSpan,
    Button
} from "./texteditorelements"
const TextEditor = () => {
    return (
        <>
            <EditorMainPage>
                <Span>
                    <Heading>Text Editor</Heading>
                </Span>
                <ButtonWrap>
                    <ButtonSpan>
                        <Button to="/htmltotext">HTML to Text</Button>
                    </ButtonSpan>
                    <ButtonSpan>
                        <Button to="/texttohtml">Text to HTML</Button>
                    </ButtonSpan>
                </ButtonWrap>
            </EditorMainPage>
        </>
    );
}
export default TextEditor