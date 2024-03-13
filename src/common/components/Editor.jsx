import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { forwardRef } from 'react';

// 套件 CKEditor, https://ckeditor.com/
// 文字編輯器
const Editor = forwardRef(({ onChange, value, placeholder, error, errClass }, ref) => {
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    // toolbar 新增文字編輯器項目, ex.「粗體, 列表, 連結」
                    // 參考 https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/configuration.html#toolbar-setup
                    toolbar: ['bold', 'bulletedList', 'link'],
                    placeholder,
                }}
                // data 初始值
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