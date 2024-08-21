<!--
A simple wrapper for embeded Jsfiddle 

Usage:

<Jsfiddle id="barais/43df7hk5" />
-->


<script setup lang="ts">
defineProps<{
  id: string
  width?: string|number
  height?: string|number
}>()
</script>

<template>
<iframe 
class="youtube"
:width="width" 
:height="height" 
:src="`//jsfiddle.net/${id}/1/embedded/result,js,html,css/`" 
allowfullscreen="allowfullscreen" 
allowpaymentrequest 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
frameborder="0"/>


</template>