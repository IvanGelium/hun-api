import {
  RiCodeLine,
  RiDeleteBinLine,
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiForbid2Line,
  RiHeading,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiListUnordered,
  RiListOrdered,
  RiDoubleQuotesL,
} from '@remixicon/react'

import '../styles/TipTapMenuBar.css'
import '../styles/varDark.css'

const MenuBar = ({ editor, title }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='control-group'>
      <div className='TipTapButtonGroup'>
        <div className='tipTapMenuTitle'>{title}</div>
        <div className='tipTapOnlyButtons'>
          <div
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`${editor.isActive('bold') ? 'tiptapEditorIsActiveStateMenuButton' : ''}`}
          >
            <div className='tiptapMenuButton'>
              <RiBold className='tipTapMenuIconFill' />
            </div>
          </div>
          <div
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`${editor.isActive('italic') ? 'tiptapEditorIsActiveStateMenuButton' : ''}  `}
          >
            <div className='tiptapMenuButton'>
              <RiItalic className='tipTapMenuIconFill' />
            </div>
          </div>
          <div
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={`${editor.isActive('strike') ? 'tiptapEditorIsActiveStateMenuButton' : ''}  `}
          >
            <div className='tiptapMenuButton'>
              <RiStrikethrough className='tipTapMenuIconFill' />
            </div>
          </div>

          <div onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            <div className='tiptapMenuButton'>
              <RiDeleteBinLine className='tipTapMenuIconFill' />
            </div>
          </div>
          <div onClick={() => editor.chain().focus().clearNodes().run()}>
            <div className='tiptapMenuButton'>
              <RiForbid2Line className='tipTapMenuIconFill' />
            </div>
          </div>

          <div
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive('heading', { level: 1 })
                ? 'tiptapEditorIsActiveStateMenuButton'
                : ''
            }
          >
            <div className='tiptapMenuButton'>
              <RiHeading className='tiptapMenuHeadingH tipTapMenuIconFill' />
              <RiNumber1 className='tiptapMenuHeadingNumber tipTapMenuIconFill' />
            </div>
          </div>
          <div
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive('heading', { level: 2 })
                ? 'tiptapEditorIsActiveStateMenuButton'
                : ''
            }
          >
            <div className='tiptapMenuButton'>
              <RiHeading className='tiptapMenuHeadingH tipTapMenuIconFill' />
              <RiNumber2 className='tiptapMenuHeadingNumber tipTapMenuIconFill' />
            </div>
          </div>
          <div
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive('heading', { level: 3 })
                ? 'tiptapEditorIsActiveStateMenuButton'
                : ''
            }
          >
            <div className='tiptapMenuButton'>
              <RiHeading className='tiptapMenuHeadingH tipTapMenuIconFill' />
              <RiNumber3 className='tiptapMenuHeadingNumber tipTapMenuIconFill' />
            </div>
          </div>

          <div
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive('bulletList')
                ? 'tiptapEditorIsActiveStateMenuButton'
                : ''
            }
          >
            <div className='tiptapMenuButton'>
              <RiListUnordered className='tipTapMenuIconFill' />
            </div>
          </div>
          <div
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              editor.isActive('orderedList')
                ? 'tiptapEditorIsActiveStateMenuButton'
                : ''
            }
          >
            <div className='tiptapMenuButton'>
              <RiListOrdered className='tipTapMenuIconFill' />
            </div>
          </div>
          <div
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={
              editor.isActive('codeBlock')
                ? 'tiptapEditorIsActiveStateMenuButton'
                : ''
            }
          >
            <div className='tiptapMenuButton'>
              <RiCodeLine className='tipTapMenuIconFill' />
            </div>
          </div>
          <div
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              editor.isActive('blockquote')
                ? 'tiptapEditorIsActiveStateMenuButton'
                : ''
            }
          >
            <div className='tiptapMenuButton'>
              <RiDoubleQuotesL className='tipTapMenuIconFill' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
