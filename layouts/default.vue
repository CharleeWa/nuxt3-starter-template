<template>
  <div h-full w-full font-sans>
    <div w-full bg-gray4:10 p3 text-center>
      header
    </div>
    <div h-100 of-auto relative data-scroll>
      <slot />
    </div>
    <div w-full bg-gray4:10 p3 text-center>
      footer
    </div>
  </div>
</template>
