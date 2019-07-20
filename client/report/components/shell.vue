<template >
    <el-main>
        <el-header>
            <slot name="header"></slot>
        </el-header>
        <el-col>
            <slot name="nav"></slot>
        </el-col>
        <el-main>
            <slot name="content"></slot>
        </el-main>
        <el-footer>
            <slot name="footer"></slot>
        </el-footer>
    </el-main>

</template>

<script>
export default {
    
}
</script>
