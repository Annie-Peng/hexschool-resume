import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { forwardRef } from 'react';

const Editor = forwardRef(({ onChange, value, placeholder, error, errClass }, ref) => {
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    toolbar: ['bold', 'bulletedList', 'link'],
                    placeholder,
                }}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange(data);
                }}
            />
            {error && <p className={`${errClass} text-sm text-red-500`}>{error.message}</p>}
        </>
    );
});

Editor.displayName = 'Editor';

export default Editor;