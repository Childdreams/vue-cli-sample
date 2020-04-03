<template>
    <el-container class="is-vertical" style="height: 100%">
        <Header></Header>
        <el-container style="height: 100%">
            <Nav style="height: 100%"></Nav>
            <el-main>
                <breadcrumb v-bind:parent-path="$route.meta.parentPath" v-bind:path-name="$route.name"></breadcrumb>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from "./Header";
    import Nav from "./Nav";
    import breadcrumb from "./breadcrumb";

    export default {
        name: "Main",
        components: {
            Header,
            Nav,
            breadcrumb
        }
    }
</script>

<style scoped>
    .el-main {
        margin: 0;
        padding: 0;
        background: #f2f2f2;
    }

    .breadcrumb {
        height: 40px;
        line-height: 40px;
        margin-left: 20px;
        font-size: 14px;
    }

    .el-main {
        margin: 0;
        padding: 0;
        background: #f2f2f2;
    }
</style>
