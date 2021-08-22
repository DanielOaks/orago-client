<template>
  <div class="ourInput">
    <EditorContent :editor="editor" />
  </div>
</template>

<script lang="ts">
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'

  export default {
    components: {
      EditorContent,
    },

    setup() {
      const editor = useEditor({
        content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
        extensions: [StarterKit],
      })

      return { editor }
    },
  }
</script>

<style lang="scss" scoped>
  .ourInput {
    background: none;
    border: none;
    font-size: 1em;
    width: 100%;
    max-width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    word-wrap: break-word;
    overflow: hidden;
    padding: 1em 0;

    &:active,
    &:focus,
    &:focus-visible {
      border: none;
      outline: none;
    }
  }
</style>
