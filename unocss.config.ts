import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

// @unocss-include

export default defineConfig({
  // core options
  shortcuts: [],
  rules: [],
  // presets
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
  ],
})
