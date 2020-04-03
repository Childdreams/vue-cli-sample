<template>
    <div class="hr">
        <div class="left">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if="parentPath" :to="{ path: parentPath.path }">{{ parentPath.name }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ pathName }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<style scoped>
    .left {
        height: 45px;
        line-height: 45px;
        float: left;
    }

    .el-breadcrumb {
        height: 45px;
        line-height: 45px;
        float: right;
    }

    .hr {
        width: 97%;
        height: 45px;
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
<script>
    export default {
        props: {
            parentPath: Object,
            pathName: String
        },
        mounted() {
            // console.log(this.$route);
        }
    }
</script>
