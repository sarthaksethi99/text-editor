import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
    TexttohtmlMainPage,
    Span,
    Heading,
    ButtonWrap,
    ButtonSpan,
    Button,
    EditorAndOutput,
    CkeditorWrap,
    Output,
    Out
} from "./texttohtmlelements"
import "./index.css"
const TexttoHtml = () => {
    const [text, setText] = useState('');
    return (
        <>
            <TexttohtmlMainPage>
                <Span>
                    <Heading>Text to HTML</Heading>
                </Span>
                <ButtonWrap>
                    <ButtonSpan>
                        <Button to="/htmltotext">HTML to Text</Button>
                    </ButtonSpan>
                </ButtonWrap>
                <EditorAndOutput>
                    <CkeditorWrap>
                        <CKEditor
                            style={{minHieght:"300px",maxHeight:"500px"}}
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
                        />
                    </CkeditorWrap>
                    <Output>
                        <h1>HTML Content</h1>
                        <Out>
                            {text}
                        </Out>
                    </Output>

                        
                </EditorAndOutput>
                
            </TexttohtmlMainPage>
            
        </>
    );
}
export default TexttoHtml