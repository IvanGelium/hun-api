import '../styles/TipTapEditor.css'
import '../styles/varDark.css'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { useState } from 'react'
import TipTapMenuBar from './TipTapMenuBar'

const extensions = [
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  ,
]

export default ({ title }) => {
  const [savedHtml, setSavedHtml] = useState('')

  const editor = useEditor({
    extensions: extensions,
    content: '<h3>Пока всё wip</h3>',
    editorProps: {
      attributes: { class: 'tipTapEditorTextScreen' },
    },
  })

  const handleSave = () => {
    if (!editor) return
    const html = editor.getHTML()
    setSavedHtml(html)
    console.log('Сохранено:', html)
  }

  return (
    <div className='editorWrapper'>
      <TipTapMenuBar title={title} editor={editor}></TipTapMenuBar>
      <EditorContent editor={editor}></EditorContent>
    </div>
  )
}
