<template>
  <el-table :data="formatData" :row-style="showRow" v-bind="$attrs">
    <el-table-column v-if="columns.length===0" width="150">
      <template slot-scope="scope">
        <span v-for="(space, index) in scope.row._level" :key="index" class="ms-tree-space"/>
        <span v-if="iconShow(0,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-plus"/>
          <i v-else class="el-icon-minus"/>
        </span>
        {{ scope.$index }}
      </template>
    </el-table-column>
    <el-table-column v-for="(column, index) in columns" v-else :key="index" :label="column.text" :width="column.width" :class-name="rowClass(column, index)">
      <template slot-scope="scope">
        <span v-for="(space, i) in scope.row._level" v-if="index === 0" :key="i" class="ms-tree-space"/>
        <span v-if="iconShow(index,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-plus"/>
          <i v-else class="el-icon-minus"/>
        </span>
        <span v-if="column.type == 'template'">{{column.template[scope.row[column.value]]}}</span>
        <a :class="cellClass(column)" @click="linkCellClick(scope.row, column.callback)" v-else-if="column.type == 'link'">{{ scope.row[column.value] }}</a>
        <span v-else>{{ scope.row[column.value] }}</span>
        
        <span  v-if="column.type == 'icon'">
          <a :class="cellClass(column)" v-for="(icon, m) in column.value" :key="m" @click="iconCellClick(scope.row, column.callback[m])">{{column.value[m]}}<span class="btn-space"></span></a> 
        </span>
      </template>
    </el-table-column>
    <slot/>
  </el-table>
</template>
 
<script>

import treeToArray from "./eval";
export default {
  name: "treeTable",
  props: {
    /* eslint-disable */
    data: {
      type: [Array, Object],
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function, // 格式化数据方法，没有则调用默认方法
    evalArgs: Array,
    expandAll: { // 是否全部展开，默认收起
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 格式化数据源
    formatData: function() {
      let tmp;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      const func = this.evalFunc || treeToArray;
      const args = this.evalArgs
        ? Array.concat([tmp, this.expandAll], this.evalArgs)
        : [tmp, this.expandAll];
      return func.apply(null, args);
    }   
  },
  methods: {
    showRow: function(row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true;
      row.row._show = show;
      return show
        ? "animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;"
        : "display:none;";
    },
    // 切换下级是否展开
    toggleExpanded: function(trIndex) {
      const record = this.formatData[trIndex];
      record._expanded = !record._expanded;
    },
    // 图标显示
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0;
    },
    //单元格点击回调
    linkCellClick(data, callback) {
      this.$emit(callback, data)
    },
    //单元格点击回调
    iconCellClick(data, callback) {
      this.$emit(callback, data)
    },
    //单元格样式
    cellClass(column) {
      let obj = {}
      if (column.cellClass) {
        obj[column.cellClass] = true
      }
      return obj
    },
    //表头样式
    rowClass(column, index) {
      let arr = []
      if (index == 0) {//第一列默认居左
        arr.push('text-left')
      }
      if (column.rowClass) {
         arr.push(column.rowClass)
      }
      return arr
    }
  }
};
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<style scoped >
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 18px;
  height: 14px;
}
.ms-tree-space::before {
  content: "";
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}
.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: #2196f3;
  margin-left: -18px;
}
.text-left {
  text-align: left !important;
}
.el-table--border {
  border-right: 1px solid #c0c0c0;
}
.link-cell, .icon-cell {
  cursor: pointer;
  text-decoration: underline;
  color: #2196f3;
}
.btn-space {
  display: inline-block;
  width: 10px;
}
</style>