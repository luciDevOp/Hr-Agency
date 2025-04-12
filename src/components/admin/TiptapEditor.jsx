import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Heading from '@tiptap/extension-heading'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import { FontSize } from './extensions/FontSize'
import { useEffect } from 'react'
import './tiptap.css'

export default function TiptapEditor({ value, onChange }) {

  const CustomStarterKit = StarterKit.configure({
    bold: { HTMLAttributes: { style: null } },
    italic: { HTMLAttributes: { style: null } },
    paragraph: { HTMLAttributes: { style: null } },
  })

  const editor = useEditor({
    extensions: [
      CustomStarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      BulletList,
      OrderedList,
      ListItem,
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextStyle,
      Color,
      FontSize,
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', false)
    }
  }, [value, editor])

  if (!editor) return null


  
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 4, padding: 10 }}>
      <div className="editor-toolbar" style={{ marginBottom: 8 }}>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()}>
          Left
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>
          Center
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()}>
          Right
        </button>
        <select onChange={e => editor.chain().focus().toggleHeading({ level: parseInt(e.target.value) }).run()}>
          <option value="">Normal</option>
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
        </select>
        <select onChange={e => editor.chain().focus().setFontSize(e.target.value).run()}>
          <option value="">Size</option>
          <option value="12">12px</option>
          <option value="14">14px</option>
          <option value="18">18px</option>
          <option value="24">24px</option>
          <option value="32">32px</option>
        </select>
        <button
          onClick={() => {
            const url = window.prompt('Enter URL')
            if (url) editor.chain().focus().setLink({ href: url }).run()
          }}
        >
          🔗 Link
        </button>
        <input
          type="color"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          title="Text color"
        />
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}
