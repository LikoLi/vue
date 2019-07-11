<template>
  <div class="sefiBond">
      <div class="addExecution">
          <el-button type="primary" @click="dialogFormVisible = true">新增成交</el-button>
          <el-dialog title="沪固收深综协成交" modal width="520px" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="委托编号" :label-width="formLabelWidth">
                    <el-input v-model="form.orderCode" autocomplete="off" class="model-input"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
            </div>
          </el-dialog>
      </div>
      <div class="content">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" ></el-table-column>
            <el-table-column prop="omsCode" label="OMS编码" width="180"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column label="Message">
                <template slot-scope="scope">
                    <el-popover trigger="click" placement="bottom" width="600">
                    <p>{{ scope.row.message }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">查看详情</el-tag>
                    </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" :formatter="formatDate"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间" :formatter="formatDate"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleResend(scope.row.id)">重发</el-button>
                </template>
            </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sefi_bond',
  data () {
    return {
      tableData: [],
      form: {
          orderCode: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleResend (id) {
      axios.get('http://10.16.18.220:9998/se/send/' + id)
      .then((response) => {
          this.$notify({
            title: response.data.status,
            message: response.data.data,
            offset: 100
          });
      }
      ).catch(
          function (error) {
              console.log(error)
          }
      )
    },
    onSubmit () {
        this.dialogFormVisible = false
        axios.put('http://10.16.18.220:9998/se/fi_bond_execution', {
            orderCode: this.form.orderCode
        })
        .then((response) => {
            this.$notify({
                title: response.data.status,
                message: response.data.data,
                offset: 100
            })
            this.getData()
        }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
        this.form.orderCode = ''
    },
    getData () {
        axios.get('http://10.16.18.220:9998/se/fi_bond/all')
        .then((response) => {
            this.tableData = response.data.list
        }).catch(
            function(error) {
                console.log(error)
            }
        )
    },
    formatDate (row, column) {
        let date = new Date(row[column.property]);
        let Y = date.getFullYear() + '-';
        let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
        let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
        let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
        let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    }
  },
  mounted: function() {
      this.getData()
  }
}
</script>

<style scoped>
.sefiBond {
    width: 80%;
    margin: 0 auto;
}
.addExecution {
    margin: 10px 10px;
    float: right;
}
.model-input {
    width: 100%;
}
</style>
