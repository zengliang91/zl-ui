<template>
<div>
    <div >
       <span @click="message">123</span>
       
    </div> 
   
</div>
</template>
<script>
    export default {
        name: 'msg',
        data() {
            return {
                
            }
        },
        methods: {
            message() {
                this.$msg({
                    type: 'success',
                    message: '111'
                }, (e) => {
                    console.log(e)
                })
            }
            
        },
    }
</script>
<style lang="">
    
</style>