<template>
    <Waline :serverURL="serverURL" :lang="lang" :dark="dark" :reaction="reaction" />
  </template>
  <script setup>
  import { Waline } from '@waline/client/component';
  
  import '@waline/client/dist/waline.css';
  
  const serverURL = 'https://com.dragonjay.top';
  const lang = 'zh-CN';
  const dark = 'auto';
  const reaction = 'true';
  </script>
  