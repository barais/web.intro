<template>
    <div align="center">
        <div id="qr-code" ref="qrCodeRef"></div>
        <p><a :href="prop1.data">{{ prop1.data }}</a></p>
</div>
</template>

<script setup lang="ts">
import QRCodeStyling, { DotType, type Options, } from 'qr-code-styling';

interface QRCodeOption {
    width : number,
    height: number,
    color: string,
    image:string,
    type: string,
    margin:number
    dotsType:DotType,
    data:string
}

const props = withDefaults(defineProps<QRCodeOption>(), {
    width: 200,
    height: 200,
    color:"blue",
    image : "logo.svg",
    margin: 5,
    dotsType: "extra-rounded",
    data:window.location.href
});

const prop1  : Options= 
    {
    type: "svg",
    width: props.width,
    height: props.height,
    margin: props.margin,
    data: props.data,
    qrOptions: {
        typeNumber: 0,
        mode: undefined,
        errorCorrectionLevel: "Q"
    },
    imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        crossOrigin: undefined,
        margin: 10
    },
    dotsOptions: {
        type: props.dotsType,
        color: props.color
    },
    backgroundOptions: {
        color: "rgba(0, 0, 0, 0)"
    },
    image : props.image

}

const qrCode = new QRCodeStyling(prop1);


import { onMounted, ref } from 'vue';

const qrCodeRef = ref(null);
onMounted(() => {
    if (qrCodeRef.value) qrCode.append(qrCodeRef.value);
});
</script>