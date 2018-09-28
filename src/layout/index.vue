<template>
    <div>
        <div>
            <Header></Header>
        </div>
        <div>
           <router-view/>
        </div>            
    </div>    
</template>
<script>

import Header from '@/components/Header'

export default {
    components:{
        Header
    }
    
}
</script>
<style lang="scss" scoped>

</style>
