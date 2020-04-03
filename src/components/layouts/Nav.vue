<template>
    <el-aside width="200px" style="height: 100%">
        <el-menu
            :unique-opened="true"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            :router="true">
            <template v-for="item in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="item.name" v-if="!item.noDropdown">
                    <template slot="title">
                        <i :class="item.iconCls"></i>&nbsp;&nbsp;&nbsp;
                        <span slot="title">{{item.name}}</span>
                    </template>
                    <el-menu-item v-if="!child.hidden" v-for="child in item.children" :key="child.path"
                                  :index="item.path+'/'+child.path">
                        <i :class="child.iconCls"></i>&nbsp;&nbsp;{{child.name}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.noDropdown"
                              :index="item.path">
                    <template slot="title">
                        <i :class="item.iconCls"></i>&nbsp;&nbsp;&nbsp;
                        <span slot="title">{{item.name}}</span>
                    </template>
                </el-menu-item>
            </template>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {};
        },
        methods: {}
    }
</script>

<style scoped>

</style>
