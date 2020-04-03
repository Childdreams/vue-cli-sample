<template>
    <el-header class="header">
        <el-col :span="6" style="height: 56px">
            <el-row style="text-align: left;line-height: 56px;margin-left: 20px;">
                airtest-task-logo
            </el-row>
        </el-col>
        <el-col :span="18" style="height: 56px;text-align: right;float:right;padding-right: 30px;line-height: 100%">
            <span style="margin-right: 5px;height: 56px;display: inline-block">
                <i class="el-icon-chat-line-round"
                   style="font-size: 32px;color: #f28880;margin-right: 5px;line-height: 100%"></i>
                <span>客服</span>
            </span>
        </el-col>
    </el-header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header {
        border-bottom: 1px solid #dce0e2;
    }
</style>
